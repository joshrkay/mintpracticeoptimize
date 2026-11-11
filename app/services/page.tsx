import type { Metadata } from "next";
import { GrowingMint, LeafBullet } from "@/components/mint";
import { CallToAction, Container, PageHero } from "@/components/ui";
import { messaging, pillars } from "@/lib/services";

export const metadata: Metadata = {
  title: "Medical Practice Optimization Services",
  description:
    "What Mint does for independent medical practices: operations, revenue opportunities, marketing and patient messaging.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Operations, revenue opportunities and marketing."
        lede="Three pillars, one playbook. Discovery tells us which of these matter most for your practice, and we execute in that order."
      />
      {[...pillars, { id: "messaging", ...messaging }].map((pillar, i) => (
        <section key={pillar.id} id={pillar.id} className="scroll-mt-16 border-b border-line odd:bg-white">
          <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <GrowingMint className="grow-on-reveal relative -ml-3 w-28" />
              <p className="mt-2 font-display text-lg text-mint-deep">
                {i < pillars.length ? `0${i + 1}` : "Also available"}
              </p>
              <h2 className="mt-1 font-display text-4xl leading-tight tracking-tight sm:text-5xl">{pillar.name}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{pillar.summary}</p>
            </div>
            <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {pillar.items.map((item, j) => (
                <div key={item.title} className="flex gap-3 border-t border-line pt-4">
                  <LeafBullet index={j} />
                  <div>
                    <dt className="font-semibold">{item.title}</dt>
                    <dd className="mt-1.5 leading-relaxed text-muted">{item.body}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      ))}
      <CallToAction />
    </>
  );
}
