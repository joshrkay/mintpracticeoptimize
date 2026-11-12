import type { Metadata } from "next";
import Link from "next/link";
import { IconBadge } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { LeafBullet } from "@/components/mint";
import { SymptomCards } from "@/components/SymptomCards";
import { ButtonLink, CallToAction, Container, PageHero } from "@/components/ui";
import { getPracticeType, pillarLabels, type Block, type PracticeType } from "@/lib/practice-types";
import { site } from "@/lib/site";

export function practiceMetadata(t: PracticeType): Metadata {
  return { title: t.title, description: t.description, alternates: { canonical: `/${t.slug}` } };
}

const h2 = "font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl";
const intro = "mt-4 max-w-2xl text-lg leading-relaxed text-muted";

function BlockSection({ block, white, reviewed }: { block: Block; white: boolean; reviewed?: string }) {
  return (
    <section className={white ? "border-y border-line bg-white" : ""}>
      <Container className="py-16 sm:py-24">
        {block.type === "story" && (
          <div className="grid gap-8 md:grid-cols-[1fr_1.5fr] md:gap-16">
            <h2 className={h2}>{block.heading}</h2>
            <div className="space-y-5 text-lg leading-relaxed text-muted sm:text-xl">
              {block.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        )}

        {block.type === "journey" && (
          <>
            <h2 className={`max-w-3xl ${h2}`}>{block.heading}</h2>
            {block.intro && <p className={intro}>{block.intro}</p>}
            <ol className="mt-10 divide-y divide-line border-y border-line">
              {block.steps.map((s) => (
                <li key={s.title} className="grid gap-4 py-8 md:grid-cols-[1fr_1.7fr] md:gap-12">
                  <h3 className="font-display text-2xl leading-snug sm:text-3xl">{s.title}</h3>
                  <div>
                    <p className="text-lg leading-relaxed text-muted">{s.body}</p>
                    {s.leak && (
                      <p className="mt-4 rounded-2xl bg-mint-soft px-5 py-4 leading-relaxed text-forest">
                        <span className="font-semibold">Where it slips. </span>
                        {s.leak}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </>
        )}

        {block.type === "terms" && (
          <>
            <h2 className={`max-w-3xl ${h2}`}>{block.heading}</h2>
            {block.intro && <p className={intro}>{block.intro}</p>}
            <dl className="mt-10 grid gap-x-14 md:grid-cols-2">
              {block.items.map((i) => (
                <div key={i.term} className="border-t border-line py-5">
                  <dt className="font-display text-xl">{i.term}</dt>
                  <dd className="mt-1.5 leading-relaxed text-muted">{i.meaning}</dd>
                </div>
              ))}
            </dl>
          </>
        )}

        {block.type === "rules" && (
          <>
            <h2 className={`max-w-3xl ${h2}`}>{block.heading}</h2>
            {block.intro && <p className={intro}>{block.intro}</p>}
            <dl className="mt-10 divide-y divide-line border-y border-line">
              {block.items.map((i) => (
                <div key={i.title} className="grid gap-3 py-7 md:grid-cols-[1fr_1.7fr] md:gap-12">
                  <dt className="font-display text-2xl leading-snug">{i.title}</dt>
                  <dd className="text-lg leading-relaxed text-muted">{i.body}</dd>
                </div>
              ))}
            </dl>
            {reviewed && (
              <p className="mt-5 text-sm leading-relaxed text-muted">
                Rules and payer policies change. This reflects what we reviewed in {reviewed}. It is an
                account of how the rules show up in the office, not billing, coding or legal advice.
              </p>
            )}
          </>
        )}

        {block.type === "cards" && (
          <>
            <h2 className={`max-w-3xl ${h2}`}>{block.heading}</h2>
            {block.intro && <p className={intro}>{block.intro}</p>}
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {block.items.map((c) => (
                <div key={c.title} className="lift rounded-3xl border border-line bg-white p-6">
                  <div className="flex items-center justify-between gap-3">
                    <IconBadge name={c.icon} />
                    <span className="text-xs font-semibold tracking-[0.12em] text-mint-deep uppercase">
                      {pillarLabels[c.pillar]}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{c.body}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {block.type === "compare" && (
          <>
            <h2 className={`max-w-3xl ${h2}`}>{block.heading}</h2>
            {block.intro && <p className={intro}>{block.intro}</p>}
            <SymptomCards items={block.items} />
          </>
        )}
      </Container>
    </section>
  );
}

export function PracticePage({ type: t }: { type: PracticeType }) {
  const url = `${site.url}/${t.slug}`;
  const related = t.related.map((slug) => getPracticeType(slug)).filter((r): r is PracticeType => !!r);
  const blocksWhite = t.blocks.length % 2 === 0; // end on a paper section when there are an odd number

  return (
    <>
      <JsonLd
        data={{
          "@type": "Service",
          name: `${t.name} optimization`,
          serviceType: "Medical practice optimization",
          description: t.description,
          provider: { "@id": `${site.url}/#organization` },
          areaServed: { "@type": "State", name: site.region },
          audience: { "@type": "Audience", audienceType: t.name },
          url,
        }}
      />
      <JsonLd
        data={{
          "@type": "FAQPage",
          mainEntity: t.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <JsonLd
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            ["Home", "/"],
            ["Practice types", "/practice-types"],
            [t.short, `/${t.slug}`],
          ].map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: `${site.url}${path}` })),
        }}
      />

      <PageHero eyebrow={t.name} title={t.h1} lede={t.lede} />

      {t.blocks.map((block, i) => (
        <BlockSection key={`${block.type}-${i}`} block={block} white={(i % 2 === 1) === blocksWhite} reviewed={t.reviewed} />
      ))}

      <section>
        <Container className="py-16 sm:py-20">
          <div data-dark className="flex flex-col gap-5 rounded-3xl bg-forest p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <p className="max-w-2xl text-lg leading-relaxed sm:text-xl">
              It starts with discovery: a flat <strong>{site.discoveryFee}</strong> evaluation of how your practice runs
              today, and where it could run better. Sign on and the fee rolls into your first month.
            </p>
            <ButtonLink href="/discovery">About discovery</ButtonLink>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-white">
        <Container className="max-w-4xl py-16 sm:py-24">
          <h2 className={h2}>Questions from {t.short.toLowerCase()} practices</h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {t.faqs.map((f) => (
              <div key={f.q} className="py-7">
                <h3 className="flex gap-3 font-display text-2xl sm:text-3xl">
                  <LeafBullet />
                  {f.q}
                </h3>
                <p className="mt-3 pl-7 text-lg leading-relaxed text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14 sm:py-16">
          <h2 className="font-display text-3xl tracking-tight">Other kinds of practice</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/${r.slug}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-base hover:border-mint-deep"
                >
                  {r.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/practice-types"
                className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-base font-semibold text-mint-deep hover:border-mint-deep"
              >
                All practice types
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}
