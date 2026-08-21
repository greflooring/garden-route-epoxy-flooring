"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Warehouse,
  Building2,
  Car,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import Badge from "../ui/Badge";
import Container from "../ui/Container";

const spaces = [
  {
    icon: Car,
    title: "Garages",
    text: "Transform your garage into a clean, durable and modern space that's easy to maintain.",
  },
  {
    icon: Home,
    title: "Residential Homes",
    text: "Stylish seamless flooring for patios, entertainment areas, kitchens and living spaces.",
  },
  {
    icon: Building2,
    title: "Commercial Spaces",
    text: "Professional flooring for offices, retail stores, restaurants and showrooms.",
  },
  {
    icon: Warehouse,
    title: "Industrial Facilities",
    text: "Heavy-duty epoxy flooring designed for workshops, warehouses and production areas.",
  },
  {
    icon: Sparkles,
    title: "Decorative Finishes",
    text: "Metallic epoxy, flake systems and stone carpet flooring for premium finishes.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#080808] py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#D4AF3715,transparent_65%)]" />

      <Container>

        <div className="relative text-center">

          <Badge>
            Flooring Solutions
          </Badge>

          <h2 className="mt-8 text-5xl font-black text-white md:text-7xl">
            The Right Floor
            <span className="mt-2 block text-[#D4AF37]">
              For Every Space
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            Every project is different. We help homeowners and businesses
            choose an epoxy flooring solution that matches their space,
            style and performance requirements.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {spaces.map((space, index) => {
            const Icon = space.icon;

            return (
              <motion.div
                key={space.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                }}
                className="group rounded-[32px] border border-white/10 bg-[#111111] p-10 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:bg-[#161616]"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 transition group-hover:bg-[#D4AF37]/20">

                  <Icon
                    size={30}
                    className="text-[#D4AF37]"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-black text-white">
                  {space.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {space.text}
                </p>

                <div className="mt-8">
                  <a
                    href="https://wa.me/27622020131"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-conversion="whatsapp"
                    className="text-sm font-semibold text-gray-300 transition hover:text-[#D4AF37]"
                  >
                    WhatsApp us
                  </a>
                </div>

              </motion.div>
            );
          })}

        </div>

        <div className="mt-24 text-center">

          <Link
            href="/services"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E6C75F] px-10 py-5 font-bold uppercase tracking-wider text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(212,175,55,0.35)]"
          >
            Explore All Services

            <ArrowRight
              size={18}
              className="ml-3"
            />

          </Link>

        </div>

      </Container>

    </section>
  );
}
