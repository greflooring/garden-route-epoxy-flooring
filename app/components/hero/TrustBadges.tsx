"use client";

import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Hammer,
} from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    text: "10+ Years Experience",
  },
  {
    icon: Award,
    text: "Premium Materials",
  },
  {
    icon: Hammer,
    text: "Professional Installation",
  },
  {
    icon: CheckCircle2,
    text: "Satisfaction Guaranteed",
  },
];

export default function TrustBadges() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4">

      {badges.map((badge) => {
        const Icon = badge.icon;

        return (
          <div
            key={badge.text}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
              backdrop-blur-md
            "
          >
            <Icon
              className="text-green-400"
              size={20}
            />

            <span className="text-sm text-white">
              {badge.text}
            </span>

          </div>
        );
      })}

    </div>
  );
}