"use client";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import Container from "./ui/Container";
import Badge from "./ui/Badge";
import QuoteForm from "./QuoteForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black py-32"
    >
      <Container>

        <div className="text-center mb-20">

          <Badge>
            Request A Quote
          </Badge>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-white">
            Let's Build
            <span className="text-[#D4AF37]">
              {" "}Your Perfect Floor
            </span>
          </h2>

          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
            Whether it's a garage, workshop, commercial building or stone carpet installation,
            we'd love to discuss your project.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Quote Form */}

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">

            <QuoteForm />

          </div>

          {/* Contact Info */}

          <div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 space-y-10">

              <div className="flex gap-5">

                <Phone className="text-[#D4AF37]" />

                <div>

                  <h3 className="font-bold text-white">
                    Phone
                  </h3>

                  <p className="text-gray-400">
                    Conrad: 061 069 2503
                  </p>

                  <p className="text-gray-400">
                    Ryan: 067 845 4862
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <Mail className="text-[#D4AF37]" />

                <div>

                  <h3 className="font-bold text-white">
                    Email
                  </h3>

                  <p className="text-gray-400">
                    greflooring@gmail.com
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <MapPin className="text-[#D4AF37]" />

                <div>

                  <h3 className="font-bold text-white">
                    Service Area
                  </h3>

                  <p className="text-gray-400">
                    George • Mossel Bay • Hartenbos • Wilderness • Knysna
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <MessageCircle className="text-[#D4AF37]" />

                <div>

                  <h3 className="font-bold text-white">
                    WhatsApp
                  </h3>

                  <a
                    href="https://wa.me/27610692503"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline"
                  >
                    Message us on WhatsApp
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}