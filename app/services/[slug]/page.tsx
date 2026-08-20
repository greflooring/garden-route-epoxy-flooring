import { notFound } from "next/navigation";
import { CheckCircle, ArrowRight } from "lucide-react";

import Accordion from "@/app/components/ui/Accordion";
import BreadcrumbSchema from "@/app/components/SEO/BreadcrumbSchema";
import ServiceSchema from "@/app/components/SEO/ServiceSchema";
import { services } from "@/app/data/services";
import QuoteLink from "@/app/components/ui/QuoteLink";
import PageHero from "@/app/components/sections/PageHero";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-transparent text-white">

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          {
            name: service.title,
            url: `/services/${service.slug}`,
          },
        ]}
      />

      <ServiceSchema
        title={service.title}
        description={service.overview}
      />

      {/* Hero */}

      <PageHero
        eyebrow="Garden Route Epoxy Flooring"
        title={service.heroTitle}
        description={service.heroSubtitle}
      >
        <QuoteLink className="inline-flex items-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E6C75F] px-8 py-4 font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(212,175,55,0.35)]">
          Request Free Quote
          <ArrowRight size={18} className="ml-3" />
        </QuoteLink>
      </PageHero>

      {/* Overview */}

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-20 px-8 lg:grid-cols-[1.2fr_.8fr]">

          <div>

            <h2 className="text-4xl font-black">
              Overview
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-400">
              {service.overview}
            </p>

          </div>

          <div className="rounded-[30px] border border-white/10 bg-[#111111] p-10">

            <h3 className="text-2xl font-black">
              Benefits
            </h3>

            <div className="mt-8 space-y-5">

              {service.benefits.map((benefit) => (

                <div
                  key={benefit}
                  className="flex gap-4"
                >

                  <CheckCircle
                    size={22}
                    className="mt-1 text-[#D4AF37]"
                  />

                  <span className="text-gray-300">
                    {benefit}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* Ideal For */}

      <section className="bg-[#0d0d0d] py-24">

        <div className="mx-auto max-w-7xl px-8">

          <h2 className="text-center text-4xl font-black">
            Perfect For
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {service.idealFor.map((item) => (

              <div
                key={item}
                className="rounded-[24px] border border-white/10 bg-[#111111] p-8 text-center transition hover:border-[#D4AF37]/40"
              >

                <CheckCircle
                  size={30}
                  className="mx-auto mb-5 text-[#D4AF37]"
                />

                <h3 className="text-xl font-bold text-white">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Process */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-8">

          <h2 className="text-center text-4xl font-black">
            Our Installation Process
          </h2>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {service.process.map((step, index) => (

              <div
                key={step}
                className="rounded-[30px] border border-white/10 bg-[#111111] p-8"
              >

                <span className="text-5xl font-black text-[#D4AF37]/20">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-6 text-2xl font-black">
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="bg-[#0d0d0d] py-24">

        <div className="mx-auto max-w-5xl px-8">

          <h2 className="text-center text-4xl font-black">
            Frequently Asked Questions
          </h2>

          <div className="mt-16">

            <Accordion items={service.faq} />

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-28">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="text-5xl font-black text-white">
            Ready to Transform Your Floor?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            Whether you&apos;re planning a new garage, upgrading a commercial
            property or installing a premium decorative finish, we&apos;d love
            to help bring your project to life.
          </p>

          <QuoteLink
            
            className="mt-12 inline-flex items-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E6C75F] px-10 py-5 font-bold uppercase tracking-wider text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(212,175,55,0.35)]"
          >
            Request Your Free Quote

            <ArrowRight
              size={18}
              className="ml-3"
            />

          </QuoteLink>

        </div>

      </section>

    </main>
  );
}
