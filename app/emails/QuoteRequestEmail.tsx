import { EmailLayout } from "./EmailLayout";

interface QuoteRequestEmailProps {
  name: string;
  phone: string;
  email: string;
  town: string;
  service: string;
  size: string;
  message: string;
}

export function QuoteRequestEmail({
  name,
  phone,
  email,
  town,
  service,
  size,
  message,
}: QuoteRequestEmailProps) {
  return EmailLayout({
    title: "New Quote Request",

    children: `
      <h2 style="margin-top:0;color:#111;">Customer Details</h2>

      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:8px 0;"><strong>Name</strong></td>
          <td>${name}</td>
        </tr>

        <tr>
          <td style="padding:8px 0;"><strong>Phone</strong></td>
          <td><a href="tel:${phone}">${phone}</a></td>
        </tr>

        <tr>
          <td style="padding:8px 0;"><strong>Email</strong></td>
          <td><a href="mailto:${email}">${email}</a></td>
        </tr>

        <tr>
          <td style="padding:8px 0;"><strong>Town</strong></td>
          <td>${town}</td>
        </tr>
      </table>

      <hr style="margin:30px 0;" />

      <h2>Project Details</h2>

      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:8px 0;"><strong>Service</strong></td>
          <td>${service}</td>
        </tr>

        <tr>
          <td style="padding:8px 0;"><strong>Approximate Size</strong></td>
          <td>${size}</td>
        </tr>
      </table>

      <hr style="margin:30px 0;" />

      <h2>Customer Message</h2>

      <div style="
        background:#f7f7f7;
        padding:20px;
        border-radius:10px;
        white-space:pre-wrap;
      ">
${message}
      </div>
    `,
  });
}