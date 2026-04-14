# Portfolio — Usman Asghar

Personal portfolio site: a single-page experience built with **Next.js 14** (App Router), **TypeScript**, and **Tailwind CSS**. Content lives in `lib/portfolio-data.ts`; UI sections are under `components/portfolio/`. Includes a downloadable PDF resume from `public/`.

## Stack

- Next.js 14, React 18, TypeScript  
- Tailwind CSS, Framer Motion  
- next-themes (dark UI)  
- Optional: Sentry (see `sentry.*.config.ts` if you enable error reporting)

## Features

- Responsive layout with sticky navigation  
- Hero, about, skills, experience, projects, and contact sections  
- Resume download (`/usman-asghar-resume.pdf`)  
- Metadata and Open Graph tags in `app/layout.tsx`

## Getting started

**Requirements:** Node.js 18+ and npm.

```bash
git clone https://github.com/usman965/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Production build**

```bash
npm run build
npm start
```

## Customization

- **Copy and links:** edit `lib/portfolio-data.ts`.  
- **Resume:** replace `public/usman-asghar-resume.pdf` and update `resumePath` / `resumeDownloadFilename` in `portfolio-data` if filenames change.  
- **Styling:** `app/globals.css`, `tailwind.config.ts`, and component classes in `components/portfolio/`.
