import type { Metadata } from "next"
import type { ProfilePage, WithContext } from "schema-dts"

import { JSON_LD_ID } from "@/config/json-ld"
import { JsonLdScript } from "@/lib/json-ld"
import { absoluteUrl } from "@/lib/utils"
import { AnimatedTitle } from "@/components/animated-title"
import { PlayerCard } from "@/features/portfolio/components/player-card"
import { About } from "@/features/portfolio/components/sections/about"
import { Certifications } from "@/features/portfolio/components/sections/certifications"
import { Commits } from "@/features/portfolio/components/sections/commits"
import { Education } from "@/features/portfolio/components/sections/education"
import { Experience } from "@/features/portfolio/components/sections/experience"
import { Projects } from "@/features/portfolio/components/sections/projects"
import { Stack } from "@/features/portfolio/components/sections/stack"
import { USER } from "@/features/portfolio/data/user"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLdScript data={getProfilePageJsonLd()} />
      <AnimatedTitle title={USER.displayName} />

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-[22rem_1fr] lg:items-start">
        <aside className="lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
          <PlayerCard />
        </aside>

        <div className="min-w-0 space-y-8">
          <About />
          <Commits />
          <Stack />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
        </div>
      </div>
    </>
  )
}

function getProfilePageJsonLd(): WithContext<ProfilePage> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": absoluteUrl("/"),
    dateCreated: new Date(USER.dateCreated).toISOString(),
    dateModified: new Date().toISOString(),
    // Reference the Person defined in the WebSite node (rendered globally in
    // the root layout) so both blocks resolve to the same entity.
    mainEntity: { "@id": JSON_LD_ID.person },
  }
}
