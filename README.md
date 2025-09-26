## Overview

Stanislav DariDai is a composer, sound designer, and guitarist. This project delivers his portfolio website with a dark, atmospheric visual style, animated interactions, and embedded audio showcases. It is built with the Next.js App Router and optimized for deployment on Vercel.

## Tech Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **UI:** Tailwind CSS 4, custom glassmorphism styling, responsive layouts
- **Animations:** Framer Motion
- **Assets:** SVG artwork in `public/images`, SoundCloud embeds, static data in `lib/data.ts`

## Key Features

- Rich hero section with layered gradients, animated CTAs, and quick navigation to contact options.
- About section featuring a portrait illustration, biography, and collaboration approach.
- Portfolio grid using `PortfolioCard` with hover animations, project metadata, and artwork.
- **SoundCloud integration**: the *Lost Mark OST* playlist is embedded on `/portfolio`.
- Pricing page with three service tiers and comparison highlights.
- Contact form backed by `/api/contact` (currently logging requests; ready for email integration).

## Project Structure

```
app/
	page.tsx              # Hero, about, works, services highlights
	portfolio/page.tsx    # Portfolio collections + SoundCloud playlist
	pricing/page.tsx      # Service packages
	contact/page.tsx      # Contact form with client-side validation
	api/contact/route.ts  # POST endpoint for contact submissions
components/
	animations.tsx        # Framer Motion utilities
	portfolio-card.tsx    # Animated project card component
lib/data.ts             # Portfolio + pricing data definitions
public/images/          # SVG artwork for cards and portrait
doc/                    # Vision, conventions, and task tracking
```

## Prerequisites

- Node.js ≥ 18.18 (recommended 20+)
- npm ≥ 9 (or any compatible package manager)

Install dependencies:

```bash
npm install
```

## Local Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to explore the site. Hot reload is enabled.

## Quality Checks

- **Linting:** `npm run lint`
- **Production build:** `npm run build`

Both commands should succeed without warnings or errors before deployment.

## Content Updates

- Portfolio items & pricing packages: edit the arrays in `lib/data.ts`.
- Artwork: replace/add SVGs or images under `public/images/` (update paths in `lib/data.ts`).
- Copy tweaks: adjust the relevant page in the `app/` directory.
- SoundCloud playlist: replace the `iframe` `src` in `app/portfolio/page.tsx`.

## Deployment (Vercel)

1. Push the repository to GitHub (e.g. `Kikimor-rec/daridari`).
2. In the Vercel dashboard, **New Project → Import** the GitHub repo.
3. Set environment variables if/when the contact API is wired to a service (currently none required).
4. Keep the default build command (`npm run build`) and output (`.next`).
5. Deploy. Vercel will handle previews on each PR and production on `main`.

### Contact API Integration

The contact route currently logs submissions to the server console. To connect a real email provider:

1. Add your provider SDK (e.g. Resend) and implement it in `app/api/contact/route.ts`.
2. Expose required secrets via Vercel project settings → Environment Variables.
3. Redeploy after updating the runtime code.

## Maintenance Checklist

- Verify `npm run build` succeeds before releasing.
- Keep Tailwind and Framer Motion versions aligned with Next.js.
- Update `doc/tasklist.md` after each iteration or deployment milestone.
- Run a quick smoke test on the live URL (hero, portfolio iframe playback, pricing, contact form).
