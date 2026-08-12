"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  Building2,
  Sparkles,
  MapPin,
  BadgeCheck,
} from "lucide-react";

import Container from "../ui/Container";
import Badge from "../ui/Badge";
import Card from "../ui/Card";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Epoxy Systems",
    text: "We use premium-quality epoxy systems selected for exceptional durability, performance and long-lasting finishes.",
  },
  {
    icon: Wrench,
    title: "Professional Surface Preparation",
    text: "Every successful floor starts with proper preparation to ensure maximum adhesion and a flawless result.",
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    text: "From garages and homes to warehouses, workshops and commercial buildings, we install flooring built to last.",
  },
  {
    icon: Sparkles,
    title: "Modern Seamless Finishes",
    text: "Create beautiful, easy-to-clean floors that enhance the appearance and value of your property.",
  },
  {
    icon: BadgeCheck,
    title: "Free Quotations",
    text: "Professional advice and no-obligation quotations tailored to your project and flooring requirements.",
  },
  {
    icon: MapPin,
    title: "Garden Route Wide",
    text: "Proudly serving George, Mossel Bay, Hartenbos, Wilderness, Knysna, Plettenberg Bay and surrounding areas.",
  },
];

export default function GoogleReviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-[#090909] py-32">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#D4AF3715,transparent_60%)]" />

      <Container>

        <div className="relative text-center">

          <Badge>
            Why Choose Us
          </Badge>

          <h2 className="mt-8 text-5xl font-black text-white md:text-7xl">
            Built On
            <span className="mt-2 block text-[#D4AF37]">
              Quality & Integrity
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            Our reputation is built on exceptional workmanship, honest advice and
            premium flooring systems. Every project receives the same attention
            to detail from preparation to the final finish.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
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
              >

                <Card className="group h-full rounded-[32px] border border-white/10 bg-[#111111] p-10 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:bg-[#161616]">

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
                    {feature.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-400">
                    {feature.text}
                  </p>

                </Card>

              </motion.div>
            );
          })}

        </div>

      </Container>

    </section>
  );
}