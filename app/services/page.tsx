import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "@/app/data/services";
import PageHero from "@/app/components/sections/PageHero";

export const metadata = {
  title: "Epoxy Flooring Services | Garden Route Epoxy Flooring",
  description:
    "Premium epoxy and stone carpet flooring for residential, commercial and industrial spaces across George, Mossel Bay, Hartenbos and the wider Garden Route." ,
};

export default function ServicesPage() {
  return (
    <main className="bg-transparent text-white">

      {/* Hero */}

      <PageHero
        eyebrow="Premium Flooring Solutions"
        title={
          <>
            Flooring Designed
            <span className="mt-2 block text-[#D4AF37]">To Impress.</span>
          </>
        }
        description="From residential garages to commercial buildings and industrial facilities, we deliver premium epoxy and stone carpet flooring systems built for performance, durability and exceptional style."
      />

      {/* Services */}

      <section className="pb-36">

        <div className="mx-auto grid max-w-7xl gap-10 px-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (

            <article
              key={service.slug}
              className="group overflow-hidden rounded-[34px] border border-white/10 bg-[#111111] transition-all duration-500 hover:-translate-y-3 hover:border-[#D4AF37]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >

              {/* Image */}

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority={service.slug === services[0]?.slug}
                  loading={service.slug === services[0]?.slug ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              </div>

              {/* Content */}

              <div className="p-8">

                <h2 className="text-3xl font-black text-white">
                  {service.title}
                </h2>

                <p className="mt-5 leading-8 text-gray-400">
                  {service.shortDescription}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">

                  {service.benefits.slice(0, 3).map((benefit) => (

                    <span
                      key={benefit}
                      className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-sm text-[#D4AF37]"
                    >
                      {benefit}
                    </span>

                  ))}

                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="group/link mt-10 inline-flex items-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E6C75F] px-7 py-4 font-bold uppercase tracking-wider text-black transition-all duration-300 hover:-translate-y-1"
                >
                  View Service

                  <ArrowRight
                    size={18}
                    className="ml-3 transition-transform duration-300 group-hover/link:translate-x-2"
                  />

                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* Service guidance */}

      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Need help choosing?
          </p>
          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Explore The Options
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Open any service above to see the recommended applications, benefits
            and flooring details for that solution.
          </p>
        </div>
      </section>

    </main>
  );
}
