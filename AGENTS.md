# AGENTS.md

Guidance for coding agents working on natwelch.com.

## Project Overview

Personal homepage and website for Nat Welch built with Next.js, content-collections, Tailwind CSS, and daisyUI.

## Commands

Use pnpm:
- `pnpm dev` — Run ESLint and start development server on port 8080
- `pnpm build` — Build content-collections output and Next.js production build
- `pnpm start` — Run production server on `$PORT`
- `pnpm lint` — Run ESLint with auto-fix
- `pnpm clean` — Remove node_modules, `.next`, and `.content-collections` build caches

## Architecture & Layout

- `src/app/` — Route handlers and pages.
- `src/components/` — React UI components.
- `wiki/` — Markdown and MDX content sources processed by content-collections.
- `content-collections.ts` — Content schema and metadata definitions.

## Conventions

- TypeScript for application code.
- Conventional Commits with lowercase subjects.
- Ensure `pnpm lint` and `pnpm build` pass cleanly before submitting PRs.
