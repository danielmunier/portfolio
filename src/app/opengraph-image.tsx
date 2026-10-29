import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

import { getMarkSVG } from "@/components/site-mark"
import { USER } from "@/features/portfolio/data/user"

export const alt = `${USER.displayName}, desenvolvedor full stack`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

const fontsDir = join(process.cwd(), "src/assets/fonts")
const geistSemiBold = await readFile(join(fontsDir, "Geist-SemiBold.ttf"))
const geistMono = await readFile(join(fontsDir, "GeistMono-Regular.ttf"))

const markDataUri = `data:image/svg+xml;base64,${Buffer.from(
  getMarkSVG().replace('fill="currentColor"', 'fill="#fafafa"')
).toString("base64")}`

// Rendered at build time; a failed fetch just leaves the photo out.
async function getAvatarDataUri() {
  try {
    const response = await fetch(`${USER.avatar}?size=440`)
    if (!response.ok) return null
    const type = response.headers.get("content-type") ?? "image/jpeg"
    const bytes = Buffer.from(await response.arrayBuffer())
    return `data:${type};base64,${bytes.toString("base64")}`
  } catch {
    return null
  }
}

export default async function Image() {
  const avatar = await getAvatarDataUri()

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#09090b",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.08) 1.5px, transparent 0)",
        backgroundSize: "24px 24px",
        color: "#fafafa",
        fontFamily: "Geist",
      }}
    >
      <img src={markDataUri} width={150} height={60} alt="" />

      <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
        {avatar && (
          <img
            src={avatar}
            width={220}
            height={220}
            alt=""
            style={{
              borderRadius: 9999,
              border: "2px solid rgba(255,255,255,0.15)",
            }}
          />
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 84, letterSpacing: -2, lineHeight: 1 }}>
            {USER.displayName}
          </div>
          <div
            style={{
              fontFamily: "Geist Mono",
              fontSize: 34,
              color: "#a1a1aa",
            }}
          >
            Desenvolvedor Full Stack
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "Geist Mono",
          fontSize: 26,
          color: "#71717a",
        }}
      >
        <span>danielmunier.com.br</span>
        <span>{USER.address}</span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistSemiBold, style: "normal", weight: 600 },
        { name: "Geist Mono", data: geistMono, style: "normal", weight: 400 },
      ],
    }
  )
}
