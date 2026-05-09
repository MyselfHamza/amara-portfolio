"use client";

import React from "react";
import { processSteps } from "@/data/content";
import Reveal from "@/components/RevealOnScroll";

export default function Process() {
  return (
    <section
      id="process"
      className="py-16 sm:py-20 md:py-28 lg:py-32 bg-surface overflow-hidden"
    >
      <div className="container-narrow">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          {/* Badge */}
          <Reveal>
            <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
              <span className="block w-2.5 h-2.5 rounded-full bg-coral" />
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-muted">
                Process
              </span>
            </div>
          </Reveal>

          {/* Display heading */}
          <Reveal>
            <h2 className="responsive-heading leading-[0.95] tracking-tight">
              <span className="font-display font-bold text-muted block">
                How I
              </span>
              <span className="font-display font-extrabold text-foreground block">
                work
              </span>
            </h2>
          </Reveal>

          {/* Gold line */}
          <Reveal className="line-draw">
            <div className="mt-6 w-24 h-[2px] bg-gradient-to-r from-gold to-gold/0" />
          </Reveal>
        </div>

        {/* Process cards with dashed connecting line */}
        <div className="relative">
          {/* Desktop dashed connecting line */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] border-t border-dashed border-border pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 150}>
                <div className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  {/* Oversized background number */}
                  <span className="absolute -top-4 -left-2 font-display font-extrabold text-[6rem] sm:text-[8rem] leading-none text-violet/[0.04] select-none pointer-events-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Step number */}
                  <span className="relative z-10 font-sans text-sm font-medium text-coral">
                    {step.num}
                  </span>

                  {/* Title */}
                  <h3 className="relative z-10 mt-3 font-display font-bold text-lg sm:text-xl text-foreground">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 mt-3 font-sans text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="relative z-10 mt-5 sm:mt-6 w-12 h-0.5 bg-coral transition-all duration-500 group-hover:w-20" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
