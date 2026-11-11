import Image from "next/image";
import Link from "next/link";
import { journey } from "./graphics";
import { Pinned } from "./Pinned";
import { Container } from "./ui";
import type { Pillar } from "@/lib/services";

/**
 * The turn: one frame holding the practice's day twice. A line crosses it with
 * the scroll, and the yellowed day turns fresh behind the line.
 */
export function BeforeAfterWipe() {
  const layer = (kind: "today" | "mint") => (
    <div
      aria-hidden={kind === "mint" ? undefined : true}
      className={`absolute inset-0 grid items-center gap-6 p-5 sm:p-10 lg:grid-cols-[1.25fr_1fr] ${
        kind === "today" ? "bg-[#e7e9e2] text-ink" : "wipe-top bg-forest text-white"
      }`}
    >
      {kind === "mint" && (
        <>
          <Image src="/photos/mint-dark.webp" alt="" fill sizes="100vw" className="object-cover opacity-45" />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(11,34,25,0.9)_30%,rgba(11,34,25,0.35))]" />
        </>
      )}
      <div className="relative">
        <p className={`text-sm font-semibold tracking-[0.14em] uppercase ${kind === "today" ? "text-muted" : "text-lime"}`}>
          {kind === "today" ? "Today" : "With Mint"}
        </p>
        <dl className="mt-2 divide-y divide-current/15 border-y border-current/15 sm:mt-4">
          {journey.map((row) => (
            <div key={row.step} className="grid grid-cols-[5.25rem_1fr] items-baseline gap-3 py-1.5 sm:grid-cols-[9rem_1fr] sm:gap-4 sm:py-3">
              <dt className="text-[13px] font-semibold opacity-70 sm:text-base">{row.step}</dt>
              <dd className="font-display text-base leading-snug sm:text-2xl">{kind === "today" ? row.today : row.mint}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="relative hidden justify-center lg:flex">
        <Image
          src="/photos/mint-crown.webp"
          alt=""
          width={510}
          height={454}
          sizes="30vw"
          className={`h-auto w-[78%] drop-shadow-[0_30px_30px_rgba(0,0,0,0.35)] ${kind === "today" ? "wilted rotate-[-8deg] opacity-90" : ""}`}
        />
      </div>
    </div>
  );

  return (
    <Pinned vh={210} className="wipe">
      <Container className="flex h-full flex-col justify-center py-6">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl leading-tight tracking-tight text-balance sm:text-6xl">
            See it before you change it.
          </h2>
          <p className="mt-2 max-w-xl text-base text-muted sm:mt-4 sm:text-lg">
            Discovery maps your practice as it runs today, then the same day with the
            opportunities taken.
          </p>
        </div>
        <div className="relative mt-5 h-[min(60svh,27rem)] overflow-hidden rounded-3xl sm:mt-7 sm:h-[min(60vh,30rem)]">
          {layer("today")}
          {layer("mint")}
          <div aria-hidden="true" className="wipe-line absolute inset-y-0 w-0.5 bg-lime" />
        </div>
      </Container>
    </Pinned>
  );
}

/**
 * Range: on large screens the page turns sideways and the three pillars pass
 * like options on a shelf. On small screens they stack.
 */
export function PillarsPan({ pillars }: { pillars: Pillar[] }) {
  const tone = ["bg-white text-ink", "bg-mint-soft text-ink", "bg-forest text-white"];
  return (
    <Pinned vh={240} desktopOnly className="pan bg-paper">
      <div className="flex h-full flex-col justify-center py-16 lg:py-0">
        <div className="pan-track flex flex-col gap-5 px-5 sm:px-8 lg:w-max lg:flex-row lg:items-stretch lg:px-[max(2rem,calc((100vw-72rem)/2+2rem))]">
          <div className="flex shrink-0 flex-col justify-center lg:w-[28rem] lg:pr-10">
            <h2 className="font-display text-4xl leading-tight tracking-tight text-balance sm:text-6xl">
              Where we look, and where we work.
            </h2>
            <p className="mt-5 text-lg text-muted">Three pillars, one playbook.</p>
          </div>
          {pillars.map((pillar, i) => (
            <Link
              key={pillar.id}
              href={`/services#${pillar.id}`}
              data-dark={i === 2 ? "" : undefined}
              className={`group flex shrink-0 flex-col rounded-3xl p-8 sm:p-10 lg:h-[min(66vh,36rem)] lg:w-[34rem] ${tone[i % tone.length]}`}
            >
              <h3 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">{pillar.name}</h3>
              <p className="mt-4 text-lg leading-relaxed opacity-75">{pillar.summary}</p>
              <ul className="mt-8 divide-y divide-current/15 border-y border-current/15 lg:mt-auto">
                {pillar.items.slice(0, 5).map((item) => (
                  <li key={item.title} className="py-2.5 text-[17px]">
                    {item.title}
                  </li>
                ))}
              </ul>
              <span className="mt-6 font-semibold group-hover:underline">See {pillar.name.toLowerCase()} &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </Pinned>
  );
}
