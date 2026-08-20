# Sprint 2.4 — Quote Experience & Conversion Polish

This sprint builds on the verified Sprint 2.3 photo-upload flow.

## Customer experience
- Clear success screen after a quote is sent.
- Prevents double submissions while sending.
- Shows `Sending Your Quote…` during submission.
- Shows upload progress and photo count.
- Mobile-friendly photo upload area and larger remove controls.
- Accessible status and error messages.
- Native browser validation remains enabled for required fields.
- WhatsApp follow-up CTA after a successful quote.
- `Send Another Quote` resets the form cleanly.

## Photo handling
- JPG, PNG and WEBP only.
- 5MB maximum per image.
- Maximum 5 photos per quote.
- Uploaded photos are removed from Cloudinary when the user removes them from the form.
- Quote submission still sends only the remaining selected photo URLs.

## Server-side protection
- Quote fields are trimmed and length-limited before email generation.
- Required fields are validated server-side.
- Photo metadata is capped and sanitized before entering the email.
- Cloudinary delete requests are restricted to the quote-photo folder.
- API secrets remain server-side.

## End-to-end test checklist
1. Open `http://localhost:3000/#contact`.
2. Submit with an empty required field and confirm the browser blocks submission.
3. Upload one photo and confirm preview/progress.
4. Upload up to five photos.
5. Remove one photo and confirm the remaining previews stay intact.
6. Submit a real test quote with two photos.
7. Confirm the quote email arrives.
8. Confirm the success screen appears.
9. Confirm WhatsApp and Send Another Quote buttons appear.
10. Click Send Another Quote and confirm the form is empty and ready again.

## Environment
Keep the working `.env.local` values from Sprint 2.3. Never commit or share the Cloudinary API secret.
