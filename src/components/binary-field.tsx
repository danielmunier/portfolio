"use client"

import { useEffect, useRef } from "react"

const CELL_W = 12
const CELL_H = 16

// Half of the max-w-6xl column plus the window shadow, so no digit sits behind the content.
const COLUMN_HALF = 576 + 12

// Below xl the column fills the screen and there is no side to draw on.
const WIDE_QUERY = "(min-width: 80rem)"

type Rgb = [number, number, number]

type Fluid = ReturnType<typeof createFluid>

/** Tiny fluid: an energy and velocity field the pointer stirs, advects and diffuses. */
function createFluid(cols: number, rows: number) {
  const n = cols * rows
  let en = new Float32Array(n)
  let vx = new Float32Array(n)
  let vy = new Float32Array(n)
  let en2 = new Float32Array(n)
  let vx2 = new Float32Array(n)
  let vy2 = new Float32Array(n)
  const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v)

  function inject(
    cx: number,
    cy: number,
    dx: number,
    dy: number,
    radius: number
  ) {
    const speed = Math.min(Math.hypot(dx, dy), 4)
    const x0 = Math.max(0, Math.floor(cx - radius))
    const x1 = Math.min(cols - 1, Math.ceil(cx + radius))
    const y0 = Math.max(0, Math.floor(cy - radius))
    const y1 = Math.min(rows - 1, Math.ceil(cy + radius))
    for (let r = y0; r <= y1; r++) {
      for (let c = x0; c <= x1; c++) {
        const d = Math.hypot(c - cx, r - cy)
        if (d >= radius) continue
        const f = (1 - d / radius) ** 2
        const i = r * cols + c
        en[i] = Math.min(1.6, en[i] + f * (0.18 + speed * 0.22))
        vx[i] = clamp(vx[i] + dx * f * 0.7, -3, 3)
        vy[i] = clamp(vy[i] + dy * f * 0.7, -3, 3)
      }
    }
  }

  function step() {
    // Semi-Lagrangian advection, then diffusion and decay.
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const i = r * cols + c
        const sc = clamp(Math.round(c - vx[i] * 0.9), 0, cols - 1)
        const sr = clamp(Math.round(r - vy[i] * 0.9), 0, rows - 1)
        const j = sr * cols + sc
        const l = c > 0 ? j - 1 : j
        const rt = c < cols - 1 ? j + 1 : j
        const u = r > 0 ? j - cols : j
        const d = r < rows - 1 ? j + cols : j
        en2[i] =
          (en[j] * 0.52 + (en[l] + en[rt] + en[u] + en[d]) * 0.12) * 0.965
        vx2[i] =
          (vx[j] * 0.52 + (vx[l] + vx[rt] + vx[u] + vx[d]) * 0.12) * 0.965
        vy2[i] =
          (vy[j] * 0.52 + (vy[l] + vy[rt] + vy[u] + vy[d]) * 0.12) * 0.965
      }
    }
    ;[en, en2] = [en2, en]
    ;[vx, vx2] = [vx2, vx]
    ;[vy, vy2] = [vy2, vy]
  }

  return {
    inject,
    step,
    get en() {
      return en
    },
    get vx() {
      return vx
    },
    get vy() {
      return vy
    },
  }
}

/**
 * A field of 0s and 1s on both sides of the page, in the theme's game color.
 * The pointer stirs it: stirred digits flip, drift and heat up toward the ink.
 */
