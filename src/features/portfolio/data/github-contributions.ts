import "server-only"

import { unstable_cache } from "next/cache"

import { GITHUB_USERNAME } from "@/config/site"
import type { Activity } from "@/components/contribution-graph"

// Public API that turns a GitHub profile into daily contribution counts.
const DEFAULT_API_URL = "https://github-contributions-api.jogruber.de/v4"

type GitHubContributionsResponse = {
  contributions: Activity[]
}

const getCachedContributions = unstable_cache(
  async (username: string) => {
    const apiUrl =
      process.env.NEXT_PUBLIC_GITHUB_CONTRIBUTIONS_API_URL || DEFAULT_API_URL

    try {
      const res = await fetch(`${apiUrl}/${username}?y=last`)
      if (!res.ok) return []
      const data = (await res.json()) as GitHubContributionsResponse
      return data.contributions ?? []
    } catch {
      // The graph hides itself when there is no data.
      return []
    }
  },
  ["github-contributions"],
  { revalidate: 86400 } // Cache for 1 day (86400 seconds)
)

export function getGitHubContributions() {
  return getCachedContributions(GITHUB_USERNAME)
}
