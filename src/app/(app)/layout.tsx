import dynamic from "next/dynamic"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const ScrollToTop = dynamic(() =>
  import("@/components/scroll-to-top").then((mod) => mod.ScrollToTop)
)

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    // References:
    // - https://base-ui.com/react/overview/quick-start#portals
    // - https://base-ui.com/react/overview/quick-start#ios-26-safari
    <div className="relative isolate">
      <SiteHeader />
      <main className="max-w-screen overflow-x-clip">{children}</main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
