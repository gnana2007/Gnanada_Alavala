# Alavala Gnanada — Portfolio

A single-page developer portfolio built as a "workbench of things I've built," not a
generic SaaS-style template. Content is sourced entirely from the resume — nothing is
invented.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- lucide-react (icons)

## Requirements

- Node.js 18+ and npm

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  data/content.ts     — single source of truth for all copy (edit this to update the site)
  components/
    Nav.tsx            — fixed nav + status indicator
    Hero.tsx            — oversized name + auto-scrolling build log ticker
    Statement.tsx       — "I learn by building" statement
    Projects.tsx         — project archive (PlantWise, Keno, Recipora)
    ProjectDetail.tsx    — full-screen case-study overlay per project
    Featured.tsx         — 9 Hacks hackathon feature (2nd Runner-Up)
    Experience.tsx        — Next Tech Lab (NTL)
    Skills.tsx             — grouped tool shelf; hover a skill to highlight related projects
    Record.tsx              — achievements, certifications, education
    About.tsx                — currently / interests
    Contact.tsx               — email, GitHub, LinkedIn
    Footer.tsx
```

## Updating content

Everything text-based lives in `src/data/content.ts`. Add a new project, achievement,
or certification there and it will flow through the whole site automatically — you
shouldn't need to touch component files for routine updates.

## Notes / things to personalize

- Project GitHub links in `content.ts` currently point to the GitHub profile
  (`github.com/gnana2007`) as a placeholder — swap in each repo's real URL when ready.
- The favicon is a plain emoji; replace with a real icon in `index.html` if you want one.
- Colors, type, and spacing tokens live in `tailwind.config.js`.
