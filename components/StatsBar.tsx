"use client";

import { useRef, useEffect, useCallback } from "react";
import { stats } from "@/data/content";
import Reveal from "@/components/RevealOnScroll";

function parseNumericValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseFloat(match[1]), suffix: match[2] };
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function StatItem({
  value,
  label,
  detail,
  isLast,
}: {
  value: string;
  label: string;
  detail: string;
  isLast: boolean;
}) {
  const valueRef = useRef<HTMLSpanElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current || !valueRef.current) return;
    hasAnimated.current = true;

    const { num, suffix } = parseNumericValue(value);
    const isDecimal = value.includes(".");
    const duration = 2000;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      const current = eased * num;

      if (valueRef.current) {
        valueRef.current.textContent = isDecimal
          ? current.toFixed(1) + suffix
          : Math.floor(current) + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [value]);

  useEffect(() => {
    if (!itemRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(itemRef.current);

    return () => observer.disconnect();
  }, [animate]);

  return (
    <div ref={itemRef} className="relative text-center px-2 sm:px-4">
      <span
        ref={valueRef}
        className="font-serif italic font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold leading-none tabular"
        style={{ filter: "drop-shadow(0 0 20px color-mix(in oklab, var(--gold) 35%, transparent))" }}
      >
        0
      </span>
      <p className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-white/40 mt-2">
        {label}
      </p>
      <p className="font-sans text-[10px] sm:text-[11px] text-white/20 mt-1">
        {detail}
      </p>

      {/* Vertical divider on desktop */}
      {!isLast && (
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-white/[0.08]" />
      )}
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="relative bg-violet-dark py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Decorative radial spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(28,26,23,0.5) 0%, transparent 70%)",
        }}
      />
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <Reveal>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 sm:gap-y-12 sm:gap-x-8">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              detail={stat.detail}
              isLast={i === stats.length - 1}
            />
          ))}
        </div>

        <div className="relative z-10 mt-12 sm:mt-16 max-w-4xl mx-auto px-4 sm:px-6">
          <p className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-white/40 text-center">
            Trusted by
          </p>
          <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-4 sm:gap-8 items-center text-white/60">
            {[
              { name: "Sky", src: "/logos/sky.svg" },
              { name: "Acer", src: "/logos/acer.svg" },
              { name: "National Grid", src: "/logos/national-grid.svg" },
            ].map(({ name, src }) => (
              <div key={name} className="flex items-center justify-center">
                <img
                  src={src}
                  alt={name}
                  aria-label={name}
                  className="h-8 sm:h-10 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
