import { Markdown } from "@/components/markdown"
import { USER } from "@/features/portfolio/data/user"

import { Window } from "../window"

export function About() {
  return (
    <Window id="about" index={1} title="Sobre">
      <div className="typeset typeset-description [&_li]:ps-0.5 [&_ul]:ps-3.5">
        <Markdown>{USER.about}</Markdown>
      </div>
    </Window>
  )
}
