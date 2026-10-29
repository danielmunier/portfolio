# AI agent guidelines for danielmunier.com.br

Next.js 16 (App Router) single-page portfolio, based on the MIT-licensed chanhdai.com template.

**Stack**: TypeScript, React 19, Tailwind CSS v4, shadcn/ui, Motion, Vitest, pnpm, Vercel

## Project structure

| Directory                              | Purpose                                                              |
| -------------------------------------- | -------------------------------------------------------------------- |
| `src/app/`                             | App Router pages and layouts (home, 404, share image, sitemap)       |
| `src/components/`                      | Shared components (header, footer, theme toggle, `ui/` primitives)   |
| `src/features/portfolio/components/`   | Player card with the game screen, section windows and the sections   |
| `src/features/portfolio/data/`         | All page content                                                     |
| `src/config/`                          | Site config (`site.ts`) and JSON-LD                                  |
| `src/hooks/`, `src/lib/`, `src/utils/` | Hooks, libraries, utilities                                          |

All page content lives in `src/features/portfolio/data/`. Images live in `public/images/`.

## Look and feel

- Retro game style: pixel font (Departure Mono) for titles, labels and tags; Space Grotesk for body text.
- Colors come from tokens in `src/styles/globals.css`: paper and ink in light mode, a green terminal in dark mode; `game` is the accent.
- Sections are `Window` frames (thick border, hard shadow, pixel title bar).

## Content rules

- Page copy is in Portuguese (pt-BR). Code identifiers stay in English.
- Never use the em dash in copy.
- No vendor names from the AcesseFy stack in public text; describe the category instead ("STT em streaming", "GPU na nuvem").
- Numbers only when they are true and have a source.

## Coding guidelines

- TypeScript strict mode; explicit types when necessary
- kebab-case file naming
- Comments only for "why", not "what"
- Tailwind CSS v4 syntax; support dark/light modes

## Commands

```bash
pnpm dev           # Dev server
pnpm build         # Production build
pnpm test:run      # Vitest (single run)
pnpm lint          # ESLint
pnpm check-types   # Type checking (tsc --noEmit)
```

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
