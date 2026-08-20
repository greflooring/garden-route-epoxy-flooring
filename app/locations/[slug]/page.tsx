import Link from "next/link";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";

import { locations } from "@/app/data/locations";
import { services } from "@/app/data/services";
import { company } from "@/app/data/company";
import QuoteLink from "@/app/components/ui/QuoteLink";
import PageHero from "@/app/components/sections/PageHero";
import BreadcrumbSchema from "@/app/components/SEO/BreadcrumbSchema";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);

  if (!location) return {};

  return {
    title: `Epoxy Flooring in ${location.name} | Garden Route Epoxy Flooring`,
    description: `Professional epoxy, resin and stone carpet flooring services in ${location.name}. Residential, commercial and industrial flooring solutions from Garden Route Epoxy Flooring.`,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
    openGraph: {
      title: `Epoxy Flooring in ${location.name} | Garden Route Epoxy Flooring`,
      description: `Professional epoxy and stone carpet flooring services in ${location.name} and surrounding Garden Route areas.`,
      url: `https://gardenrouteepoxyflooring.co.za/locations/${location.slug}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);

  if (!location) {
    return null;
  }

  const featuredServices = services.slice(0, 4);

  return (
    <main className="bg-transparent text-white">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Areas We Serve", url: "/#areas" },
          {
            name: location.name,
            url: `/locations/${location.slug}`,
          },
        ]}
      />

      <PageHero
        eyebrow="Garden Route Service Area"
        title={<>Epoxy Flooring in {location.name}</>}
        description={
          <>
            Professional epoxy, resin and stone carpet flooring for homes,
            garages, workshops, commercial spaces and industrial facilities in{" "}
            {location.name} and the surrounding Garden Route.
          </>
        }
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <QuoteLink className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E6C75F] px-8 py-4 font-bold text-black transition hover:-translate-y-1">
            Get Your Free Quote
            <ArrowRight size={18} className="ml-3" />
          </QuoteLink>
          <a
            href={`tel:${company.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 font-bold text-white transition hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
          >
            <Phone size={18} className="mr-3" />
            Call {company.phone}
          </a>
        </div>
      </PageHero>

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-16 px-8 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Local Flooring Specialists
            </p>
            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Flooring built for {location.name}
            </h2>
            <p className="mt-7 text-lg leading-9 text-gray-400">
              We provide professionally installed flooring systems for projects
              throughout the Garden Route. Whether you are upgrading a garage,
              improving a residential living area, fitting out a commercial
              property or protecting an industrial floor, we can recommend a
              system based on the space, traffic and finish you want.
            </p>
            <p className="mt-6 text-lg leading-9 text-gray-400">
              Every project starts with proper surface assessment and
              preparation. The result is a seamless, practical floor designed
              to look good and perform under everyday use.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#111111] p-9">
            <h3 className="text-2xl font-black">Why choose epoxy flooring?</h3>
            <div className="mt-8 space-y-5">
              {[
                "Seamless, easy-to-clean surfaces",
                "Durable finishes for demanding spaces",
                "Multiple colours and finish options",
                "Professional surface preparation",
                "Residential, commercial and industrial systems",
              ].map((item) => (
                <div key={item} className="flex gap-4">
                  <CheckCircle size={22} className="mt-1 shrink-0 text-[#D4AF37]" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d0d0d] py-24">
        <div className="mx-auto max-w-6xl px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Flooring Options
            </p>
            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Solutions for {location.name} projects
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-[28px] border border-white/10 bg-[#111111] p-7 transition hover:-translate-y-1 hover:border-[#D4AF37]/40"
              >
                <h3 className="text-2xl font-black">{service.title}</h3>
                <p className="mt-3 leading-7 text-gray-400">
                  {service.shortDescription}
                </p>
                <span className="mt-5 inline-flex items-center font-bold text-[#D4AF37]">
                  Explore service
                  <ArrowRight size={17} className="ml-2 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Planning a flooring project in {location.name}?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Tell us about your space, the finish you want and your project
            requirements. We can help you choose the right flooring system.
          </p>
          <QuoteLink className="mt-9 inline-flex items-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E6C75F] px-8 py-4 font-bold text-black">
            Request a Free Quote
            <ArrowRight size={18} className="ml-3" />
          </QuoteLink>
        </div>
      </section>
    </main>
  );
}
