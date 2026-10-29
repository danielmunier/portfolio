export type Certification = {
  title: string
  issuer: string
  /** Key into the issuer icon map; unknown or missing keys show a check. */
  issuerIconName?: string
  /** Verification link; leave empty when there is none. */
  credentialURL: string
}
