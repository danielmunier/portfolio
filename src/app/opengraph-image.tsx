import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

import { PixelBug } from "@/features/portfolio/components/pixel-bug"
import { USER } from "@/features/portfolio/data/user"

export const alt = `${USER.displayName}, ${USER.currentRole.toLowerCase()}`
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
  bug: "#a855f7",
  damage: "#ef4444",
}

const PHOTO_SIZE = 340

// Rendered at build time; a failed fetch just leaves the photo out.
async function getAvatarDataUri() {
  try {
    const response = await fetch(`${USER.avatar}?size=${PHOTO_SIZE}`)
    if (!response.ok) return null
    const type = response.headers.get("content-type") ?? "image/jpeg"
    const bytes = Buffer.from(await response.arrayBuffer())
    return `data:${type};base64,${bytes.toString("base64")}`
  } catch {
    return null
  }
}

/**
 * Link preview for WhatsApp, Discord, LinkedIn... The arena from the site
 * frozen on a hit, with text big enough to read on a phone.
 */
export default async function Image() {
  const avatar = await getAvatarDataUri()

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 56,
        padding: 56,
        background: COLORS.background,
        backgroundImage: `radial-gradient(${COLORS.frame} 1.5px, transparent 0)`,
        backgroundSize: "24px 24px",
        fontFamily: "Departure Mono",
        color: COLORS.foreground,
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 460,
          height: 506,
          background: COLORS.card,
          backgroundImage: `radial-gradient(${COLORS.frame} 1.5px, transparent 0)`,
          backgroundSize: "18px 18px",
          border: `4px solid ${COLORS.frame}`,
          boxShadow: `10px 10px 0 0 ${COLORS.shadow}`,
        }}
      >
        {avatar && (
          <img
            src={avatar}
            width={PHOTO_SIZE}
            height={PHOTO_SIZE}
            alt=""
            style={{
              border: `4px solid ${COLORS.frame}`,
              boxShadow: `8px 8px 0 0 ${COLORS.shadow}`,
            }}
          />
        )}

        <PixelBug
          width={72}
          height={72}
          fill={COLORS.bug}
          style={{ position: "absolute", left: 22, top: 28 }}
        />
        <div
          style={{
            position: "absolute",
            left: 110,
            top: 16,
            fontSize: 38,
            color: COLORS.damage,
            textShadow: `3px 3px 0 ${COLORS.background}`,
          }}
        >
          -3 HP
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div style={{ fontSize: 30, color: COLORS.game }}>PLAYER 1</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 18,
            fontSize: 120,
            lineHeight: 1,
          }}
        >
          <span>{USER.firstName}</span>
          <span>{USER.lastName}</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 28,
            fontSize: 38,
            lineHeight: 1.2,
            color: COLORS.muted,
          }}
        >
          <span>Desenvolvedor</span>
          <span>Full Stack Pleno</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginTop: 36,
            fontSize: 28,
          }}
        >
          <span>HP</span>
          <div
            style={{
              display: "flex",
              flex: 1,
              gap: 5,
              padding: 5,
              border: `4px solid ${COLORS.frame}`,
            }}
          >
            {Array.from({ length: 10 }, (_, index) => (
              <div
                key={index}
                style={{ flex: 1, height: 20, background: COLORS.game }}
              />
            ))}
          </div>
          <span>97/100</span>
        </div>

        <div style={{ marginTop: 26, fontSize: 30, color: COLORS.game }}>
          &gt; danielmunier.com.br
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
