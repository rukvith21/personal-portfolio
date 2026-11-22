# Rukvith Reddy Challa — Personal Portfolio

Static personal portfolio for [Rukvith Reddy Challa](https://github.com/rukvith21).

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · `output: "export"` (static)

No database, API routes, auth, or backend. No env secrets required for deploy.

## Local development

```bash
git clone https://github.com/rukvith21/personal-portfolio.git
cd personal-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) on your machine.

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Local development server          |
| `npm run build` | Production static export (`out/`) |
| `npm run lint`  | Run ESLint                        |

## Deploy on Vercel (Hobby — free)

### 1) Commit and push to GitHub

```bash
cd personal-portfolio
git checkout main
git pull origin main
git add -A
git status
git commit -m "Ready static portfolio for Vercel Hobby deploy"
git push origin main
```

If you are on a feature branch instead of `main`:

```bash
git push -u origin HEAD
# then open a PR to main and merge it before (or while) connecting Vercel
```

### 2) Deploy on Vercel Hobby ($0)

**Option A — Dashboard (simplest)**

1. Open [https://vercel.com/new](https://vercel.com/new) and sign in with GitHub (Hobby / free).
2. Import **`rukvith21/personal-portfolio`**.
3. Leave Framework Preset as **Next.js**.
4. Do **not** set `GITHUB_PAGES` (leave env empty so there is no `/personal-portfolio` basePath).
5. Click **Deploy**.
6. Use the production URL Vercel shows (e.g. `https://personal-portfolio-….vercel.app`).

**Option B — CLI**

```bash
cd personal-portfolio
npm install
npm i -g vercel
vercel login
vercel
# accept defaults; link the GitHub repo when prompted
vercel --prod
```

Vercel will run `npm run build` and host the static export. No Postgres, env vars, or paid plan needed.

### GitHub Pages (optional free alternative)

Workflow: `.github/workflows/deploy-pages.yml` on `main`.

1. Repo → **Settings** → **Pages** → Source: **GitHub Actions** → Save.
2. Re-run **Deploy GitHub Pages** (or push to `main`).
3. Site: https://rukvith21.github.io/personal-portfolio/

## Content notes

- Featured public project: [chakra-signs](https://github.com/rukvith21/chakra-signs)
- Contact CTA currently points to GitHub until email / LinkedIn are provided
