"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

import Container from "./ui/Container";
import Badge from "./ui/Badge";
import Card from "./ui/Card";

const services = [
  {
    title: "Garage Floors",
    image: "/images/gallery1.jpg",
    description:
      "Transform your garage into a clean, durable and easy-to-maintain space with a premium epoxy finish.",
    features: [
      "Chemical Resistant",
      "Easy To Clean",
      "High Gloss Finish",
    ],
  },
  {
    title: "Metallic Epoxy",
    image: "/images/gallery3.jpg",
    description:
      "Luxury metallic epoxy floors with unique flowing designs that create a truly one-of-a-kind appearance.",
    features: [
      "Luxury Finish",
      "Custom Colours",
      "Seamless Surface",
    ],
  },
  {
    title: "Flake Systems",
    image: "/images/gallery5.jpg",
    description:
      "Decorative flake flooring designed for garages, patios and workshops with outstanding durability.",
    features: [
      "Slip Resistant",
      "UV Stable",
      "Long Lasting",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#090909] py-32"
    >
      <Container>

        <div className="text-center mb-20">

          <Badge>
            Our Services
          </Badge>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-white">
            Flooring Solutions
            <span className="block text-[#D4AF37]">
              Built Around Your Needs
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-400">
            Whether it's a residential garage or a large commercial facility,
            we install premium epoxy flooring designed for durability,
            performance and style.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {services.map((service) => (

            <Card key={service.title}>

              <div className="overflow-hidden rounded-2xl">

                <Image
                  src={service.image}
                  alt={service.title}
                  width={700}
                  height={450}
                  className="h-64 w-full object-cover transition duration-700 hover:scale-110"
                />

              </div>

              <h3 className="mt-8 text-3xl font-black text-white">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                {service.description}
              </p>

              <div className="mt-8 space-y-3">

                {service.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle
                      size={18}
                      className="text-[#D4AF37]"
                    />

                    <span className="text-gray-300">
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

              <button
                className="mt-10 inline-flex items-center gap-2 font-semibold text-[#D4AF37] hover:gap-4 transition-all"
              >
                Learn More

                <ArrowRight size={18} />

              </button>

            </Card>

          ))}

        </div>

      </Container>
    </section>
  );
}