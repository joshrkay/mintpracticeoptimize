import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero } from "@/components/ui";
import { cities } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Every page on the Mint website: services, discovery, podiatry, the Phoenix-area cities we serve, and how to reach us.",
  alternates: { canonical: "/site-map" },
};

const groups: { title: string; links: [label: string, href: string][] }[] = [
  {
    title: "Mint",
    links: [
      ["Home", "/"],
      ["Services", "/services"],
      ["Discovery", "/discovery"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Who we work with",
    links: [
      ["Podiatry practices", "/podiatry"],
      ["For your manager and staff", "/for-your-team"],
    ],
  },
  {
    title: "Learn more",
    links: [
      ["How we compare", "/compare"],
      ["FAQ", "/faq"],
    ],
  },
  {
    title: "Arizona",
    links: [["Where we work", "/arizona"], ...cities.map((c): [string, string] => [c.name, `/arizona/${c.slug}`])],
  },
];

export default function SiteMap() {
  return (
    <>
      <PageHero eyebrow="Sitemap" title="Every page on this site." lede="A plain list of where everything is." />
      <Container className="grid gap-x-10 gap-y-12 py-16 sm:grid-cols-2 sm:py-20 lg:grid-cols-4">
        {groups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="font-display text-2xl">{group.title}</h2>
            <ul className="mt-3 border-t border-line">
              {group.links.map(([label, href]) => (
                <li key={href} className="border-b border-line">
                  <Link href={href} className="flex min-h-12 items-center text-lg text-mint-deep hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>
    </>
  );
}
