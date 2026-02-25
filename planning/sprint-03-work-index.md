# Sprint 03 - Work Index and Cards

Goal
Render the Work index page with reusable project card components.

Scope (in)
- ProjectCard component
- ProjectMeta component
- Section and ButtonLink components
- /work/ index rendering all published projects
- Home page shows exactly 3 featured projects

Scope (out)
- Case study page template
- ClaimList and receipt rendering
- About/Resume/Contact pages

Tasks
- Build ProjectCard and ProjectMeta components
- Build Section and ButtonLink primitives
- Implement /work/ index page
- Implement featured projects list on /

Files to touch
- src/components/ProjectCard.astro
- src/components/ProjectMeta.astro
- src/components/Section.astro
- src/components/ButtonLink.astro
- src/pages/work/index.astro
- src/pages/index.astro

Acceptance criteria
- /work/ lists all published projects
- / shows exactly 3 featured projects
- Each card shows title, role, stack, outcome
- Card usage is consistent across / and /work/

Verification checklist
- Run npm run dev and open /
- Open /work/ and confirm list count

What not to do (scope creep)
- Do not add case study template
- Do not add filtering or search
- Do not change content schema

Completion evidence
- URL: [TlinkD](http://localhost:4321/)
- Screenshot: ![TBD](<../completed/evidence/Screenshot 2026-02-24 202733.png>)
- PR/commit: [TBD](https://github.com/dcp2njit/IS117-project-management/commit/393c4b929e8aad798b48b0bdf3f992d3cfa5ec22)
