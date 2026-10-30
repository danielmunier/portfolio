import Link from "next/link"

import { MAIN_NAV } from "@/config/site"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 h-(--header-height) border-b-2 border-frame bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-6xl items-center gap-5 px-4">
        <Link href="/" className="font-pixel text-sm hover:text-game">
          danielmunier
        </Link>

        <div className="flex-1" />

        <nav className="flex items-center gap-4 font-pixel text-xs uppercase max-sm:hidden">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-game hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}
