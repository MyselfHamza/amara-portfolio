"use client";

import { testimonials } from "@/data/content";
import Reveal from "@/components/RevealOnScroll";

function GoldStar() {
  return (
    <svg
      className="w-3.5 h-3.5 text-gold"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

// Lightweight per-card price/duration meta for editorial rhythm.
const META = [
  { price: "$120", duration: "3 days" },
  { price: "$180", duration: "5 days" },
  { price: "$95", duration: "2 days" },
  { price: "$150", duration: "4 days" },
  { price: "$200", duration: "6 days" },
  { price: "$110", duration: "3 days" },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-surface section-padding overflow-hidden"
    >
      <div className="container-narrow relative z-10">
        {/* ===== HEADER (left-aligned editorial) ===== */}
        <div className="mb-12 sm:mb-16 lg:mb-20 max-w-4xl">
          <Reveal>
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
              <span className="block w-2 h-2 rounded-full bg-coral" />
              <span className="font-mono text-[11px] tracking-[0.3em] lowercase text-muted">
                client voices
              </span>
            </div>
          </Reveal>
          <Reveal>
            <h2 className="responsive-heading font-serif italic font-bold text-foreground leading-[0.95] tracking-tight">
              what people say
            </h2>
          </Reveal>
        </div>

        {/* ===== MASONRY WALL (CSS columns) ===== */}
        <div className="columns-1 md:columns-2 gap-6 lg:gap-8 [column-fill:_balance]">
          {testimonials.map((t, i) => {
            const meta = META[i % META.length];
            return (
              <Reveal key={t.name + i} delay={i * 80}>
                <article className="testimonial-card relative mb-6 lg:mb-8 break-inside-avoid rounded-2xl bg-surface border border-border p-7 sm:p-8 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(169,68,56,0.25)]">
                  {/* Giant quote watermark */}
                  <span
                    aria-hidden="true"
                    className="absolute top-3 left-4 font-serif text-[6rem] leading-none text-coral/[0.08] select-none pointer-events-none"
                  >
                    ❝
                  </span>

                  {/* Top row: stars + meta */}
                  <div className="relative flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-0.5">
                      {[...Array(t.rating)].map((_, idx) => (
                        <GoldStar key={idx} />
                      ))}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                      {meta.price} · {meta.duration}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="relative font-serif italic text-lg sm:text-xl leading-snug text-foreground">
                    {t.quote}
                  </blockquote>

                  {/* Attribution */}
                  <div className="relative mt-6 pt-5 border-t border-border/70">
                    <div className="font-sans text-sm font-semibold text-foreground tracking-tight">
                      {t.name}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted mt-1">
                      {t.title}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Trust bar */}
        <div className="mt-14 sm:mt-16 pt-6 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
            <span>329 five-star reviews</span>
            <span className="text-gold/60" aria-hidden="true">·</span>
            <span>21+ industries</span>
            <span className="text-gold/60" aria-hidden="true">·</span>
            <span>1-hour response</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-card:hover {
          box-shadow: 0 24px 50px -20px rgba(169, 68, 56, 0.35),
            0 8px 20px -10px rgba(28, 26, 23, 0.25);
        }
      `}</style>
    </section>
  );
}
