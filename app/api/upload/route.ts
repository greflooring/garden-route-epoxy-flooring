import { Resend } from "resend";
import { QuoteRequestEmail } from "@/app/emails/QuoteRequestEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      town,
      service,
      size,
      message,
    } = body;

    const html = QuoteRequestEmail({
      name,
      phone,
      email,
      town,
      service,
      size,
      message,
    });

    const { error } = await resend.emails.send({
      from: "Garden Route Epoxy Flooring <onboarding@resend.dev>",
      to: ["greflooring@gmail.com"],
      replyTo: email,
      subject: `New Quote Request - ${name}`,
      html,
    });

    if (error) {
      console.error(error);

      return Response.json(
        { success: false, error },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}