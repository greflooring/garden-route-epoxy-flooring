import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808]">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Company */}

          <div>

            {/* Replace with your logo when ready */}

            <Link href="/" className="inline-block">

              <Image
                src="/images/logo/logo-white.png"
                alt="Garden Route Epoxy Flooring"
                width={260}
                height={70}
                className="h-14 w-auto"
                priority
              />

            </Link>

            <p className="mt-8 leading-8 text-gray-400">
              Premium epoxy flooring specialists serving homes,
              garages, workshops and commercial buildings throughout
              the Garden Route with durable, seamless flooring systems.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-7 text-xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {[
                ["Home", "/"],
                ["Services", "/services"],
                ["Why Choose Us", "/#why-us"],
                ["Testimonials", "/#testimonials"],
                ["Reviews", "/#reviews"],
                ["Contact", "/#contact"],
              ].map(([title, href]) => (

                <li key={title}>

                  <Link
                    href={href}
                    className="text-gray-400 transition hover:text-[#D4AF37]"
                  >
                    {title}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-7 text-xl font-bold text-white">
              Flooring Solutions
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>Garage Epoxy Flooring</li>

              <li>Commercial Epoxy Flooring</li>

              <li>Industrial Epoxy Flooring</li>

              <li>Decorative &amp; Metallic Epoxy</li>

              <li>Flake Flooring Systems</li>

              <li>Stone Carpet Flooring</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-7 text-xl font-bold text-white">
              Contact
            </h3>

            <div className="space-y-6">

              <a
                href="tel:+27610692503"
                className="flex items-center gap-4 text-gray-400 transition hover:text-[#D4AF37]"
              >

                <Phone
                  size={20}
                  className="text-[#D4AF37]"
                />

                <span>061 069 2503</span>

              </a>

              <a
                href="mailto:greflooring@gmail.com"
                className="flex items-center gap-4 text-gray-400 transition hover:text-[#D4AF37]"
              >

                <Mail
                  size={20}
                  className="text-[#D4AF37]"
                />

                <span>greflooring@gmail.com</span>

              </a>

              <div className="flex items-center gap-4 text-gray-400">

                <MapPin
                  size={20}
                  className="text-[#D4AF37]"
                />

                <span>Garden Route, South Africa</span>

              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  data-conversion="quote"
                  className="inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-5 py-3 font-semibold text-black transition hover:bg-[#E6C35C]"
                >
                  Get Free Quote
                </Link>

                <a
                  href="https://wa.me/27622020131?text=Hi%20Garden%20Route%20Epoxy%20Flooring%2C%20I%27d%20like%20to%20ask%20about%20a%20flooring%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-conversion="whatsapp"
                  className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/30 px-5 py-3 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
                >

                <MessageCircle size={18} />

                  WhatsApp Us

                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-6 text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Garden Route Epoxy Flooring.
            All rights reserved.
          </p>

          <p>
            Proudly serving the Garden Route, South Africa 🇿🇦
          </p>

        </div>

      </div>

    </footer>
  );
}
