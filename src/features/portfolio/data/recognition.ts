import type { RecognitionEntry } from "../types/recognition"
import { CERTIFICATIONS } from "./certifications"

/** Certifications in source order. */
export const RECOGNITION: RecognitionEntry[] = CERTIFICATIONS.map(
  (credential) => ({
    kind: "certificate" as const,
    key: credential.title,
    date: credential.issueDate,
    credential,
  })
)
