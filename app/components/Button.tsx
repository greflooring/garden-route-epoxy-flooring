"use client";

import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "outline";
}

export default function Button({
  href,
  children,
  variant = "gold",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={
        variant === "gold"
          ? "inline-flex items-center rounded-xl bg-[#d4af37] px-8 py-4 font-bold text-black transition hover:bg-[#e6c75f] shadow-lg"
          : "inline-flex items-center rounded-xl border border-white/15 px-8 py-4 font-semibold text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
      }
    >
      {children}
    </Link>
  );
}