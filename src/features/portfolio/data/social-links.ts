import type { SocialProfile } from "@/features/portfolio/types/social-links"

/** Social profiles, keyed by network. */
export const SOCIAL = {
  github: {
    title: "GitHub",
    handle: "danielmunier",
    href: "https://github.com/danielmunier",
    sameAs: true,
  },
  linkedin: {
    title: "LinkedIn",
    handle: "daniel-munier",
    href: "https://www.linkedin.com/in/daniel-munier/",
    sameAs: true,
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
