"use client"

import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { DotGridSpotlight } from "@/registry/components/dot-grid-spotlight"

const DOT_COLOR = {
  light: {
    default: "rgba(0, 0, 0, 0.06)",
    active: "rgba(0, 0, 0, 0.12)",
  },
  dark: {
    default: "rgba(255, 255, 255, 0.05)",
    active: "rgba(255, 255, 255, 0.1)",
  },
}

export function ProfileCover() {
  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme === "dark" ? "dark" : "light"

  return (
    <div
      className={cn(
        "relative flex aspect-2.5/1 items-center justify-center select-none sm:aspect-auto sm:h-full sm:min-h-40",
        "bg-black/0.75 dark:bg-white/1"
      )}
    >
      <DotGridSpotlight
        dotColor={DOT_COLOR[theme]?.default}
        activeDotColor={DOT_COLOR[theme]?.active}
      />
    </div>
  )
}
