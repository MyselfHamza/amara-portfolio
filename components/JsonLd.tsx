export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Amara",
    jobTitle: "Presentation Designer & Pitch Deck Specialist",
    description:
      "Pitch decks that win rooms. 5+ years, 500+ projects, 4.9 rating from 580 clients. Trusted by Sky, Acer, and National Grid.",
    url: "https://www.fiverr.com/google_ppt",
    sameAs: ["https://www.fiverr.com/google_ppt"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "580",
    },
    knowsAbout: [
      "Pitch deck design",
      "Investor presentations",
      "PowerPoint design",
      "Google Slides",
      "Keynote",
      "Brand templates",
    ],
    knowsLanguage: ["English", "Urdu", "Dutch", "French"],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Presentation Design",
    provider: {
      "@type": "Person",
      name: "Amara",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Design Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pitch Deck Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Presentations" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Identity Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Infographic Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Design Consultation" } },
      ],
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
