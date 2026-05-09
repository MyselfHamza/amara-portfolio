"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const grainSvg =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.85' numOctaves='3'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")";

const marqueeItems = [
  "5+ years",
  "500+ projects",
  "4.9 ★ from 580 reviews",
  "99% satisfaction",
  "Avg response 1 hour",
  "Investor decks",
  "Pitch decks",
  "Google Slides",
];

const deckStack = [
  {
    src: "/portfolio/01-investor-pitch-deck.jpg",
    alt: "Investor pitch deck cover",
    rotate: -6,
    translate: "translate(-18%, 14%)",
    z: 10,
    shadow: "0 40px 80px -20px rgba(169, 68, 56, 0.45)",
    delay: 0.35,
  },
  {
    src: "/portfolio/05-astella-finance.jpg",
    alt: "Astella finance deck cover",
    rotate: 4,
    translate: "translate(2%, -2%)",
    z: 30,
    shadow: "0 50px 100px -25px rgba(181, 137, 76, 0.55)",
    delay: 0.2,
  },
  {
    src: "/portfolio/02-ccs-presentation.jpg",
    alt: "CCS presentation cover",
    rotate: -3,
    translate: "translate(20%, -16%)",
    z: 20,
    shadow: "0 40px 80px -20px rgba(28, 26, 23, 0.7)",
    delay: 0.5,
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] overflow-hidden bg-foreground text-background flex flex-col"
    >
      <div className="grain absolute inset-0 pointer-events-none" />

      {/* ===== BACKGROUND ===== */}
      {/* Asymmetric warm spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 78% 30%, rgba(181,137,76,0.18) 0%, rgba(181,137,76,0.04) 40%, transparent 75%)",
        }}
      />
      {/* Coral counter-glow lower left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 10% 85%, rgba(169,68,56,0.10) 0%, transparent 65%)",
        }}
      />
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-30" />

      {/* Oversized faint serif italic ghost "A" — watermark off the left edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute select-none font-serif italic font-black text-coral/[0.04] leading-none"
        style={{
          fontSize: "40vw",
          left: "-8vw",
          top: "8vh",
          transform: "rotate(-8deg)",
          letterSpacing: "-0.05em",
        }}
      >
        A
      </div>

      {/* Grain overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: grainSvg,
          mixBlendMode: "overlay",
          opacity: 0.08,
        }}
      />

      {/* Navbar spacer */}
      <div className="h-[64px] sm:h-[72px]" />

      {/* ===== MAIN CONTENT — magazine cover, asymmetric 12-col ===== */}
      <div className="relative z-10 flex-1 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT — cols 1–7 */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* AMARA wordmark — massive, left-aligned */}
            <motion.h1
              {...fadeUp(0.15)}
              className="font-display font-black text-background leading-[0.82]"
              style={{
                fontSize: "clamp(3rem, 18vw, 15rem)",
                letterSpacing: "-0.04em",
                fontWeight: 900,
                textWrap: "balance",
              }}
            >
              AMARA
            </motion.h1>

            {/* Headline — serif italic */}
            <motion.h2
              {...fadeUp(0.3)}
              className="mt-6 sm:mt-8 font-serif italic text-coral text-3xl sm:text-5xl lg:text-6xl leading-[1.02] max-w-3xl"
              style={{
                letterSpacing: "-0.02em",
                fontWeight: 700,
                textWrap: "balance",
              }}
            >
              Designs decks that win the room.
            </motion.h2>

            {/* Description */}
            <motion.p
              {...fadeUp(0.42)}
              className="mt-5 sm:mt-6 max-w-xl font-sans text-sm sm:text-base lg:text-lg font-medium text-background/70 leading-relaxed"
              style={{ textWrap: "pretty" }}
            >
              Investor pitches, sales decks, and branded templates — built in
              1–7 days. Strategic structure, clean modern visuals.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.55)}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7"
            >
              <a
                href="https://www.fiverr.com/google_ppt"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 font-sans text-sm sm:text-base font-bold text-background bg-coral hover:bg-coral-dark px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:translate-y-[-2px] active:scale-[0.98] shadow-[0_18px_40px_-10px_rgba(169,68,56,0.55)] w-full sm:w-auto"
              >
                Hire on Fiverr
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#portfolio"
                className="group relative inline-flex items-center self-start sm:self-auto font-sans text-sm sm:text-base font-bold text-background/85 hover:text-background transition-colors"
              >
                <span className="relative">
                  View work
                  <span
                    aria-hidden="true"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-coral origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                  />
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Inline elegant stat row — replaces signature stack */}
            <motion.div
              {...fadeUp(0.68)}
              className="mt-10 sm:mt-12 flex flex-wrap items-baseline gap-x-7 sm:gap-x-9 gap-y-3"
            >
              {[
                { v: "500+", l: "projects" },
                { v: "4.9", l: "★ · 580 reviews" },
                { v: "99%", l: "satisfaction" },
                { v: "1h", l: "avg response" },
              ].map((s, i, arr) => (
                <div key={s.l} className="flex items-baseline gap-3">
                  <span
                    className="font-display font-black text-background text-2xl sm:text-3xl"
                    style={{
                      fontVariantNumeric: "tabular-nums",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {s.v}
                  </span>
                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-background/55">
                    {s.l}
                  </span>
                  {i < arr.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden sm:inline-block ml-4 h-5 w-px bg-background/15"
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — cols 8–12 — DECK THUMBNAIL STACK (no profile photo) */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative overflow-hidden lg:overflow-visible">
            <div className="relative mx-auto lg:mx-0 aspect-[4/5] w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none">
              {/* Tinted glow under stack */}
              <div
                aria-hidden="true"
                className="absolute inset-x-6 top-1/2 -translate-y-1/2 h-2/3 blur-3xl rounded-[60%]"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(181,137,76,0.35) 0%, rgba(169,68,56,0.18) 45%, transparent 75%)",
                }}
              />

              {/* Deck cards */}
              {deckStack.map((d, i) => (
                <motion.div
                  key={d.src}
                  initial={{ opacity: 0, y: 60, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, rotate: d.rotate }}
                  transition={{ duration: 0.9, delay: d.delay, ease }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ zIndex: d.z }}
                >
                  <div
                    className="relative aspect-[4/3] w-[78%] sm:w-[82%] rounded-xl overflow-hidden ring-1 ring-background/10"
                    style={{
                      transform: d.translate,
                      boxShadow: d.shadow,
                      backgroundColor: "var(--foreground)",
                    }}
                  >
                    <Image
                      src={d.src}
                      alt={d.alt}
                      fill
                      sizes="(min-width: 1024px) 35vw, 80vw"
                      priority={i === 1}
                      className="object-cover"
                    />
                    {/* subtle inner gradient for legibility */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(28,26,23,0) 60%, rgba(28,26,23,0.35) 100%)",
                      }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Corner spec tag — bottom-right floating */}
              <motion.div
                {...fadeUp(0.7)}
                className="absolute -bottom-2 right-0 z-40 inline-flex items-center gap-2 rounded-full border border-background/15 bg-foreground/70 backdrop-blur-md px-3 py-1.5"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-coral" />
                </span>
                <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-background/75">
                  Booking · 1h reply
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== TRUSTED-BY ROW ===== */}
      <motion.div
        {...fadeUp(0.7)}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pb-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <span className="font-serif italic text-background/55 text-sm sm:text-base lowercase">
            worked with
          </span>
          <div className="flex flex-wrap items-center gap-x-8 sm:gap-x-10 gap-y-3 text-background/55">
            <img
              src="/logos/sky.svg"
              alt="Sky"
              aria-label="Sky"
              className="h-6 sm:h-8 w-auto brightness-0 invert opacity-80"
            />
            <img
              src="/logos/acer.svg"
              alt="Acer"
              aria-label="Acer"
              className="h-6 sm:h-8 w-auto brightness-0 invert opacity-80"
            />
            <img
              src="/logos/national-grid.svg"
              alt="National Grid"
              aria-label="National Grid"
              className="h-6 sm:h-8 w-auto brightness-0 invert opacity-80"
            />
          </div>
        </div>
      </motion.div>

      {/* ===== STATS MARQUEE ===== */}
      <div className="relative z-10 w-full overflow-hidden border-t border-background/10 bg-background/[0.02] py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, repeat) => (
            <div key={repeat} className="flex items-center shrink-0">
              {marqueeItems.map((item, idx) => (
                <span
                  key={`${repeat}-${idx}`}
                  className="flex items-center font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-background/65"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  <span className="px-6">{item}</span>
                  <span className="text-coral/70" aria-hidden="true">
                    ·
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
