import type { Metadata } from "next";
import Process from "@/app/components/sections/Process";
import FinalCTA from "@/app/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Our Flooring Process",
  description: "How Garden Route Epoxy Flooring assesses, prepares and installs resin flooring systems.",
};

export default function ProcessPage() {
  return <main className="bg-black text-white"><Process /><FinalCTA /></main>;
}
