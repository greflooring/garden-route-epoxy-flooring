import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ComparisonSlider from "./components/ComparisonSlider";
import WhyChooseUs from "./components/WhyChooseUs";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import GoogleReviews from "./components/GoogleReviews";
import FinalCTA from "./components/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <Hero />

        <ComparisonSlider />

        <WhyChooseUs />

        <Services />

        <Gallery />

        <GoogleReviews />

        <About />

        <Testimonials />

        <Contact />
      </main>

      <FinalCTA />

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}