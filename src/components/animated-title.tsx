"use client"

import { useEffect } from "react"

const TYPE_MS = 110
const BLINK_MS = 600
const CURSOR = "_"
const AWAY_TITLE = "Ei, volta aqui!"

/**
 * Types the tab title once, then blinks a cursor after it. Switching tabs
 * shows a call-back message; coming back types the title again.
 */
export function AnimatedTitle({ title }: { title: string }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.title = title
      return
    }

    let timer: ReturnType<typeof setTimeout> | undefined

    const blink = (visible: boolean) => {
      document.title = visible ? `${title}${CURSOR}` : title
      timer = setTimeout(() => blink(!visible), BLINK_MS)
    }

    const type = (length: number) => {
      document.title = `${title.slice(0, length)}${CURSOR}`
      timer =
        length < title.length
          ? setTimeout(() => type(length + 1), TYPE_MS)
          : setTimeout(() => blink(false), BLINK_MS)
    }

    const onVisibilityChange = () => {
      clearTimeout(timer)
      if (document.hidden) {
        document.title = AWAY_TITLE
      } else {
        type(1)
      }
    }

    type(1)
    document.addEventListener("visibilitychange", onVisibilityChange)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("visibilitychange", onVisibilityChange)
      document.title = title
    }
  }, [title])

  return null
}
