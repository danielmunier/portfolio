import { formatCompactNumber } from "@/utils/format"
import { describe, expect, it } from "vitest"

describe("formatCompactNumber", () => {
  it("abbreviates thousands and millions the Brazilian way", () => {
    expect(formatCompactNumber(1234)).toMatch(/^1,2\smil$/)
    expect(formatCompactNumber(1234567)).toMatch(/^1,2\smi$/)
  })

  it("leaves numbers below a thousand as they are", () => {
    expect(formatCompactNumber(999)).toBe("999")
  })
})
