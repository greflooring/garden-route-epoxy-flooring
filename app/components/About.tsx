"use client";

import Image from "next/image";
import {
  Award,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Container from "./ui/Container";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black py-32"
    >
      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image */}

          <div className="relative">

            <div className="overflow-hidden rounded-3xl border border-white/10">

              <Image
                src="/images/gallery2.jpg"
                alt="Garden Route Epoxy Flooring"
                width={900}
                height={700}
                className="w-full h-[600px] object-cover"
              />

            </div>

            <div className="absolute -bottom-8 -right-8 rounded-3xl bg-[#D4AF37] text-black p-8 shadow-2xl">

              <h3 className="text-5xl font-black">
                500+
              </h3>

              <p className="font-semibold">
                Floors Installed
              </p>

            </div>

          </div>

          {/* Content */}

          <div>

            <Badge>
              About Us
            </Badge>

            <h2 className="mt-6 text-5xl md:text-6xl font-black text-white leading-tight">
              Premium Epoxy Flooring
              <span className="block text-[#D4AF37]">
                Built To Last
              </span>
            </h2>

            <p className="mt-8 text-xl leading-9 text-gray-400">
              At Garden Route Epoxy Flooring, we specialise in creating
              durable, seamless flooring solutions for residential,
              commercial and industrial spaces throughout the Garden Route.

              Our focus is simple:
              exceptional workmanship,
              premium materials,
              and outstanding customer service.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-12">

              <div className="flex gap-4">

                <Award
                  className="text-[#D4AF37]"
                  size={30}
                />

                <div>

                  <h3 className="font-bold text-white">
                    Professional Quality
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Premium products and proven installation methods.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <ShieldCheck
                  className="text-[#D4AF37]"
                  size={30}
                />

                <div>

                  <h3 className="font-bold text-white">
                    Built To Last
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Durable systems designed for everyday use.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Sparkles
                  className="text-[#D4AF37]"
                  size={30}
                />

                <div>

                  <h3 className="font-bold text-white">
                    Luxury Finish
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Beautiful finishes that enhance any space.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <CheckCircle2
                  className="text-[#D4AF37]"
                  size={30}
                />

                <div>

                  <h3 className="font-bold text-white">
                    Customer Focused
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Honest advice, reliable service and quality workmanship.
                  </p>

                </div>

              </div>

            </div>

            <div className="mt-14">

              <Button href="#contact">
                Request A Quote
              </Button>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}