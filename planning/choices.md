# Choices

## Design Direction
Minimal Systems

Principles:
- Grid discipline
- Strict typographic hierarchy
- Controlled color usage (one accent max)
- Component consistency
- Every claim must have a receipt

## Content Model
Markdown-first content with project files at:
- src/content/projects/<slug>.md

Required frontmatter:
- title
- slug
- published
- featured
- role
- timeframe
- team
- stack
- summary
- outcomes
- claims[]
- heroImage

Each claim requires:
- claim
- receiptLabel
- receiptUrl
- receiptType

Rule: No claim exists without receiptUrl.

## Tech + Hosting
- Astro (static)
- Markdown content
- Plain CSS
- GitHub repository
- Vercel hosting

## Definition of Done
Project level:
- Minimum 3 claims
- Each claim has receipt
- At least 1 measurable outcome
- All images optimized
- No broken links
- Passes CI validation

Site level:
- 3 complete projects published
- All required pages implemented
- CI passes
- Production deploy stable
- Lighthouse targets: Performance >= 90, Accessibility >= 95
