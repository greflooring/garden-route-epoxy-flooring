"use client";

import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

const phoneHref = "tel:+27610692503";
const whatsappHref = "https://wa.me/27610692503";

export default function MobileConversionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-black/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-15px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
        <a
          href={phoneHref}
          data-conversion="phone"
          aria-label="Call Garden Route Epoxy Flooring"
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2 text-xs font-bold uppercase tracking-wide text-white transition active:scale-[0.98]"
        >
          <Phone size={17} className="text-[#D4AF37]" />
          Call
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          data-conversion="whatsapp"
          aria-label="Chat with Garden Route Epoxy Flooring on WhatsApp"
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 px-2 text-xs font-bold uppercase tracking-wide text-white transition active:scale-[0.98]"
        >
          <MessageCircle size={17} className="text-[#25D366]" />
          WhatsApp
        </a>

        <Link
          href="/#contact"
          data-conversion="quote"
          className="flex min-h-12 items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E6C75F] px-2 text-xs font-black uppercase tracking-wide text-black transition active:scale-[0.98]"
        >
          Quote
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
