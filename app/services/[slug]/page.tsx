import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { services } from "@/app/data/services";

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

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="text-[#D4AF37] hover:underline"
        >
          ← Back to Home
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
          <Image
            src={service.image}
            alt={service.title}
            width={900}
            height={600}
            className="w-full rounded-3xl object-cover"
          />

          <div>
            <h1 className="text-5xl font-black">
              {service.title}
            </h1>

            <p className="mt-6 text-xl leading-9 text-gray-400">
              {service.description}
            </p>

            <div className="mt-10 space-y-4">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3"
                >
                  <span className="text-[#D4AF37]">✔</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <Link
              href="/#contact"
              className="inline-flex mt-10 rounded-xl bg-[#D4AF37] px-8 py-4 font-bold text-black transition hover:bg-yellow-400"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}