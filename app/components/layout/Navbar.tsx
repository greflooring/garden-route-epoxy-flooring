"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import QuoteLink from "@/app/components/ui/QuoteLink";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Areas", href: "/#areas" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[#D4AF37]/20 bg-black/80 backdrop-blur-2xl shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-[1450px] items-center justify-between px-8">

        {/* Left Side */}

        <div className="flex items-center">

          {/* Logo */}

          <Link
            href="/"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/images/logo/logo-white.png"
              alt="Garden Route Epoxy Flooring"
              width={260}
              height={60}
              priority
              className="h-14 w-auto object-contain transition duration-300 hover:scale-105"
            />
          </Link>

          {/* Divider */}

          <div className="mx-8 hidden h-10 w-px bg-white/10 xl:block" />

        </div>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-[15px] font-medium tracking-wide text-white transition-colors duration-300 hover:text-[#E7C55B]"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-5">

          <QuoteLink
            
            className="hidden lg:inline-flex items-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E6C75F] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_10px_35px_rgba(212,175,55,0.35)]"
          >
            Get Free Quote
          </QuoteLink>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl p-2 text-white transition hover:bg-white/5 hover:text-[#D4AF37] lg:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        id="mobile-navigation"
        className={`overflow-hidden bg-black/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          mobileOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-2 px-8 py-8">

          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-4 text-lg font-medium text-white transition hover:bg-white/5 hover:text-[#D4AF37]"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="tel:+27610692503"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-4 font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            <Phone size={18} />
            Call 061 069 2503
          </a>

          <QuoteLink
            
            onClick={() => setMobileOpen(false)}
            className="mt-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E6C75F] px-6 py-4 text-center text-sm font-bold uppercase tracking-wider text-black transition hover:brightness-105"
          >
            Get Free Quote
          </QuoteLink>

        </nav>
      </div>

    </header>
  );
}
