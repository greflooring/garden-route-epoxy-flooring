import type { Metadata } from "next";
import Contact from "@/app/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description: "Request a flooring quotation from Garden Route Epoxy Flooring.",
};

export default function ContactPage() {
  return <main className="bg-black text-white"><Contact /></main>;
}
