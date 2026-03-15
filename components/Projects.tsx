"use client";

import { useRef } from "react";
import { motion, useInView, cubicBezier } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";

const projects = [
  {
    title: "Reddit Clone",
    subtitle: "Full Stack Web Application",
    description:
      "Built a full-stack Reddit clone implementing secure JWT authentication and bcrypt password hashing. Designed RESTful APIs using Express.js and MongoDB to manage posts, comments, and voting logic.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    github: "https://github.com/Ahmedmo2511",
    demo: null,
    color: "#ff4500",
    icon: "🌐",
  },
  {
    title: "Diabetes Prediction",
    subtitle: "Machine Learning Classification",
    description:
      "A high-accuracy ML model (99.5%) using Random Forest. Performed extensive preprocessing and outlier detection. Evaluated SVM, KNN, and Decision Trees.",
    tech: ["Python", "Scikit-learn", "Pandas", "Seaborn", "NumPy"],
    github: "https://github.com/Ahmedmo2511",
    demo: null,
    color: "#22d3ee",
    icon: "🧬",
    badge: "99.5% Accuracy",
  },
  {
    title: "Optimal BST",
    subtitle: "Data Structure & Visualization",
    description:
      "Implemented optimal binary search trees using dynamic programming. Built vector/tree classes with CLI visualization via Graphviz.",
    tech: ["C++", "Graphviz", "CLI", "Dynamic Programming"],
    github: "https://github.com/Ahmedmo2511",
    demo: null,
    color: "#f59e0b",
    icon: "🌳",
  },
  {
    title: "Item Price Prediction",
    subtitle: "Kaggle Competition",
    description:
      "Linear Regression model improved with Ridge Regression. Conducted feature engineering and preprocessing on historical pricing data.",
    tech: ["Python", "Pandas", "Scikit-learn", "Ridge Regression"],
    github: "https://github.com/Ahmedmo2511",
    demo: null,
    color: "#a855f7",
    icon: "💹",
  },
  {
    title: "E-commerce System",
    subtitle: "Object-Oriented Design",
    description:
      "Object-oriented e-commerce system with service packages and a graphical user interface. Applies inheritance, polymorphism, and encapsulation.",
    tech: ["Java", "OOP", "GUI", "Software Engineering"],
    github: "https://github.com/Ahmedmo2511",
    demo: null,
    color: "#6366f1",
    icon: "🛒",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: cubicBezier(0.25, 0.46, 0.45, 0.94) },
  }),
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} style={{ position: "relative", padding: "7rem 0" }}>
      {/* Container */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700, color: "#6366f1", display: "block", marginBottom: "0.75rem" }}>
            What I&apos;ve Built
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, fontFamily: "'Space Grotesk', sans-serif", color: "var(--text-primary)", lineHeight: 1.1 }}>
            Projects<span className="gradient-text">.</span>
          </h2>
          <p style={{ marginTop: "1rem", color: "var(--text-muted)", maxWidth: "500px", margin: "1rem auto 0", lineHeight: 1.7 }}>
            A collection of projects spanning full-stack development, machine learning, and data science.
          </p>
        </motion.div>

        {/* Project grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))", gap: "1.75rem" }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
              style={{
                position: "relative",
                background: "rgba(18,18,30,0.75)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(99,102,241,0.15)",
                borderRadius: "1.25rem",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                overflow: "hidden",
                cursor: "default",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
              }}
            >
              {/* Accent glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at 30% 20%, ${project.color}18 0%, transparent 60%)` }}
              />
              {/* Top border accent */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${project.color}, ${project.color}60, transparent)` }} />

              {/* Header row */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", flexShrink: 0, background: `${project.color}15`, border: `1px solid ${project.color}30` }}>
                  {project.icon}
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      style={{ width: "2rem", height: "2rem", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--text-muted)", textDecoration: "none" }}
                    >
                      <FiGithub size={14} />
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      style={{ width: "2rem", height: "2rem", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--text-muted)", textDecoration: "none" }}
                    >
                      <FiExternalLink size={14} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Title */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.3 }}>
                    {project.title}
                  </h3>
                  {project.badge && (
                    <span style={{ fontSize: "0.7rem", padding: "0.2rem 0.6rem", borderRadius: "9999px", fontWeight: 600, background: `${project.color}20`, color: project.color }}>
                      {project.badge}
                    </span>
                  )}
                </div>
                <p style={{ fontSize: "0.78rem", marginTop: "0.2rem", color: "var(--text-muted)" }}>
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p style={{ fontSize: "0.875rem", lineHeight: 1.75, flex: 1, color: "var(--text-secondary)" }}>
                {project.description}
              </p>

              {/* Tech stack */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                {project.tech.map((t) => (
                  <span key={t} style={{ fontSize: "0.72rem", padding: "0.3rem 0.65rem", borderRadius: "0.5rem", display: "flex", alignItems: "center", gap: "0.3rem", background: "rgba(99,102,241,0.08)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.15)" }}>
                    <FiCode size={10} />
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
