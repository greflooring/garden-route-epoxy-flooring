import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import Container from "../ui/Container";
import Badge from "../ui/Badge";
import QuoteForm from "../forms/QuoteForm";

const steps = [
  {
    number: "01",
    title: "Tell Us About Your Project",
    text: "Complete the quote form with a few details about your flooring project.",
  },
  {
    number: "02",
    title: "We'll Contact You",
    text: "We'll discuss your requirements and recommend the best flooring system.",
  },
  {
    number: "03",
    title: "Receive Your Quote",
    text: "You'll receive a clear, no-obligation quotation with honest pricing.",
  },
  {
    number: "04",
    title: "Book Your Installation",
    text: "Once you're happy, we'll arrange a suitable installation date.",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden bg-black py-36"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#D4AF3715,transparent_60%)]" />

      <Container>

        <div className="relative text-center">

          <Badge>
            Free Quotations
          </Badge>

          <h2 className="mt-8 text-5xl font-black text-white md:text-7xl">
            Let&apos;s Create Your
            <span className="mt-2 block text-[#D4AF37]">
              Perfect Floor
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            Whether you&apos;re upgrading a garage, workshop, showroom,
            commercial building or entertainment area, we&apos;re here to
            help you choose the ideal flooring solution.
          </p>

        </div>

        {/* Main Layout */}

        <div className="mt-24 grid gap-12 xl:grid-cols-[1.15fr_0.85fr]">

          {/* Quote Form */}

          <div className="rounded-[36px] border border-white/10 bg-[#111111]/80 p-10 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.45)]">

            <h3 className="text-3xl font-black text-white">
              Request Your Free Quote
            </h3>

            <p className="mt-4 leading-8 text-gray-400">
              Complete the form below and we&apos;ll get back to you as soon
              as possible.
            </p>

            <div className="mt-10">

              <QuoteForm />

            </div>

            <div className="mt-12 rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-8">

              <h4 className="text-2xl font-black text-white">
                What Happens Next?
              </h4>

              <div className="mt-8 space-y-8">

                {steps.map((step) => (

                  <div
                    key={step.number}
                    className="flex gap-5"
                  >

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] font-black text-black">
                      {step.number}
                    </div>

                    <div>

                      <h5 className="text-lg font-bold text-white">
                        {step.title}
                      </h5>

                      <p className="mt-2 leading-7 text-gray-400">
                        {step.text}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>
                    {/* Contact Cards */}

          <div className="space-y-8">

            <div className="rounded-[36px] border border-white/10 bg-[#111111] p-10">

              <h3 className="text-3xl font-black text-white">
                Contact Information
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                Have questions? We&apos;d love to help you choose the right
                epoxy flooring solution for your home or business.
              </p>

              <div className="mt-10 space-y-8">

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
                    <Phone
                      size={24}
                      className="text-[#D4AF37]"
                    />
                  </div>

                  <div>

                    <h4 className="font-bold text-white">
                      Call Us
                    </h4>

                    <a
                      href="tel:+27610692503"
                      className="mt-2 block text-gray-400 transition hover:text-[#D4AF37]"
                    >
                      Conrad — 061 069 2503
                    </a>

                    <a
                      href="tel:+27678454862"
                      className="block text-gray-400 transition hover:text-[#D4AF37]"
                    >
                      Ryan — 067 845 4862
                    </a>

                  </div>

                </div>

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
                    <Mail
                      size={24}
                      className="text-[#D4AF37]"
                    />
                  </div>

                  <div>

                    <h4 className="font-bold text-white">
                      Email
                    </h4>

                    <a
                      href="mailto:greflooring@gmail.com"
                      className="mt-2 block text-gray-400 transition hover:text-[#D4AF37]"
                    >
                      greflooring@gmail.com
                    </a>

                  </div>

                </div>

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
                    <MapPin
                      size={24}
                      className="text-[#D4AF37]"
                    />
                  </div>

                  <div>

                    <h4 className="font-bold text-white">
                      Service Area
                    </h4>

                    <p className="mt-2 leading-7 text-gray-400">
                      George • Mossel Bay • Hartenbos • Groot Brakrivier •
                      Wilderness • Sedgefield • Knysna • Plettenberg Bay
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
                    <Clock3
                      size={24}
                      className="text-[#D4AF37]"
                    />
                  </div>

                  <div>

                    <h4 className="font-bold text-white">
                      Fast Responses
                    </h4>

                    <p className="mt-2 leading-7 text-gray-400">
                      Send your project details and photos through the form, call us, or WhatsApp us. We aim to respond as quickly as possible.
                    </p>

                  </div>

                </div>

              </div>

            </div>

            <div className="grid gap-4">
              <a
                href="https://wa.me/27610692503?text=Hi%20Garden%20Route%20Epoxy%20Flooring%2C%20I%27d%20like%20a%20free%20quote."
                target="_blank"
                rel="noopener noreferrer"
                data-conversion="whatsapp"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 px-6 py-5 font-bold text-white transition hover:-translate-y-0.5 hover:border-green-400 hover:bg-green-500/15"
              >
                <MessageCircle size={20} className="text-green-400" />
                WhatsApp Us
              </a>
            </div>

            <div className="rounded-[36px] border border-white/10 bg-[#111111] p-10">

              <h3 className="text-2xl font-black text-white">
                Why Choose Garden Route Epoxy Flooring?
              </h3>

              <div className="mt-8 space-y-5">

                {[
                  "Premium epoxy flooring systems",
                  "Professional surface preparation",
                  "Residential, commercial & industrial flooring",
                  "Honest advice & transparent quotations",
                  "Attention to detail on every installation",
                  "Proudly serving the Garden Route",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <CheckCircle2
                      size={20}
                      className="text-[#D4AF37]"
                    />

                    <span className="text-gray-300">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            <a
              href="https://wa.me/27610692503"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-[30px] border border-green-500/30 bg-gradient-to-r from-green-500/10 to-green-600/10 p-8 transition-all duration-300 hover:border-green-400 hover:bg-green-500/15"
            >

              <div>

                <h3 className="text-2xl font-black text-white">
                  Need A Quick Answer?
                </h3>

                <p className="mt-2 text-gray-300">
                  Chat with us directly on WhatsApp.
                </p>

              </div>

              <ArrowRight
                size={36}
                className="text-green-400 transition-transform duration-300 group-hover:translate-x-2"
              />

            </a>

          </div>

        </div>

      </Container>

    </section>
  );
}
