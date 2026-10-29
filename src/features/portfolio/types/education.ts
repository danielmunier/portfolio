export type Education = {
  id: string
  school: string
  /** Path under /public; `schoolLogoDark` swaps in on the dark theme. */
  schoolLogo?: string
  schoolLogoDark?: string
  degree?: string
  fieldOfStudy?: string
  period: {
    start: string
    end?: string
  }
  description?: string
  skills?: string[]
  isExpanded?: boolean
}
