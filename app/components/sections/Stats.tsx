"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Wrench,
  MapPin,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Premium Materials",
    description:
      "We use high-quality epoxy systems designed for long-term durability and performance.",
  },
  {
    icon: Wrench,
    title: "Professional Preparation",
    description:
      "Every floor is professionally prepared to ensure maximum adhesion and a flawless finish.",
  },
  {
    icon: Sparkles,
    title: "Premium Finish",
    description:
      "Every installation is completed with attention to detail for a seamless, modern appearance.",
  },
  {
    icon: MapPin,
    title: "Garden Route Wide",
    description:
      "Proudly serving George, Mossel Bay, Hartenbos, Wilderness, Knysna and surrounding areas.",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-[#0B0B0B] py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                className="rounded-[30px] border border-white/10 bg-[#111111] p-10 text-center transition hover:border-[#D4AF37]/40"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">

                  <Icon
                    size={30}
                    className="text-[#D4AF37]"
                  />

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

      </div>

    </section>
  );
}