"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/content";
import Reveal from "@/components/RevealOnScroll";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

type Project = (typeof projects)[number];

/* ------------------------------------------------
   PROJECT LIGHTBOX MODAL
   ------------------------------------------------ */
function ProjectModal({
  project,
  index,
  onClose,
  onNav,
}: {
  project: Project;
  index: number;
  onClose: () => void;
  onNav: (dir: -1 | 1) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNav(-1);
      if (e.key === "ArrowRight") onNav(1);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNav]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [index]);

  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-start justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 backdrop-blur-md bg-foreground/85" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.4, ease }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-6xl mx-3 sm:mx-4 my-4 sm:my-8 lg:my-12 flex flex-col max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] lg:max-h-[calc(100dvh-6rem)]"
        style={{ boxShadow: "0 40px 90px -20px rgba(28,26,23,0.55)" }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-[#252F25]/95 backdrop-blur-md rounded-t-2xl border border-white/[0.08] border-b-0">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <span className="font-serif italic text-xl sm:text-2xl text-gold/50 shrink-0">
              {num}
            </span>
            <div className="min-w-0">
              <h3 className="font-serif italic text-white text-base sm:text-lg leading-tight truncate">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 sm:gap-3 mt-0.5">
                <span className="font-sans text-xs text-white/40 truncate">
                  {project.client}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-coral/80 shrink-0">
                  {project.category}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button
              onClick={() => onNav(-1)}
              className="p-1.5 sm:p-2 rounded-lg hover:bg-white/[0.06] transition-colors text-white/40 hover:text-white"
              aria-label="Previous project"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5l-5 5 5 5" />
              </svg>
            </button>
            <span className="font-mono text-xs text-white/30 tabular-nums min-w-[3rem] text-center hidden sm:inline">
              {index + 1} / {projects.length}
            </span>
            <button
              onClick={() => onNav(1)}
              className="p-1.5 sm:p-2 rounded-lg hover:bg-white/[0.06] transition-colors text-white/40 hover:text-white"
              aria-label="Next project"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 5l5 5-5 5" />
              </svg>
            </button>
            <button
              onClick={onClose}
              className="ml-1 sm:ml-2 p-1.5 sm:p-2 rounded-lg hover:bg-white/[0.06] transition-colors text-white/40 hover:text-white"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 5l10 10M15 5L5 15" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable body */}
        <div
          ref={scrollRef}
          className="overflow-y-auto overscroll-contain rounded-b-2xl border border-white/[0.08] border-t-0 bg-[#1C1A17]"
        >
          {/* Full image with gradient border + ring */}
          <div className="relative w-full bg-black flex items-center justify-center p-3 sm:p-5">
            <div
              className="relative w-full rounded-lg p-[4px]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(181,137,76,0.45), rgba(169,68,56,0.25) 40%, rgba(58,74,60,0.5))",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={(project as Project & { image?: string }).image ?? ""}
                alt={project.title}
                className="w-full h-auto max-h-[60dvh] sm:max-h-[70dvh] object-contain rounded-md ring-1 ring-gold/20 bg-black"
              />
            </div>
          </div>

          {/* Text panel */}
          <div className="bg-background text-foreground p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
              <div className="lg:col-span-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                  about this project
                </span>
                <p className="mt-3 font-serif italic text-xl sm:text-2xl leading-snug text-foreground">
                  {project.description}
                </p>
              </div>

              <div className="space-y-5 lg:border-l lg:border-foreground/10 lg:pl-8">
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted mb-1.5">
                    client
                  </span>
                  <span className="font-sans text-sm font-medium text-foreground">
                    {project.client}
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted mb-1.5">
                    category
                  </span>
                  <span className="font-sans text-sm font-medium text-coral">
                    {project.category}
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted mb-1.5">
                    project cost
                  </span>
                  <span className="font-sans text-sm font-medium text-foreground">
                    $50 – $200
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted mb-1.5">
                    duration
                  </span>
                  <span className="font-sans text-sm font-medium text-foreground">
                    1 – 7 days
                  </span>
                </div>

                <a
                  href="https://www.fiverr.com/google_ppt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-full bg-foreground text-background font-sans text-xs font-semibold uppercase tracking-[0.18em] hover:bg-coral transition-colors duration-300"
                >
                  Hire on Fiverr
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3.33 8h9.34" />
                    <path d="M8.67 3.33L13.33 8l-4.66 4.67" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------
   PROJECT CARD — editorial w/ spotlight border
   ------------------------------------------------ */
function ProjectCard({
  project,
  index,
  onOpen,
  aspect = "aspect-[4/3]",
}: {
  project: Project;
  index: number;
  onOpen: () => void;
  aspect?: string;
}) {
  const num = String(index + 1).padStart(2, "0");
  const imageSrc = (project as Project & { image?: string }).image ?? "";
  const cardRef = useRef<HTMLButtonElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <button
      ref={cardRef}
      type="button"
      onClick={onOpen}
      onMouseMove={handleMove}
      className="spotlight-card group relative block w-full h-full text-left cursor-pointer rounded-2xl overflow-hidden bg-[#252F25] ring-1 ring-inset ring-white/[0.06] transition-[transform,box-shadow,ring-color] duration-300 ease-out hover:-translate-y-0.5 hover:ring-[rgba(169,68,56,0.35)]"
      aria-label={`Open ${project.title}`}
    >
      <div className={`relative w-full ${aspect} overflow-hidden`}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 66vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:saturate-[1.1]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#3A4A3C] to-[#A94438]" />
        )}

        {/* Vertical index ribbon — left edge, rotated */}
        <span
          className="absolute bottom-5 left-3 sm:left-4 z-20 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/75 origin-bottom-left -rotate-90 select-none pointer-events-none whitespace-nowrap"
          aria-hidden="true"
        >
          {num} / project
        </span>

        {/* Bottom dark gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

        {/* Project meta strip */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5 lg:p-6 pl-10 sm:pl-12 flex flex-col gap-1.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-coral">
            {project.category}
          </span>
          <h3 className="font-serif italic text-white text-lg sm:text-xl lg:text-2xl leading-tight tracking-tight">
            {project.title}
            <span className="font-sans not-italic text-xs text-white/55 ml-2 align-middle">
              — {project.client}
            </span>
          </h3>
        </div>

        {/* Hover affordance */}
        <div className="absolute top-3 right-4 sm:top-4 sm:right-5 z-20 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
              view
            </span>
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none" className="text-white">
              <path d="M5 9h8m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Spotlight border — radial gradient that follows cursor, masked to a 1px ring */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          padding: "1px",
          background:
            "radial-gradient(280px circle at var(--mx,50%) var(--my,50%), rgba(169,68,56,0.55), transparent 60%)",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </button>
  );
}

