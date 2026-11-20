# Chanwoo Oh — Personal Academic Website

Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons

English is the default language (EN/KR toggle in the header). Light/dark mode follows the system and can be switched manually. All content lives in `data/` — no backend needed.

## Run locally

Requires Node.js 18.18 or newer (20 LTS recommended).

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## Edit your content

| What | Where |
|---|---|
| Name, email, affiliation, slogan, bio, education, skills, languages | `data/profile.ts` |
| LinkedIn / GitHub | `data/profile.ts` → `links` (replace `null` with the URL; buttons appear automatically) |
| Profile photo | Put the file at `public/images/profile.jpg`, then set `photo: '/images/profile.jpg'` |
| CV PDF | Put the file at `public/cv.pdf`, then set `cvAvailable: true` (the download button activates) |
| Research interests & vision | `data/research.ts` |
| Projects & case studies | `data/projects.ts` |
| International experiences | `data/experiences.ts` |
| Publications | `data/publications.ts` (section stays hidden while the list is empty) |
| Menu labels & UI text | `data/ui.ts` |

Every text field has `en` and `ko` versions.

### Projects

- Add images/videos to `public/images/projects/<slug>/` and list them in the project's `media` array.
- Set `cover` to an image path to replace the abstract cover illustration.
- Case-study sections (`overview`, `problem`, `motivation`, `design`, `implementation`, `architecture`, `results`, `challenges`, `future`, `reflection`) are only shown when they have content.
- Add `links.github` / `links.demo` only when the link exists.
- Statuses `concept` and `planned` are listed separately under "Concepts & Upcoming".

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com/new and import the repository (framework is detected automatically).
3. In **Settings → Environment Variables**, add `NEXT_PUBLIC_SITE_URL` with your final URL (e.g. `https://chanwoo-oh.vercel.app`). This is used for the sitemap, robots.txt, canonical URLs and social previews.
4. Deploy. Every push to `main` redeploys the site.

Or with the CLI:

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

## Included

- Pages: `/`, `/about`, `/research`, `/projects`, `/projects/[slug]`, `/experience`, `/cv`, `/contact`
- SEO: page titles and descriptions, Open Graph & Twitter images, `sitemap.xml`, `robots.txt`, favicon
- Accessibility: semantic HTML, skip link, keyboard navigation, focus styles, alt text, reduced-motion support
