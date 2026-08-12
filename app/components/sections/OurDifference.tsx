"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Hammer,
  MapPin,
  BadgeCheck,
  Layers3,
} from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    title: "Premium Materials",
    description:
      "We use high-quality epoxy and stone carpet systems engineered for exceptional durability and long-term performance.",
  },
  {
    icon: Hammer,
    title: "Professional Preparation",
    description:
      "Diamond grinding and meticulous surface preparation ensure maximum adhesion and a flawless finish.",
  },
  {
    icon: Sparkles,
    title: "Attention To Detail",
    description:
      "Every edge, joint and finish is completed with precision for a seamless premium result.",
  },
  {
    icon: Layers3,
    title: "Built To Last",
    description:
      "Our flooring systems resist stains, chemicals, abrasion and heavy daily use while remaining easy to maintain.",
  },
  {
    icon: BadgeCheck,
    title: "Honest Service",
    description:
      "Clear communication, transparent quotations and reliable workmanship from consultation to completion.",
  },
  {
    icon: MapPin,
    title: "Garden Route Wide",
    description:
      "Proudly serving George, Mossel Bay, Hartenbos, Wilderness, Knysna and surrounding areas.",
  },
];

import QuoteLink from "@/app/components/ui/QuoteLink";

export default function OurDifference() {
  return (
    <section id="difference" className="relative overflow-hidden bg-[#080808] py-36">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#D4AF3720,transparent_60%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#D4AF370D,transparent_55%)]" />

      <div className="relative mx-auto grid max-w-[1450px] gap-24 px-8 lg:grid-cols-[0.9fr_1.1fr]">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="sticky top-36 h-fit"
        >

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Why Choose Us
          </p>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            Premium Floors.

            <span className="mt-2 block text-[#D4AF37]">
              Professionally Installed.
            </span>

          </h2>

          <p className="mt-10 max-w-xl text-xl leading-9 text-gray-400">
            We combine professional preparation, premium materials and
            meticulous workmanship to deliver epoxy and stone carpet
            flooring that looks exceptional and performs for years.
          </p>

          <QuoteLink
            
            className="group mt-12 inline-flex items-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E6C75F] px-8 py-4 font-bold uppercase tracking-wider text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(212,175,55,0.35)]"
          >
            Get Free Quote

            <ArrowRight
              size={18}
              className="ml-3 transition-transform duration-300 group-hover:translate-x-2"
            />
          </QuoteLink>

        </motion.div>

        {/* Right */}

        <div className="grid gap-8 md:grid-cols-2">

          {points.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                className="group rounded-[32px] border border-white/10 bg-[#111111] p-10 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:bg-[#151515]"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10">

                  <Icon
                    size={30}
                    className="text-[#D4AF37]"
                  />

                </div>

                <h3 className="mt-8 text-3xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