/* ------------------------------------------------
   PORTFOLIO SECTION — asymmetric editorial grid
   ------------------------------------------------ */
export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleNav = useCallback((dir: -1 | 1) => {
    setActiveIndex((prev) => {
      if (prev === null) return null;
      const next = prev + dir;
      if (next < 0) return projects.length - 1;
      if (next >= projects.length) return 0;
      return next;
    });
  }, []);

  const handleClose = useCallback(() => setActiveIndex(null), []);

  // Editorial layout pattern (12-col grid).
  // Row 1: hero (8) + narrow (4)
  // Row 2: 4 + 4 + 4
  // Row 3: 4 + 8
  // Row 4: full-width feature (12)
  const layout = (i: number) => {
    const m = i % 8;
    switch (m) {
      case 0: return { col: "lg:col-span-8", aspect: "aspect-[16/10]" };
      case 1: return { col: "lg:col-span-4", aspect: "aspect-[4/5]" };
      case 2: return { col: "lg:col-span-4", aspect: "aspect-[4/3]" };
      case 3: return { col: "lg:col-span-4", aspect: "aspect-[4/3]" };
      case 4: return { col: "lg:col-span-4", aspect: "aspect-[4/3]" };
      case 5: return { col: "lg:col-span-4", aspect: "aspect-[4/5]" };
      case 6: return { col: "lg:col-span-8", aspect: "aspect-[16/10]" };
      case 7:
      default: return { col: "lg:col-span-12", aspect: "aspect-[21/9]" };
    }
  };

  return (
    <>
      <style jsx global>{`
        .spotlight-card:hover {
          box-shadow: 0 30px 60px -20px rgba(169, 68, 56, 0.4),
            0 10px 25px -10px rgba(28, 26, 23, 0.35);
        }
      `}</style>

      <AnimatePresence>
        {activeIndex !== null && (
          <ProjectModal
            project={projects[activeIndex]}
            index={activeIndex}
            onClose={handleClose}
            onNav={handleNav}
          />
        )}
      </AnimatePresence>

      <section
        id="portfolio"
        className="bg-background section-padding overflow-hidden"
      >
        <div className="container-narrow relative z-10">
          {/* ===== HEADER (left-aligned editorial) ===== */}
          <div className="mb-12 sm:mb-16 lg:mb-20 max-w-4xl">
            <Reveal>
              <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
                <span className="block w-2 h-2 rounded-full bg-coral" />
                <span className="font-mono text-[11px] tracking-[0.3em] lowercase text-muted">
                  selected work
                </span>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="responsive-heading font-serif italic font-bold text-foreground leading-[0.95] tracking-tight">
                the deck collection
              </h2>
            </Reveal>
          </div>

          {/* ===== ASYMMETRIC EDITORIAL GRID ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-7">
            {projects.map((p, i) => {
              const { col, aspect } = layout(i);
              return (
                <Reveal
                  key={p.title}
                  delay={i * 70}
                  className={`sm:col-span-1 ${col}`}
                >
                  <ProjectCard
                    project={p}
                    index={i}
                    onOpen={() => setActiveIndex(i)}
                    aspect={aspect}
                  />
                </Reveal>
              );
            })}
          </div>

          {/* ===== FOOTER LINK ===== */}
          <div className="mt-14 sm:mt-20 text-center">
            <Reveal>
              <a
                href="https://www.fiverr.com/google_ppt"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-baseline gap-2 font-serif italic text-xl sm:text-2xl text-foreground/80 hover:text-coral transition-colors duration-300"
              >
                more on fiverr
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
