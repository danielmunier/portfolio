import { Space_Grotesk } from "next/font/google"
import localFont from "next/font/local"

import { cn } from "@/lib/utils"

const fontSans = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const fontPixel = localFont({
  src: "../assets/fonts/DepartureMono-Regular.woff2",
  weight: "400",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
  variable: "--font-pixel",
})

export const fontVariables = cn(
  fontSans.variable,
  fontPixel.variable,
  // Every mono label on the site (tags, dates, stats) uses the pixel face.
  "[--font-mono:var(--font-pixel)]"
)
