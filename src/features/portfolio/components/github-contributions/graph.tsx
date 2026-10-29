"use client"

import { use } from "react"
import { formatCompactNumber } from "@/utils/format"
import { format, parseISO, startOfWeek, subWeeks } from "date-fns"
import { ptBR } from "date-fns/locale"
import { LoaderIcon } from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { Activity } from "@/registry/components/contribution-graph"
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/registry/components/contribution-graph"
import { SOCIAL } from "@/features/portfolio/data/social-links"

// Weeks that fit the 768px column at 16px blocks, so it fills the row without
// scrolling on desktop.
const WEEKS = 38

function lastWeeks(data: Activity[], weeks: number) {
  if (data.length === 0) return data
  const from = subWeeks(
    startOfWeek(parseISO(data[data.length - 1].date)),
    weeks - 1
  )
  return data.filter((activity) => parseISO(activity.date) >= from)
}

// GitHub's own greens, swapped in for every block (graph and legend) while the
// section is hovered.
const HOVER_PALETTE = [
  "[--contrib-1:#9be9a8] [--contrib-2:#40c463] [--contrib-3:#30a14e] [--contrib-4:#216e39]",
  "dark:[--contrib-1:#0e4429] dark:[--contrib-2:#006d32] dark:[--contrib-3:#26a641] dark:[--contrib-4:#39d353]",
  "**:data-level:transition-[fill] **:data-level:duration-300",
  'group-hover/contrib:**:data-[level="1"]:fill-(--contrib-1)',
  'group-hover/contrib:**:data-[level="2"]:fill-(--contrib-2)',
  'group-hover/contrib:**:data-[level="3"]:fill-(--contrib-3)',
  'group-hover/contrib:**:data-[level="4"]:fill-(--contrib-4)',
].join(" ")

export function GitHubContributionGraph({
  contributions,
}: {
  contributions: Promise<Activity[]>
}) {
  const data = lastWeeks(use(contributions), WEEKS)

  if (data.length === 0) {
    return null
  }

  return (
    <figure className={HOVER_PALETTE}>
      <ContributionGraph
        className="mx-auto gap-4 py-4"
        data={data}
        blockSize={16}
        blockMargin={3}
        blockRadius={0}
        aria-label="Gráfico de contribuições no GitHub"
      >
        <ContributionGraphCalendar
          className="px-4 **:data-[slot=month-labels]:text-muted-foreground"
          title="Contribuições no GitHub"
          aria-hidden
        >
          {({ activity, dayIndex, weekIndex }) => (
            <Tooltip>
              <TooltipTrigger
                render={
                  <g>
                    <ContributionGraphBlock
                      activity={activity}
                      dayIndex={dayIndex}
                      weekIndex={weekIndex}
                    />
                  </g>
                }
              />
              <TooltipContent className="font-sans">
                <p>
                  {activity.count} contribuiç{activity.count > 1 ? "ões" : "ão"}{" "}
                  em{" "}
                  {format(parseISO(activity.date), "d MMM yyyy", {
                    locale: ptBR,
                  })}
                </p>
              </TooltipContent>
            </Tooltip>
          )}
        </ContributionGraphCalendar>

        <ContributionGraphFooter className="px-4 text-sm">
          <ContributionGraphTotalCount>
            {({ totalCount }) => (
              <figcaption className="text-pretty text-muted-foreground tabular-nums">
                {formatCompactNumber(totalCount)} contribuições,{" "}
                {format(parseISO(data[0].date), "d MMM yyyy", { locale: ptBR })}{" "}
                –{" "}
                {format(parseISO(data[data.length - 1].date), "d MMM yyyy", {
                  locale: ptBR,
                })}
                . Fonte:{" "}
                <a
                  href={SOCIAL.github.href}
                  className="link-underline"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </a>
                .
              </figcaption>
            )}
          </ContributionGraphTotalCount>

          <ContributionGraphLegend aria-hidden />
        </ContributionGraphFooter>
      </ContributionGraph>
    </figure>
  )
}

export function GitHubContributionFallback() {
  return (
    <div className="flex h-45 w-full items-center justify-center">
      <LoaderIcon className="animate-spin text-muted-foreground" />
    </div>
  )
}
