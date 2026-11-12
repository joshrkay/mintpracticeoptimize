import type { Metadata } from "next";
import Link from "next/link";
import { IconBadge } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, CallToAction, Container, PageHero } from "@/components/ui";
import { kindHeadings, practiceTypes, type PracticeType } from "@/lib/practice-types";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Practice Types We Work With in Arizona",
  description:
    "Mint works with podiatry, chiropractic, physical therapy, dermatology, primary care and urgent care practices in Arizona, solo and group.",
  alternates: { canonical: "/practice-types" },
};

const groups: PracticeType["kind"][] = ["specialty", "size", "payment"];

export default function PracticeTypes() {
  return (
    <>
      <JsonLd
        data={{
          "@type": "ItemList",
          name: "Practice types Mint works with",
          itemListElement: practiceTypes.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: t.name,
            url: `${site.url}/${t.slug}`,
          })),
        }}
      />
      <PageHero
        eyebrow="Practice types"
        title="Every kind of practice has its own way of losing time and money."
        lede="The work is the same everywhere: phones, visits, collections, follow-up and marketing. What goes wrong, and in what order, depends on the kind of practice you run. Start with yours."
      />
      {groups.map((kind, g) => (
        <section key={kind} className={g % 2 === 1 ? "border-y border-line bg-white" : ""}>
          <Container className="py-16 sm:py-20">
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">{kindHeadings[kind]}</h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {practiceTypes
                .filter((t) => t.kind === kind)
                .map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={`/${t.slug}`}
                      className="lift group flex h-full flex-col rounded-3xl border border-line bg-white p-7 hover:border-mint-deep"
                    >
                      <IconBadge name={t.icon} />
                      <h3 className="mt-5 font-display text-2xl leading-tight">{t.name}</h3>
                      <p className="mt-3 leading-relaxed text-muted">{t.summary}</p>
                      <span className="mt-auto pt-5 font-semibold text-mint-deep group-hover:underline">
                        See what we look at &rarr;
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </Container>
        </section>
      ))}
      <section>
        <Container className="flex flex-col gap-5 py-14 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            Does your practice not fit neatly into one of these? Most do not. Discovery looks at your practice as it
            actually runs, whatever the label.
          </p>
          <ButtonLink href="/contact">Start a conversation</ButtonLink>
        </Container>
      </section>
      <CallToAction />
    </>
  );
}
