import type { Metadata } from "next";
import { IconBadge, type IconName } from "@/components/icons";
import { ButtonLink, CallToAction, Container, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Podiatry Practice Optimization in Arizona",
  description:
    "What Mint looks at in an Arizona podiatry practice, solo or group: orthotics and DME handoffs, collections, recall, patient outreach, reviews and local marketing.",
  alternates: { canonical: "/podiatry" },
};

const areas: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "box",
    title: "Orthotics and DME handoffs",
    body: "When orthotics arrive, the patient should hear about it quickly, and the pair should be waiting at the front desk before they walk in. We look at how devices are ordered, paid for, tracked and dispensed.",
  },
  {
    icon: "card",
    title: "Collections at the front desk",
    body: "Copays collected up front and cash services paid at the time of service. Routine care patients come back often, which is how small uncollected balances turn into large ones.",
  },
  {
    icon: "repeat",
    title: "Recall and rebooking",
    body: "Whether routine foot care patients leave with their next visit booked, and whether patients with diabetes are recalled for their foot exams.",
  },
  {
    icon: "users",
    title: "Patients eligible for more care",
    body: "A review of your patient census to find patients who qualify for services you already offer, followed by outreach from the practice.",
  },
  {
    icon: "star",
    title: "Reviews and local search",
    body: "Patients choose a podiatrist nearby. We invite your most loyal patients to review you on Google and build out your Google Maps and local search presence.",
  },
  {
    icon: "phone",
    title: "Phones, scheduling and documentation",
    body: "How calls are answered, how fast a new patient can be seen, and how much charting follows providers home.",
  },
];

export default function Podiatry() {
  return (
    <>
      <PageHero
        eyebrow="Podiatry"
        title="Practice optimization for Arizona podiatry practices."
        lede="Mint helps solo and group podiatry practices in Arizona tighten operations, find revenue opportunities in their existing patient base and market locally. Podiatry is the first specialty we built our process around."
      />
      <section>
        <Container className="py-16 sm:py-20">
          <h2 className="font-display text-3xl">What we look at in a podiatry practice</h2>
          <dl className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <div key={a.title} className="lift rounded-2xl border border-line bg-white p-6">
                <IconBadge name={a.icon} />
                <dt className="mt-4 font-display text-xl">{a.title}</dt>
                <dd className="mt-2 leading-relaxed text-muted">{a.body}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink href="/discovery">How discovery works</ButtonLink>
            <ButtonLink href="/services" variant="outline">
              All services
            </ButtonLink>
          </div>
        </Container>
      </section>
      <CallToAction />
    </>
  );
}
