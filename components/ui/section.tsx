import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string
  children: React.ReactNode
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, title, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn("", className)}
      {...props}
    >
      {title && (
        <h2 className="text-geist-lg font-medium mb-6 text-white">{title}</h2>
      )}
      {children}
    </section>
  )
)
Section.displayName = "Section"

export { Section } 