export function BinaryField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const wide = matchMedia(WIDE_QUERY)
    const still = matchMedia("(prefers-reduced-motion: reduce)")
    const root = document.documentElement
    const fontFamily =
      getComputedStyle(root).getPropertyValue("--font-pixel").trim() ||
      "ui-monospace, monospace"
    const font = `11px ${fontFamily}`

    let fluid: Fluid | null = null
    let cols = 0
    let rows = 0
    let grid: string[] = []
    let w = 0
    let h = 0
    let raf = 0
    let last = 0
    let cool: Rgb = [0, 0, 0]
    let hot: Rgb = [0, 0, 0]
    let coolStyle = ""
    let gain = 1
    const mouse = { x: -9999, y: -9999 }

    // The canvas normalizes any CSS color to #rrggbb.
    const readToken = (token: string): Rgb => {
      ctx.fillStyle = getComputedStyle(root).getPropertyValue(token).trim()
      const hex = String(ctx.fillStyle)
      return [1, 3, 5].map((at) => parseInt(hex.slice(at, at + 2), 16)) as Rgb
    }

    const readColors = () => {
      cool = readToken("--game")
      hot = readToken("--foreground")
      coolStyle = `rgb(${cool.join(", ")})`
      gain =
        parseFloat(
          getComputedStyle(root).getPropertyValue("--binary-field-gain")
        ) || 1
    }

    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2)
      w = innerWidth
      h = innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.ceil(w / CELL_W)
      rows = Math.ceil(h / CELL_H)
      grid = Array.from({ length: cols * rows }, () =>
        Math.random() < 0.5 ? "0" : "1"
      )
      fluid = createFluid(cols, rows)
      ctx.font = font
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
    }

    const draw = (time: number) => {
      if (!fluid) return
      const animate = !still.matches
      if (animate) fluid.step()
      ctx.clearRect(0, 0, w, h)
      const left = w / 2 - COLUMN_HALF
      const right = w / 2 + COLUMN_HALF

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * CELL_W + CELL_W / 2
          if (x > left && x < right) continue
          const y = r * CELL_H + CELL_H / 2
          const i = r * cols + c

          const e = animate ? Math.min(1, fluid.en[i]) : 0

          if (animate && Math.random() < 0.0015 + e * 0.3) {
            grid[i] = grid[i] === "0" ? "1" : "0"
          }

          const warp = Math.sin(r * 0.11 + time / 2600) * 2.2
          const wave = animate
            ? 0.5 + 0.5 * Math.sin(c * 0.16 + warp + time / 1900)
            : 0.5
          const edgeFade = Math.min(
            1,
            Math.abs(x - (x < left ? left : right)) / 220 + 0.35
          )
          const base = Math.min(1, (0.12 + wave * 0.22) * edgeFade * gain)

          let px = x
          let py = y
          if (e > 0.04) {
            const mix = Math.min(1, e * e * 1.6)
            const [cr, cg, cb] = cool
            const [hr, hg, hb] = hot
            ctx.fillStyle = `rgb(${cr + (hr - cr) * mix}, ${cg + (hg - cg) * mix}, ${cb + (hb - cb) * mix})`
            ctx.globalAlpha = Math.min(1, base + e * 0.95)
            px += fluid.vx[i] * e * 5
            py += fluid.vy[i] * e * 5
          } else {
            ctx.fillStyle = coolStyle
            ctx.globalAlpha = base
          }
          ctx.fillText(grid[i], px, py)
        }
      }
      ctx.globalAlpha = 1
    }

    const loop = (time: number) => {
      raf = requestAnimationFrame(loop)
      if (time - last < 50) return
      last = time
      draw(time)
    }

    const start = () => {
      cancelAnimationFrame(raf)
      if (!wide.matches) {
        ctx.clearRect(0, 0, w, h)
        fluid = null
        return
      }
      resize()
      if (still.matches) draw(0)
      else raf = requestAnimationFrame(loop)
    }

    const onMouseMove = (e: MouseEvent) => {
      if (fluid && mouse.x > -9000) {
        fluid.inject(
          e.clientX / CELL_W,
          e.clientY / CELL_H,
          (e.clientX - mouse.x) / CELL_W,
          (e.clientY - mouse.y) / CELL_H,
          6
        )
      }
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const onMouseLeave = () => {
      mouse.x = mouse.y = -9999
    }
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf)
      else start()
    }

    // next-themes flips the class on <html>; the digits follow the new tokens.
    const themeObserver = new MutationObserver(() => {
      readColors()
      if (still.matches) draw(0)
    })

    readColors()
    themeObserver.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    })
    addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseleave", onMouseLeave)
    addEventListener("resize", start)
    document.addEventListener("visibilitychange", onVisibility)
    wide.addEventListener("change", start)
    still.addEventListener("change", start)

    let disposed = false
    document.fonts.load(font).then(
      () => !disposed && start(),
      () => !disposed && start()
    )

    return () => {
      disposed = true
      cancelAnimationFrame(raf)
      themeObserver.disconnect()
      removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseleave", onMouseLeave)
      removeEventListener("resize", start)
      document.removeEventListener("visibilitychange", onVisibility)
      wide.removeEventListener("change", start)
      still.removeEventListener("change", start)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden xl:block"
    />
  )
}
