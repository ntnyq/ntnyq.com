# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project Snapshot

- Stack: Nuxt 4 + Vue 3 + TypeScript + UnoCSS + Nuxt Content + motion-v
- Package manager: pnpm (see `packageManager` in [package.json](package.json))
- Deployment: Vercel (see [vercel.json](vercel.json))

## Fast Start Commands

- Install: `pnpm install`
- Dev server: `pnpm dev`
- Build: `pnpm build`
- Preview: `pnpm preview`
- Typecheck: `pnpm typecheck`
- Lint: `pnpm lint`
- Format: `pnpm format`
- Generate static: `pnpm generate`
- Generate new post scaffold: `pnpm generate:post`

## High-Signal File Map

- Nuxt app config: [nuxt.config.ts](nuxt.config.ts)
- Lint config: [eslint.config.mjs](eslint.config.mjs)
- UnoCSS config: [uno.config.ts](uno.config.ts)
- Global tokens: [app/styles/vars.css](app/styles/vars.css)
- Global styles/utilities: [app/styles/index.css](app/styles/index.css)
- Dark mode logic: [app/composables/dark.ts](app/composables/dark.ts)
- Home UI patterns: [app/components/home/Hero.vue](app/components/home/Hero.vue)
- Post listing pattern: [app/pages/posts.vue](app/pages/posts.vue)
- Content source: [content/posts](content/posts)

## Architecture Boundaries

- UI app code lives in [app](app)
- Route views live in [app/pages](app/pages)
- Reusable components live in [app/components/home](app/components/home) and [app/components/ui](app/components/ui)
- Layout shells live in [app/layouts](app/layouts)
- Markdown content lives in [content/posts](content/posts)
- Utility scripts live in [scripts](scripts)

## Coding Conventions

- Use Vue Composition API with `<script lang="ts" setup>`.
- Keep components typed with `defineProps` and explicit event types.
- Prefer existing design tokens and utility classes over ad-hoc colors/spacings.
- Prefer UnoCSS utility classes (including arbitrary values) instead of inline `style` attributes or `<style>` blocks in Vue SFCs.
- Prefer motion-v `Motion` patterns already used in the codebase for animation.
- Keep dark mode compatibility (`.dark` tokens and `toggleDark` behavior) intact.

## Editing Rules for Agents

- Keep diffs focused; avoid unrelated refactors or broad formatting.
- Reuse existing component/style patterns before introducing new abstractions.
- Do not add new styles in [app/styles](app/styles) unless explicitly requested by the user.
- When changing UI, verify desktop + mobile behavior.
- After edits, run error checks and relevant commands (`pnpm typecheck`, `pnpm lint` when needed).

## Known Pitfalls

- ESLint config imports generated file `.nuxt/eslint.config.mjs` from [eslint.config.mjs](eslint.config.mjs). If `.nuxt` is missing, run `pnpm install` or `pnpm dev`/`nuxt prepare` first.
- Do not hand-edit dependency versions without updating lockfile. Vercel uses frozen lockfile install.
- Keep markdown content under [content/posts](content/posts) to avoid unintended indexing.

## References

- Project overview: [README.md](README.md)
- Nuxt config behavior: [nuxt.config.ts](nuxt.config.ts)
- Content collection setup: [content.config.ts](content.config.ts)
