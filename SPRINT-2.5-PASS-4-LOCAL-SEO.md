# Sprint 2.5 Pass 4 — Local SEO

Implemented from the confirmed Sprint 2.5 Pass 3 baseline.

## Changes
- Added local service-area landing pages for George, Mossel Bay, Hartenbos, Wilderness, Knysna, Plettenberg Bay, Great Brak River and Sedgefield.
- Added `/locations/*` pages to the XML sitemap.
- Added an Areas We Serve section to the homepage with internal links to each location page.
- Added an Areas link to the main navigation.
- Expanded LocalBusiness structured-data areaServed coverage.
- Corrected the LocalBusiness schema email to `info@gardenrouteepoxy.co.za` to match the company data.
- Improved homepage and Services page descriptions with natural Garden Route location language.
- Added canonical and Open Graph metadata to location pages.
- Added breadcrumb structured data to location pages.

## Protected functionality
Cloudinary photo uploads, quote submission, Resend email delivery and existing conversion flows were not intentionally changed.

## Validation note
A full `npm ci`/production build could not be completed in this environment because the configured package registry returned HTTP 404 for the transitive package `zod-validation-error@4.0.2`. No claim of a successful production build is made.
