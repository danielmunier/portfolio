import { GitHubIcon, LinkedInIcon } from "@/components/icons"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-frame">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6 font-pixel text-xs text-muted-foreground uppercase">
        <span>
          {USER.displayName} · {new Date().getFullYear()}
        </span>

        <div className="flex items-center gap-4 [&_svg]:size-4">
          <a
            href={SOCIAL.github.href}
            target="_blank"
            rel="noopener"
            aria-label="Perfil no GitHub"
            className="hover:text-game"
          >
            <GitHubIcon />
          </a>
          <a
            href={SOCIAL.linkedin.href}
            target="_blank"
            rel="noopener"
            aria-label="Perfil no LinkedIn"
            className="hover:text-game"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}
