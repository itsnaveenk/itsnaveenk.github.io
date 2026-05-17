# Naveen Kumar — Portfolio

A backend-engineering-focused portfolio. Editorial monochrome aesthetic, built like a product page rather than a designer template.

🌐 **Live:** [itsnaveenk.github.io](https://itsnaveenk.github.io)

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
npm run build      # Static export to ./out
```

## Deploy

The repo deploys automatically to GitHub Pages on every push to `main` via the workflow at `.github/workflows/deploy.yml`. Because the repo is named `itsnaveenk.github.io`, it serves at the root of the user page.

## Customization

All content lives in `src/lib/data.ts`. Update personal info, skills, experience, and projects in one file. Replace `public/resume.pdf` with your real PDF.

## Keyboard Shortcuts

- `⌘K` / `Ctrl K` — Command palette
- `↑↓` — Navigate
- `↵` — Select
- `Esc` — Close
