"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Wrench,
  BadgeCheck,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import Container from "../ui/Container";
import Badge from "../ui/Badge";
import QuoteLink from "@/app/components/ui/QuoteLink";

const promises = [
  {
    icon: ShieldCheck,
    title: "Premium Materials",
    description:
      "We use premium epoxy systems chosen for their durability, performance and long-lasting finish.",
  },
  {
    icon: Wrench,
    title: "Proper Preparation",
    description:
      "Every great floor begins with professional surface preparation to ensure maximum adhesion and longevity.",
  },
  {
    icon: BadgeCheck,
    title: "Honest Advice",
    description:
      "We'll recommend the flooring solution that best suits your needs, not simply the most expensive option.",
  },
  {
    icon: Sparkles,
    title: "Attention To Detail",
    description:
      "From preparation to the final coat, every installation is completed with precision and pride.",
  },
  {
    icon: MessageCircle,
    title: "Reliable Communication",
    description:
      "Clear quotations, realistic timelines and professional communication from start to finish.",
  },
  {
    icon: ShieldCheck,
    title: "Built For The Garden Route",
    description:
      "Proudly serving homeowners and businesses throughout the Garden Route with premium epoxy flooring solutions.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#0B0B0B] py-32"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#D4AF3715,transparent_65%)]" />

      <Container>

        <div className="relative text-center">

          <Badge>
            Our Promise
          </Badge>

          <h2 className="mt-8 text-5xl font-black text-white md:text-7xl">
            Built On
            <span className="mt-2 block text-[#D4AF37]">
              Quality & Integrity
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            Every installation reflects our commitment to premium
            workmanship, honest advice and exceptional attention to
            detail. We believe lasting quality starts long before the
            final coat is applied.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {promises.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                }}
                className="group rounded-[32px] border border-white/10 bg-[#111111] p-10 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:bg-[#161616]"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 transition group-hover:bg-[#D4AF37]/20">

                    <Icon
                      size={30}
                      className="text-[#D4AF37]"
                    />

                  </div>

                  <span className="text-6xl font-black text-[#D4AF37]/10">
                    0{index + 1}
                  </span>

                </div>

                <h3 className="mt-8 text-2xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </div>

        <div className="mt-24 text-center">

          <h3 className="text-4xl font-black text-white">
            Ready To Upgrade Your Floor?
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Whether you&apos;re planning a residential garage, commercial
            showroom or industrial workspace, we&apos;d love to help you
            choose the perfect epoxy flooring solution.
          </p>

          <QuoteLink
            
            className="mt-10 inline-flex items-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E6C75F] px-10 py-5 font-bold uppercase tracking-wider text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(212,175,55,0.35)]"
          >
            Request Your Free Quote

            <ArrowRight
              size={18}
              className="ml-3"
            />

          </QuoteLink>

        </div>

      </Container>

    </section>
  );
}
