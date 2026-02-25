# Sprint 01 - Scaffold and Layout Shell

Goal
Establish the Astro project scaffold, global layout shell, and site-wide styling tokens.

Scope (in)
- Initialize Astro project structure
- Add global CSS with grid, spacing, and type scale tokens
- Create SiteHeader and SiteFooter components
- Base layout wrapper and 404 page
- Navigation links: Work, About, Resume, Contact

Scope (out)
- Project content
- Work index or case study pages
- Validation scripts or CI
- Visual polish beyond minimal shell

Tasks
- Create Astro project scaffold
- Add global CSS tokens and base styles
- Implement SiteHeader and SiteFooter components
- Implement BaseLayout and 404 page
- Add basic Home page shell (H1 placeholder)

Files to touch
- package.json
- astro.config.mjs
- src/layouts/BaseLayout.astro
- src/styles/global.css
- src/components/SiteHeader.astro
- src/components/SiteFooter.astro
- src/pages/index.astro
- src/pages/404.astro

Acceptance criteria
- Home page renders with header, footer, and H1 placeholder
- Navigation renders in header with correct links
- Global CSS defines grid, spacing, and type scale tokens
- 404 page renders with a link back to Work or Home

Verification checklist
- Run npm install
- Run npm run dev and load /
- Load /404/ and confirm link works

What not to do (scope creep)
- Do not add project cards or data
- Do not add animations or motion effects
- Do not add additional pages beyond shell

Completion evidence
- URL: TBD
- Screenshot: TBD
- PR/commit: TBD
