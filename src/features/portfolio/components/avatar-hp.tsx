"use client"

import { useEffect, useState } from "react"

import { AVATAR_HIT_EVENT } from "./bouncing-mark"

const MAX_HP = 100

/** Avatar health, drained by the bouncing mark; respawns at full when it runs out. */
export function AvatarHp() {
  const [hp, setHp] = useState(MAX_HP)

  useEffect(() => {
    const onHit = (event: Event) => {
      const damage = (event as CustomEvent<number>).detail
      setHp((current) => (current - damage <= 0 ? MAX_HP : current - damage))
    }

    window.addEventListener(AVATAR_HIT_EVENT, onHit)
    return () => window.removeEventListener(AVATAR_HIT_EVENT, onHit)
  }, [])

  return <span className="tabular-nums">{hp} HP</span>
}
