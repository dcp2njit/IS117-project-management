# Sprint 05 - About, Resume, Contact

Goal
Implement About, Resume, and Contact pages to spec.

Scope (in)
- /about/ content page
- /resume/ with resume.pdf link and last updated date
- /contact/ with mailto, GitHub, LinkedIn links

Scope (out)
- CI pipeline and link validation
- Performance tuning

Tasks
- Create About page with 120-250 words and 3 proof links
- Add resume.pdf asset and Resume page
- Add Contact page with required links

Files to touch
- src/pages/about.astro
- src/pages/resume.astro
- src/pages/contact.astro
- public/resume.pdf

Acceptance criteria
- About page meets word count and proof links
- Resume page links to resume.pdf and shows last updated date
- Contact page includes mailto, GitHub, LinkedIn

Verification checklist
- Run npm run dev and open /about/
- Open /resume/ and click resume.pdf
- Open /contact/ and verify all links

What not to do (scope creep)
- Do not add new navigation items
- Do not add extra sections beyond requirements

Completion evidence
- URL: http://localhost:4321/contact/
- Screenshot: ![about](<../completed/evidence/Screenshot 2026-02-24 211753.png>)
![resume](<../completed/evidence/Screenshot 2026-02-24 211813.png>)
![contact](<../completed/evidence/Screenshot 2026-02-24 211823.png>)
- PR/commit: TBD
