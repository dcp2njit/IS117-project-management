# Minimal Systems Portfolio - Implementation Spec

## 1) Scope
Build a static portfolio site using Astro and Markdown content files, following the Minimal Systems direction. The site must implement the required pages, components, content model, and CI checks. No extra features beyond the plan.

## 2) Technology Stack
- Astro (static site)
- Markdown content
- Plain CSS (no CSS frameworks)
- GitHub repo
- Vercel hosting

## 3) Information Architecture
Routes:
- / (Home)
- /work/ (Work index)
- /work/[slug]/ (Case study)
- /about/
- /resume/
- /contact/
- /404/

Navigation: Work | About | Resume | Contact

## 4) Content Model (Markdown-First)
Each project file at src/content/projects/<slug>.md with frontmatter:

Required:
- title (string)
- slug (string)
- published (boolean)
- featured (boolean)
- role (string)
- timeframe (string)
- team (string)
- stack (string or array of strings; choose one format and enforce)
- summary (string)
- outcomes (string or array of strings; choose one format and enforce)
- claims (array of objects)
- heroImage (string path)

Optional:
- gallery (array of image paths)

Each claims[] object must include:
- claim (string)
- receiptLabel (string)
- receiptUrl (string URL)
- receiptType (string)

Validation rule: claims[].receiptUrl must be non-empty for every claim.

## 5) Minimum Project Requirements
- Exactly 3 published projects minimum.
- Each project must satisfy:
  - 3+ claims, each with receipt URL
  - 1+ measurable or observable outcome
  - All required frontmatter present
  - Images optimized and referenced correctly
  - No broken internal links

Project types required:
1) Systems Project (architecture + tradeoffs + code evidence)
2) Interface/UX Project (hierarchy + components + usability evidence)
3) Constraint/Professional Project (collaboration + QA + outcomes)

## 6) Components (Module Requirements)
Implement reusable modules:
- SiteHeader
- SiteFooter
- ProjectCard
- ProjectMeta
- ClaimList
- ReceiptLink
- Section
- ButtonLink

Constraint: Adding a project only requires a new Markdown file and assets. No manual template duplication.

## 7) Layout + Design Rules
Non-negotiables:
- Strict column grid alignment
- 4-5 total type sizes
- One accent color used only for interaction
- Consistent spacing tokens
- No decorative motion or parallax
- Claims must have receipts

## 8) Page Specifications + Acceptance Criteria

Home /
- H1 contains clear role statement
- Exactly 3 featured projects displayed
- Each project card shows: title, role, stack, outcome
- No layout shift on load
- Keyboard navigation works for all links and buttons

Work Index /work/
- All published projects appear
- Uses ProjectCard component consistently
- Sorting: deterministic (e.g., by featured then timeframe)

Case Study /work/[slug]/
Must render sections in this order:
1) Snapshot (role, timeframe, team, stack)
2) Problem
3) Constraints (3-6 bullets)
4) Approach (2-4 actions)
5) Claims + Receipts (minimum 3)
6) Outcomes (at least 1 measurable)
7) Reflection (max 3 bullets)

Acceptance:
- All required sections present
- Receipt links render for every claim
- Back to Work link present

About /about/
- 120-250 words
- Exactly 3 proof links (evidence URLs)
- No additional sections beyond content

Resume /resume/
- resume.pdf accessible and linked
- Last updated date visible

Contact /contact/
- mailto link
- GitHub and LinkedIn links

404 /404/
- Clear not found message
- Link back to Work or Home

## 9) Build + CI Validation
Implement validation checks (fail build if any):
- Build passes
- No broken internal links
- All required frontmatter present
- Each claim has receiptUrl
- Minimum 3 published projects
- Home has exactly 3 featured projects

## 10) Deployment Workflow
Local:
- npm install
- npm run dev

Build:
- npm run build
- npm run preview

Production acceptance:
- Home loads
- Work index loads
- At least one case study loads
- 404 works
- Resume downloads

## 11) Testable Acceptance Criteria (Site Level)
- Lighthouse targets:
  - Performance >= 90
  - Accessibility >= 95
- No CI validation failures
- All pages render without console errors

## 12) Non-Goals (Scope Guard)
Do NOT implement:
- Blog
- CMS
- Animations/parallax
- Complex page transitions
- Search/filtering
- Analytics dashboards
- Backend services
- Authentication
- Internationalization
