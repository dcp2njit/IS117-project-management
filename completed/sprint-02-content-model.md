# Sprint 02 - Content Model and Validation

Goal
Implement the Markdown content model with validation for required frontmatter and claims.

Scope (in)
- Define content collection schema for projects
- Add validation for claims with receiptUrl
- Create 3 project markdown stubs with required frontmatter

Scope (out)
- Visual components and layouts
- Work index or case study rendering
- CI pipeline wiring

Tasks
- Create content collection config for projects
- Implement frontmatter validation rules
- Add three project markdown files (stub content)

Files to touch
- src/content/config.ts
- src/content/projects/<slug>.md (3 files)

Acceptance criteria
- Build fails if required frontmatter is missing
- Build fails if any claim lacks receiptUrl
- Three project markdown files exist with valid frontmatter

Verification checklist
- Run npm run build and confirm schema validation
- Manually remove a required field to confirm failure

What not to do (scope creep)
- Do not build page templates
- Do not add images or gallery assets yet

Completion evidence
- URL: TBD
- Screenshot: TBD
- PR/commit: TBD
