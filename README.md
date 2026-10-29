# Rukvith Reddy Challa — Personal Portfolio

Personal portfolio site for [Rukvith Reddy Challa](https://github.com/rukvith21).

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Local development server   |
| `npm run build` | Production build           |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint                 |

## Deploy

### Vercel (recommended)

1. Import this repository in [Vercel](https://vercel.com/new).
2. Framework preset: **Next.js** (defaults are fine).
3. Deploy. Each push to `main` updates production.

Or from the CLI:

```bash
npx vercel
```

### GitHub Pages (static export)

This app uses Next.js image optimization and App Router features that fit Vercel best. For GitHub Pages:

1. Set `output: "export"` in `next.config.ts`.
2. If the site is served from a project path, set `basePath` / `assetPrefix` to `/personal-portfolio`.
3. Build with `npm run build` and publish the `out/` directory via GitHub Actions or the Pages UI.

## Content notes

- Featured public project: [chakra-signs](https://github.com/rukvith21/chakra-signs)
- Contact CTA currently points to GitHub until email / LinkedIn are provided
