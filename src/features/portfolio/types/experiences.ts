export type ExperiencePosition = {
  id: string
  title: string
  /** "MM.YYYY"; omit `end` for the current role. */
  employmentPeriod: {
    start: string
    end?: string
  }
  /** Markdown. */
  description?: string
  skills?: string[]
}

export type Experience = {
  id: string
  companyName: string
  /** Path under /public. */
  companyLogo?: string
  companyWebsite?: string
  location?: string
  /** Roles held at this company; newest first. */
  positions: ExperiencePosition[]
  isCurrentEmployer?: boolean
}
