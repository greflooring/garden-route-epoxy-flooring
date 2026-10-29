import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";
import Badge from "@/app/components/ui/Badge";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Garden Route Epoxy Flooring enquiries and website use.",
};

const sections = [
  {
    title: "1. Who this policy applies to",
    body: [
      "This policy explains how Garden Route Epoxy Flooring handles personal information collected through this website, quote requests, telephone calls, email and WhatsApp enquiries.",
      "The website is intended for customers and prospective customers in South Africa, particularly across the Garden Route.",
    ],
  },
  {
    title: "2. Information we may collect",
    body: [
      "When you request a quotation, we may collect your name, telephone number, email address, town or area, flooring requirements, approximate floor area, project description and photographs that you choose to upload.",
      "We may also receive information that you include when you contact us by telephone, email or WhatsApp. We do not ask you to upload identity documents, payment-card details or other sensitive personal documents through the quote form.",
    ],
  },
  {
    title: "3. Why we use your information",
    body: [
      "We use this information to respond to enquiries, assess the likely flooring requirements, prepare or discuss quotations, communicate about a potential project and provide requested services.",
      "We may use limited technical information needed to operate, secure and diagnose the website. We do not sell personal information to third parties.",
    ],
  },
  {
    title: "4. Enquiries and uploaded photographs",
    body: [
      "Information submitted through the quote form is sent to the quoting team for the purpose described above. Optional photographs are used to help understand the project and may be stored with the enquiry while it is being handled.",
      "Please only upload photographs that you are permitted to share and remove people, identity documents, access codes and other unrelated personal information before uploading.",
    ],
  },
  {
    title: "5. Service providers",
    body: [
      "The website and its supporting services may use third-party providers for hosting, analytics, email delivery and image storage. Those providers process information only as needed to provide their services, subject to their own terms and privacy notices.",
      "We do not control third-party privacy practices. Their current details should be reviewed before submitting information if you require more detail about a particular service.",
    ],
  },
  {
    title: "6. Retention and security",
    body: [
      "We keep personal information only for as long as reasonably necessary for the purpose for which it was collected, to follow up an enquiry, provide services, resolve disputes, keep appropriate business records or meet legal obligations.",
      "We use reasonable technical and organisational safeguards. No internet transmission or storage system can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "7. Your choices and requests",
    body: [
      "You may ask what personal information we hold about you, request correction of inaccurate information, ask us to delete information where appropriate, or object to a particular use. Some requests may be limited by legal or legitimate business requirements.",
      "To make a privacy request, email greflooring@gmail.com and include enough information for us to identify the relevant enquiry. We may need to verify your identity before responding.",
    ],
  },
  {
    title: "8. Changes to this policy",
    body: [
      "We may update this policy when the website, enquiry workflow or legal requirements change. The latest version will be published on this page with its updated date.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black py-28 text-white">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Badge>Privacy &amp; Information</Badge>
          <h1 className="mt-8 text-5xl font-black tracking-tight md:text-7xl">
            Privacy <span className="text-[#D4AF37]">Policy</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Garden Route Epoxy Flooring respects the information you choose to share with us. This policy explains what we collect, why we use it and how to contact us about it.
          </p>
          <p className="mt-5 text-sm text-gray-500">Last updated: 29 October 2026</p>

          <div className="mt-16 space-y-10">
            {sections.map((section) => (
              <section key={section.title} className="rounded-3xl border border-white/10 bg-[#111111] p-7 md:p-10">
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                <div className="mt-5 space-y-4 text-base leading-8 text-gray-300">
                  {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-[#D4AF37]/25 bg-[#D4AF37]/5 p-7 text-gray-300 md:p-10">
            <h2 className="text-2xl font-bold text-white">Contact about privacy</h2>
            <p className="mt-4 leading-8">Email <a className="text-[#D4AF37] underline" href="mailto:greflooring@gmail.com">greflooring@gmail.com</a> with your request or question.</p>
          </div>
        </div>
      </Container>
    </main>
  );
}
