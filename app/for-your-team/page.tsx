import type { Metadata } from "next";
import { LeafBullet } from "@/components/mint";
import { CallToAction, Container, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "For Practice Managers and Staff",
  description:
    "What working with Mint means for the practice manager and the team: built with the people who do the work, with staffing decisions left to the practice.",
  alternates: { canonical: "/for-your-team" },
};

const points = [
  {
    title: "We map the work with the people who do it",
    body: "Discovery is not an audit of anyone. The current state map is drawn with the front desk, the billers and the clinical staff, because they know where the day goes wrong.",
  },
  {
    title: "Staffing stays with the practice",
    body: "Mint does not hire, fire or manage your staff, and we do not recommend who should. We work on the process, not the people.",
  },
  {
    title: "Nothing changes until the team has seen it",
    body: "Everyone sees the before and after maps before a workflow shifts. Changes that the team did not agree to do not last.",
  },
  {
    title: "We take work off the desk",
    body: "Review invitations, patient newsletters and outreach to patients are things we run. The aim is fewer loose ends for the front desk, not a longer task list.",
  },
  {
    title: "We do not disappear",
    body: "You will not be handed a binder and left to implement it between phone calls. We stay through execution.",
  },
];

export default function ForYourTeam() {
  return (
    <>
      <PageHero
        eyebrow="For practice managers and staff"
        title="We work with your team, not around it."
        lede="If the doctor has brought in Mint, here is what that means for the people who run the practice day to day."
      />
      <Container className="max-w-4xl py-16 sm:py-20">
        <dl className="divide-y divide-line border-y border-line">
          {points.map((p, i) => (
            <div key={p.title} className="grid gap-2 py-7 md:grid-cols-[1fr_1.4fr] md:gap-10">
              <dt className="flex gap-3 font-display text-2xl">
                <LeafBullet index={i} />
                {p.title}
              </dt>
              <dd className="text-lg leading-relaxed text-muted">{p.body}</dd>
            </div>
          ))}
        </dl>
      </Container>
      <CallToAction />
    </>
  );
}
