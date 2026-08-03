import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Received:", body);

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "greflooring@gmail.com",
      subject: "Garden Route Epoxy Test",
      html: `
        <h2>New Quote</h2>

        <p><b>Name:</b> ${body.name}</p>
        <p><b>Phone:</b> ${body.phone}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Service:</b> ${body.service}</p>
        <p><b>Size:</b> ${body.size}</p>
        <p><b>Message:</b></p>

        <p>${body.message}</p>
      `,
    });

    console.log("RESEND RESPONSE:", response);

    return Response.json(response);

  } catch (error) {

    console.error(error);

    return Response.json(
      {
        success: false,
        error,
      },
      {
        status: 500,
      }
    );
  }
}