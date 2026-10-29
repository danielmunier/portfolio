import { CircleCheckBigIcon } from "lucide-react"

import {
  AnthropicIcon,
  FreeCodeCampIcon,
  GoogleIcon,
  MetaIcon,
  VercelIcon,
} from "@/components/icons"
import { CERTIFICATIONS } from "@/features/portfolio/data/certifications"

import { Window } from "../window"

// Closed map keyed by `issuerIconName`; unknown names fall back to a check.
const ISSUER_ICONS: Record<string, React.ReactNode> = {
  anthropic: <AnthropicIcon />,
  freecodecamp: <FreeCodeCampIcon />,
  google: <GoogleIcon />,
  meta: <MetaIcon />,
  microsoft: <MicrosoftColorIcon />,
  vercel: <VercelIcon />,
}

// Brand color revealed while the section is hovered; issuers without one
// (near-black brands) just brighten to the foreground.
const ISSUER_COLORS: Record<string, string> = {
  anthropic: "#D97757",
  google: "#4285F4",
  meta: "#0866FF",
  vercel: "var(--foreground)",
}

const FALLBACK_COLOR = "#10B981"

export function Certifications() {
  return (
    <Window
      id="certifications"
      index={7}
      title="Certificações"
      className="group/recognition"
    >
      <ul className="grid gap-3 sm:grid-cols-2">
        {CERTIFICATIONS.map((certification) => {
          const iconName = certification.issuerIconName
          const content = (
            <>
              <div
                className="grid size-10 shrink-0 place-items-center border-2 border-frame bg-card text-muted-foreground transition-[color] duration-300 group-hover/recognition:text-(--brand,var(--foreground)) [&_svg]:size-5"
                style={
                  {
                    "--brand": iconName
                      ? ISSUER_COLORS[iconName]
                      : FALLBACK_COLOR,
                  } as React.CSSProperties
                }
              >
                {(iconName ? ISSUER_ICONS[iconName] : null) ?? (
                  <CircleCheckBigIcon />
                )}
              </div>
              <div className="min-w-0">
                <h3 className="text-sm/snug font-semibold">
                  {certification.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {certification.issuer}
                </p>
              </div>
            </>
          )

          const className =
            "flex h-full items-center gap-3 border-2 border-border bg-background p-3"

          return (
            <li key={certification.title}>
              {certification.credentialURL ? (
                <a
                  href={certification.credentialURL}
                  target="_blank"
                  rel="noopener"
                  className={`${className} transition-colors hover:border-frame`}
                >
                  {content}
                </a>
              ) : (
                <div className={className}>{content}</div>
              )}
            </li>
          )
        })}
      </ul>
    </Window>
  )
}

function MicrosoftColorIcon() {
  const squares = [
    { x: 2, y: 2, color: "#F25022" },
    { x: 12.495, y: 2, color: "#7FBA00" },
    { x: 2, y: 12.495, color: "#00A4EF" },
    { x: 12.495, y: 12.495, color: "#FFB900" },
  ]

  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      {squares.map((square) => (
        <rect
          key={square.color}
          x={square.x}
          y={square.y}
          width="9.505"
          height="9.505"
          className="fill-current transition-[fill] duration-300 group-hover/recognition:fill-(--square)"
          style={{ "--square": square.color } as React.CSSProperties}
        />
      ))}
    </svg>
  )
}
