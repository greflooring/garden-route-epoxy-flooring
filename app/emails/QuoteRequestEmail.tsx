import { EmailLayout } from "./EmailLayout";

interface QuotePhoto {
  url: string;
  publicId?: string;
  name?: string;
}

interface QuoteRequestEmailProps {
  name: string;
  phone: string;
  email: string;
  town: string;
  service: string;
  size: string;
  message: string;
  photos?: QuotePhoto[];
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function QuoteRequestEmail({ name, phone, email, town, service, size, message, photos = [] }: QuoteRequestEmailProps) {
  const photoSection = photos.length
    ? `
      <hr style="margin:30px 0;" />
      <h2>Project Photos</h2>
      <p style="color:#666;">${photos.length} photo${photos.length === 1 ? "" : "s"} uploaded with this quote request.</p>
      <div>
        ${photos.map((photo) => `
          <div style="margin:0 0 18px;">
            <a href="${escapeHtml(photo.url)}" target="_blank" rel="noopener noreferrer">
              <img src="${escapeHtml(photo.url)}" alt="${escapeHtml(photo.name || "Project photo")}" style="display:block;width:100%;max-width:620px;border-radius:12px;" />
            </a>
          </div>
        `).join("")}
      </div>
    `
    : "";

  return EmailLayout({
    title: "New Quote Request",
    children: `
      <h2 style="margin-top:0;color:#111;">Customer Details</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;"><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:8px 0;"><strong>Phone</strong></td><td><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>
        <tr><td style="padding:8px 0;"><strong>Email</strong></td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:8px 0;"><strong>Town</strong></td><td>${escapeHtml(town)}</td></tr>
      </table>
      <hr style="margin:30px 0;" />
      <h2>Project Details</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;"><strong>Service</strong></td><td>${escapeHtml(service)}</td></tr>
        <tr><td style="padding:8px 0;"><strong>Approximate Size</strong></td><td>${escapeHtml(size)}</td></tr>
      </table>
      <hr style="margin:30px 0;" />
      <h2>Customer Message</h2>
      <div style="background:#f7f7f7;padding:20px;border-radius:10px;white-space:pre-wrap;">${escapeHtml(message)}</div>
      ${photoSection}
    `,
  });
}
