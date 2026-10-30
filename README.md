# Rukvith Reddy Challa — Personal Portfolio

Personal portfolio site for [Rukvith Reddy Challa](https://github.com/rukvith21).

**Live site (free, public HTTPS):** https://cdn.jsdelivr.net/gh/rukvith21/personal-portfolio@0a75a25/index.html

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · static export

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `npm run dev`   | Local development server                |
| `npm run build` | Production static export (`out/`)       |
| `npm run start` | Not used for static hosting             |
| `npm run lint`  | Run ESLint                              |

## Deploy (free)

### jsDelivr CDN (live now — $0)

Static files are published on the `gh-pages` branch and served via jsDelivr (free CDN for GitHub). Commit-pinned URL avoids cache lag:

https://cdn.jsdelivr.net/gh/rukvith21/personal-portfolio@0a75a25/index.html

Rebuild/publish:

```bash
export ASSET_PREFIX='https://cdn.jsdelivr.net/gh/rukvith21/personal-portfolio@gh-pages'
export NEXT_PUBLIC_ASSET_PREFIX="$ASSET_PREFIX"
npm run build
# then publish the out/ directory to the gh-pages branch
```

### GitHub Pages (workflow ready)

`.github/workflows/deploy-pages.yml` builds with `GITHUB_PAGES=true` on pushes to `main`. Enabling Pages once in **Settings → Pages → Source: GitHub Actions** unlocks:

https://rukvith21.github.io/personal-portfolio/

### Vercel Hobby (optional free)

Import the repo at [vercel.com/new](https://vercel.com/new). Leave `GITHUB_PAGES` unset.

## Content notes

- Featured public project: [chakra-signs](https://github.com/rukvith21/chakra-signs)
- Contact CTA currently points to GitHub until email / LinkedIn are provided
