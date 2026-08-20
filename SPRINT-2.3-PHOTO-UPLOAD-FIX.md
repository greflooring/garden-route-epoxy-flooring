# Sprint 2.3 — Photo Upload Fix

This version replaces the browser-to-Cloudinary signed upload flow with a server-side `/api/upload` route.

## Why

The previous flow generated a Cloudinary signature in the browser and then uploaded directly to Cloudinary. The customer-facing error only said `Upload failed for <filename>`, which made configuration/API failures difficult to diagnose.

The new flow is:

Browser → `/api/upload` → Cloudinary

The Cloudinary API secret stays server-side.

## Required `.env.local`

```env
RESEND_API_KEY=your_resend_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Restart `npm run dev` after changing `.env.local`.

## Photo rules

- Maximum 5 photos per quote
- JPG, PNG, WEBP
- Maximum 5 MB per photo
- Each successful upload is added to the preview immediately
- If one upload fails, already-uploaded photos remain available
- The customer sees the actual server-side upload error where possible

## Testing

1. Open the quote form.
2. Select one small JPG/PNG/WEBP photo.
3. Confirm it appears in the preview.
4. Select additional photos up to 5.
5. Remove a photo and confirm the preview updates.
6. Submit the quote.
7. Confirm the quote email contains clickable photo links/images.

Do not put `CLOUDINARY_API_SECRET` in client-side code.
