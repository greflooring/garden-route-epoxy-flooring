"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Site Inspection",
    description:
      "We assess your floor, discuss your requirements and recommend the ideal flooring system.",
  },
  {
    number: "02",
    title: "Surface Preparation",
    description:
      "The concrete is diamond ground and prepared to create the perfect bonding surface.",
  },
  {
    number: "03",
    title: "Repairs",
    description:
      "Cracks, joints and imperfections are professionally repaired before coating begins.",
  },
  {
    number: "04",
    title: "Epoxy Application",
    description:
      "Premium epoxy is applied evenly to achieve a seamless, durable finish.",
  },
  {
    number: "05",
    title: "Protective Topcoat",
    description:
      "A high-performance protective coat provides UV resistance, durability and easy maintenance.",
  },
  {
    number: "06",
    title: "Final Inspection",
    description:
      "Every project is carefully inspected to ensure it meets our quality standards before handover.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#080808] py-32">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Our Process
          </p>

          <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
            Built To Last.
            <span className="block text-[#D4AF37]">
              Installed With Precision.
            </span>
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-400">
            Every floor follows the same professional process to deliver
            exceptional durability and a flawless finish.
          </p>

        </div>

        <div className="relative mt-24">

          <div className="absolute left-6 top-0 hidden h-full w-px bg-[#D4AF37]/20 lg:block" />

          <div className="space-y-12">

            {steps.map((step, index) => (

              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                className="relative flex gap-8"
              >

                <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D4AF37] bg-[#111111] font-bold text-[#D4AF37]">
                  {step.number}
                </div>

                <div className="rounded-[28px] border border-white/10 bg-[#111111] p-8 transition hover:border-[#D4AF37]/40">

                  <h3 className="text-2xl font-black text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-400">
                    {step.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}