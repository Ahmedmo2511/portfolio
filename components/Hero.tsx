"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";

import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: cubicBezier(0.25, 0.46, 0.45, 0.94) } },
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
              style={{
                border: "1px solid rgba(99,102,241,0.4)",
                background: "rgba(99,102,241,0.08)",
                color: "#818cf8",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-black tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="gradient-text">Ahmed</span>
            <br />
            <span style={{ color: "var(--text-primary)" }}>Mostafa</span>
          </motion.h1>

          {/* Headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            Computer Engineering Student{" "}
            <span style={{ color: "rgba(99,102,241,0.7)" }}>|</span>{" "}
            Data Science &amp; Machine Learning Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base md:text-lg leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            A third-year Computer Engineering student at{" "}
            <span style={{ color: "#818cf8" }}>Ain Shams University</span> with
            a strong passion for Data Science, Machine Learning, and building
            data-driven solutions. Passionate about solving complex problems
            using data, developing intelligent systems, and creating impactful
            software.
          </motion.p>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            {[
              { icon: <FiGithub size={20} />, href: "https://github.com/Ahmedmo2511", label: "GitHub" },
              { icon: <FiLinkedin size={20} />, href: "https://linkedin.com/in/ahmedmo2511", label: "LinkedIn" },
              { icon: <FiMail size={20} />, href: "mailto:amgaa67056321@gmail.com", label: "Email" },
            ].map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: "rgba(99,102,241,0.1)",
                  border: "1px solid rgba(99,102,241,0.25)",
                  color: "var(--text-secondary)",
                }}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(99,102,241,0.4)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("projects")}
              className="relative overflow-hidden px-8 py-3.5 rounded-xl font-semibold text-white cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #6366f1, #a855f7)",
              }}
            >
              View My Work
              <span
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
                style={{ background: "rgba(255,255,255,0.08)" }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3.5 rounded-xl font-semibold cursor-pointer transition-all duration-300"
              style={{
                border: "1px solid rgba(99,102,241,0.4)",
                color: "#818cf8",
                background: "rgba(99,102,241,0.06)",
              }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("education")}
          >
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              Scroll Down
            </span>
            <div className="scroll-bounce">
              <FiArrowDown style={{ color: "var(--accent-primary)" }} size={18} />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
