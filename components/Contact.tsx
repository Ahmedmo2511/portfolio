"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";

const socialLinks = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: "amgaa67056321@gmail.com",
    href: "mailto:amgaa67056321@gmail.com",
    color: "#6366f1",
  },
  {
    icon: <FiPhone size={20} />,
    label: "Phone",
    value: "+201500656612",
    href: "tel:+201500656612",
    color: "#22d3ee",
  },
  {
    icon: <FiLinkedin size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/ahmedmo2511",
    href: "https://linkedin.com/in/ahmedmo2511",
    color: "#0ea5e9",
  },
  {
    icon: <FiGithub size={20} />,
    label: "GitHub",
    value: "github.com/Ahmedmo2511",
    href: "https://github.com/Ahmedmo2511",
    color: "#a855f7",
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} style={{ position: "relative", padding: "7rem 0 5rem" }}>
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2.5rem", position: "relative", zIndex: 10 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700, color: "#6366f1", display: "block", marginBottom: "0.6rem" }}>
            Let&apos;s Connect
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, fontFamily: "'Space Grotesk', sans-serif", color: "var(--text-primary)", lineHeight: 1.1 }}>
            Get In Touch<span className="gradient-text">.</span>
          </h2>
          <p style={{ marginTop: "0.9rem", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: "460px", margin: "0.9rem auto 0" }}>
            Open to new opportunities, collaborations, or just a friendly chat about tech and data science.
          </p>
        </motion.div>

        {/* CTA hero card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="group"
          style={{
            position: "relative",
            background: "rgba(15,15,26,0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(99,102,241,0.22)",
            borderRadius: "1.5rem",
            padding: "3rem 2.5rem",
            textAlign: "center",
            marginBottom: "1.5rem",
            overflow: "hidden",
          }}
        >
          {/* Top accent */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #6366f1, #a855f7, #22d3ee)", borderRadius: "1.5rem 1.5rem 0 0" }} />
          {/* Hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ borderRadius: "1.5rem", background: "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.08) 0%, transparent 70%)" }}
          />

          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>👋</div>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", fontFamily: "'Space Grotesk', sans-serif", marginBottom: "0.75rem" }}>
            Say Hello!
          </h3>
          <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: "380px", margin: "0 auto 2rem" }}>
            Whether you have a project idea, a job opportunity, or just want to connect — my inbox is always open.
          </p>
          <motion.a
            href="mailto:amgaa67056321@gmail.com"
            whileHover={{ scale: 1.04, boxShadow: "0 0 36px rgba(99,102,241,0.4)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              padding: "0.875rem 2rem", borderRadius: "0.875rem",
              fontWeight: 600, fontSize: "0.95rem", color: "#fff", textDecoration: "none",
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              transition: "all 0.2s ease",
            }}
          >
            <FiMail size={17} />
            Send Me an Email
          </motion.a>
        </motion.div>

        {/* Contact info grid — 2x2 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "1rem", marginBottom: "3.5rem" }}>
          {socialLinks.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.09 }}
              whileHover={{ y: -4 }}
              className="group"
              style={{
                display: "flex", alignItems: "center", gap: "1rem",
                padding: "1.25rem 1.5rem",
                background: "rgba(15,15,26,0.8)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "1rem",
                textDecoration: "none",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.25s ease, border-color 0.25s ease",
              }}
            >
              {/* Hover left accent */}
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "2px", background: item.color, borderRadius: "1rem 0 0 1rem", opacity: 0, transition: "opacity 0.3s" }} className="group-hover:opacity-100" />

              <div style={{
                width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: `${item.color}14`, color: item.color, border: `1px solid ${item.color}28`,
                transition: "transform 0.2s",
              }}
                className="group-hover:scale-110"
              >
                {item.icon}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "0.2rem" }}>
                  {item.label}
                </p>
                <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {item.value}
                </p>
              </div>

              <FiArrowUpRight size={16} style={{ color: "var(--text-muted)", flexShrink: 0, transition: "color 0.2s, transform 0.2s" }} className="group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{ textAlign: "center", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            Designed &amp; Built by{" "}
            <span className="gradient-text" style={{ fontWeight: 600 }}>Ahmed Mostafa</span>
            {" "}· 2026
          </p>
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", opacity: 0.5, marginTop: "0.35rem" }}>
            Built with Next.js, TailwindCSS &amp; Framer Motion
          </p>
        </motion.div>

      </div>
    </section>
  );
}
