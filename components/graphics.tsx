import Link from "next/link";
import { cities } from "@/lib/cities";
import { Icon, type IconName } from "./icons";

const journey: { icon: IconName; step: string; today: string; mint: string }[] = [
  { icon: "phone", step: "Phone call", today: "Goes to voicemail", mint: "Answered or called back" },
  { icon: "calendar", step: "Scheduling", today: "Phone only, office hours", mint: "Booked online, reminded by text" },
  { icon: "box", step: "Visit prep", today: "Orthotics hunted down mid-visit", mint: "Waiting at the front desk" },
  { icon: "card", step: "Checkout", today: "Copay billed later", mint: "Collected up front" },
  { icon: "pen", step: "Charting", today: "Finished after hours", mint: "Finished the same day" },
  { icon: "heart", step: "Follow-up", today: "None", mint: "Summary and a thank-you" },
];

/** An illustrative version of the two maps discovery produces. */
export function BeforeAfterMap({ className = "" }: { className?: string }) {
  return (
    <figure
      className={`rounded-3xl border border-white/60 bg-white/95 p-5 text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)] backdrop-blur sm:p-7 ${className}`}
    >
      <div className="grid grid-cols-[1fr_1fr] gap-x-3 sm:grid-cols-[1.1fr_1fr_1fr] sm:gap-x-4">
        <div className="hidden sm:block" />
        <p className="pb-3 text-xs font-semibold uppercase tracking-wider text-muted">Today</p>
        <p className="pb-3 text-xs font-semibold uppercase tracking-wider text-mint-deep">With Mint</p>
        {journey.map((row, i) => (
          <div
            key={row.step}
            style={{ animationDelay: `${500 + i * 140}ms` }}
            className="col-span-full grid animate-rise grid-cols-subgrid items-center border-t border-line py-3"
          >
            <p className="col-span-full flex items-center gap-2.5 pb-2 font-semibold sm:col-span-1 sm:pb-0">
              <span className="text-mint-deep">
                <Icon name={row.icon} className="size-5" />
              </span>
              {row.step}
            </p>
            <p className="flex items-start gap-2 text-sm leading-snug text-muted">
              <span aria-hidden="true" className="mt-1.5 size-2 shrink-0 rounded-full bg-amber-500" />
              {row.today}
            </p>
            <p className="flex items-start gap-2 text-sm leading-snug font-medium">
              <span className="mt-0.5 shrink-0 text-mint">
                <Icon name="check" className="size-4" />
              </span>
              {row.mint}
            </p>
          </div>
        ))}
      </div>
      <figcaption className="mt-3 border-t border-line pt-3 text-xs text-muted">
        Illustrative example of a current state map and an optimization opportunities map.
      </figcaption>
    </figure>
  );
}

// Approximate positions of the nine cities, west to east. Schematic, not to scale.
const positions: Record<string, { x: number; y: number; label: "left" | "right" }> = {
  goodyear: { x: 92, y: 190, label: "right" },
  peoria: { x: 188, y: 77, label: "left" },
  glendale: { x: 228, y: 109, label: "right" },
  phoenix: { x: 324, y: 182, label: "left" },
  scottsdale: { x: 436, y: 150, label: "right" },
  tempe: { x: 428, y: 198, label: "left" },
  mesa: { x: 516, y: 206, label: "right" },
  gilbert: { x: 548, y: 263, label: "right" },
  chandler: { x: 508, y: 295, label: "left" },
};

export function ValleyMap({ active, className = "" }: { active?: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 660 370"
      role="img"
      aria-label="Map of the Phoenix area showing the nine cities Mint serves"
      className={`h-auto w-full ${className}`}
    >
      <path
        d="M40 200C30 110 130 30 250 40c80 6 150 40 230 70 90 34 160 80 150 160-8 62-90 80-170 66-70-12-120-40-200-46-90-7-250 20-260-90Z"
        className="fill-mint-soft"
      />
      <path
        d="M92 190C180 150 250 150 324 182s130 20 192 24M188 77c30 40 80 80 136 105M436 150c-4 30 10 80 72 145"
        className="fill-none stroke-white"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {cities.map((c) => {
        const p = positions[c.slug];
        const on = c.slug === active;
        return (
          <Link key={c.slug} href={`/arizona/${c.slug}`} className="group">
            <circle
              cx={p.x}
              cy={p.y}
              r="8"
              style={{ animationDelay: `${(p.x % 7) * 300}ms` }}
              className={`map-ping ${on ? "fill-mint" : "fill-mint/60"}`}
            />
            {on && <circle cx={p.x} cy={p.y} r="17" className="fill-mint/25" />}
            <circle
              cx={p.x}
              cy={p.y}
              r={on ? 8 : 6}
              className={`stroke-white transition-colors group-hover:fill-forest ${on ? "fill-forest" : "fill-mint-deep"}`}
              strokeWidth="2.5"
            />
            <text
              x={p.label === "right" ? p.x + 14 : p.x - 14}
              y={p.y + 5}
              textAnchor={p.label === "right" ? "start" : "end"}
              className={`fill-ink text-[15px] group-hover:underline ${on ? "font-bold" : "font-medium"}`}
            >
              {c.name}
            </text>
          </Link>
        );
      })}
    </svg>
  );
}

/** Slow-moving glow behind dark sections. */
export function Aurora() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -left-32 size-[34rem] animate-drift rounded-full bg-mint/40 blur-[110px]" />
      <div className="absolute top-10 right-[-10rem] size-[38rem] animate-drift-slow rounded-full bg-glow/25 blur-[130px]" />
      <div className="absolute bottom-[-16rem] left-1/3 size-[30rem] animate-drift rounded-full bg-[#1f8f8a]/35 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
    </div>
  );
}
