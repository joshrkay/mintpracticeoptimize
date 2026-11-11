import type { Metadata } from "next";
import Link from "next/link";
import { DepthHero } from "@/components/DepthHero";
import { ValleyMap } from "@/components/graphics";
import { GrowStory, type Stage } from "@/components/GrowStory";
import { IconBadge, type IconName } from "@/components/icons";
import { SymptomCards, type Symptom } from "@/components/SymptomCards";
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
    today: "Orthotics sit in the back room waiting for a pickup nobody scheduled.",
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
      <DepthHero pinned>
        <Container className="pt-14 pb-48 lg:py-16">
          <div className="max-w-[40rem]">
            <div className="animate-rise">
              <Eyebrow>{site.descriptor}</Eyebrow>
            </div>
            <h1
              style={{ animationDelay: "120ms" }}
              className="mt-5 animate-rise font-display text-[clamp(3.1rem,7vw,6.6rem)] leading-[0.95] tracking-tight"
            >
              Your practice, in <span className="text-lime italic">mint</span> condition.
            </h1>
            <p
              style={{ animationDelay: "260ms" }}
              className="mt-7 max-w-xl animate-rise text-xl leading-relaxed text-white/80"
            >
              Mint is a practice optimization partner for independent medical practices in
              Arizona, solo and group. We find what is holding your practice back, write the
              playbook, then do the work with you.
            </p>
            <div style={{ animationDelay: "400ms" }} className="mt-9 flex animate-rise flex-wrap gap-3">
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
          <p className="mt-5 text-lg text-muted">Hover or tap a line to see it with Mint.</p>
          <SymptomCards items={symptoms} />
        </Container>
      </section>

      <section className="bg-mint-soft">
        <Container className="py-20 sm:py-28">
          <h2 className="max-w-3xl font-display text-4xl leading-tight tracking-tight text-balance sm:text-6xl">
            Where we look, and where we work.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Link
                key={pillar.id}
                href={`/services#${pillar.id}`}
                className="lift group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7"
              >
                <h3 className="font-display text-3xl leading-tight">{pillar.name}</h3>
                <p className="mt-3 leading-relaxed text-muted">{pillar.summary}</p>
                <ul className="mt-6 divide-y divide-line border-y border-line text-[15px]">
                  {pillar.items.slice(0, 4).map((item) => (
                    <li key={item.title} className="py-2.5">
                      {item.title}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto pt-6 font-semibold text-mint-deep group-hover:underline">
                  See {pillar.name.toLowerCase()} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="pt-20 sm:pt-28">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight tracking-tight text-balance sm:text-6xl">
            How a practice gets to mint.
          </h2>
          <GrowStory stages={stages} />
        </Container>
      </section>

      <section data-dark className="relative bg-forest bg-[url(/photos/mint-dark.webp)] bg-cover bg-center text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-forest/75" />
        <Container className="relative grid gap-10 py-24 sm:py-32 md:grid-cols-2 md:gap-16">
          <div>
            <Eyebrow>Partners, not consultants</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-balance sm:text-6xl">
              Your practice stays yours.
            </h2>
          </div>
          <div className="space-y-4 text-xl leading-relaxed text-white/75">
            <p>
              We are not a management company and we do not take a stake in your practice. Your
              team, your patients and your decisions stay with you.
            </p>
            <p>
              We also do not sweep in, hand over recommendations and leave. We build the plan with
              you and stay to carry it out.
            </p>
            <p>
              <Link href="/for-your-team" className="font-semibold text-lime hover:underline">
                What this means for your manager and staff &rarr;
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20 sm:py-28">
          <h2 className="max-w-3xl font-display text-4xl leading-tight tracking-tight text-balance sm:text-6xl">
            Independent practices across the Phoenix area.
          </h2>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <div className="grid gap-5">
              {sizes.map((s) => (
                <div key={s.title} className="lift flex gap-5 rounded-3xl border border-line bg-white p-6">
                  <IconBadge name={s.icon} />
                  <div>
                    <h3 className="font-display text-2xl">{s.title}</h3>
                    <p className="mt-2 text-lg leading-relaxed text-muted">{s.body}</p>
                  </div>
                </div>
              ))}
              <p className="text-lg text-muted">
                On site in {listNames(cityNames)}.{" "}
                <Link href="/arizona" className="font-semibold text-mint-deep hover:underline">
                  Where we work &rarr;
                </Link>
              </p>
            </div>
            <ValleyMap />
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-white">
        <Container className="flex flex-col gap-5 py-14 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Eyebrow>Specialties</Eyebrow>
            <p className="mt-3 max-w-2xl text-lg text-muted">
              We are starting with podiatry. See what we look at in a podiatry practice, or how
              Mint compares with the other kinds of help a practice can hire.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/podiatry" variant="outline">
              Podiatry
            </ButtonLink>
            <ButtonLink href="/compare" variant="outline">
              How we compare
            </ButtonLink>
          </div>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}
