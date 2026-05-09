"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-2xl bg-violet-dark/80 shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-narrow px-4 sm:px-6">
          <div className="flex items-center justify-between h-[64px] sm:h-[72px]">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 sm:gap-3 group">
              <span className="font-display text-xs sm:text-sm font-[800] tracking-[0.2em] uppercase text-white">
                AMARA
              </span>
              <span className="hidden sm:block w-px h-4 bg-white/20" />
              <span className="hidden sm:block font-sans text-[10px] tracking-[0.3em] uppercase text-white/40">
                Presentation Designer & Pitch Deck Specialist
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-sans font-medium uppercase tracking-widest text-white/60 hover:text-white active:scale-[0.98] transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}

              {/* CTA with coral underline expand */}
              <a
                href="https://www.fiverr.com/google_ppt"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-xs font-sans font-medium uppercase tracking-widest text-coral group active:scale-[0.98] transition-all duration-200"
              >
                Order on Fiverr
                <span className="absolute left-0 -bottom-1 h-px bg-coral w-0 group-hover:w-full transition-all duration-500 ease-[var(--ease-out-expo)]" />
              </a>
            </div>

            {/* Mobile Hamburger - min 44x44 tap target */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-11 h-11 flex items-center justify-center z-[60] active:scale-[0.95] transition-transform duration-200"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <div className="flex flex-col justify-center items-center w-6 h-6">
                <span
                  className={`block h-px w-6 bg-white transition-all duration-300 ${
                    mobileOpen
                      ? "rotate-45 translate-y-[2px]"
                      : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`block h-px w-6 bg-white transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-px w-6 bg-white transition-all duration-300 ${
                    mobileOpen
                      ? "-rotate-45 -translate-y-[2px]"
                      : "translate-y-1.5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu: Full-Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[55] bg-violet-dark lg:hidden"
          >
            {/* Noise overlay on mobile menu */}
            <div className="noise-overlay" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-5 sm:gap-6 px-6 sm:px-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90 hover:text-coral active:scale-[0.98] transition-all duration-300"
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-4 w-12 h-px bg-white/10"
              />

              <motion.a
                href="https://www.fiverr.com/google_ppt"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="text-coral font-display text-xl sm:text-2xl font-semibold active:scale-[0.98] transition-all duration-200 hover:text-coral-dark"
              >
                Order on Fiverr
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
