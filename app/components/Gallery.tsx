"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";

import Container from "./ui/Container";
import Badge from "./ui/Badge";
import Card from "./ui/Card";

const filters = [
  "All",
  "Garage",
  "Metallic",
  "Flake",
  "Stone Carpet",
];

const projects = [
  {
    image: "/images/gallery1.jpg",
    title: "Luxury Garage Floor",
    location: "Mossel Bay",
    category: "Garage",
  },
  {
    image: "/images/gallery2.jpg",
    title: "Residential Garage",
    location: "George",
    category: "Garage",
  },
  {
    image: "/images/gallery3.jpg",
    title: "Metallic Epoxy",
    location: "Hartenbos",
    category: "Metallic",
  },
  {
    image: "/images/gallery4.jpg",
    title: "Commercial Floor",
    location: "George",
    category: "Flake",
  },
  {
    image: "/images/gallery5.jpg",
    title: "Workshop Floor",
    location: "Mossel Bay",
    category: "Flake",
  },
  {
    image: "/images/gallery6.jpg",
    title: "Stone Carpet Patio",
    location: "Wilderness",
    category: "Stone Carpet",
  },
];

export default function Gallery() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <section
      id="gallery"
      className="bg-[#090909] py-32"
    >
      <Container>

        <div className="text-center mb-20">

          <Badge>
            Our Portfolio
          </Badge>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-white">
            Recent
            <span className="text-[#D4AF37]">
              {" "}Projects
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-400">
            Explore some of our latest epoxy flooring installations across
            the Garden Route.
          </p>

        </div>

        {/* Filters */}

        <div className="flex flex-wrap justify-center gap-4 mb-16">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full px-6 py-3 transition-all ${
                active === filter
                  ? "bg-[#D4AF37] text-black font-semibold"
                  : "border border-white/10 text-gray-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              }`}
            >
              {filter}
            </button>

          ))}

        </div>

        {/* Gallery */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filtered.map((project) => (

            <Card key={project.title}>

              <div className="group relative overflow-hidden rounded-2xl">

                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={500}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              </div>

              <div className="mt-6">

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-gray-400">

                  <MapPin
                    size={17}
                    className="text-[#D4AF37]"
                  />

                  {project.location}

                </div>

                <button className="mt-8 inline-flex items-center gap-2 text-[#D4AF37] font-semibold hover:gap-4 transition-all">

                  View Project

                  <ArrowUpRight size={18} />

                </button>

              </div>

            </Card>

          ))}

        </div>

      </Container>

    </section>
  );
}