import type { Metadata } from "next";
import { CallToAction, Container, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Discovery",
  description: `A full evaluation of the optimization opportunities in your practice for a flat ${site.discoveryFee}.`,
};

const deliverables = [
  {
    title: "Current state map",
    body: "How the practice runs today, drawn out step by step: phones, scheduling, visits, collections, follow-up and marketing.",
  },
  {
    title: "Optimization opportunities map",
    body: "The same picture with the opportunities marked. Your team sees the before and the after side by side.",
  },
];

const faqs = [
  {
    q: "What happens before discovery?",
    a: "You fill out a short questionnaire for your specialty. It lets us arrive knowing the basics, so the time we spend together goes to your practice.",
  },
  {
    q: "Why map things out before changing anything?",
    a: "Shifting a workflow only sticks when the people doing the work agree with it. A visual before and after gets the whole team on the same page first.",
  },
  {
    q: "What happens after discovery?",
    a: "The opportunities become a playbook, and we execute on it with you. If you would rather take the maps and run with them yourself, they are yours.",
  },
  {
    q: "What does it cost?",
    a: `Discovery is a flat ${site.discoveryFee}. If you sign on with us afterward, that fee rolls into your first month.`,
  },
];

export default function Discovery() {
  return (
    <>
      <PageHero
        eyebrow="Discovery"
        title="A full evaluation of the optimization opportunities in your practice."
        lede="Every engagement starts here. We learn how your practice runs, then show you where it could run better."
      />
      <section>
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[2fr_1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-3xl">What you get</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {deliverables.map((d) => (
                <div key={d.title} className="rounded-2xl border border-line bg-white p-7">
                  <h3 className="font-display text-xl">{d.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="self-start rounded-2xl bg-forest p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70">Flat fee</p>
            <p className="mt-2 font-display text-5xl">{site.discoveryFee}</p>
            <p className="mt-4 leading-relaxed text-white/80">
              Sign on afterward and the fee rolls into your first month.
            </p>
          </aside>
        </Container>
      </section>
      <section className="border-t border-line bg-white">
        <Container className="py-16 sm:py-20">
          <h2 className="font-display text-3xl">Common questions</h2>
          <dl className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="border-t border-line pt-4">
                <dt className="font-semibold">{f.q}</dt>
                <dd className="mt-1.5 leading-relaxed text-muted">{f.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
      <CallToAction />
    </>
  );
}
