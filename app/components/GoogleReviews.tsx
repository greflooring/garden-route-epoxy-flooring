"use client";

import { Star, Quote } from "lucide-react";
import Container from "./ui/Container";
import Badge from "./ui/Badge";
import Card from "./ui/Card";

const reviews = [
  {
    name: "John M.",
    location: "Mossel Bay",
    review:
      "Outstanding workmanship. Our garage floor looks incredible and the team was professional from start to finish.",
  },
  {
    name: "Sarah L.",
    location: "George",
    review:
      "Very impressed with the attention to detail. The finished floor exceeded our expectations.",
  },
  {
    name: "Mike R.",
    location: "Hartenbos",
    review:
      "Excellent communication, fair pricing and a fantastic end result. Highly recommended.",
  },
];

export default function GoogleReviews() {
  return (
    <section className="bg-[#090909] py-32">
      <Container>

        <div className="text-center mb-20">

          <Badge>
            Google Reviews
          </Badge>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-white">
            Trusted By
            <span className="text-[#D4AF37]"> Homeowners</span>
          </h2>

          <div className="flex justify-center items-center gap-2 mt-8">

            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={26}
                className="fill-[#D4AF37] text-[#D4AF37]"
              />
            ))}

            <span className="ml-3 text-3xl font-black text-white">
              5.0
            </span>

          </div>

          <p className="mt-4 text-gray-400">
            Rated by customers across the Garden Route.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {reviews.map((review) => (

            <Card key={review.name}>

              <Quote
                size={34}
                className="text-[#D4AF37] mb-6"
              />

              <p className="leading-8 text-gray-300">
                "{review.review}"
              </p>

              <div className="flex mt-8">

                {[...Array(5)].map((_, i) => (

                  <Star
                    key={i}
                    size={18}
                    className="fill-[#D4AF37] text-[#D4AF37]"
                  />

                ))}

              </div>

              <h3 className="mt-8 text-white font-bold text-xl">
                {review.name}
              </h3>

              <p className="text-gray-500">
                {review.location}
              </p>

            </Card>

          ))}

        </div>

      </Container>
    </section>
  );
}