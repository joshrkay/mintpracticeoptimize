import Link from "next/link";
import { Pinned } from "./Pinned";
import type { Pillar } from "@/lib/services";

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
