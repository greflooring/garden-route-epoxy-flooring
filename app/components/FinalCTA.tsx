"use client";

import { ArrowRight, Phone } from "lucide-react";

import Container from "./ui/Container";
import Button from "./ui/Button";

export default function FinalCTA() {
  return (
    <section className="bg-[#0b0b0b] py-32">
      <Container>

        <div className="rounded-[40px] border border-[#D4AF37]/20 bg-gradient-to-r from-[#111] to-[#1a1a1a] p-12 md:p-20 text-center shadow-2xl">

          <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-sm font-semibold">
            Ready To Get Started?
          </p>

          <h2 className="mt-6 text-5xl md:text-7xl font-black text-white">
            Transform Your Floor
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-xl leading-9 text-gray-400">
            Whether you're renovating your garage, upgrading a workshop,
            installing decorative flake flooring or creating a beautiful
            stone carpet patio, we're here to help.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Button href="#contact">
              Request Quote
              <ArrowRight className="ml-2" size={18} />
            </Button>

            <a
              href="tel:+27821234567"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 px-8 py-4 text-white hover:border-[#D4AF37] transition"
            >
              <Phone size={20} />
              Call Us Today
            </a>

          </div>

        </div>

      </Container>
    </section>
  );
}