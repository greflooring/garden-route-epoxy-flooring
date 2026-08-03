"use client";

import {
  ShieldCheck,
  Sparkles,
  Clock3,
  Wrench,
  CheckCircle2,
  Award,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Materials",
    description:
      "Only high-performance epoxy systems designed for durability and long-lasting beauty.",
  },
  {
    icon: Sparkles,
    title: "Luxury Finish",
    description:
      "Beautiful seamless floors with exceptional gloss and easy maintenance.",
  },
  {
    icon: Clock3,
    title: "Fast Installation",
    description:
      "Efficient project completion without compromising on quality.",
  },
  {
    icon: Wrench,
    title: "Surface Preparation",
    description:
      "Professional diamond grinding and repairs for maximum adhesion.",
  },
  {
    icon: CheckCircle2,
    title: "Guaranteed Quality",
    description:
      "Every installation is completed with attention to detail and pride.",
  },
  {
    icon: Award,
    title: "Trusted Service",
    description:
      "Serving homeowners and businesses across the Garden Route.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-neutral-950 py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="inline-block rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-green-400 text-sm font-semibold tracking-widest uppercase">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-white">
            Built to Last.
            <br />
            Designed to Impress.
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
            We combine premium products, meticulous preparation and expert
            craftsmanship to create epoxy flooring that looks exceptional and
            performs for years.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-white/[0.05]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 text-green-400 transition-transform duration-300 group-hover:scale-110">
                <Icon size={30} />
              </div>

              <h3 className="text-2xl font-bold text-white">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}