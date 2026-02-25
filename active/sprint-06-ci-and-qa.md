# Sprint 06 - CI Validation and QA

Goal
Add build-time checks and deployment readiness verification.

Scope (in)
- Validate internal links
- Validate required frontmatter and claims
- Ensure build passes locally
- Document deployment checklist

Scope (out)
- Additional features
- Analytics or monitoring

Tasks
- Add link checking script or validation step
- Add content validation to build pipeline
- Document production acceptance checklist

Files to touch
- package.json
- scripts/validate-links.js (if needed)
- scripts/validate-content.js (if needed)
- README.md

Acceptance criteria
- npm run build fails on invalid content or broken links
- Production acceptance checklist documented

Verification checklist
- Run npm run build
- Intentionally break a link and confirm failure

What not to do (scope creep)
- Do not add analytics or backend services
- Do not add tests beyond validation scripts

Completion evidence
- URL: TBD
- Screenshot: ![TBD](<../completed/evidence/Screenshot 2026-02-24 214321.png>)
- PR/commit: [TBD](https://github.com/dcp2njit/IS117-project-management/commit/899c6300ff6c00d858edf1bb8bf09d9b67b9fbd3)
