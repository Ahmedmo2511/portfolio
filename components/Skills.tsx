"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    category: "Programming Languages",
    icon: "💻",
    color: "#6366f1",
    skills: ["Python", "C++", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Tools",
    icon: "⚙️",
    color: "#a855f7",
    skills: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    category: "Data Science & ML",
    icon: "🧠",
    color: "#22d3ee",
    skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    category: "Concepts",
    icon: "📐",
    color: "#f59e0b",
    skills: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "OOP",
      "Software Engineering",
      "Feature Engineering",
      "Data Analysis",
    ],
  },
];

const proficiencies = [
  { label: "Python & Data Science", value: 85, color: "#6366f1" },
  { label: "Machine Learning", value: 80, color: "#a855f7" },
  { label: "Web Dev (MERN)", value: 75, color: "#22d3ee" },
  { label: "C++ & Algorithms", value: 78, color: "#f59e0b" },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} style={{ position: "relative", padding: "7rem 0" }}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem", position: "relative", zIndex: 10 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700, color: "#6366f1", display: "block", marginBottom: "0.6rem" }}>
            What I Know
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, fontFamily: "'Space Grotesk', sans-serif", color: "var(--text-primary)", lineHeight: 1.1 }}>
            Technical Skills<span className="gradient-text">.</span>
          </h2>
          <p style={{ marginTop: "1rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "440px", margin: "0.75rem auto 0" }}>
            A toolkit spanning full-stack development, machine learning, and systems programming.
          </p>
        </motion.div>

        {/* Skill category cards — 2 col grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: "1.25rem", marginBottom: "2rem" }}>
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: ci * 0.12 }}
              style={{
                background: "rgba(15,15,26,0.8)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: `1px solid ${cat.color}22`,
                borderRadius: "1.25rem",
                padding: "1.875rem 2rem",
              }}
            >
              {/* Card header */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1.5rem" }}>
                <div style={{
                  width: "2.6rem", height: "2.6rem", borderRadius: "0.75rem",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.2rem", flexShrink: 0,
                  background: `${cat.color}14`, border: `1px solid ${cat.color}28`,
                }}>
                  {cat.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }}>
                    {cat.category}
                  </h3>
                  <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>
                    {cat.skills.length} skills
                  </p>
                </div>
              </div>

              {/* Skill pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem" }}>
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.35, delay: ci * 0.1 + si * 0.05 }}
                    whileHover={{ scale: 1.07, color: cat.color, borderColor: `${cat.color}55` }}
                    style={{
                      fontSize: "0.82rem",
                      padding: "0.4rem 0.9rem",
                      borderRadius: "0.55rem",
                      cursor: "default",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "var(--text-secondary)",
                      transition: "all 0.2s ease",
                      display: "inline-block",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency bars panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.6 }}
          style={{
            background: "rgba(15,15,26,0.8)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(99,102,241,0.18)",
            borderRadius: "1.25rem",
            padding: "2.25rem 2.5rem",
          }}
        >
          <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "1.75rem", textAlign: "center", letterSpacing: "0.01em" }}>
            Proficiency Overview
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))", gap: "1.5rem 3rem" }}>
            {proficiencies.map((item, idx) => (
              <div key={item.label}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.55rem" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{item.label}</span>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: item.color }}>{item.value}%</span>
                </div>
                <div style={{ height: "7px", borderRadius: "9999px", background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.value}%` } : {}}
                    transition={{ duration: 1.1, delay: 0.65 + idx * 0.1, ease: "easeOut" }}
                    style={{ height: "100%", borderRadius: "9999px", background: `linear-gradient(90deg, ${item.color}, ${item.color}70)` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
