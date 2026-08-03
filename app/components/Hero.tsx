"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Phone,
} from "lucide-react";

import Button from "./ui/Button";
import Container from "./ui/Container";
import Badge from "./ui/Badge";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-epoxy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark overlay */}

      <div className="absolute inset-0 bg-black/75" />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <Container className="relative z-10 flex min-h-screen items-center">

        <div className="max-w-3xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >
            <Badge>

              <Star
                size={15}
                className="mr-2 fill-current"
              />

              Garden Route's Premium Epoxy Flooring Specialists

            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: .2,
              duration: .8,
            }}
            className="mt-8 text-5xl md:text-7xl font-black leading-tight text-white"
          >
            Luxury Floors

            <span className="block text-[#D4AF37]">
              Built To Last.
            </span>

          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: .45,
              duration: .8,
            }}
            className="mt-8 max-w-2xl text-xl leading-9 text-gray-300"
          >
            Premium epoxy flooring for garages,
            workshops, commercial buildings and
            luxury homes throughout the Garden Route.

            Durable.
            Seamless.
            Beautiful.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: .7,
            }}
            className="mt-12 flex flex-wrap gap-5"
          >

            <Button href="#contact">
              Get Free Quote
            </Button>

            <Button
              href="#gallery"
              variant="secondary"
            >
              View Our Work
            </Button>

          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
            }}
            className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4"
          >

            {[
              "500+ Floors",
              "10+ Years",
              "Residential",
              "Commercial",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5"
              >
                <CheckCircle2
                  className="text-[#D4AF37] mb-3"
                  size={22}
                />

                <p className="font-semibold text-white">
                  {item}
                </p>
              </div>
            ))}

          </motion.div>

        </div>

        {/* Floating Contact Card */}

        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 1.2,
            duration: .8,
          }}
          className="hidden xl:block absolute right-10 bottom-20"
        >

          <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 w-80 shadow-2xl">

            <div className="flex items-center gap-3">

              <div className="rounded-full bg-[#D4AF37] p-3">

                <Phone
                  size={22}
                  className="text-black"
                />

              </div>

              <div>

                <p className="text-gray-400 text-sm">
                  Call Today
                </p>

                <h3 className="text-2xl font-bold text-white">
                  Quote
                </h3>

              </div>

            </div>

            <p className="mt-6 text-gray-300 leading-7">
              We install premium epoxy flooring
              throughout the Garden Route for
              residential and commercial clients.
            </p>

            <Button
              href="#contact"
            >
              Contact Us
              <ArrowRight className="ml-2" size={18} />
            </Button>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}