import type { Metadata } from "next";
import Link from "next/link";
import { Aurora, BeforeAfterMap, ValleyMap } from "@/components/graphics";
import { Icon, IconBadge, type IconName } from "@/components/icons";
import { ButtonLink, CallToAction, Container, Eyebrow } from "@/components/ui";
import { cityNames, listNames } from "@/lib/cities";
import { pillars } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const symptoms: { icon: IconName; text: string; href: string }[] = [
  {
    icon: "phone",
    text: "The phone rings out while the front desk is checking someone in.",
    href: "/services#operations",
  },
  {
    icon: "card",
    text: "Copays get billed after the visit, then chased for months.",
    href: "/services#operations",
  },
  {
    icon: "pen",
    text: "You finish your charts at the kitchen table.",
    href: "/services#operations",
  },
  {
    icon: "box",
    text: "Orthotics sit in the back room waiting for a pickup nobody scheduled.",
    href: "/podiatry",
  },
  {
    icon: "users",
    text: "Patients who qualify for more care are never told.",
    href: "/services#revenue",
  },
  {
    icon: "star",
    text: "Your Google rating reflects your three angriest patients.",
    href: "/services#marketing",
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

const steps = [
  {
    title: "Questionnaire",
    body: "A short set of questions before we meet, so our first conversation is about your practice.",
  },
  {
    title: "Discovery",
    body: "A full evaluation. You get a map of how the practice runs today and a map of the optimization opportunities.",
  },
  {
    title: "Playbook",
    body: "The opportunities become a prioritized plan your team has seen and bought into.",
  },
  {
    title: "Execution",
    body: "We stay and do the work with you. No binder left on the desk.",
  },
];

export default function Home() {
  return (
    <>
      <section data-hero className="relative overflow-hidden bg-forest text-white">
        <Aurora />
        <Container className="relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <div className="animate-rise">
              <Eyebrow>{site.descriptor}</Eyebrow>
            </div>
            <h1
              style={{ animationDelay: "120ms" }}
              className="mt-5 max-w-4xl animate-rise font-display text-5xl leading-[1.05] text-balance sm:text-6xl xl:text-7xl"
            >
              Your practice, in <span className="text-sheen italic">mint</span> condition.
            </h1>
            <p
              style={{ animationDelay: "260ms" }}
              className="mt-6 max-w-2xl animate-rise text-xl leading-relaxed text-white/75"
            >
              Mint is a practice optimization partner for independent medical practices in
              Arizona, solo and group. We start with a full evaluation of the opportunities in
              your practice, deliver a playbook, then execute on it with you.
            </p>
            <div style={{ animationDelay: "400ms" }} className="mt-9 flex animate-rise flex-wrap gap-3">
              <ButtonLink href="/contact" variant="light">
                Start a conversation
              </ButtonLink>
              <ButtonLink href="/discovery" variant="ghost">
                How discovery works
              </ButtonLink>
            </div>
          </div>
          <div style={{ animationDelay: "300ms" }} className="animate-rise">
            <BeforeAfterMap className="animate-bob" />
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-white">
        <Container className="py-20 sm:py-24">
          <Eyebrow>Sound familiar?</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-balance sm:text-4xl">
            Good medicine, held back by the way the day runs.
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {symptoms.map((s) => (
              <li key={s.text}>
                <Link
                  href={s.href}
                  className="lift flex h-full items-start gap-4 rounded-2xl border border-line bg-paper p-5 text-lg leading-snug hover:border-mint"
                >
                  <IconBadge name={s.icon} />
                  <span className="pt-0.5">{s.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section>
        <Container className="py-20 sm:py-24">
          <Eyebrow>Three pillars</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-balance sm:text-4xl">
            Where we look, and where we work.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <Link
                key={pillar.id}
                href={`/services#${pillar.id}`}
                className="lift group flex h-full flex-col rounded-2xl border border-line bg-white p-7 hover:border-mint"
              >
                <div className="flex items-center justify-between">
                  <IconBadge name={pillar.icon} tone="solid" />
                  <span className="font-display text-lg text-mint-deep">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl">{pillar.name}</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {pillar.summary}
                </p>
                <ul className="mt-5 space-y-1.5 text-[15px]">
                  {pillar.items.slice(0, 4).map((item) => (
                    <li key={item.title} className="flex items-center gap-2">
                      <span className="text-mint">
                        <Icon name="check" className="size-4" />
                      </span>
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

      <section className="border-y border-line bg-white">
        <Container className="py-20 sm:py-24">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-balance sm:text-4xl">
            See the before and after, then decide.
          </h2>
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="relative">
                {i < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-6 left-14 hidden h-0.5 w-[calc(100%-2rem)] bg-line lg:block"
                  />
                )}
                <span className="relative flex size-12 items-center justify-center rounded-full bg-mint-deep font-display text-xl text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-col gap-4 rounded-2xl bg-gradient-to-r from-mint-soft to-[#c9f1dd] p-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-lg">
              Discovery is a flat <strong>{site.discoveryFee}</strong>. If you
              sign on, the fee rolls into your first month.
            </p>
            <ButtonLink href="/discovery">About discovery</ButtonLink>
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-10 py-20 sm:py-24 md:grid-cols-2 md:gap-16">
          <div>
            <Eyebrow>Partners, not consultants</Eyebrow>
            <h2 className="mt-4 font-display text-3xl text-balance sm:text-4xl">
              Your practice stays yours.
            </h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-muted">
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

      <section className="border-t border-line bg-white">
        <Container className="py-20 sm:py-24">
          <Eyebrow>Who we work with</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-balance sm:text-4xl">
            Independent practices across the Phoenix area, solo and group.
          </h2>
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
            <div className="grid gap-5">
              {sizes.map((s) => (
                <div
                  key={s.title}
                  className="lift flex gap-5 rounded-2xl border border-line bg-paper p-6"
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

      <section className="border-t border-line">
        <Container className="flex flex-col gap-5 py-14 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Eyebrow>Specialties</Eyebrow>
            <p className="mt-3 max-w-2xl text-lg text-muted">
              We are starting with podiatry. See what we look at in a podiatry
              practice, or how Mint compares with the other kinds of help a
              practice can hire.
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
