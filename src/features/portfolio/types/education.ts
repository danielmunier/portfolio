export type Education = {
  id: string
  school: string
  /** Path under /public; `schoolLogoDark` swaps in on the dark theme. */
  schoolLogo?: string
  schoolLogoDark?: string
  degree?: string
  fieldOfStudy?: string
  /** "MM.YYYY"; an `end` in the future reads as the expected finish. */
  period: {
    start: string
    end?: string
  }
}
