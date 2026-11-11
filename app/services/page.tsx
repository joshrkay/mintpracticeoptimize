import type { Metadata } from "next";
import { CallToAction, Container, PageHero } from "@/components/ui";
import { messaging, pillars } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Operations, revenue opportunities and marketing for independent medical practices.",
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
              <p className="font-display text-lg text-mint-deep">
                {i < pillars.length ? `0${i + 1}` : "Also available"}
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">{pillar.name}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{pillar.summary}</p>
            </div>
            <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {pillar.items.map((item) => (
                <div key={item.title} className="border-t border-line pt-4">
                  <dt className="font-semibold">{item.title}</dt>
                  <dd className="mt-1.5 leading-relaxed text-muted">{item.body}</dd>
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
