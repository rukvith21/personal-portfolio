# Rukvith Reddy Challa — Personal Portfolio

Personal portfolio site for [Rukvith Reddy Challa](https://github.com/rukvith21).

**Live site (free GitHub Pages):** https://rukvith21.github.io/personal-portfolio/

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · static export

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Local development server                 |
| `npm run build` | Production static export (`out/`)        |
| `npm run start` | Not used for Pages (static `out/` only)  |
| `npm run lint`  | Run ESLint                               |

## Deploy (free)

### GitHub Pages (active)

Pushes to `main` run `.github/workflows/deploy-pages.yml`, which builds with `GITHUB_PAGES=true` (sets `basePath` / `assetPrefix` to `/personal-portfolio`) and deploys the `out/` folder.

Public URL: https://rukvith21.github.io/personal-portfolio/

### Vercel (optional free Hobby)

1. Import this repository in [Vercel](https://vercel.com/new).
2. Framework preset: **Next.js**. Leave `GITHUB_PAGES` unset so there is no `basePath`.
3. Deploy. Hobby tier is free for personal use.

## Content notes

- Featured public project: [chakra-signs](https://github.com/rukvith21/chakra-signs)
- Contact CTA currently points to GitHub until email / LinkedIn are provided
