"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { value: "Top 50", label: "Nationwide", icon: "🏆" },
    { value: "4 Yrs", label: "Scholarship", icon: "📅" },
    { value: "3.00+", label: "GPA Required", icon: "🎓" },
  ];

  return (
    <section id="achievements" ref={ref} style={{ position: "relative", padding: "7rem 0" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700, color: "#6366f1", display: "block", marginBottom: "0.6rem" }}>
            Recognition
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, fontFamily: "'Space Grotesk', sans-serif", color: "var(--text-primary)", lineHeight: 1.1 }}>
            Achievements<span className="gradient-text">.</span>
          </h2>
        </motion.div>

        {/* Achievement card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileHover={{ y: -5 }}
          className="group"
          style={{
            position: "relative",
            background: "rgba(15,15,26,0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(99,102,241,0.22)",
            borderRadius: "1.5rem",
            padding: "2.5rem",
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          {/* Rainbow top line */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #6366f1, #a855f7, #22d3ee)", borderRadius: "1.5rem 1.5rem 0 0" }} />

          {/* Hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ borderRadius: "1.5rem", background: "radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.1) 0%, transparent 65%)" }}
          />

          {/* Badge row */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <div style={{
              width: "3.25rem", height: "3.25rem", borderRadius: "1rem", flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem",
              background: "linear-gradient(135deg, rgba(99,102,241,0.18), rgba(168,85,247,0.18))",
              border: "1px solid rgba(99,102,241,0.28)",
            }}>
              🏅
            </div>
            <div style={{ flex: 1, minWidth: "180px" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-primary)", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.25 }}>
                Sawiris Distinction Scholarship
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#818cf8", marginTop: "0.2rem" }}>
                Sawiris Foundation for Social Development
              </p>
            </div>
            <span style={{
              fontSize: "0.72rem", fontFamily: "monospace", padding: "0.35rem 0.8rem",
              borderRadius: "0.625rem", whiteSpace: "nowrap",
              background: "rgba(99,102,241,0.12)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.22)",
            }}>
              Sep 2023 – Jun 2027
            </span>
          </div>

          {/* Description */}
          <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-secondary)", paddingBottom: "1.5rem", borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: "1.5rem" }}>
            Selected as one of{" "}
            <span style={{ fontWeight: 700, color: "#f59e0b" }}>50 participants nationwide</span>{" "}
            to receive the Sawiris Foundation Scholarship at Ain Shams University, awarded for{" "}
            <span style={{ color: "#818cf8" }}>academic excellence</span> and{" "}
            <span style={{ color: "#a855f7" }}>leadership potential</span>.
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {["Academic Excellence", "Leadership", "Nationwide Competition", "Ain Shams University"].map((tag) => (
              <span key={tag} style={{ fontSize: "0.76rem", padding: "0.35rem 0.8rem", borderRadius: "9999px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--text-muted)" }}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stats row */}
        <div style={{ marginTop: "1.5rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              style={{
                background: "rgba(15,15,26,0.8)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "1rem",
                padding: "1.5rem 1rem",
                textAlign: "center",
                transition: "transform 0.25s ease",
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.4rem" }}>{stat.icon}</div>
              <div className="gradient-text" style={{ fontSize: "1.5rem", fontWeight: 900, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.3rem" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
