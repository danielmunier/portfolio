export type TechStack = {
  key: string
  title: string
  href: string
  icon: React.ReactElement
  /** Brand color shown on hover; omit for black/near-black brands. */
  color?: string
  categories: string[]
}
