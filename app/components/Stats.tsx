"use client";

import { CheckCircle2, Award, Users, MapPin } from "lucide-react";
import Container from "./ui/Container";
import FadeIn from "./ui/FadeIn";

const stats = [
  {
    icon: CheckCircle2,
    number: "500+",
    label: "Projects Completed",
  },
  {
    icon: Award,
    number: "10+",
    label: "Years Experience",
  },
  {
    icon: Users,
    number: "100%",
    label: "Customer Satisfaction",
  },
  {
    icon: MapPin,
    number: "Garden Route",
    label: "Coverage",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#090909] py-24">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <FadeIn key={stat.label} delay={index * 0.1}>
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center hover:border-[#D4AF37]/40 transition-all duration-300">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37]/10">
                    <Icon className="text-[#D4AF37]" size={28} />
                  </div>

                  <h3 className="text-4xl font-black text-white">
                    {stat.number}
                  </h3>

                  <p className="mt-3 text-gray-400">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}