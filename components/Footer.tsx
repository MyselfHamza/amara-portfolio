"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/RevealOnScroll";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const marqueeItems = [
  "Pitch Decks",
  "Investor Decks",
  "PowerPoint",
  "Keynote",
  "Google Slides",
  "Brand Templates",
  "Infographics",
  "Sales Decks",
];

function MarqueeRow() {
  return (
    <>
      {marqueeItems.map((item, i) => (
        <span key={i} className="flex items-center gap-6 shrink-0">
          <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-background/40 whitespace-nowrap">
            {item}
          </span>
          <span className="text-coral/60 text-lg select-none" aria-hidden="true">
            &bull;
          </span>
        </span>
      ))}
    </>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      <div className="grain absolute inset-0 pointer-events-none" />
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-coral via-gold to-violet-light" />

      {/* Radial spotlight (gold) — top-right corner */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 90% 0%, color-mix(in oklab, var(--gold) 10%, transparent) 0%, transparent 60%)",
        }}
      />
      {/* Radial spotlight (coral) — bottom-left corner */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 0% 100%, color-mix(in oklab, var(--coral) 12%, transparent) 0%, transparent 60%)",
        }}
      />
      {/* Fine dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* ===== MARQUEE STRIP ===== */}
      <div className="relative border-y border-background/[0.06] py-4 sm:py-5 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-foreground to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-foreground to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee gap-6">
          <div className="flex items-center gap-6 shrink-0 pr-6">
            <MarqueeRow />
          </div>
          <div className="flex items-center gap-6 shrink-0 pr-6">
            <MarqueeRow />
          </div>
          <div className="flex items-center gap-6 shrink-0 pr-6">
            <MarqueeRow />
          </div>
        </div>
      </div>

      {/* ===== CLOSING CTA ===== */}
      <div className="relative container-narrow pt-20 sm:pt-28 lg:pt-32 pb-10 text-center">
        {/* Live status pill */}
        <Reveal>
          <div className="mb-8 sm:mb-10 inline-flex items-center gap-2.5 rounded-full border border-background/15 bg-background/[0.04] px-4 py-1.5 backdrop-blur-sm">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            <span className="font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-background/70">
              Online &middot; Avg response 1 hour
            </span>
          </div>
        </Reveal>

        {/* Closing line — serif italic coral */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="font-serif italic text-coral text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl mx-auto"
        >
          Let&apos;s design your next deck.
        </motion.h2>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="mt-8 sm:mt-10 flex justify-center"
        >
          <a
            href="https://www.fiverr.com/google_ppt"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 font-sans text-base sm:text-lg font-bold text-background bg-coral hover:bg-coral-dark active:scale-[0.98] px-9 sm:px-10 py-4 sm:py-5 rounded-full transition-all duration-300 shadow-[0_10px_40px_color-mix(in_oklab,var(--coral)_45%,transparent)] hover:shadow-[0_15px_50px_color-mix(in_oklab,var(--coral)_60%,transparent)]"
          >
            Hire on Fiverr
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* ===== GIANT OUTRO WORDMARK ===== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, delay: 0.3, ease }}
          className="mt-16 sm:mt-20 lg:mt-24 select-none pointer-events-none"
          aria-hidden="true"
        >
          <h2
            className="font-display font-black text-background/[0.06] leading-[0.85] tracking-[-0.05em] text-[26vw] sm:text-[24vw] lg:text-[22vw]"
            style={{ letterSpacing: "-0.06em" }}
          >
            AMARA
          </h2>
        </motion.div>
      </div>

      {/* ===== 3-COLUMN INFO ROW ===== */}
      <div className="relative container-narrow pb-12 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 text-center md:text-left">
          {/* Column A — tagline */}
          <div>
            <h3 className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-coral mb-4">
              Studio
            </h3>
            <p className="font-serif italic text-background/85 text-lg leading-snug mb-3">
              Pitch decks that win the room.
            </p>
            <p className="font-sans text-sm font-medium text-background/55 leading-relaxed">
              Based in Pakistan &middot; working worldwide.
            </p>
            <p className="font-sans text-xs font-medium text-background/40 mt-3">
              English &middot; Urdu &middot; Dutch &middot; French
            </p>
          </div>

          {/* Column B — quick links */}
          <div>
            <h3 className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-coral mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Services", href: "#services" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 font-sans text-sm font-medium text-background/65 hover:text-background active:scale-[0.98] transition-all duration-200"
                  >
                    <span className="h-px w-4 bg-background/30 group-hover:w-8 group-hover:bg-coral transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column C — contact */}
          <div>
            <h3 className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-coral mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.fiverr.com/google_ppt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm font-semibold text-background/85 hover:text-coral active:scale-[0.98] transition-all duration-200"
                >
                  fiverr.com/google_ppt
                </a>
              </li>
              <li className="font-sans text-xs font-medium text-background/55">
                Avg response &mdash;{" "}
                <span className="text-background/85 font-semibold tabular">1 hour</span>
              </li>
              <li className="font-sans text-xs font-medium text-background/55">
                From{" "}
                <span className="text-background/85 font-semibold tabular">
                  &pound;15.48/hour
                </span>
              </li>
              <li className="font-sans text-xs font-medium text-background/55 inline-flex items-center gap-1.5">
                <span className="text-gold">&#9733;</span>
                <span className="text-background/85 font-semibold tabular">4.9</span>
                <span className="tabular">from 580 reviews</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM RULE + MICROCOPY ===== */}
      <div className="relative border-t border-background/[0.08]">
        <div className="container-narrow py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs font-medium text-background/45 text-center sm:text-left">
            &copy; 2026 Amara &mdash; Presentation Designer &amp; Pitch Deck
            Specialist
          </p>
          <p className="font-sans text-xs font-medium text-background/45 inline-flex items-center gap-1.5">
            Built with Next.js &amp; Tailwind
            <span className="text-coral text-sm" aria-hidden="true">
              &hearts;
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
