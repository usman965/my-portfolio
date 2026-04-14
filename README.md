# Portfolio — Usman Asghar

Personal portfolio: **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Copy lives in `lib/portfolio-data.ts`; UI is under `components/portfolio/`. The site is configured for **static export** (`output: "export"`).

**`public/`** only needs `favicon.svg`, `usman-asghar-resume.pdf`, and any assets you add yourself.

## Stack

- Next.js 14, React 18, TypeScript  
- Tailwind CSS, Framer Motion, Lucide icons  

## Features

- Responsive layout with sticky navigation  
- Hero, about, skills, experience, projects, contact  
- Resume download (`/usman-asghar-resume.pdf`)  
- Metadata in `app/layout.tsx`  

## Getting started

**Requirements:** Node.js 18+ and npm.

```bash
git clone https://github.com/usman965/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Static production build** (outputs `out/` — upload to any static host)

```bash
npm run build
```

Preview locally:

```bash
npx --yes serve out
```

## Customization

- **Copy and links:** `lib/portfolio-data.ts`  
- **Resume:** replace `public/usman-asghar-resume.pdf` and adjust `resumePath` / `resumeDownloadFilename` if needed  
- **Styling:** `app/globals.css`, `tailwind.config.ts`, `components/portfolio/`  
