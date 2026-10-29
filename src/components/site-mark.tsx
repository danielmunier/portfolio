// "DM" drawn on a 64-unit pixel grid, one rectangle per stroke.
const MARK_PATH =
  "M0 0h192v64h-192ZM0 64h64v128h-64ZM0 192h192v64h-192ZM192 64h64v128h-64ZM320 0h64v256h-64ZM384 0h64v64h-64ZM448 64h64v64h-64ZM512 0h64v64h-64ZM576 0h64v256h-64Z"

export function SiteMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 640 256"
      aria-hidden
      {...props}
    >
      <path fill="currentColor" d={MARK_PATH} />
    </svg>
  )
}
