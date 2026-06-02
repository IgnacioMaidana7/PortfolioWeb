# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js, localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

There are no tests in this project.

## Environment Variables

The contact form requires these variables (create a `.env.local`):

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

## Architecture

Single-page portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

**Single source of truth for all content:** [`src/data/portfolio.ts`](src/data/portfolio.ts) — edit personal info, projects, skills, and education here. Components consume this data directly; nothing is hardcoded in the components themselves.

**Page structure** ([`src/app/page.tsx`](src/app/page.tsx)): A single route rendering sections in order — Navbar → Hero → About → TechStack → Projects → Timeline → Contact → Footer.

**Component organization:**
- `src/components/layout/` — Navbar and Footer (structural wrappers)
- `src/components/sections/` — One file per page section; each section is a standalone `<section>` element
- `src/components/ui/` — Reusable primitives (ProjectCard, ProjectModal, ImageGallery, SectionHeader, etc.)
- All subdirectories have an `index.ts` barrel file

**Theme system:** Dark/light mode via a `dark` class on `<html>`, controlled by [`ThemeToggle.tsx`](src/components/ui/ThemeToggle.tsx). Colors are CSS variables defined in [`globals.css`](src/app/globals.css) and mapped into Tailwind via `@theme inline`. Always defaults to dark mode. The `data-modal-open` attribute on `<body>` triggers a blur effect on the navbar when a project modal is open.

**Tailwind v4:** Uses `@import "tailwindcss"` and `@theme inline` (not a `tailwind.config.js`). Custom semantic colors (`bg-background`, `text-text-primary`, `bg-surface`, `text-text-secondary`, `border-border`, `bg-primary`) map to CSS variables and work in both themes.

**Animations:** Framer Motion `useInView` (with `once: true, margin: "-100px"`) drives scroll-triggered entry animations in each section. Project cards use `layoutId` for shared element transitions into the modal.
