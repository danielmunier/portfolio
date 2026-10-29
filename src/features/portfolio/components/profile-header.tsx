import { USER } from "@/features/portfolio/data/user"

import { AvatarHp } from "./avatar-hp"
import { DiameterDimension } from "./diameter-dimension"
import { FlipSentences } from "./flip-sentences"
import { ProfileCover } from "./profile-cover"
import { VerifiedIcon } from "./verified-icon"

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] overflow-y-clip border-x border-x-line after:z-1">
      <figure className="relative col-span-2 p-2 sm:col-span-1 sm:col-start-2 sm:p-4">
        <ProfileCover />
      </figure>

      <div className="flex flex-col sm:row-span-2 sm:row-start-1">
        <div className="screen-line-top mt-auto shrink-0 border-r border-line">
          <div className="-mx-px my-0 flex outline-none">
            <div
              data-slot="profile-avatar"
              className="relative z-10 size-30 rounded-full min-[24rem]:size-32 sm:size-40"
            >
              <img
                className="block size-full rounded-[inherit] object-cover select-none dark:hidden"
                src={USER.avatarSketch}
                alt="Foto de Daniel Munier"
              />
              <img
                className="hidden size-full rounded-[inherit] object-cover select-none dark:block"
                src={USER.avatar}
                alt="Foto de Daniel Munier"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] inset-ring-1 inset-ring-foreground dark:hidden" />

              {/* The label assumes size-40 (sm+); the gutter fits it from lg. */}
              <DiameterDimension
                className="-z-1 hidden lg:block"
                label={<AvatarHp />}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div
          data-slot="profile-name"
          className="z-1 mt-auto border-t border-line"
        >
          <div className="flex -translate-x-px items-center gap-2 pl-4">
            <h1 className="-translate-y-px text-[2rem]/none font-medium tracking-tight">
              {USER.displayName}
            </h1>

            <VerifiedIcon className="size-4.5 select-none" aria-hidden />
          </div>

          <FlipSentences className="h-12.5 border-t border-line py-1 pl-4 sm:h-9">
            {USER.flipSentences}
          </FlipSentences>
        </div>
      </div>
    </div>
  )
}
