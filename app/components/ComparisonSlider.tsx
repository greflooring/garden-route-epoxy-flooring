"use client";

import ReactCompareImage from "react-compare-image";
import { MapPin, Clock3, Layers3 } from "lucide-react";

import Container from "./ui/Container";
import Badge from "./ui/Badge";

export default function ComparisonSlider() {
  return (
    <section className="bg-[#090909] py-32">

      <Container>

        <div className="text-center mb-20">

          <Badge>
            Before & After
          </Badge>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-white">
            See The
            <span className="text-[#D4AF37]"> Transformation</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-400">
            Every floor begins as ordinary concrete and ends as a premium,
            seamless epoxy finish designed to last for years.
          </p>

        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">

          {/* Comparison */}

          <div className="lg:col-span-3">

            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

              <ReactCompareImage
                leftImage="/images/before.jpg"
                rightImage="/images/after.jpg"
              />

            </div>

          </div>

          {/* Project Details */}

          <div className="lg:col-span-2">

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">

              <Badge>
                Featured Project
              </Badge>

              <h3 className="mt-6 text-3xl font-black text-white">
                Residential Garage
              </h3>

              <p className="mt-5 text-gray-400 leading-8">
                A complete transformation from a worn concrete slab to a
                durable, high-gloss epoxy floor designed for everyday use.
              </p>

              <div className="space-y-6 mt-10">

                <div className="flex items-center gap-4">

                  <MapPin
                    className="text-[#D4AF37]"
                    size={22}
                  />

                  <div>

                    <p className="text-gray-500 text-sm">
                      Location
                    </p>

                    <p className="text-white font-semibold">
                      Mossel Bay
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <Layers3
                    className="text-[#D4AF37]"
                    size={22}
                  />

                  <div>

                    <p className="text-gray-500 text-sm">
                      System
                    </p>

                    <p className="text-white font-semibold">
                      Decorative Flake
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <Clock3
                    className="text-[#D4AF37]"
                    size={22}
                  />

                  <div>

                    <p className="text-gray-500 text-sm">
                      Completion Time
                    </p>

                    <p className="text-white font-semibold">
                      2 Days
                    </p>

                  </div>

                </div>

              </div>

              <div className="mt-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 p-6">

                <h4 className="text-[#D4AF37] font-bold">
                  Why This System?
                </h4>

                <p className="mt-3 text-gray-300 leading-7">
                  Decorative flake epoxy provides excellent durability,
                  improved slip resistance, and a beautiful finish that's
                  easy to maintain.
                </p>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}