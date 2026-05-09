"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { PersonJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <ServiceJsonLd />
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Marquee />
        <Services />
        <Portfolio />
        <Process />
        <StatsBar />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
