# Sprint 2.5 Pass 2 — Conversion Engine

## Included
- Mobile sticky conversion bar with Call, WhatsApp and Quote actions.
- Floating WhatsApp button retained for desktop and hidden on mobile to avoid CTA overlap.
- Quote, phone and WhatsApp conversion actions marked with `data-conversion` attributes for future analytics wiring.
- Stronger quote + WhatsApp actions added to homepage service cards.
- Testimonials section anchor corrected to `#testimonials`.
- Service and site/company contact data aligned to the working 061 069 2503 number.
- Existing Cloudinary/Resend quote flow left intact.

## Protected functionality
- Quote form submission
- Cloudinary photo uploads
- Five-photo limit
- Photo removal/replacement
- Resend email delivery
- Quote success flow

## Validation
- `npx tsc --noEmit` passes.
- Full `next build` could not run in this environment because Next.js 16.2.12 attempted to download its SWC binary and the available package mirror returned HTTP 404. This is an environment/package-download limitation, not a TypeScript error.
