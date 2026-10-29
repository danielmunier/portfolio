/**
 * Always pt-BR, never the runtime locale: a client component would pick up the
 * visitor's locale while a server component picks up the host's, so the same
 * figure could render differently in two places on the page.
 *
 * Module-level because constructing an `Intl` formatter is the expensive part,
 * not formatting with it.
 */
const COMPACT_NUMBER_FORMATTER = new Intl.NumberFormat("pt-BR", {
  notation: "compact",
  compactDisplay: "short",
})

export function formatCompactNumber(value: number): string {
  return COMPACT_NUMBER_FORMATTER.format(value)
}
