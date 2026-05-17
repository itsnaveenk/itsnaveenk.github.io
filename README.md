# Naveen Kumar — Portfolio

A backend-engineering-focused portfolio. Editorial monochrome aesthetic, built like a product page rather than a designer template.

🌐 **Live:** [itsnaveenk.github.io/portfolio](https://itsnaveenk.github.io/portfolio)

## Stack

- **Next.js 15** App Router (static export)
- **React 18 + TypeScript**
- **Tailwind CSS** with custom design tokens
- **Framer Motion** for choreographed animations
- **Lucide React** icons
- **Geist + Instrument Serif** typography pairing

## Sections

Hero · About · Skills · Experience · Projects · Engineering Highlights · System Design · GitHub Activity · Resume · Contact

## Quick Start

```bash
npm install --legacy-peer-deps
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Build

```bash
# Local production build
npm run build

# Static export for GitHub Pages
GITHUB_PAGES=true npm run build
# Output goes to ./out
```

## Deploy

This repo deploys automatically to GitHub Pages on every push to `main` via the workflow at `.github/workflows/deploy.yml`.

To set up Pages on a fresh repo:

1. Push to `main`
2. Go to **Settings → Pages**
3. Set **Source** to **GitHub Actions**

## Customization

All content lives in `src/lib/data.ts`. Update personal info, skills, experience, and projects in one file. Replace `public/resume.pdf` with your real PDF.

## Structure

```
src/
├── app/                  # App Router (layout, page, globals)
├── components/
│   ├── sections/         # Hero, About, Skills, Experience, Projects, etc.
│   ├── ui/               # Button, Badge, Section, Marquee
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── command-palette.tsx
│   ├── project-visual.tsx
│   └── scroll-progress.tsx
└── lib/
    ├── data.ts           # All content
    └── utils.ts
public/
├── resume.pdf
├── robots.txt
└── sitemap.xml
```

## Keyboard Shortcuts

- `⌘K` / `Ctrl K` — Command palette
- `↑↓` — Navigate
- `↵` — Select
- `Esc` — Close
