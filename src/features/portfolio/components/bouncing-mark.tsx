"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"

import { SiteMark } from "@/components/site-mark"

export const AVATAR_HIT_EVENT = "avatar-hit"
export const AVATAR_HIT_DAMAGE = 3

/** Pixels per second along the direction of travel. */
const SPEED = 110

// Keeps the path diagonal-ish; bounces off the round avatar can otherwise
// flatten it into a near-horizontal crawl.
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

/** How far inside the avatar, from the contact point, the damage text starts. */
const HIT_TEXT_INSET = 36

type Hit = { id: number; x: number; y: number }

type Box = { left: number; top: number; right: number; bottom: number }

type Bounds = {
  width: number
  /** Where the arena starts: under the ruler line when it shows, else 0. */
  top: number
  height: number
  avatar: { x: number; y: number; r: number } | null
  /** Ruler arrows and label hanging below its line. */
  obstacles: Box[]
}

/**
 * Fills its positioned parent (the top of the profile) and bounces the mark
 * between its edges, the width ruler on top, the top of the name row and the
 * avatar circle.
 */
export function BouncingMark() {
  const layerRef = useRef<HTMLDivElement>(null)
  const markRef = useRef<HTMLDivElement>(null)
  const [colorIndex, setColorIndex] = useState(0)
  const [hits, setHits] = useState<Hit[]>([])
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const layer = layerRef.current
    const mark = markRef.current
    const header = layer?.parentElement
    if (!layer || !mark || !header) return

    const avatar = header.querySelector<HTMLElement>(
      "[data-slot=profile-avatar]"
    )
    const nameRow = header.querySelector<HTMLElement>(
      "[data-slot=profile-name]"
    )
    const ruler = header.querySelector<HTMLElement>("[data-bounce-ceiling]")

    const measure = (): Bounds => {
      const box = layer.getBoundingClientRect()
      const avatarBox = avatar?.getBoundingClientRect()
      // The ruler is hidden on narrow screens, where it measures 0x0.
      const rulerBox = ruler?.getBoundingClientRect()
      const visibleRuler = rulerBox && rulerBox.height > 0 ? ruler : null
      const hasRuler = !!visibleRuler && !!rulerBox
      const relative = (rect: DOMRect): Box => ({
        left: rect.left - box.left,
        top: rect.top - box.top,
        right: rect.right - box.left,
        bottom: rect.bottom - box.top,
      })
      return {
        width: box.width,
        // The ruler's 1px line runs through the middle of its box.
        top: hasRuler ? rulerBox.top + rulerBox.height / 2 + 0.5 - box.top : 0,
        obstacles: visibleRuler
          ? Array.from(
              visibleRuler.querySelectorAll("svg, [data-slot=dimension-value]"),
              (element) => relative(element.getBoundingClientRect())
            )
          : [],
        height: nameRow
          ? nameRow.getBoundingClientRect().top - box.top
          : box.height,
        avatar: avatarBox
          ? {
              x: avatarBox.left - box.left + avatarBox.width / 2,
              y: avatarBox.top - box.top + avatarBox.height / 2,
              r: avatarBox.width / 2,
            }
          : null,
      }
    }

    let bounds = measure()
    const markW = () => mark.offsetWidth
    const markH = () => mark.offsetHeight

    let x = bounds.width * 0.55
    let y = Math.max(bounds.top, (bounds.height - markH()) / 3)
    let vx = SPEED * Math.SQRT1_2 * (Math.random() < 0.5 ? -1 : 1)
    let vy = SPEED * Math.SQRT1_2

    const place = () => {
      mark.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    if (shouldReduceMotion) {
      x = (bounds.width - markW()) / 2
      y = Math.max(bounds.top, (bounds.height + bounds.top - markH()) / 2)
      place()
      mark.style.opacity = "1"
      return
    }

    place()
    mark.style.opacity = "1"

    let hitId = 0
    const hitAvatar = (pointX: number, pointY: number) => {
      const id = ++hitId
      setHits((current) => [...current, { id, x: pointX, y: pointY }])
      window.dispatchEvent(
        new CustomEvent(AVATAR_HIT_EVENT, { detail: AVATAR_HIT_DAMAGE })
      )
      avatar?.animate(
        [
          { transform: "translateX(0)", boxShadow: "0 0 0 0 #ef444400" },
          { transform: "translateX(-4px)", boxShadow: "0 0 0 4px #ef4444cc" },
          { transform: "translateX(4px)" },
          { transform: "translateX(-2px)" },
          { transform: "translateX(0)", boxShadow: "0 0 0 0 #ef444400" },
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

      if (y < bounds.top) {
        y = bounds.top
        vy = Math.abs(vy)
        bouncedOffWall = true
      } else if (y + h > bounds.height) {
        y = bounds.height - h
        vy = -Math.abs(vy)
        bouncedOffWall = true
      }

      for (const obstacle of bounds.obstacles) {
        const overlapX = Math.min(x + w - obstacle.left, obstacle.right - x)
        const overlapY = Math.min(y + h - obstacle.top, obstacle.bottom - y)
        if (overlapX <= 0 || overlapY <= 0) continue

        // Push out along the shallower overlap and bounce on that axis.
        if (overlapY < overlapX) {
          if (y + h / 2 > (obstacle.top + obstacle.bottom) / 2) {
            y = obstacle.bottom
            vy = Math.abs(vy)
          } else {
            y = obstacle.top - h
            vy = -Math.abs(vy)
          }
        } else if (x + w / 2 > (obstacle.left + obstacle.right) / 2) {
          x = obstacle.right
          vx = Math.abs(vx)
        } else {
          x = obstacle.left - w
          vx = -Math.abs(vx)
        }
        bouncedOffWall = true
      }

      if (bouncedOffWall) {
        setColorIndex((index) => (index + 1) % COLORS.length)
      }

      const circle = bounds.avatar
      if (circle) {
        // Closest point of the mark's box to the avatar's center.
        const px = Math.min(Math.max(circle.x, x), x + w)
        const py = Math.min(Math.max(circle.y, y), y + h)
        const dx = px - circle.x
        const dy = py - circle.y
        const distance = Math.hypot(dx, dy)

        if (distance < circle.r) {
          const nx = distance ? dx / distance : 0
          const ny = distance ? dy / distance : -1
          const approach = vx * nx + vy * ny

          if (approach < 0) {
            vx -= 2 * approach * nx
            vy -= 2 * approach * ny
            keepDiagonal()
            // Spawned inside the photo so the mark, leaving outward, never covers it.
            hitAvatar(px - nx * HIT_TEXT_INSET, py - ny * HIT_TEXT_INSET)
          }

          x += nx * (circle.r - distance)
          y += ny * (circle.r - distance)
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
    visibility.observe(header)

    const resize = new ResizeObserver(() => {
      bounds = measure()
      x = Math.min(Math.max(0, x), Math.max(0, bounds.width - markW()))
      y = Math.min(
        Math.max(bounds.top, y),
        Math.max(bounds.top, bounds.height - markH())
      )
    })
    resize.observe(header)

    return () => {
      stop()
      visibility.disconnect()
      resize.disconnect()
    }
  }, [shouldReduceMotion])

  return (
    <div
      ref={layerRef}
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
      aria-hidden
    >
      <div
        ref={markRef}
        className="absolute top-0 left-0 opacity-0 transition-[color] duration-300 will-change-transform"
        style={{ color: COLORS[colorIndex] }}
      >
        <SiteMark className="block h-9 sm:h-11" />
      </div>

      <AnimatePresence>
        {hits.map((hit) => (
          <motion.span
            key={hit.id}
            className="absolute z-10 font-mono text-lg font-bold whitespace-nowrap text-red-500 [text-shadow:0_1px_0_var(--background),0_0_6px_var(--background)]"
            style={{ left: hit.x, top: hit.y }}
            initial={{ opacity: 1, x: "-50%", y: "-50%", scale: 0.7 }}
            animate={{ opacity: 0, y: "-160%", scale: 1.15 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            onAnimationComplete={() =>
              setHits((current) => current.filter(({ id }) => id !== hit.id))
            }
          >
            -{AVATAR_HIT_DAMAGE} HP
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}
