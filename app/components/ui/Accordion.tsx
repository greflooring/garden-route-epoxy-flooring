"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Item = {
  question: string;
  answer: string;
};

interface AccordionProps {
  items: Item[];
}

export default function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-5">
      {items.map((item, index) => {
        const active = open === index;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-3xl border border-white/10 bg-[#111111]"
          >
            <button
              type="button"
              onClick={() => setOpen(active ? null : index)}
              className="flex w-full items-center justify-between px-8 py-6 text-left"
            >
              <span className="text-xl font-bold text-white">
                {item.question}
              </span>

              <ChevronDown
                size={22}
                className={`text-[#D4AF37] transition-transform duration-300 ${
                  active ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                active
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-8 pb-8 leading-8 text-gray-400">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}