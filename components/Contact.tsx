import Reveal from "@/components/RevealOnScroll";

const FIVERR_URL = "https://www.fiverr.com/google_ppt";

const services = [
  { title: "Business Pitch Decks", desc: "Custom branded decks for businesses & startups", price: "From £70" },
  { title: "Investor Decks & Google Slides", desc: "PowerPoint + Google Slides for investor pitches", price: "From £70" },
  { title: "Pitch Deck Writing & Design", desc: "Content writing + investor-ready design", price: "From £62" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-surface py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left column */}
          <Reveal>
            <div>
              <div className="section-badge">
                <span className="w-2 h-2 rounded-full bg-coral" />
                Work With Me
              </div>

              <h2 className="mt-6 responsive-heading">
                <span className="font-display font-bold text-foreground/30">
                  Let&apos;s build your{" "}
                </span>
                <span className="font-display font-extrabold text-foreground">
                  pitch deck
                </span>
              </h2>

              <p className="mt-6 font-sans text-muted leading-relaxed max-w-md">
                Ready to win the room with an investor-ready deck? Place your
                order on Fiverr and let&apos;s get started. Average response
                time: 1 hour.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-muted">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-coral shrink-0"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span className="tabular">4.9</span> rating from <span className="tabular">580+</span> reviews
                </div>
                <div className="flex items-center gap-3 text-sm text-muted">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-coral shrink-0"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Hourly rate <span className="tabular">£15.48</span> — based in Pakistan
                </div>
                <div className="flex items-center gap-3 text-sm text-muted">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-coral shrink-0"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Available worldwide, remote collaboration
                </div>
                <div className="flex items-center gap-3 text-sm text-muted">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-coral shrink-0"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  English, Urdu, Dutch &amp; French
                </div>
              </div>

              <a
                href={FIVERR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-coral text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-coral-dark hover:shadow-lg hover:shadow-coral/20 active:scale-[0.98] transition-all duration-300"
              >
                View my Fiverr profile
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </a>
            </div>
          </Reveal>

          {/* Right column — Service cards */}
          <div className="flex flex-col gap-4">
            {services.map((svc, i) => (
              <Reveal key={svc.title} delay={i * 120} className="from-right">
                <a
                  href={FIVERR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] transition-all duration-500 border border-border/50 hover:border-coral/20"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif italic text-xl sm:text-2xl text-foreground group-hover:text-coral transition-colors">
                        {svc.title}
                      </h3>
                      <p className="mt-2 font-sans text-sm text-muted">{svc.desc}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="font-serif italic text-2xl sm:text-3xl text-gold tabular">{svc.price}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-coral text-xs font-sans font-semibold uppercase tracking-wider">
                    Order on Fiverr
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal delay={400}>
              <p className="text-center text-muted text-xs mt-2">
                All orders are placed securely through Fiverr with buyer protection
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
