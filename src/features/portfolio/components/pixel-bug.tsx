// 9x9 beetle; "#" is a filled pixel. The gap down the middle splits the wings.
const SPRITE = [
  "..#...#..",
  "...#.#...",
  "..#####..",
  "#.##.##.#",
  ".###.###.",
  "..##.##..",
  ".###.###.",
  "#.#####.#",
  "...###...",
]

const PIXELS = SPRITE.flatMap((row, y) =>
  [...row].flatMap((cell, x) => (cell === "#" ? [{ x, y }] : []))
)

export function PixelBug(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 9 9"
      shapeRendering="crispEdges"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      {PIXELS.map(({ x, y }) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />
      ))}
    </svg>
  )
}
