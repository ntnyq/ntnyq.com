# Repository Guidelines

## Project Structure & Module Organization

This repository is a Nuxt 4 personal site written in Vue 3 and TypeScript.
Application code lives in `app/`: route components are in `app/pages/`, shared
UI in `app/components/`, layouts in `app/layouts/`, and reusable logic in
`app/composables/` and `app/utils/`. Global CSS and design tokens live under
`app/styles/`; prefer UnoCSS utilities for component-level styling. Markdown
posts belong in `content/posts/`, while static files are served from `public/`.
Build helpers live in `scripts/`, and root configuration files define Nuxt,
UnoCSS, content, TypeScript, and lint behavior.

## Build, Test, and Development Commands

Use pnpm 11, as pinned in `package.json`.

- `pnpm install --frozen-lockfile` installs the exact locked dependencies.
- `pnpm dev` starts the local Nuxt development server.
- `pnpm build` creates the production server build; `pnpm generate` produces
  the prerendered output used by CI.
- `pnpm preview` serves a completed build locally.
- `pnpm lint` runs ESLint; `pnpm format` applies Oxfmt, and
  `pnpm format:check` verifies formatting without edits.
- `pnpm typecheck` runs Nuxt/Vue TypeScript checks.
- `pnpm generate:post` interactively scaffolds a Markdown post.

## Coding Style & Naming Conventions

Follow `.editorconfig`: UTF-8, LF endings, two-space indentation, and a final
newline. Oxfmt enforces 80-column output, single quotes, no semicolons, and
trailing commas. Use Vue Composition API with `<script setup lang="ts">`.
Name Vue components in PascalCase (`ProjectItem.vue`), TypeScript values in
camelCase, and interfaces/types in PascalCase. Keep route filenames aligned
with their URLs, including Nuxt dynamic syntax such as `[...slug].vue`.

## Testing Guidelines

There is currently no dedicated unit-test framework or `test` script. Treat
`pnpm lint`, `pnpm format:check`, `pnpm generate`, and `pnpm typecheck` as the
required validation suite; these mirror CI. For UI changes, also inspect the
affected route in light and dark modes at mobile and desktop widths.

## Commit & Pull Request Guidelines

History follows concise Conventional Commit-style subjects: `feat: ...`,
`fix: ...`, `chore(deps): ...`, and `ci: ...`. Keep each commit focused and use
an imperative summary. Pull requests should explain the user-visible change,
list validation commands run, link relevant issues, and include before/after
screenshots for visual work. Do not commit generated directories such as
`.nuxt/`, `.output/`, `.data/`, `.vercel/`, or local `.env` files.
