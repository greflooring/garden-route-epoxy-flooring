"use client";

import { CheckCircle } from "lucide-react";
import Card from "../ui/Card";

export default function HeroCard() {
  return (
    <Card className="p-8 lg:p-10">

      <span className="inline-block rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400 border border-green-500/20">
        Garden Route Specialists
      </span>

      <h3 className="mt-6 text-3xl font-black text-white">
        Why Choose Us
      </h3>

      <p className="mt-4 text-gray-400 leading-relaxed">
        We install premium epoxy flooring systems for homes,
        garages, commercial properties and industrial facilities
        across the Garden Route.
      </p>

      <div className="mt-8 space-y-5">

        {[
          "Premium Epoxy Systems",
          "Residential & Commercial",
          "Industrial Flooring",
          "Professional Installation",
          "Long Lasting Finish",
        ].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <CheckCircle
              className="text-green-400 flex-shrink-0"
              size={22}
            />

            <span className="text-white">
              {item}
            </span>
          </div>
        ))}

      </div>

      <div className="mt-10 grid grid-cols-2 gap-6">

        <div>
          <h4 className="text-4xl font-black text-green-400">
            500+
          </h4>

          <p className="text-gray-400 mt-2 text-sm">
            Projects Completed
          </p>
        </div>

        <div>
          <h4 className="text-4xl font-black text-green-400">
            10+
          </h4>

          <p className="text-gray-400 mt-2 text-sm">
            Years Experience
          </p>
        </div>

      </div>

    </Card>
  );
}