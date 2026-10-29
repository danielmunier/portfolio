export type Project = {
  id: string
  title: string
  /** "MM.YYYY"; omit `end` for ongoing projects. */
  period: {
    start: string
    end?: string
  }
  /** Public URL; the whole card links here. Empty for projects without a site. */
  link: string
  skills: string[]
  /** Markdown. */
  description?: string
  /** Logo framed in a tile; defaults to a box icon. */
  icon?: React.ReactElement
}
