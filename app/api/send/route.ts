import { Resend } from "resend";
import { QuoteRequestEmail } from "@/app/emails/QuoteRequestEmail";

const MAX_PHOTOS = 5;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanString(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isProjectPhoto(url: string, publicId?: unknown) {
  try {
    return (
      new URL(url).hostname === "res.cloudinary.com" &&
      typeof publicId === "string" &&
      publicId.startsWith("garden-route-epoxy/quote-photos/")
    );
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { success: false, error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return Response.json(
        { success: false, error: "Invalid quote request." },
        { status: 400 }
      );
    }

    const name = cleanString(body.name, 120);
    const phone = cleanString(body.phone, 40);
    const email = cleanString(body.email, 160);
    const town = cleanString(body.town, 120);
    const service = cleanString(body.service, 120);
    const size = cleanString(body.size, 80);
    const message = cleanString(body.message, 3000);

    if (!name || !phone || !email || !town || !service || !size || !message) {
      return Response.json(
        { success: false, error: "Please complete all required quote fields." },
        { status: 400 }
      );
    }

    if (!EMAIL_PATTERN.test(email)) {
      return Response.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // This hidden field is intentionally left blank by real visitors.
    if (cleanString(body.website, 200)) {
      return Response.json({ success: true });
    }

    const safePhotos = Array.isArray(body.photos)
      ? body.photos
          .filter(
            (photo: unknown) =>
              photo &&
              typeof photo === "object" &&
              typeof (photo as { url?: unknown }).url === "string" &&
              isProjectPhoto(
                (photo as { url: string }).url,
                (photo as { publicId?: unknown }).publicId
              )
          )
          .slice(0, MAX_PHOTOS)
          .map((photo: { url: string; publicId?: unknown; name?: unknown }) => ({
            url: photo.url.slice(0, 2000),
            publicId:
              typeof photo.publicId === "string"
                ? photo.publicId.slice(0, 500)
                : undefined,
            name:
              typeof photo.name === "string"
                ? photo.name.slice(0, 200)
                : "Project photo",
          }))
      : [];

    const html = QuoteRequestEmail({
      name,
      phone,
      email,
      town,
      service,
      size,
      message,
      photos: safePhotos,
    });

    const { error } = await resend.emails.send({
      from:
        process.env.QUOTE_EMAIL_FROM ||
        "Garden Route Epoxy Flooring <quotes@gardenrouteepoxyflooring.co.za>",
      to: [process.env.QUOTE_EMAIL_TO || "greflooring@gmail.com"],
      replyTo: email,
      subject: `New Quote Request - ${name}`,
      html,
    });

    if (error) {
      console.error("Resend quote error:", error);
      return Response.json(
        { success: false, error: "We could not send your quote request. Please try again." },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Quote API error:", error);
    return Response.json(
      { success: false, error: "Something went wrong while sending your quote." },
      { status: 500 }
    );
  }
}
