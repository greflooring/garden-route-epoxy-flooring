import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { locations } from "@/app/data/locations";
import Container from "../ui/Container";
import Badge from "../ui/Badge";

export default function AreasWeServe() {
  return (
    <section id="areas" className="border-t border-white/10 bg-[#0b0b0b] py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Garden Route Service Area</Badge>
          <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">
            Epoxy Flooring Across the
            <span className="mt-2 block text-[#D4AF37]">Garden Route</span>
          </h2>
          <p className="mt-7 text-lg leading-8 text-gray-400">
            We provide residential, commercial and industrial flooring solutions
            across the Garden Route. Choose your area to see the flooring
            services available locally.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#111111] px-5 py-4 transition hover:-translate-y-1 hover:border-[#D4AF37]/40"
            >
              <span className="flex items-center gap-3 font-semibold text-gray-200">
                <MapPin size={18} className="text-[#D4AF37]" />
                {location.name}
              </span>
              <ArrowRight
                size={17}
                className="text-gray-500 transition group-hover:translate-x-1 group-hover:text-[#D4AF37]"
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
