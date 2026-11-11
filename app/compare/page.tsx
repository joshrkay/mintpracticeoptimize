import type { Metadata } from "next";
import { LooseLeaf } from "@/components/mint";
import { CallToAction, Container, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Mint vs. Consultants, Agencies, Software and MSOs",
  description:
    "How a practice optimization partner compares with coaching programs, marketing agencies, practice consultants, patient software and MSOs.",
  alternates: { canonical: "/compare" },
};

const options = [
  {
    name: "Coaching program or mastermind",
    gives: "Training, a peer community and accountability.",
    work: "You and your staff.",
    covers: "Whatever you make time to implement.",
  },
  {
    name: "Marketing agency",
    gives: "A website, SEO, ads and reputation management.",
    work: "The agency, for marketing only.",
    covers: "New patient demand. What happens once they call is up to you.",
  },
  {
    name: "Practice consultant",
    gives: "An assessment and a set of recommendations.",
    work: "Usually you, after the report is delivered.",
    covers: "Mostly operations and finance.",
  },
  {
    name: "Patient communication software",
    gives: "Tools for texting, reminders and reviews.",
    work: "Your staff, who have to run the tool.",
    covers: "The features in the product.",
  },
  {
    name: "Management services organization",
    gives: "Back-office management, often with an ownership or long-term management stake.",
    work: "The MSO.",
    covers: "Broad, in exchange for control.",
  },
  {
    name: "Mint",
    gives: "A discovery evaluation, a playbook and execution.",
    work: "Mint, alongside your team.",
    covers: "Operations, revenue opportunities and marketing together. Your practice stays yours.",
    mint: true,
  },
];

export default function Compare() {
  return (
    <>
      <PageHero
        eyebrow="How we compare"
        title="The kinds of help a practice can hire, side by side."
        lede="Each of these solves a real problem. The difference is how much of the practice they look at, and who is left doing the work."
      />
      <Container className="py-16 sm:py-20">
        <div className="overflow-x-auto rounded-3xl border border-line bg-white">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line text-sm uppercase tracking-wider text-muted">
                <th scope="col" className="p-5 font-semibold">Option</th>
                <th scope="col" className="p-5 font-semibold">What you get</th>
                <th scope="col" className="p-5 font-semibold">Who does the work</th>
                <th scope="col" className="p-5 font-semibold">What it covers</th>
              </tr>
            </thead>
            <tbody>
              {options.map((o) => (
                <tr key={o.name} className={`border-b border-line align-top last:border-0 ${o.mint ? "bg-mint-soft" : ""}`}>
                  <th scope="row" className="p-5 font-display text-lg font-normal">
                    <span className="flex items-start gap-3">
                      <LooseLeaf className={`mt-0.5 w-4 shrink-0 ${o.mint ? "rotate-[20deg]" : "wilted rotate-[150deg]"}`} />
                      {o.name}
                    </span>
                  </th>
                  <td className="p-5 leading-relaxed text-muted">{o.gives}</td>
                  <td className="p-5 leading-relaxed text-muted">{o.work}</td>
                  <td className="p-5 leading-relaxed text-muted">{o.covers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl">When something else is the better fit</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              If you only need a new website, hire an agency. If you want to learn to run the
              changes yourself, a coaching program will teach you. If one tool is missing, buy
              the tool.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl">When Mint is the better fit</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              Mint fits when the problems are connected: marketing is bringing calls that go to
              voicemail, visits are full but copays go uncollected, or you know what to fix and
              nobody has the time to do it.
            </p>
          </div>
        </div>
      </Container>
      <CallToAction />
    </>
  );
}
