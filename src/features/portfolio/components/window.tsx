import { cn } from "@/lib/utils"

/** Section frame: thick border, hard shadow and a pixel title bar. */
export function Window({
  id,
  index,
  title,
  className,
  children,
}: {
  id: string
  index: number
  title: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-[calc(var(--header-height)+1.5rem)] border-2 border-frame bg-card shadow-[6px_6px_0_0_var(--frame-shadow)]",
        className
      )}
    >
      <header className="flex items-center justify-between gap-4 border-b-2 border-frame px-4 py-2 font-pixel text-sm uppercase">
        <h2>
          <a href={`#${id}`} className="hover:text-game">
            {title}
          </a>
        </h2>
        <span className="text-muted-foreground" aria-hidden>
          {String(index).padStart(2, "0")}
        </span>
      </header>
      <div className="p-4 sm:p-5">{children}</div>
    </section>
  )
}

export function PixelTag({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-border px-1.5 py-0.5 font-pixel text-[0.6875rem] leading-none text-muted-foreground uppercase",
        className
      )}
      {...props}
    />
  )
}
