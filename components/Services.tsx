"use client";

import React from "react";
import { motion } from "framer-motion";
import { services } from "@/data/content";
import Reveal from "@/components/RevealOnScroll";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 md:py-40 lg:py-48 bg-background overflow-hidden"
    >
      <div className="grain grain-light absolute inset-0 pointer-events-none" />
      {/* Ambient cobalt blob — top-right negative space */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] opacity-[0.18]"
        style={{
          background:
            "radial-gradient(circle, rgba(169,68,56,0.55), transparent 65%)",
          filter: "blur(8px)",
        }}
      />

      <div className="container-narrow relative z-10">
        {/* Header — left-aligned editorial */}
        <div className="mb-20 sm:mb-28 lg:mb-36 max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="block w-6 h-px bg-gold" />
              <span className="font-mono text-xs tracking-[0.3em] text-muted lowercase">
                what i create
              </span>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-display font-black text-foreground text-4xl sm:text-5xl md:text-7xl leading-[0.92] text-left text-balance" style={{ letterSpacing: "-0.04em", fontWeight: 900 }}>
              I design decks that{" "}
              <span className="font-serif italic text-coral" style={{ letterSpacing: "-0.02em", fontWeight: 700 }}>
                win the room.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Editorial rows — alternating asymmetric layout */}
        <div className="flex flex-col">
          {services.map((service, i) => {
            const isReversed = i % 2 === 1;
            const number = String(i + 1).padStart(2, "0");
            const showAmbient = i === 0 || i === 3;

            return (
              <Reveal
                key={service.id}
                delay={i * 80}
                className={isReversed ? "reveal-from-right" : "reveal-from-left"}
              >
                <article
                  className={`group relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-start border-t border-border py-14 sm:py-20 md:py-24 px-4 sm:px-6 transition-colors duration-300 hover:bg-coral/[0.04] ${i === services.length - 1 ? "border-b border-border" : ""}`}
                >
                  {/* Ambient corner blob (selected rows) */}
                  {showAmbient && (
                    <div
                      aria-hidden="true"
                      className={`pointer-events-none absolute ${
                        isReversed ? "left-0" : "right-0"
                      } top-1/2 -translate-y-1/2 w-72 h-72 opacity-[0.12]`}
                      style={{
                        background:
                          "radial-gradient(circle, rgba(169,68,56,0.6), transparent 70%)",
                        filter: "blur(10px)",
                      }}
                    />
                  )}

                  {/* Number column — outlined, fills on hover */}
                  <div
                    className={`md:col-span-3 ${
                      isReversed ? "md:order-2 md:text-right" : "md:order-1"
                    }`}
                  >
                    <span
                      className="block font-display font-black leading-none text-6xl sm:text-8xl md:text-[8rem] lg:text-[10rem] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:tracking-tighter services-number"
                      style={{ fontVariantNumeric: "tabular-nums" }}
                    >
                      {number}
                    </span>
                    <span
                      className="mt-4 inline-block font-mono text-[10px] tracking-[0.3em] uppercase text-muted"
                      style={{ fontVariantNumeric: "tabular-nums" }}
                    >
                      service / {number}
                    </span>
                  </div>

                  {/* Copy column */}
                  <div
                    className={`md:col-span-9 ${
                      isReversed ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <div
                      className="services-title-wrap transition-transform duration-300 ease-out group-hover:translate-x-2"
                    >
                      <h3
                        className="services-title font-display font-bold text-foreground text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight transition-colors duration-300 group-hover:text-coral"
                      >
                        {service.title}
                      </h3>

                      {/* Animated underline */}
                      <motion.span
                        aria-hidden="true"
                        className="block mt-4 h-px bg-coral/70 origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                      />
                    </div>

                    <p className="mt-5 font-serif italic text-lg sm:text-xl text-muted leading-snug max-w-2xl">
                      {service.tagline}
                    </p>

                    <p className="mt-6 max-w-[58ch] font-sans text-base text-foreground/80 leading-relaxed">
                      {service.description}
                    </p>

                    <div
                      className={`mt-8 flex flex-wrap gap-2 ${
                        isReversed ? "md:justify-start" : ""
                      }`}
                    >
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="bg-coral/[0.08] text-coral border border-coral/20 rounded-full px-3 py-1 text-xs uppercase tracking-wider font-sans transition-colors duration-250 hover:bg-coral/[0.15] active:scale-[0.98]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Scoped styles for outlined-number drama */}
      <style jsx>{`
        :global(.services-number) {
          color: transparent;
          -webkit-text-stroke: 1.5px var(--coral, #ff6b6b);
          transition:
            color 300ms ease,
            -webkit-text-stroke-width 300ms ease,
            transform 500ms ease,
            letter-spacing 500ms ease;
        }
        .group:hover :global(.services-number) {
          color: var(--coral, #ff6b6b);
          -webkit-text-stroke-width: 0;
        }
      `}</style>
    </section>
  );
}
