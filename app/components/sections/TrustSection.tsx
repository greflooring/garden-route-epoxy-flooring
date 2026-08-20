"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Container from "../ui/Container";
import Badge from "../ui/Badge";

const commitments = [
  {
    icon: ShieldCheck,
    title: "Premium Systems",
    text: "We focus on quality epoxy and stone carpet systems selected for the demands of each space.",
  },
  {
    icon: Wrench,
    title: "Preparation Matters",
    text: "Professional surface preparation is treated as a critical part of the installation, not an afterthought.",
  },
  {
    icon: BadgeCheck,
    title: "Clear Quotations",
    text: "You get straightforward advice and a clear, no-obligation quotation before you decide.",
  },
  {
    icon: MessageCircle,
    title: "Reliable Communication",
    text: "From the first enquiry through installation, we keep the process clear and easy to understand.",
  },
];

export default function TrustSection() {
  return (
    <section
      id="trust"
      className="relative overflow-hidden border-y border-white/5 bg-[#0B0B0B] py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF3712,transparent_65%)]" />

      <Container>
        <div className="relative text-center">
          <Badge>Why You Can Trust Us</Badge>

          <h2 className="mt-7 text-4xl font-black text-white md:text-6xl">
            A Better Floor Starts With
            <span className="mt-2 block text-[#D4AF37]">
              A Better Process
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
            We believe trust is earned before the first coat goes down — through
            honest advice, proper preparation, quality systems and dependable
            communication.
          </p>
        </div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {commitments.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="rounded-[28px] border border-white/10 bg-[#111111] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/35"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10">
                  <Icon size={27} className="text-[#D4AF37]" />
                </div>

                <h3 className="mt-6 text-xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="relative mt-10 rounded-[28px] border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-6 py-5 text-center md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Premium materials · Professional preparation · Clear quotations · Garden Route service
          </p>
        </div>
      </Container>
    </section>
  );
}
