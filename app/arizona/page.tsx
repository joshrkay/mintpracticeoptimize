import type { Metadata } from "next";
import Link from "next/link";
import { ValleyMap } from "@/components/graphics";
import { ButtonLink, CallToAction, Container, PageHero } from "@/components/ui";
import { cities, cityNames, listNames } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Medical Practice Optimization in the Phoenix Area",
  description: `Mint works on site with independent medical practices in ${listNames(cityNames)}, Arizona.`,
  alternates: { canonical: "/arizona" },
};

const areas = ["Central Phoenix", "East Valley", "West Valley"];

export default function Arizona() {
  return (
    <>
      <PageHero
        eyebrow="Arizona"
        title="Practice optimization across the Phoenix area."
        lede={`Mint works with independent medical practices, solo and group, in ${listNames(cityNames)}. We are starting in the Valley so we can be in your office, not on a video call.`}
      />
      <Container className="py-16 sm:py-20">
        <h2 className="font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">Where we work</h2>
        <ValleyMap className="mx-auto mt-6 max-w-3xl" />
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {areas.map((area) => (
            <div key={area} className="border-t-2 border-mint-deep pt-4">
              <h3 className="font-display text-xl">{area}</h3>
              <ul className="mt-2 text-lg">
                {cities
                  .filter((c) => c.area === area)
                  .map((c) => (
                    <li key={c.slug}>
                      <Link href={`/arizona/${c.slug}`} className="inline-flex min-h-11 items-center text-mint-deep hover:underline">
                        {c.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted">
          Practice elsewhere in Arizona? Get in touch anyway. These are the cities we are starting
          with, not a boundary.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/services">What we do</ButtonLink>
          <ButtonLink href="/discovery" variant="outline">
            How discovery works
          </ButtonLink>
        </div>
      </Container>
      <CallToAction />
    </>
  );
}
