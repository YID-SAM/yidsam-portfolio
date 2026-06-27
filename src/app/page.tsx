import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Certificates from "@/components/sections/Certificates";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Tools from "@/components/sections/Tools";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Certificates";
import VoiceOver from "@/components/sections/VoiceOver";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Certificates/>     
      <Tools />
      <Portfolio />
      <VoiceOver/>           
      <Contact />
      <Footer />
    </>
  );
}