"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-lg shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="text-2xl font-black text-white"
          >
            Garden Route
            <span className="text-yellow-500">
              {" "}Epoxy
            </span>
          </Link>

          {/* Navigation */}

          <nav className="hidden lg:flex gap-10">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-yellow-500 transition font-medium"
              >
                {link.name}
              </a>
            ))}

          </nav>

          {/* CTA */}

          <a
            href="#contact"
            className="hidden md:flex rounded-xl bg-yellow-500 hover:bg-yellow-400 transition px-6 py-3 font-bold text-black"
          >
            Quote
          </a>

        </div>

      </div>
    </header>
  );
}