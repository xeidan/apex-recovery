import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import PracticeAreas from "@/components/sections/practice-areas";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Team from "@/components/sections/team";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PracticeAreas />
      <WhyChooseUs />
      <Team />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}