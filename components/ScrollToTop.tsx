"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(99,102,241,0.5)" }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #6366f1, #a855f7)",
            color: "#fff",
          }}
        >
          <FiArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
