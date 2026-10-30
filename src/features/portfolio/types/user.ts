export type User = {
  firstName: string
  lastName: string
  /** Preferred public-facing name */
  displayName: string
  /** Handle/username used in links or mentions */
  username: string
  gender: "male" | "female" | "non-binary"
  /** General location for display */
  address: string
  /** base64 encoded, so the address isn't sitting in plain text in the source */
  emailB64: string
  /** Primary role shown on the profile */
  jobTitle: string
  /** Current position, shown next to the briefcase on the player card */
  currentRole: string
  /** Rich about section; supports Markdown */
  about: string
  /** Public URL to avatar image */
  avatar: string
  /** SEO keywords list for metadata */
  keywords: string[]
  /** Profile/site start date in YYYY-MM-DD */
  dateCreated: string
}
