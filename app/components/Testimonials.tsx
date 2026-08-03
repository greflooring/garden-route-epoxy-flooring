"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John M.",
    location: "Mossel Bay",
    image: "/images/testimonials/john.jpg",
    review:
      "Our garage looks absolutely incredible. The workmanship was outstanding and completed exactly as promised.",
  },
  {
    name: "Sarah L.",
    location: "George",
    image: "/images/testimonials/sarah.jpg",
    review:
      "Professional from start to finish. The floor completely transformed our workshop.",
  },
  {
    name: "Michael R.",
    location: "Hartenbos",
    image: "/images/testimonials/michael.jpg",
    review:
      "Excellent communication, fantastic quality and attention to detail. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-neutral-950 py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-green-400 uppercase tracking-widest text-sm font-semibold">
            Client Reviews
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-white">
            Trusted Across
            <br />
            The Garden Route
          </h2>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-500/30"
            >
              <Quote
                size={40}
                className="text-green-400 mb-6"
              />

              <div className="flex gap-1 mb-6">

                {[1,2,3,4,5].map((i)=>(
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}

              </div>

              <p className="text-gray-300 leading-8">
                "{review.review}"
              </p>

              <div className="flex items-center gap-4 mt-8">

                <img
                  src={review.image}
                  alt={review.name}
                  className="h-14 w-14 rounded-full object-cover border border-green-500"
                />

                <div>
                  <h3 className="text-white font-bold">
                    {review.name}
                  </h3>

                  <p className="text-green-400 text-sm">
                    {review.location}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}<section className="bg-black py-16 border-t border-white/10">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <h3 className="text-3xl font-bold text-white">
      Rated ⭐⭐⭐⭐⭐ by Happy Customers
    </h3>

    <p className="text-gray-400 mt-4">
      Quality workmanship, premium products and outstanding customer service.
    </p>

    <a
      href="#contact"
      className="inline-block mt-8 bg-green-500 text-black font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition"
    >
      Request Your Free Quote
    </a>

  </div>
</section>