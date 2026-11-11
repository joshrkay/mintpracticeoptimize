import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { cityNames } from "@/lib/cities";
import { site } from "@/lib/site";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} | ${site.descriptor}`,
    template: `%s | ${site.brand}`,
  },
  description: site.tagline,
  openGraph: {
    type: "website",
    siteName: `${site.brand} ${site.descriptor}`,
    url: site.url,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

const organization = {
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.brand,
  alternateName: `${site.brand} ${site.descriptor}`,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  email: site.email,
  description: site.tagline,
  areaServed: cityNames.map((name) => ({
    "@type": "City",
    name,
    containedInPlace: { "@type": "State", name: site.region },
  })),
  knowsAbout: [
    "Medical practice optimization",
    "Medical practice operations",
    "Patient scheduling",
    "Patient collections",
    "Clinical documentation workflows",
    "Medical practice marketing",
    "Patient reactivation",
    "Podiatry practice management",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd data={organization} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
