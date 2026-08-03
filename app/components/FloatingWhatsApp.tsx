"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/27761260231"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        bg-green-500
        hover:bg-green-600
        text-white
        p-4
        rounded-full
        shadow-2xl
        transition
        hover:scale-110
        z-50
      "
    >
      <MessageCircle size={30} />
    </a>
  );
}