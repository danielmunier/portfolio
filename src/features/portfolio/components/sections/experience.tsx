import { Markdown } from "@/components/markdown"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"

import { formatDuration, formatPeriod } from "../../lib/period"
import { PixelTag, Window } from "../window"

export function Experience() {
  return (
    <Window id="experience" index={4} title="Experiência">
      <ol className="space-y-10">
        {EXPERIENCES.map((experience) => (
          <li
            key={experience.id}
            id={`experience-${experience.id}`}
            className="group/experience scroll-mt-[calc(var(--header-height)+1.5rem)]"
          >
            <div className="flex items-center gap-3">
              {experience.companyLogo && (
                <img
                  src={experience.companyLogo}
                  alt=""
                  className="size-8 shrink-0 object-contain grayscale transition-[filter] duration-300 group-hover/experience:grayscale-0"
                />
              )}
              <div className="min-w-0 flex-1">
                <h3 className="text-lg/tight font-semibold">
                  {experience.companyWebsite ? (
                    <a
                      href={experience.companyWebsite}
                      target="_blank"
                      rel="noopener"
                      className="hover:text-game"
                    >
                      {experience.companyName}
                    </a>
                  ) : (
                    experience.companyName
                  )}
                </h3>
                {experience.location && (
                  <p className="text-sm text-muted-foreground">
                    {experience.location}
                  </p>
                )}
              </div>
              {experience.isCurrentEmployer && (
                <PixelTag className="border-game text-game">Atual</PixelTag>
              )}
            </div>

            <ol className="mt-4 ml-4 space-y-6 border-l-2 border-dashed border-border pl-5">
              {experience.positions.map((position) => (
                <li key={position.id} className="relative">
                  {/* Square node centered on the dashed line. */}
                  <span
                    className="absolute top-1.5 left-[-25px] size-2 bg-game"
                    aria-hidden
                  />
                  <h4 className="font-medium">{position.title}</h4>
                  <p className="mt-1 font-pixel text-xs text-muted-foreground">
                    {formatPeriod(
                      position.employmentPeriod.start,
                      position.employmentPeriod.end
                    )}
                    {" · "}
                    {formatDuration(
                      position.employmentPeriod.start,
                      position.employmentPeriod.end
                    )}
                  </p>

                  {position.description && (
                    <div className="typeset typeset-description mt-3 [&_li]:ps-0.5 [&_ul]:ps-3.5">
                      <Markdown>{position.description}</Markdown>
                    </div>
                  )}

                  {position.skills && position.skills.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {position.skills.map((skill) => (
                        <li key={skill}>
                          <PixelTag>{skill}</PixelTag>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </Window>
  )
}
