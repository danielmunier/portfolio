import { isFuture, parse } from "date-fns"
import { GraduationCapIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { EDUCATION } from "@/features/portfolio/data/education"

import { formatPeriod } from "../../lib/period"
import { Window } from "../window"

export function Education() {
  return (
    <Window id="education" index={6} title="Formação">
      <ul className="space-y-4">
        {EDUCATION.map((education) => (
          <li key={education.id} className="flex items-center gap-3">
            <div className="grid size-11 shrink-0 place-items-center border-2 border-frame bg-background [&_img]:size-7 [&_img]:object-contain [&_svg]:size-5 [&_svg]:text-muted-foreground">
              {education.schoolLogo ? (
                <>
                  <img
                    className={cn(education.schoolLogoDark && "dark:hidden")}
                    src={education.schoolLogo}
                    alt=""
                  />
                  {education.schoolLogoDark && (
                    <img
                      className="hidden dark:block"
                      src={education.schoolLogoDark}
                      alt=""
                    />
                  )}
                </>
              ) : (
                <GraduationCapIcon />
              )}
            </div>
            <div className="min-w-0">
              <h3 className="leading-snug font-semibold">{education.school}</h3>
              <p className="text-sm text-muted-foreground">
                {[education.degree, education.fieldOfStudy]
                  .filter(Boolean)
                  .join(" em ")}
              </p>
              <p className="mt-0.5 font-pixel text-xs text-muted-foreground">
                {formatPeriod(education.period.start, education.period.end)}
                {education.period.end &&
                  isFuture(
                    parse(education.period.end, "MM.yyyy", new Date())
                  ) &&
                  " (previsão)"}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Window>
  )
}
