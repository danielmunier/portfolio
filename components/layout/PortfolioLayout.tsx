import { Profile, Technology, Project, Experience } from "@/types"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Technologies } from "@/components/sections/Technologies"
import { Experience as ExperienceSection } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Location } from "@/components/sections/Location"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"

interface PortfolioLayoutProps {
  profile: Profile
  technologies: Technology[]
  projects: Project[]
  experiences: Experience[]
}

export function PortfolioLayout({ 
  profile, 
  technologies, 
  projects, 
  experiences 
}: PortfolioLayoutProps) {
  return (
    <div className="min-h-screen bg-custom-dark text-gray-300 p-3">
      <Hero profile={profile} />
      
      <main className="max-w-2xl mx-auto px-6 space-y-16">
        <About profile={profile} />
        <Technologies technologies={technologies} />
        <ExperienceSection experiences={experiences} />
        <Projects projects={projects} />
        {/* <Location location={profile.location} /> */}
        <Contact contact={profile.contact} />
      </main>

      <Footer profile={profile} />
    </div>
  )
} 