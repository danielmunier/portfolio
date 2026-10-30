import { BriefcaseBusinessIcon, MailIcon, MapPinIcon } from "lucide-react"

import { GitHubIcon, LinkedInIcon } from "@/components/icons"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

import { GameScreen } from "./game-screen"

/** Left column: the arena, who Daniel is and how to reach him. */
export function PlayerCard() {
  const email = atob(USER.emailB64)

  return (
    <div className="border-2 border-frame bg-card p-4 shadow-[6px_6px_0_0_var(--frame-shadow)]">
      <GameScreen avatar={USER.avatar} name={USER.displayName} />

      <div className="mt-5 space-y-1">
        <p className="font-pixel text-xs text-game uppercase">Player 1</p>
        <h1 className="font-pixel text-3xl/none tracking-tight">
          {USER.displayName}
        </h1>
        <p className="text-muted-foreground">{USER.jobTitle}</p>
      </div>

      <ul className="mt-4 space-y-2 text-sm [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground">
        <li className="flex items-center gap-2.5">
          <BriefcaseBusinessIcon aria-hidden />
          <span>{USER.currentRole}</span>
        </li>
        <li className="flex items-center gap-2.5">
          <MapPinIcon aria-hidden />
          <span>{USER.address}</span>
        </li>
        <li className="flex items-center gap-2.5">
          <MailIcon aria-hidden />
          <a className="hover:text-game" href={`mailto:${email}`}>
            {email}
          </a>
        </li>
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        <PixelButton href={SOCIAL.github.href} icon={<GitHubIcon />}>
          GitHub
        </PixelButton>
        <PixelButton href={SOCIAL.linkedin.href} icon={<LinkedInIcon />}>
          LinkedIn
        </PixelButton>
        <PixelButton href={`mailto:${email}`} icon={<MailIcon />}>
          E-mail
        </PixelButton>
      </div>
    </div>
  )
}

function PixelButton({
  href,
  icon,
  children,
}: {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  const isExternal = href.startsWith("http")

  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener" } : {})}
      className="flex items-center gap-2 border-2 border-frame bg-background px-3 py-1.5 font-pixel text-xs uppercase shadow-[3px_3px_0_0_var(--frame-shadow)] transition-[translate,box-shadow,color] duration-100 hover:translate-px hover:text-game hover:shadow-[2px_2px_0_0_var(--frame-shadow)] active:translate-[3px] active:shadow-none [&_svg]:size-3.5"
    >
      {icon}
      {children}
    </a>
  )
}
