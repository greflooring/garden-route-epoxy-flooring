import { ArrowRight, MessageCircle } from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";

export default function FinalCTA() {
  return (
    <section className="bg-[#0b0b0b] py-32">
      <Container>

        <div className="rounded-[40px] border border-[#D4AF37]/20 bg-gradient-to-r from-[#111111] to-[#1a1a1a] p-12 text-center shadow-2xl md:p-20">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Ready To Get Started?
          </p>

          <h2 className="mt-6 text-5xl font-black text-white md:text-7xl">
            Transform Your Floor
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            Tell us what you&apos;re planning, where you&apos;re located and what
            the space needs to handle. We&apos;ll help you choose the right
            flooring solution and provide a clear, no-obligation quotation.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Button href="/#contact">
              Request Quote
              <ArrowRight
                className="ml-2"
                size={18}
              />
            </Button>

            <a
              href="https://wa.me/27622020131?text=Hi%20Garden%20Route%20Epoxy%20Flooring%2C%20I%27d%20like%20to%20discuss%20a%20flooring%20project."
              target="_blank"
              rel="noopener noreferrer"
              data-conversion="whatsapp"
              className="inline-flex items-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-8 py-4 font-semibold text-white transition hover:border-green-400 hover:bg-green-500/15"
            >
              <MessageCircle size={20} className="text-green-400" />
              WhatsApp Us
            </a>

          </div>

        </div>

      </Container>
    </section>
  );
}
