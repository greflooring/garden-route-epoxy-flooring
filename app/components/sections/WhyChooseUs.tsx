"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Wrench,
  Building2,
  Sparkles,
  MapPin,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Flooring Systems",
    text: "Professional epoxy and stone carpet systems selected for exceptional durability, performance and appearance.",
  },
  {
    icon: Wrench,
    title: "Professional Surface Preparation",
    text: "Every floor is carefully prepared using professional grinding equipment to ensure maximum adhesion.",
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    text: "Beautiful flooring solutions for homes, garages, workshops, warehouses, offices and retail spaces.",
  },
  {
    icon: Sparkles,
    title: "Modern Low-Maintenance Finish",
    text: "Seamless, hygienic and easy to clean while delivering a premium modern appearance.",
  },
  {
    icon: BadgeCheck,
    title: "Free Professional Quotations",
    text: "Honest advice, transparent pricing and no-obligation quotations throughout the Garden Route.",
  },
  {
    icon: MapPin,
    title: "Garden Route Specialists",
    text: "Serving George, Mossel Bay, Hartenbos, Wilderness, Knysna and surrounding towns.",
  },
];

import QuoteLink from "@/app/components/ui/QuoteLink";

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#0B0B0B] py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#D4AF3715,transparent_60%)]" />

      <div className="relative mx-auto grid max-w-[1450px] gap-24 px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Why Homeowners Choose Us
          </p>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            Premium Craftsmanship.

            <span className="mt-2 block text-[#D4AF37]">
              Exceptional Results.
            </span>
          </h2>

          <p className="mt-10 max-w-xl text-xl leading-9 text-gray-400">
            Every installation is completed with precision, premium materials
            and meticulous attention to detail, creating flooring that enhances
            both the appearance and performance of your property.
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

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-7"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                className="group flex items-start gap-6 rounded-[30px] border border-white/10 bg-[#111111] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:bg-[#161616]"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 transition-all duration-300 group-hover:bg-[#D4AF37]/20">
                  <Icon
                    size={30}
                    className="text-[#D4AF37]"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-8 text-gray-400">
                    {feature.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
