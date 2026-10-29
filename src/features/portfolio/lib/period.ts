import { differenceInMonths, parse } from "date-fns"

/** "05.2025" or "05.2025 - atual" (or "- 03.2027" for a known end). */
export function formatPeriod(start: string, end?: string) {
  if (end === start) return start
  return `${start} - ${end ?? "atual"}`
}

/** Compact length of a "MM.YYYY" period, counting both ends: "1a 6m", "9m". */
export function formatDuration(start: string, end?: string) {
  const startDate = parse(start, "MM.yyyy", new Date())
  const endDate = end ? parse(end, "MM.yyyy", new Date()) : new Date()
  const totalMonths = differenceInMonths(endDate, startDate) + 1
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  if (years === 0) return `${months}m`
  if (months === 0) return `${years}a`
  return `${years}a ${months}m`
}
