import type { Metadata } from "next";
import Link from "next/link";
import { DepthHero } from "@/components/DepthHero";
import { JsonLd } from "@/components/JsonLd";
import { ValleyMap } from "@/components/graphics";
import { GrowStory, type Stage } from "@/components/GrowStory";
import { IconBadge, type IconName } from "@/components/icons";
import { SymptomCards, type Symptom } from "@/components/SymptomCards";
import { PillarsPan } from "@/components/scenes";
import { ButtonLink, CallToAction, Container, Eyebrow } from "@/components/ui";
import { cityNames, listNames } from "@/lib/cities";
import { pillars } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const symptoms: Symptom[] = [
  {
    today: "The phone rings out while the front desk is checking someone in.",
    mint: "Every call answered, or called back the same day.",
  },
  {
    today: "Copays get billed after the visit, then chased for months.",
    mint: "Copays collected up front, before the visit starts.",
  },
  {
    today: "You finish your charts at the kitchen table.",
    mint: "Documentation that keeps pace with the day.",
  },
  {
    today:
      "Orthotics sit in the back room waiting for a pickup nobody scheduled.",
    mint: "Orthotics at the front desk before the patient walks in.",
  },
  {
    today: "Patients who qualify for more care are never told.",
    mint: "Eligible patients hear from the practice directly.",
  },
  {
    today: "Your Google rating reflects your three angriest patients.",
    mint: "Reviews from the patients who have stayed for years.",
  },
];

const stages: Stage[] = [
  {
    name: "Seed",
    title: "Questionnaire",
    body: "A short set of questions before we meet, so our first conversation is about your practice.",
  },
  {
    name: "Sprout",
    title: "Discovery",
    body: "A full evaluation. You get a map of how the practice runs today and a map of the optimization opportunities.",
    note: `Flat ${site.discoveryFee}. Rolls into month one if you sign on.`,
  },
  {
    name: "Leaf",
    title: "Playbook",
    body: "The opportunities become a prioritized plan your team has seen and bought into.",
  },
  {
    name: "Mint",
    title: "Execution",
    body: "We stay and do the work with you. Every fix is a new leaf, and no binder is left on the desk.",
  },
];

const sizes: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "user",
    title: "Solo practices",
    body: "You are the doctor, the owner and often the manager. We take the business work off your plate so your time goes to patients.",
  },
  {
    icon: "users",
    title: "Group practices",
    body: "More providers and locations mean more ways of doing the same thing. We get everyone running one way, with a plan every partner has seen.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@type": "WebSite",
          name: `${site.brand} ${site.descriptor}`,
          alternateName: site.brand,
          url: site.url,
          publisher: { "@id": `${site.url}/#organization` },
        }}
      />
      <DepthHero
        pinned
        subjectClass="max-sm:right-[-4%] max-sm:bottom-6 max-sm:w-[38%]"
      >
        <Container className="pt-12 pb-28 sm:pb-56 lg:py-16">
          <div className="max-w-[40rem]">
            <div className="animate-rise">
              <Eyebrow>{site.descriptor}</Eyebrow>
            </div>
            <h1
              style={{ animationDelay: "120ms" }}
              className="mt-5 animate-rise font-display text-[clamp(3.1rem,7vw,6.6rem)] leading-[0.95] tracking-tight"
            >
              Your practice, in <span className="text-lime italic">mint</span>{" "}
              condition.
            </h1>
            <p
              style={{ animationDelay: "260ms" }}
              className="mt-7 max-w-xl animate-rise text-xl leading-relaxed text-white/80"
            >
              Mint is a practice optimization partner for independent medical
              practices in Arizona, solo and group. We find what is holding your
              practice back, write the playbook, then do the work with you.
            </p>
            <div
              style={{ animationDelay: "400ms" }}
              className="mt-9 flex animate-rise flex-wrap gap-3"
            >
              <ButtonLink href="/contact">Start a conversation</ButtonLink>
              <ButtonLink href="/discovery" variant="outline">
                How discovery works
              </ButtonLink>
            </div>
          </div>
        </Container>
      </DepthHero>

      <section>
        <Container className="py-20 sm:py-28">
          <h2 className="max-w-3xl font-display text-4xl leading-tight tracking-tight text-balance sm:text-6xl">
            Good medicine, held back by the way the day runs.
          </h2>
          <SymptomCards items={symptoms} />
        </Container>
      </section>

      <PillarsPan pillars={pillars} />

      <section className="bg-white">
        <Container className="grid gap-10 py-28 sm:py-40 md:grid-cols-2 md:gap-16">
          <h2 className="font-display text-5xl leading-[1.02] tracking-tight text-balance sm:text-7xl">
            Your practice stays yours.
          </h2>
          <div className="space-y-4 self-end text-xl leading-relaxed text-muted">
            <p>
              We are not a management company and we do not take a stake in your
              practice. Your team, your patients and your decisions stay with
              you.
            </p>
            <p>
              We also do not sweep in, hand over recommendations and leave. We
              build the plan with you and stay to carry it out.
            </p>
            <p>
              <Link
                href="/for-your-team"
                className="font-semibold text-mint-deep hover:underline"
              >
                What this means for your manager and staff &rarr;
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <GrowStory heading="How a practice gets to mint." stages={stages} />

      <section>
        <Container className="py-20 sm:py-28">
          <h2 className="max-w-3xl font-display text-4xl leading-tight tracking-tight text-balance sm:text-6xl">
            Independent practices across the Phoenix area.
          </h2>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <div className="grid gap-5">
              {sizes.map((s) => (
                <div
                  key={s.title}
                  className="lift flex gap-5 rounded-3xl border border-line bg-white p-6"
                >
                  <IconBadge name={s.icon} />
                  <div>
                    <h3 className="font-display text-2xl">{s.title}</h3>
                    <p className="mt-2 text-lg leading-relaxed text-muted">
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
              <p className="text-lg text-muted">
                On site in {listNames(cityNames)}.{" "}
                <Link
                  href="/arizona"
                  className="font-semibold text-mint-deep hover:underline"
                >
                  Where we work &rarr;
                </Link>
              </p>
            </div>
            <ValleyMap />
          </div>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}
