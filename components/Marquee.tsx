const items = [
  "Pitch Decks",
  "Investor Decks",
  "PowerPoint",
  "Keynote",
  "Google Slides",
  "Brand Templates",
  "Infographics",
  "Sales Decks",
];

function MarqueeContent() {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-3 sm:gap-4 shrink-0">
          <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-white/20 whitespace-nowrap">
            {item}
          </span>
          <span
            className="text-coral/30 text-[10px] sm:text-xs select-none"
            aria-hidden="true"
          >
            &middot;
          </span>
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <section className="bg-violet-dark py-2 sm:py-3 overflow-hidden relative">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-violet-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-violet-dark to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee">
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 pr-3 sm:pr-4">
          <MarqueeContent />
        </div>
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 pr-3 sm:pr-4">
          <MarqueeContent />
        </div>
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 pr-3 sm:pr-4">
          <MarqueeContent />
        </div>
      </div>
    </section>
  );
}
