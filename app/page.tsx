import Hero from "@/app/components/sections/Hero";
import TrustSection from "@/app/components/sections/TrustSection";
import Services from "@/app/components/sections/Services";
import AreasWeServe from "@/app/components/sections/AreasWeServe";
import OurDifference from "@/app/components/sections/OurDifference";
import Process from "@/app/components/sections/Process";
import Stats from "@/app/components/sections/Stats";
import WhyChooseUs from "@/app/components/sections/WhyChooseUs";
import Testimonials from "@/app/components/sections/Testimonials";
import GoogleReviews from "@/app/components/sections/GoogleReviews";
import Contact from "@/app/components/sections/Contact";
import FinalCTA from "@/app/components/sections/FinalCTA";

export const metadata = {
  title: "Garden Route Epoxy Flooring | Premium Resin Flooring",
  description:
    "Premium epoxy, resin and stone carpet flooring for homes, garages, workshops, commercial buildings and industrial facilities across George, Mossel Bay, Hartenbos and the wider Garden Route." ,
};

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <TrustSection />
      <Services />
      <AreasWeServe />
      <OurDifference />
      <Process />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <GoogleReviews />
      <Contact />
      <FinalCTA />
    </main>
  );
}
