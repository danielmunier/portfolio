import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

import { USER } from "@/features/portfolio/data/user"

export const alt = `${USER.displayName}, desenvolvedor full stack`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

// Same pixel face as the site; the image renderer can't read woff2.
const pixelFont = await readFile(
  join(process.cwd(), "src/assets/fonts/DepartureMono-Regular.otf")
)

const COLORS = {
  background: "#0c0f0d",
  card: "#121714",
  foreground: "#e6efe8",
  muted: "#8a9a8e",
  frame: "#3a4a3f",
  shadow: "#1e5c30",
  game: "#39d353",
}

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
        alignItems: "center",
        justifyContent: "center",
        background: COLORS.background,
        backgroundImage: `radial-gradient(${COLORS.frame} 1.5px, transparent 0)`,
        backgroundSize: "24px 24px",
        fontFamily: "Departure Mono",
        color: COLORS.foreground,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: 56,
          width: 1040,
          background: COLORS.card,
          border: `4px solid ${COLORS.frame}`,
          boxShadow: `12px 12px 0 0 ${COLORS.shadow}`,
        }}
      >
        {avatar && (
          <img
            src={avatar}
            width={260}
            height={260}
            alt=""
            style={{
              border: `4px solid ${COLORS.frame}`,
              boxShadow: `8px 8px 0 0 ${COLORS.shadow}`,
            }}
          />
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            gap: 18,
          }}
        >
          <div style={{ fontSize: 28, color: COLORS.game }}>PLAYER 1</div>
          <div style={{ fontSize: 76, lineHeight: 1 }}>{USER.displayName}</div>
          <div style={{ fontSize: 32, color: COLORS.muted }}>
            Desenvolvedor Full Stack
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 18,
              fontSize: 26,
            }}
          >
            <span>HP</span>
            <div
              style={{
                display: "flex",
                flex: 1,
                gap: 6,
                padding: 6,
                border: `4px solid ${COLORS.frame}`,
              }}
            >
              {Array.from({ length: 10 }, (_, index) => (
                <div
                  key={index}
                  style={{ flex: 1, height: 18, background: COLORS.game }}
                />
              ))}
            </div>
            <span>100/100</span>
          </div>

          <div style={{ fontSize: 26, color: COLORS.muted, marginTop: 8 }}>
            danielmunier.com.br
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Departure Mono",
          data: pixelFont,
          style: "normal",
          weight: 400,
        },
      ],
    }
  )
}
