"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiBookOpen, FiAward } from "react-icons/fi";

const universities = [
  {
    name: "Ain Shams University",
    degree: "Bachelor of Computer & Artificial Intelligence Engineering",
    gpa: "3.2",
    period: "2023 – 2027",
    icon: <FiBookOpen size={22} />,
    color: "#6366f1",
    location: "Cairo, Egypt",
    tags: ["Computer Engineering", "AI", "Data Science"],
  },
  {
    name: "University of East London",
    degree: "Bachelor of Computer Science",
    gpa: "3.6",
    period: "2023 – 2027",
    icon: <FiAward size={22} />,
    color: "#a855f7",
    location: "London, UK",
    tags: ["Computer Science", "Software Dev", "Networks"],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={ref}
      style={{ position: "relative", padding: "7rem 0" }}
    >
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      {/* Container */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 10 }}>
        {/* Section header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700, color: "#6366f1", display: "block", marginBottom: "0.75rem" }}>
            Where I Study
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, fontFamily: "'Space Grotesk', sans-serif", color: "var(--text-primary)", lineHeight: 1.1 }}>
            Education<span className="gradient-text">.</span>
          </h2>
          <p style={{ marginTop: "1rem", color: "var(--text-muted)", maxWidth: "480px", margin: "1rem auto 0", lineHeight: 1.7 }}>
            Pursuing a dual degree program, combining engineering fundamentals with global perspectives.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))", gap: "2rem" }}>
          {universities.map((uni, i) => (
            <motion.div
              key={uni.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
              style={{
                position: "relative",
                background: "rgba(18,18,30,0.75)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(99,102,241,0.2)",
                borderRadius: "1.25rem",
                padding: "2.5rem",
                overflow: "hidden",
                cursor: "default",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${uni.color}15 0%, transparent 60%)` }}
              />
              {/* Top line accent */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", borderRadius: "1.25rem 1.25rem 0 0", background: `linear-gradient(90deg, ${uni.color}, transparent)` }} />

              {/* Icon */}
              <div style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.75rem", background: `${uni.color}18`, color: uni.color, border: `1px solid ${uni.color}30` }}>
                {uni.icon}
              </div>

              {/* Content */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.3 }}>{uni.name}</h3>
                  <span style={{ fontSize: "0.75rem", fontFamily: "monospace", padding: "0.3rem 0.75rem", borderRadius: "0.5rem", whiteSpace: "nowrap", background: `${uni.color}15`, color: uni.color }}>
                    {uni.period}
                  </span>
                </div>
                <p style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--text-secondary)", lineHeight: 1.5 }}>{uni.degree}</p>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>📍 {uni.location}</p>

                {/* GPA */}
                <div style={{ marginTop: "0.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>GPA</span>
                    <div style={{ flex: 1, height: "6px", borderRadius: "9999px", background: "rgba(255,255,255,0.05)", overflow: "hidden" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${(parseFloat(uni.gpa) / 4) * 100}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: i * 0.2 + 0.5, ease: "easeOut" }}
                        style={{ height: "100%", borderRadius: "9999px", background: `linear-gradient(90deg, ${uni.color}, ${uni.color}80)` }}
                      />
                    </div>
                    <span style={{ fontSize: "0.9rem", fontWeight: 700, color: uni.color }}>{uni.gpa} / 4.0</span>
                  </div>
                </div>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  {uni.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: "0.75rem", padding: "0.35rem 0.75rem", borderRadius: "9999px", background: "rgba(255,255,255,0.04)", color: "var(--text-muted)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dual degree badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{ marginTop: "2.5rem", textAlign: "center" }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: 500, background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.25)", color: "#818cf8" }}>
            🎓 Dual Degree Program — International Academic Track
          </span>
        </motion.div>
      </div>
    </section>
  );
}
