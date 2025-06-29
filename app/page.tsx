import "./globals.css"
import { PortfolioLayout } from "@/components/layout/PortfolioLayout"
import { profile, technologies, projects, experiences } from "@/data/portfolio"

export default function Portfolio() {
  return (
    <PortfolioLayout
      profile={profile}
      technologies={technologies}
      projects={projects}
      experiences={experiences}
    />
  )
}
