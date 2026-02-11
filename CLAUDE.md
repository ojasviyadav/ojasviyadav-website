# ojasviyadav-website

Personal website for Ojasvi Yadav (AI Engineer) — live at **ojasviyadav.com**.

## Project Structure

- `frontend/` — Next.js + Tailwind CSS app
- `infra/` — Infrastructure/deployment config
- `data/` — Content assets
  - `data/blogs/` — Blog posts
  - `data/pictures/` — Images
  - `data/resume/` — Resume files

## Tech Stack

- **Framework**: Next.js (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans + Geist Mono
- **Hosting**: Vercel (project name: `frontend`)
- **Domain**: ojasviyadav.com (registered on Namecheap, nameservers pointed to Vercel)
- **Repo**: github.com/ojasviyadav/ojasviyadav-website

## Development

```bash
cd frontend

# Local dev server (localhost:3000)
npm run dev

# Build check
npm run build
```

## Deploying

```bash
cd frontend

# Commit and push
git add <files>
git commit -m "your message"
git push

# Deploy to production
vercel --prod
```

Alternatively, connect the repo on Vercel dashboard for auto-deploys on push to `main`:
```bash
vercel git connect
```

## Key URLs

- **Live site**: https://ojasviyadav.com
- **Vercel dashboard**: vercel.com/ojasviyadavbhais-projects/frontend
- **GitHub repo**: github.com/ojasviyadav/ojasviyadav-website
- **Vercel preview URL**: frontend-umber-kappa-77.vercel.app

## DNS Setup

- Nameservers: `ns1.vercel-dns.com`, `ns2.vercel-dns.com` (set on Namecheap)
- A records: `@` and `www` → `76.76.21.21`
- SSL: auto-provisioned by Vercel

## Commit Guidelines

- Keep commit messages concise and to the point.
- Do not attribute Anthropic or Claude Code in commit messages.

## Design

When building or modifying frontend UI, use the `/frontend-design` skill for distinctive, production-grade interfaces with high design quality.

## Engineering Preferences

- DRY — flag repetition aggressively.
- Well-tested code is non-negotiable.
- Explicit over clever.
- Handle edge cases thoroughly.
- Avoid both under-engineering and over-engineering.
