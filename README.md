# Garden Route Epoxy Flooring

Production website for `gardenrouteepoxyflooring.co.za`, built with Next.js and deployed on Vercel.

## Local checks

```bash
npm ci
npm run lint
npm run build
```

Copy `.env.example` to `.env.local` for local API testing. Never commit `.env.local` or paste secret values into issues, pull requests, or chat.

## Required Vercel environment variables

- `RESEND_API_KEY`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

Optional overrides:

- `QUOTE_EMAIL_FROM` — defaults to `Garden Route Epoxy Flooring <quotes@gardenrouteepoxyflooring.co.za>`
- `QUOTE_EMAIL_TO` — defaults to `greflooring@gmail.com`

Set secrets for Production and Preview in Vercel. The sending address requires `gardenrouteepoxyflooring.co.za` to be verified in Resend.

## Launch checklist

1. Run lint and the production build.
2. Confirm the Resend domain is verified and the rotated API key is active.
3. Confirm the rotated Cloudinary key pair is active.
4. Deploy the production branch to Vercel.
5. On the temporary Vercel URL, submit a real quote with one small test photo and confirm receipt.
6. Add `gardenrouteepoxyflooring.co.za` and `www.gardenrouteepoxyflooring.co.za` in Vercel, select one canonical domain, and apply the DNS records Vercel supplies.
7. Re-test the quote, photo upload, email reply-to, phone, WhatsApp, sitemap, and robots endpoints on the final domain.
8. Only after the live tests pass, revoke the old Resend and Cloudinary credentials.
