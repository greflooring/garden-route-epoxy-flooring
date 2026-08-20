"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/27610692503"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_20px_40px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_25px_60px_rgba(37,211,102,0.5)]"
    >
      <MessageCircle size={30} />
    </a>
  );
}