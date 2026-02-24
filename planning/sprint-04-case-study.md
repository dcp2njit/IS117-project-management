# Sprint 04 - Case Study Template

Goal
Implement the case study template and claim/receipt rendering.

Scope (in)
- /work/[slug]/ dynamic page
- ProjectMeta display on detail page
- ClaimList and ReceiptLink components
- Required section layout in the specified order

Scope (out)
- About/Resume/Contact pages
- CI link checking
- Image optimization

Tasks
- Create dynamic route for project case studies
- Implement ClaimList and ReceiptLink components
- Render all required sections in order
- Add Back to Work link

Files to touch
- src/pages/work/[slug].astro
- src/components/ClaimList.astro
- src/components/ReceiptLink.astro
- src/components/ProjectMeta.astro

Acceptance criteria
- Each case study shows Snapshot, Problem, Constraints, Approach, Claims, Outcomes, Reflection
- Each claim shows a receipt link
- Back to Work link present

Verification checklist
- Run npm run dev
- Open one /work/<slug>/ page and verify sections

What not to do (scope creep)
- Do not add new content fields
- Do not add animations
- Do not add gallery features

Completion evidence
- URL: TBD
- Screenshot: TBD
- PR/commit: TBD
