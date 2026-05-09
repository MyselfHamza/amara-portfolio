import Image from "next/image";
import Reveal from "@/components/RevealOnScroll";

const FIVERR_URL = "https://www.fiverr.com/google_ppt";

const TOOLS = ["PPT", "KEY", "SLIDES", "FIGMA"] as const;

// Inline noise SVG for grain overlay
const NOISE_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>`,
  );

function GoldStar() {
  return (
    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-white py-20 sm:py-28 md:py-36 lg:py-44 overflow-hidden"
    >
      {/* Grain overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: `url("${NOISE_SVG}")` }}
      />

      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-10 md:gap-14 lg:gap-20 items-start">
          {/* Left Column — 5/8 */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="section-badge">
                <span className="w-2 h-2 rounded-full bg-coral" />
                About
              </div>

              <h2 className="mt-6 responsive-heading">
                <span className="font-display font-bold text-foreground/30">
                  Meet{" "}
                </span>
                <span className="font-display font-extrabold text-foreground">
                  Amara
                </span>
              </h2>

              <div className="mt-6 w-16 h-0.5 bg-gold" />

              <p className="mt-8 max-w-[58ch] font-sans text-muted leading-relaxed">
                I&apos;m a presentation designer with 5+ years specialising in
                investor pitch decks, sales presentations, corporate profiles,
                and branded PowerPoint and Keynote templates. Through Amara
                Presentation Studio, I&apos;ve delivered 500+ projects with a
                99% satisfaction rate &mdash; pairing strategic structure with
                clean, modern visual design.
              </p>
              <p className="mt-5 max-w-[58ch] font-sans text-muted leading-relaxed">
                Based in Pakistan, I work with startups, founders, and
                corporate teams worldwide &mdash; including Sky, Acer, and
                National Grid. I design across PowerPoint, Keynote, Google
                Slides, Canva, and Figma, and collaborate in English, Urdu,
                Dutch, and French. Every deck starts with your story and ends
                with slides built to win the room.
              </p>

              {/* Hire CTA — animated arrow + growing underline */}
              <a
                href={FIVERR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="about-cta group/cta mt-10 inline-flex items-center gap-2 font-sans text-sm font-semibold text-coral hover:text-coral-dark transition-colors active:scale-[0.98]"
              >
                <span className="relative">
                  Hire me on Fiverr
                  <span
                    aria-hidden="true"
                    className="absolute left-0 -bottom-0.5 h-px w-full bg-coral origin-left scale-x-0 transition-transform duration-300 ease-out group-hover/cta:scale-x-100"
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 ease-out group-hover/cta:translate-x-2"
                >
                  &rarr;
                </span>
              </a>

              {/* Mini stats — stock-ticker columns divided by gold lines */}
              <div
                className="mt-12 sm:mt-14 flex flex-wrap sm:inline-flex sm:flex-nowrap divide-x divide-gold/30 border-y border-gold/20 max-w-full"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {[
                  { value: "5+", label: "Years" },
                  { value: "500+", label: "Projects" },
                  { value: "4.9", label: "Rating" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-1 sm:flex-none flex-col items-center justify-center px-4 sm:px-10 py-4 min-w-[5rem] sm:min-w-[6rem]"
                  >
                    <div
                      className="font-serif italic font-black text-2xl sm:text-3xl md:text-4xl text-gold leading-none"
                      style={{ fontVariantNumeric: "tabular-nums" }}
                    >
                      {item.value}
                    </div>
                    <div className="mt-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column — 3/8, bleeds upward */}
          <div className="lg:col-span-3 lg:-mt-12 flex flex-col gap-4">
            {/* Editorial signature card — compact horizontal business-card */}
            <Reveal delay={0} className="from-right">
              <div className="relative w-full rounded-2xl overflow-hidden bg-foreground px-6 py-7 sm:px-8 sm:py-8 shadow-[0_30px_80px_-30px_rgba(169,68,56,0.45)] ring-1 ring-inset ring-white/[0.06]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 50% 0%, rgba(169,68,56,0.45), transparent 60%)",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute top-3 left-3 w-3 h-3 border-l border-t border-background/30"
                />
                <div
                  aria-hidden="true"
                  className="absolute top-3 right-3 w-3 h-3 border-r border-t border-background/30"
                />

                {/* Horizontal row: photo + name/role */}
                <div className="relative z-10 flex items-center gap-4 text-background">
                  <div className="relative shrink-0 w-[72px] h-[72px] rounded-full p-[2px] bg-gradient-to-br from-coral to-gold">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-foreground">
                      <Image
                        src="/portfolio/profile.jpg"
                        alt="Amara"
                        fill
                        sizes="72px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col min-w-0">
                    <div className="font-serif italic font-black text-2xl sm:text-3xl leading-none text-background">
                      Amara
                    </div>
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-background/60">
                      Presentation Designer
                    </div>
                  </div>
                </div>

                {/* Dotted divider */}
                <div
                  aria-hidden="true"
                  className="relative z-10 mt-6 flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-gold/80" />
                  <span className="w-8 h-px bg-gold/40" />
                  <span className="w-1.5 h-1.5 rotate-45 bg-coral" />
                  <span className="flex-1 h-px bg-gold/30" />
                  <span className="w-1 h-1 rounded-full bg-gold/80" />
                </div>

                <p className="relative z-10 mt-4 font-serif italic text-sm sm:text-base text-background/85">
                  &mdash; making decks since &rsquo;21
                </p>

                <div className="relative z-10 mt-5 flex flex-wrap items-center gap-2">
                  {TOOLS.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 rounded-md border border-background/15 bg-background/[0.04] font-mono text-[9px] tracking-[0.15em] text-background/60"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="from-right">
              <div className="bg-surface rounded-2xl p-6 sm:p-8 ring-1 ring-inset ring-foreground/[0.04] transition-transform duration-300 hover:-translate-y-0.5">
                <h3 className="font-display font-semibold text-foreground text-base sm:text-lg">
                  Trusted Fiverr Seller
                </h3>
                <div className="mt-3 flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <GoldStar key={i} />
                  ))}
                </div>
                <p
                  className="mt-2 font-sans text-muted text-sm"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  4.9 rating from 580 reviews &middot; 99% satisfaction
                </p>
              </div>
            </Reveal>

            <Reveal delay={240} className="from-right">
              <div className="bg-surface rounded-2xl p-6 sm:p-8 ring-1 ring-inset ring-foreground/[0.04] transition-transform duration-300 hover:-translate-y-0.5">
                <h3 className="font-display font-semibold text-foreground text-base sm:text-lg">
                  Global Reach
                </h3>
                <p className="mt-2 font-sans text-muted text-sm">
                  English &middot; Urdu &middot; Dutch &middot; French
                </p>
                <p className="mt-1 font-sans text-muted/70 text-sm">
                  Based in Pakistan &middot; clients worldwide
                </p>
              </div>
            </Reveal>

            <Reveal delay={360} className="from-right">
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-surface rounded-xl p-3 sm:p-4 text-center transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-coral mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                  <div className="mt-2 font-sans text-[10px] sm:text-xs font-semibold text-foreground">
                    Creativity
                  </div>
                </div>

                <div className="bg-surface rounded-xl p-3 sm:p-4 text-center transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-coral mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="mt-2 font-sans text-[10px] sm:text-xs font-semibold text-foreground">
                    Precision
                  </div>
                </div>

                <div className="bg-surface rounded-xl p-3 sm:p-4 text-center transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-coral mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                    />
                  </svg>
                  <div className="mt-2 font-sans text-[10px] sm:text-xs font-semibold text-foreground">
                    Communication
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
