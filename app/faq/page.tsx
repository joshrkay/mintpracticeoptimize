import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LeafBullet } from "@/components/mint";
import { CallToAction, Container, PageHero } from "@/components/ui";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Practice Optimization FAQ",
  description:
    "Direct answers about Mint: what a practice optimization partner is, what discovery costs, and how Mint differs from consultants, agencies and MSOs.",
  alternates: { canonical: "/faq" },
};

const faqPage = {
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Faq() {
  return (
    <>
      <JsonLd data={faqPage} />
      <PageHero
        eyebrow="FAQ"
        title="Questions practices ask us."
        lede="Short, direct answers about what Mint is, what it costs to start and how we differ from the alternatives."
      />
      <Container className="max-w-3xl py-16 sm:py-20">
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f, i) => (
            <section key={f.q} className="py-8">
              <h2 className="flex gap-3 font-display text-2xl sm:text-3xl">
                <LeafBullet index={i} />
                {f.q}
              </h2>
              <p className="mt-3 pl-7 text-lg leading-relaxed text-muted">{f.a}</p>
            </section>
          ))}
        </div>
      </Container>
      <CallToAction />
    </>
  );
}
