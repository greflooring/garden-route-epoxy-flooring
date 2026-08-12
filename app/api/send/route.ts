import { Resend } from "resend";
import { QuoteRequestEmail } from "@/app/emails/QuoteRequestEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_PHOTOS = 5;

function cleanString(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { success: false, error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();

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

    const safePhotos = Array.isArray(body.photos)
      ? body.photos
          .filter(
            (photo: unknown) =>
              photo &&
              typeof photo === "object" &&
              typeof (photo as { url?: unknown }).url === "string"
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
      from: "Garden Route Epoxy Flooring <onboarding@resend.dev>",
      to: ["greflooring@gmail.com"],
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
