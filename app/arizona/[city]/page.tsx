import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ValleyMap } from "@/components/graphics";
import { IconBadge } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, CallToAction, Container, PageHero } from "@/components/ui";
import { cities, getCity, listNames } from "@/lib/cities";
import { pillars } from "@/lib/services";
import { site } from "@/lib/site";

// Unknown slugs are a real 404, not a page rendered on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/arizona/[city]">): Promise<Metadata> {
  const city = getCity((await params).city);
  if (!city) return {};
  return {
    title: `Medical Practice Optimization in ${city.name}, AZ`,
    description: `${city.summary} Mint is a practice optimization partner for independent practices in ${city.name}, Arizona.`,
    alternates: { canonical: `/arizona/${city.slug}` },
  };
}

export default async function CityPage({ params }: PageProps<"/arizona/[city]">) {
  const city = getCity((await params).city);
  if (!city) notFound();

  const sameArea = cities.filter((c) => c.area === city.area && c.slug !== city.slug);
  const nearby = sameArea.length ? sameArea : cities.filter((c) => c.slug !== city.slug).slice(0, 4);
  const where = city.area === "Central Phoenix" ? "the Valley" : `the ${city.area}`;

  const service = {
    "@type": "Service",
    name: `Medical practice optimization in ${city.name}, Arizona`,
    serviceType: "Medical practice optimization",
    provider: { "@id": `${site.url}/#organization` },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "State", name: site.region },
    },
    url: `${site.url}/arizona/${city.slug}`,
  };

  return (
    <>
      <JsonLd data={service} />
      <PageHero
        eyebrow={`${city.name}, Arizona`}
        title={`Practice optimization for ${city.name} medical practices.`}
        lede={city.summary}
      />
      <section className="border-b border-line bg-white">
        <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <dl className="grid grid-cols-2 gap-4">
              {city.stats.map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-mint-soft p-6">
                  <dt className="sr-only">{label}</dt>
                  <dd>
                    <span className="block font-display text-4xl text-mint-deep sm:text-5xl">{value}</span>
                    <span aria-hidden="true" className="mt-2 block leading-snug text-muted">
                      {label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex gap-4">
              <IconBadge name="pin" />
              <div>
                <h2 className="font-display text-2xl sm:text-3xl">Medicine in {city.name}</h2>
                <p className="mt-3 text-lg leading-relaxed text-muted">{city.landscape}</p>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <IconBadge name="users" />
              <div>
                <h2 className="font-display text-2xl sm:text-3xl">The patients</h2>
                <p className="mt-3 text-lg leading-relaxed text-muted">{city.patients}</p>
              </div>
            </div>
          </div>
          <ValleyMap active={city.slug} />
        </Container>
      </section>
      <section className="border-b border-line">
        <Container className="py-16 sm:py-20">
          <h2 className="font-display text-3xl">Where we would look first in a {city.name} practice</h2>
          <dl className="mt-8 grid gap-5 md:grid-cols-3">
            {city.focus.map((f, i) => (
              <div key={f.title} className="rounded-2xl border border-line bg-white p-6">
                <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-full bg-mint-deep font-display text-lg text-white">
                  {i + 1}
                </span>
                <dt className="mt-4 font-display text-xl">{f.title}</dt>
                <dd className="mt-2 leading-relaxed text-muted">{f.body}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-2xl text-lg text-muted">
            These are starting points. Discovery shows what your own practice needs.
          </p>
        </Container>
      </section>
      <section>
        <Container className="py-16 sm:py-20">
          <h2 className="font-display text-3xl">What Mint does</h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
            Mint is a practice optimization partner for independent practices in {city.name}, solo
            and group. We evaluate how your practice runs, deliver a playbook, then execute on it
            with you, in person.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <Link
                key={p.id}
                href={`/services#${p.id}`}
                className="rounded-2xl border border-line bg-white p-7 transition-colors hover:border-mint"
              >
                <h3 className="font-display text-2xl">{p.name}</h3>
                <p className="mt-3 leading-relaxed text-muted">{p.summary}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 rounded-2xl bg-mint-soft p-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-lg">
              It starts with discovery: a flat <strong>{site.discoveryFee}</strong> evaluation of
              your {city.name} practice. Sign on and the fee rolls into your first month.
            </p>
            <ButtonLink href="/discovery">About discovery</ButtonLink>
          </div>
        </Container>
      </section>
      <section className="border-t border-line bg-white">
        <Container className="grid gap-10 py-16 sm:py-20 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-3xl">On site across {where}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              We work in your office with your team. Alongside {city.name}, we serve practices in{" "}
              {listNames(nearby.map((c) => c.name))}.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {nearby.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/arizona/${c.slug}`}
                    className="inline-block rounded-full border border-line px-4 py-2 text-[15px] hover:border-mint"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/arizona"
                  className="inline-block rounded-full border border-line px-4 py-2 text-[15px] font-semibold text-mint-deep hover:border-mint"
                >
                  All cities
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl">Podiatry first</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Podiatry is the first specialty we built our process around, from orthotics handoffs
              to recall for routine foot care.
            </p>
            <div className="mt-5">
              <ButtonLink href="/podiatry" variant="outline">
                Podiatry practices
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
      <CallToAction />
    </>
  );
}
