import { TECH_STACK } from "@/features/portfolio/data/tech-stack"
import type { TechStack } from "@/features/portfolio/types/tech-stack"

import { Window } from "../window"

/** Inventory of slots per category; brand colors show while the section is hovered. */
export function Stack() {
  return (
    <Window id="stack" index={3} title="Stack" className="group/stack">
      <div className="grid gap-x-5 gap-y-6 md:grid-cols-2">
        {Object.entries(groupByCategory(TECH_STACK)).map(
          ([category, items]) => (
            <div key={category}>
              <h3 className="mb-2 font-pixel text-xs text-muted-foreground uppercase">
                {category}
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {items.map((item) => (
                  <li
                    key={item.key}
                    className="flex"
                    style={
                      item.color
                        ? ({ "--brand": item.color } as React.CSSProperties)
                        : undefined
                    }
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener"
                      className="flex w-full items-center gap-2 border-2 border-border bg-background px-2.5 py-2 text-sm transition-colors hover:border-frame [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground [&_svg]:transition-[color] [&_svg]:duration-300 group-hover/stack:[&_svg]:text-(--brand,var(--foreground))"
                    >
                      {item.icon}
                      <span className="truncate">{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </Window>
  )
}

function groupByCategory(items: TechStack[]): Record<string, TechStack[]> {
  return items.reduce<Record<string, TechStack[]>>((acc, item) => {
    for (const category of item.categories) {
      ;(acc[category] ??= []).push(item)
    }
    return acc
  }, {})
}
