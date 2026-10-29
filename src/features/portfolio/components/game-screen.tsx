"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"

import { PixelBug } from "./pixel-bug"

const MAX_HP = 100
const DAMAGE = 3
const HP_SEGMENTS = 10
const KO_MS = 1400

/** Pixels per second along the direction of travel. */
const SPEED = 95

// Keeps the path diagonal-ish so bounces never flatten into a crawl.
const MIN_AXIS_SHARE = 0.35

// A new color on every wall bounce, like the old DVD screensaver.
const COLORS = [
  "var(--foreground)",
  "#22c55e",
  "#3b82f6",
  "#eab308",
  "#ef4444",
  "#a855f7",
  "#06b6d4",
]

type Hit = { id: number; x: number; y: number }

/**
 * A small arena where a pixel bug bounces like a DVD logo. Hitting the
 * portrait costs HP; at zero it shows K.O. and respawns at full health.
 */
export function GameScreen({ avatar, name }: { avatar: string; name: string }) {
  const arenaRef = useRef<HTMLDivElement>(null)
  const markRef = useRef<HTMLDivElement>(null)
  const portraitRef = useRef<HTMLImageElement>(null)
  const [hp, setHp] = useState(MAX_HP)
  const hpRef = useRef(MAX_HP)
  const [isKnockedOut, setIsKnockedOut] = useState(false)
  const [colorIndex, setColorIndex] = useState(0)
  const [hits, setHits] = useState<Hit[]>([])
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const arena = arenaRef.current
    const mark = markRef.current
    const portrait = portraitRef.current
    if (!arena || !mark || !portrait) return

    const measure = () => {
      const box = arena.getBoundingClientRect()
      const face = portrait.getBoundingClientRect()
      return {
        // Inside the 2px frame.
        width: arena.clientWidth,
        height: arena.clientHeight,
        portrait: {
          left: face.left - box.left - arena.clientLeft,
          top: face.top - box.top - arena.clientTop,
          right: face.right - box.left - arena.clientLeft,
          bottom: face.bottom - box.top - arena.clientTop,
        },
      }
    }

    let bounds = measure()
    const markW = () => mark.offsetWidth
    const markH = () => mark.offsetHeight

    let x = bounds.width * 0.1
    let y = bounds.height * 0.1
    let vx = SPEED * Math.SQRT1_2
    let vy = SPEED * Math.SQRT1_2

    const place = () => {
      mark.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }
    place()
    mark.style.opacity = "1"

    if (shouldReduceMotion) return

    let hitId = 0
    let respawnTimer: ReturnType<typeof setTimeout> | undefined
    const hitPortrait = (pointX: number, pointY: number) => {
      // Hits during the K.O. screen don't count.
      if (hpRef.current === 0) return

      const id = ++hitId
      setHits((current) => [...current, { id, x: pointX, y: pointY }])
      hpRef.current = Math.max(0, hpRef.current - DAMAGE)
      setHp(hpRef.current)

      if (hpRef.current === 0) {
        setIsKnockedOut(true)
        respawnTimer = setTimeout(() => {
          hpRef.current = MAX_HP
          setHp(MAX_HP)
          setIsKnockedOut(false)
        }, KO_MS)
      }
      portrait.animate(
        [
          { transform: "translateX(0)", filter: "none" },
          {
            transform: "translateX(-4px)",
            filter: "sepia(1) saturate(6) hue-rotate(-40deg)",
          },
          { transform: "translateX(4px)" },
          { transform: "translateX(-2px)" },
          { transform: "translateX(0)", filter: "none" },
        ],
        { duration: 350, easing: "ease-out" }
      )
    }

    const keepDiagonal = () => {
      const minAxis = SPEED * MIN_AXIS_SHARE
      if (Math.abs(vx) < minAxis) vx = Math.sign(vx || 1) * minAxis
      if (Math.abs(vy) < minAxis) vy = Math.sign(vy || 1) * minAxis
      const scale = SPEED / Math.hypot(vx, vy)
      vx *= scale
      vy *= scale
    }

    let frame = 0
    let last = 0
    const step = (now: number) => {
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0
      last = now
      x += vx * dt
      y += vy * dt

      const w = markW()
      const h = markH()
      let bouncedOffWall = false

      if (x < 0) {
        x = 0
        vx = Math.abs(vx)
        bouncedOffWall = true
      } else if (x + w > bounds.width) {
        x = bounds.width - w
        vx = -Math.abs(vx)
        bouncedOffWall = true
      }

      if (y < 0) {
        y = 0
        vy = Math.abs(vy)
        bouncedOffWall = true
      } else if (y + h > bounds.height) {
        y = bounds.height - h
        vy = -Math.abs(vy)
        bouncedOffWall = true
      }

      if (bouncedOffWall) {
        setColorIndex((index) => (index + 1) % COLORS.length)
      }

      const face = bounds.portrait
      const overlapX = Math.min(x + w - face.left, face.right - x)
      const overlapY = Math.min(y + h - face.top, face.bottom - y)
      if (overlapX > 0 && overlapY > 0) {
        // Push out along the shallower overlap; only a hit while moving in
        // counts as damage.
        let approaching = false
        if (overlapY < overlapX) {
          const fromAbove = y + h / 2 < (face.top + face.bottom) / 2
          approaching = fromAbove ? vy > 0 : vy < 0
          y = fromAbove ? face.top - h : face.bottom
          vy = fromAbove ? -Math.abs(vy) : Math.abs(vy)
        } else {
          const fromLeft = x + w / 2 < (face.left + face.right) / 2
          approaching = fromLeft ? vx > 0 : vx < 0
          x = fromLeft ? face.left - w : face.right
          vx = fromLeft ? -Math.abs(vx) : Math.abs(vx)
        }
        if (approaching) {
          keepDiagonal()
          hitPortrait(
            Math.min(Math.max(x + w / 2, face.left + 24), face.right - 24),
            face.top + (face.bottom - face.top) * 0.35
          )
        }
      }

      place()
      frame = requestAnimationFrame(step)
    }

    let running = false
    const start = () => {
      if (running) return
      running = true
      last = 0
      frame = requestAnimationFrame(step)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(frame)
    }

    const visibility = new IntersectionObserver(([entry]) =>
      entry.isIntersecting ? start() : stop()
    )
    visibility.observe(arena)

    const resize = new ResizeObserver(() => {
      bounds = measure()
      x = Math.min(Math.max(0, x), Math.max(0, bounds.width - markW()))
      y = Math.min(Math.max(0, y), Math.max(0, bounds.height - markH()))
    })
    resize.observe(arena)

    return () => {
      clearTimeout(respawnTimer)
      stop()
      visibility.disconnect()
      resize.disconnect()
    }
  }, [shouldReduceMotion])

  const filled = Math.ceil((hp / MAX_HP) * HP_SEGMENTS)
  const hpColor = hp > 50 ? "bg-game" : hp > 25 ? "bg-yellow-500" : "bg-red-500"

  return (
    <div className="space-y-2">
      <div
        ref={arenaRef}
        className="relative h-56 overflow-hidden border-2 border-frame bg-background bg-[radial-gradient(color-mix(in_oklab,var(--foreground)_14%,transparent)_1px,transparent_0)] bg-size-[12px_12px]"
      >
        <img
          ref={portraitRef}
          src={avatar}
          alt={`Foto de ${name}`}
          className="absolute top-1/2 left-1/2 size-28 -translate-1/2 border-2 border-frame object-cover shadow-[4px_4px_0_0_var(--frame-shadow)]"
        />

        <div
          ref={markRef}
          className="pointer-events-none absolute top-0 left-0 opacity-0 transition-[color] duration-300 will-change-transform"
          style={{ color: COLORS[colorIndex] }}
          aria-hidden
        >
          <PixelBug className="block size-7" />
        </div>

        <AnimatePresence>
          {hits.map((hit) => (
            <motion.span
              key={hit.id}
              className="pointer-events-none absolute z-10 font-pixel text-lg whitespace-nowrap text-red-500 [text-shadow:1px_1px_0_var(--background),-1px_-1px_0_var(--background)]"
              style={{ left: hit.x, top: hit.y }}
              initial={{ opacity: 1, x: "-50%", y: "-50%", scale: 0.7 }}
              animate={{ opacity: 0, y: "-170%", scale: 1.15 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              onAnimationComplete={() =>
                setHits((current) => current.filter(({ id }) => id !== hit.id))
              }
              aria-hidden
            >
              -{DAMAGE} HP
            </motion.span>
          ))}
        </AnimatePresence>

        {isKnockedOut && (
          <div
            className="absolute inset-0 z-20 grid place-items-center bg-background/70 font-pixel text-4xl text-red-500"
            aria-hidden
          >
            K.O.
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 font-pixel text-xs uppercase">
        <span>HP</span>
        <div
          className="flex flex-1 gap-0.5 border-2 border-frame p-0.5"
          role="meter"
          aria-label="Vida"
          aria-valuemin={0}
          aria-valuemax={MAX_HP}
          aria-valuenow={hp}
        >
          {Array.from({ length: HP_SEGMENTS }, (_, index) => (
            <span
              key={index}
              className={cn(
                "h-2.5 flex-1 transition-colors duration-300",
                index < filled ? hpColor : "bg-muted"
              )}
            />
          ))}
        </div>
        <span className="w-14 text-right tabular-nums">
          {hp}/{MAX_HP}
        </span>
      </div>
    </div>
  )
}
