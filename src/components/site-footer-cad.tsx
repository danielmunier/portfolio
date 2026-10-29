import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import { GitHubIcon, LinkedInIcon } from "@/components/icons"
import { SiteMark } from "@/components/site-mark"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

// Not derived from `SITE_INFO.url`: that follows `NEXT_PUBLIC_APP_URL` and
// would read `localhost` in dev.
const SITE_TITLE = "danielmunier.com.br"

/** Footer laid out as the title block of a technical drawing. */
export function SiteFooterCad() {
  const githubLink = SOCIAL.github
  const linkedinLink = SOCIAL.linkedin

  return (
    <footer className="max-w-screen overflow-x-clip px-2">
      <div className="mx-auto border-x border-x-line group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        <div className="screen-line-top screen-line-bottom before:z-1">
          <div className="h-12" />
        </div>

        <div className="relative">
          <div className="screen-line-bottom flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-3 font-mono text-sm">
            <span className="font-medium">{SITE_TITLE}</span>
            <span className="font-sans text-muted-foreground">{USER.bio}</span>
          </div>
        </div>

        <div className="screen-line-top h-4" />

        <div className="screen-line-top screen-line-bottom flex items-center gap-3 px-4 py-3 text-muted-foreground">
          <Link
            href="/"
            className="mr-auto text-muted-foreground transition-[color] hover:text-foreground"
            aria-label="Início"
          >
            <SiteMark className="h-4" />
          </Link>

          <a
            className="flex items-center transition-[color] hover:text-foreground"
            href={githubLink.href}
            target="_blank"
            rel="noopener"
            aria-label="Perfil no GitHub"
          >
            <GitHubIcon className="size-4" />
          </a>

          <Separator
            orientation="vertical"
            className="data-vertical:h-4 data-vertical:self-center"
          />

          <a
            className="flex items-center transition-[color] hover:text-foreground"
            href={linkedinLink.href}
            target="_blank"
            rel="noopener"
            aria-label="Perfil no LinkedIn"
          >
            <LinkedInIcon className="size-4" />
          </a>
        </div>
      </div>

      <div className="h-(--fade-bottom-height)" />
      <div className="pb-[env(safe-area-inset-bottom,0)]" />
    </footer>
  )
}
