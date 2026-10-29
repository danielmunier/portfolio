import { addQueryParams, urlToName } from "@/utils/url"
import { ArrowUpRightIcon, BoxIcon } from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import { cn } from "@/lib/utils"
import { Markdown } from "@/components/markdown"
import { PROJECTS } from "@/features/portfolio/data/projects"

import { formatPeriod } from "../../lib/period"
import { PixelTag, Window } from "../window"

export function Projects() {
  return (
    <Window id="projects" index={5} title="Projetos">
      <ul className="grid gap-4 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <li
            key={project.id}
            className={cn(
              "group/project relative flex flex-col border-2 border-border bg-background p-4 transition-colors hover:border-frame",
              // The first project is the featured one.
              index === 0 && "md:col-span-2"
            )}
          >
            <div className="flex items-center gap-3">
              <div className="grid size-11 shrink-0 place-items-center border-2 border-frame bg-card [&_img]:size-7 [&_img]:object-contain [&_svg]:size-5">
                {project.icon ?? <BoxIcon />}
              </div>
              <div className="min-w-0">
                <h3 className="leading-snug font-semibold group-hover/project:text-game">
                  {project.title}
                </h3>
                <p className="mt-0.5 font-pixel text-xs text-muted-foreground">
                  {formatPeriod(project.period.start, project.period.end)}
                </p>
              </div>
            </div>

            {project.description && (
              <div className="typeset typeset-description mt-3 [&_li]:ps-0.5 [&_ul]:ps-3.5">
                <Markdown>{project.description}</Markdown>
              </div>
            )}

            <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-4">
              {project.skills.map((skill) => (
                <PixelTag key={skill}>{skill}</PixelTag>
              ))}
            </div>

            {project.link && (
              <a
                href={addQueryParams(project.link, UTM_PARAMS)}
                target="_blank"
                rel="noopener"
                // Stretched over the card, so the whole card opens the site.
                className="mt-4 inline-flex w-fit items-center gap-1 font-pixel text-xs text-game uppercase group-hover/project:underline after:absolute after:inset-0 [&_svg]:size-3.5"
              >
                {urlToName(project.link).replace(/^www\./, "")}
                <ArrowUpRightIcon aria-hidden />
              </a>
            )}
          </li>
        ))}
      </ul>
    </Window>
  )
}
