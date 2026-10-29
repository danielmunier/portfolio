import type { Route } from "next"

import type { NavItem } from "@/types/nav"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export const SITE_INFO = {
  name: USER.displayName,
  // What search results show; the tab itself animates down to just the name.
  title: `${USER.displayName} | Desenvolvedor Full Stack`,
  url: process.env.NEXT_PUBLIC_APP_URL || "https://danielmunier.com.br",
  description:
    "Daniel Munier, desenvolvedor full stack no Rio de Janeiro. Agentes de voz com IA, APIs e apps web, mobile e desktop com TypeScript, Python, React e Node.js.",
  keywords: USER.keywords,
}

export const LICENSE = {
  name: "MIT License",
  url: "https://github.com/danielmunier/portfolio/blob/main/LICENSE",
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem<Route>[] = [
  {
    title: "Stack",
    href: "/#stack",
  },
  {
    title: "Experiência",
    href: "/#experience",
  },
  {
    title: "Projetos",
    href: "/#projects",
  },
]

export const MOBILE_NAV: NavItem<Route>[] = [
  {
    title: "Início",
    href: "/",
  },
  ...MAIN_NAV,
]

export const GITHUB_USERNAME = SOCIAL.github.handle
export const SOURCE_CODE_GITHUB_REPO = "danielmunier/portfolio"
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/danielmunier/portfolio"

export const UTM_PARAMS = {
  utm_source: "danielmunier.com.br",
}
