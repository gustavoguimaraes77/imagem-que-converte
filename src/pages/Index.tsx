import HeroSection from "@/components/HeroSection";
import WhatWeDo from "@/components/WhatWeDo";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhatWeDo />
      <BeforeAfter />
      <Testimonials />
      <AboutUs />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;