import { Suspense } from "react"

import { getGitHubContributions } from "@/features/portfolio/data/github-contributions"

import {
  GitHubContributionFallback,
  GitHubContributionGraph,
} from "../github-contributions/graph"
import { Window } from "../window"

export function Commits() {
  const contributions = getGitHubContributions()

  return (
    <Window id="commits" index={2} title="Commits" className="group/contrib">
      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph contributions={contributions} />
      </Suspense>
    </Window>
  )
}
