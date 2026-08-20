"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

import QuoteLink from "@/app/components/ui/QuoteLink";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* Background */}

      <div className="absolute inset-0">

        <Image
          src="/images/hero-epoxy.png"
          alt="Premium Resin Flooring"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />

      </div>

      {/* Overlays */}

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent" />

      {/* Content */}

      <div className="relative z-20 mx-auto flex min-h-screen max-w-[1450px] items-start px-8 pb-44 pt-32 sm:pt-36 lg:items-center lg:py-40 xl:py-32">

        <div className="max-w-3xl">

          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center rounded-full border border-[#D4AF37]/40 bg-black/30 px-5 py-2 backdrop-blur-md"
          >

            <span className="mr-2 h-2 w-2 rounded-full bg-[#D4AF37]" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
              Premium Resin Flooring
            </span>

          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.8,
            }}
            className="mt-8 text-5xl font-black leading-[1.05] text-white sm:text-6xl md:text-8xl"
          >

            Premium Resin Flooring

            <span className="mt-3 block text-[#D4AF37]">
              Built To Last.
            </span>

            <span className="block text-white">
              Designed To Impress.
            </span>

          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.35,
              duration: 0.8,
            }}
            className="mt-8 max-w-xl text-xl leading-9 text-gray-300"
          >

            Premium flooring solutions for garages,
            homes, workshops, showrooms,
            commercial buildings and industrial
            facilities throughout the Garden Route.

          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.55,
            }}
            className="mt-12 flex flex-wrap gap-5"
          >

            <QuoteLink
              className="inline-flex items-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E6C75F] px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(212,175,55,0.35)]"
            >
              Get Free Quote

              <ArrowRight
                className="ml-3"
                size={18}
              />

            </QuoteLink>

            <Link
              href="#services"
              className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Explore Services
            </Link>

          </motion.div>

          {/* Trust Features */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
            className="mt-14 flex flex-wrap gap-8"
          >

            {[
              "Premium Resin Systems",
              "Expert Surface Preparation",
              "Free Professional Quotations",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-3"
              >

                <CheckCircle2
                  size={20}
                  className="text-[#D4AF37]"
                />

                <span className="text-base font-medium text-white">
                  {item}
                </span>

              </div>

            ))}

          </motion.div>

        </div>
                {/* Right Card */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.7,
            duration: 0.9,
          }}
          className="hidden flex-1 justify-end xl:flex"
        >

          <div className="relative w-[520px]">

            <div className="rounded-[32px] border border-white/10 bg-black/25 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
                THE GARDEN ROUTE DIFFERENCE
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight text-white">
                Built To Last.
                <span className="mt-2 block text-[#D4AF37]">
                  Designed To Impress.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Every floor is installed using premium resin systems,
                meticulous surface preparation and professional
                installation techniques for a durable, seamless finish
                that adds lasting value to your property.
              </p>

              <div className="mt-10 space-y-5">

                {[
                  "Premium Resin Flooring Systems",
                  "Expert Surface Preparation",
                  "Residential, Commercial & Industrial",
                  "Garden Route Wide Service",
                ].map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-4"
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37]/15">

                      <CheckCircle2
                        size={20}
                        className="text-[#D4AF37]"
                      />

                    </div>

                    <span className="text-lg text-white">
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </motion.div>

      </div>

      {/* Bottom Strip */}

      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/70 backdrop-blur-xl">

        <div className="mx-auto grid max-w-[1450px] grid-cols-2 gap-8 px-8 py-8 text-center md:grid-cols-5">

          {[
            "Premium Materials",
            "Residential",
            "Commercial",
            "Industrial",
            "Free Quotes",
          ].map((item) => (

            <div key={item}>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.5, 1, 0.5],
          y: [0, 8, 0],
        }}
        transition={{
          delay: 1.5,
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-32 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center xl:flex"
      >

        <span className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
          Scroll
        </span>

        <ChevronDown
          size={24}
          className="text-[#D4AF37]"
        />

      </motion.div>

    </section>
  );
}
