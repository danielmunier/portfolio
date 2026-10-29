import type { Person } from "schema-dts"

import { SITE_INFO } from "@/config/site"
import { EDUCATION } from "@/features/portfolio/data/education"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { TECH_STACK } from "@/features/portfolio/data/tech-stack"
import { USER } from "@/features/portfolio/data/user"

/**
 * Stable @id anchors so Google can merge JSON-LD nodes across separate
 * <script> blocks (and pages) into a single entity in the Knowledge Graph.
 * The "#fragment" keeps each node id distinct from the page URL itself.
 */
export const JSON_LD_ID = {
  website: `${SITE_INFO.url}/#website`,
  person: `${SITE_INFO.url}/#person`,
} as const

export const personJsonLd: Person = {
  "@type": "Person",
  "@id": JSON_LD_ID.person,
  name: USER.displayName,
  alternateName: [USER.username],
  identifier: USER.username,
  image: USER.avatar,
  url: SITE_INFO.url,
  jobTitle: USER.jobTitle,
  description: SITE_INFO.description,
  email: `mailto:${atob(USER.emailB64)}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rio de Janeiro",
    addressRegion: "RJ",
    addressCountry: "BR",
  },
  worksFor: EXPERIENCES.filter(
    (experience) => experience.isCurrentEmployer
  ).map((experience) => ({
    "@type": "Organization",
    name: experience.companyName,
    url: experience.companyWebsite,
  })),
  alumniOf: EDUCATION.map((education) => ({
    "@type": "CollegeOrUniversity",
    name: education.school,
  })),
  knowsAbout: TECH_STACK.map((tech) => tech.title),
  // Public profiles opt in via their `sameAs` flag (Knowledge Graph).
  sameAs: SOCIAL_LINKS.filter((link) => link.sameAs).map((link) => link.href),
}
