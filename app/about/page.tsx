import {
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

import QuoteLink from "@/app/components/ui/QuoteLink";
import PageHero from "@/app/components/sections/PageHero";

export const metadata = {
  title: "About Garden Route Epoxy Flooring",
  description:
    "Learn more about Garden Route Epoxy Flooring, our workmanship, premium flooring systems and commitment to exceptional customer service throughout the Garden Route.",
};

const values = [
  "Premium Materials",
  "Professional Workmanship",
  "Attention To Detail",
  "Honest Advice",
  "Reliable Service",
  "Exceptional Finishes",
];

const highlights = [
  {
    icon: ShieldCheck,
    title: "Quality First",
    text: "We never compromise on preparation, materials or workmanship.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    text: "Every floor is professionally prepared to achieve maximum durability.",
  },
  {
    icon: Sparkles,
    title: "Built To Impress",
    text: "Beautiful flooring solutions that transform residential and commercial spaces.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-transparent text-white">

      {/* Hero */}

      <PageHero
        eyebrow="About Garden Route Epoxy Flooring"
        title={
          <>
            Premium Floors.
            <span className="mt-2 block text-[#D4AF37]">Built To Last.</span>
          </>
        }
        description="We specialise in premium epoxy and stone carpet flooring installations for residential, commercial and industrial properties throughout the Garden Route."
      />

      {/* Story */}

      <section className="py-28">

        <div className="mx-auto grid max-w-7xl gap-20 px-8 lg:grid-cols-[1.1fr_0.9fr]">

          <div>

            <h2 className="text-5xl font-black">
              Our Commitment
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-400">
              Every successful flooring installation starts long before
              the final coat is applied. That&apos;s why we place enormous
              emphasis on professional preparation, premium materials
              and meticulous workmanship.
            </p>

            <p className="mt-8 text-lg leading-9 text-gray-400">
              Whether we&apos;re transforming a residential garage, a luxury
              home, a commercial showroom or an industrial workshop,
              our objective remains the same — deliver flooring that
              looks exceptional and performs for years.
            </p>

            <div className="mt-16 grid gap-8 md:grid-cols-3">

              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[28px] border border-white/10 bg-[#111111] p-8"
                  >

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10">

                      <Icon
                        size={28}
                        className="text-[#D4AF37]"
                      />

                    </div>

                    <h3 className="mt-6 text-xl font-black">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-400">
                      {item.text}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

          {/* Values */}

          <div className="rounded-[36px] border border-white/10 bg-[#111111] p-12">

            <h3 className="text-4xl font-black">
              Why Customers Choose Us
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              Every project is completed with professionalism,
              transparency and pride in our workmanship.
            </p>

            <div className="mt-10 space-y-6">

              {values.map((value) => (

                <div
                  key={value}
                  className="flex items-center gap-4"
                >

                  <CheckCircle
                    size={22}
                    className="text-[#D4AF37]"
                  />

                  <span className="text-lg text-gray-300">
                    {value}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="border-t border-white/10 py-32">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="text-5xl font-black md:text-6xl">
            Ready To Transform
            <span className="mt-2 block text-[#D4AF37]">
              Your Floor?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            Whether you&apos;re upgrading a garage, workshop, warehouse,
            showroom or residential space, we&apos;re ready to help create
            a floor you&apos;ll be proud of.
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
