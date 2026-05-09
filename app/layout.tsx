import type { Metadata } from "next";
import { Inter_Tight, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-sans-raw",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display-raw",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-raw",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fiverr.com/google_ppt"),
  title: {
    default: "Amara — Presentation Designer & Pitch Deck Specialist",
    template: "%s | Amara",
  },
  description:
    "Pitch decks that win rooms. 5+ years, 500+ projects, 4.9 rating from 580 clients. Trusted by Sky, Acer, and National Grid.",
  authors: [{ name: "Amara" }],
  creator: "Amara",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Amara — Presentation Designer & Pitch Deck Specialist",
    description:
      "Pitch decks that win rooms. 5+ years, 500+ projects, 4.9 rating from 580 clients. Trusted by Sky, Acer, and National Grid.",
    url: "https://www.fiverr.com/google_ppt",
    siteName: "Amara",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amara — Presentation Designer & Pitch Deck Specialist",
    description:
      "Pitch decks that win rooms. 5+ years, 500+ projects, 4.9 rating from 580 clients. Trusted by Sky, Acer, and National Grid.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
