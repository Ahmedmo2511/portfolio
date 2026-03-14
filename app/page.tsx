"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Background from "@/components/Background";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      <main className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--bg-primary)" }}>
        <Background />
        <Navbar />
        <Hero />
        <Education />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
        <ScrollToTop />
      </main>
    </AnimatePresence>
  );
}
