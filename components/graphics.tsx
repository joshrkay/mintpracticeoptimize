import Link from "next/link";
import { cities } from "@/lib/cities";
import { Icon, type IconName } from "./icons";
import { LooseLeaf } from "./mint";

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
      className={`rounded-3xl border border-line bg-white p-5 text-ink shadow-[0_30px_60px_-34px_rgba(11,34,25,0.45)] sm:p-7 ${className}`}
    >
      <div className="grid grid-cols-[1fr_1fr] gap-x-3 sm:grid-cols-[1.1fr_1fr_1fr] sm:gap-x-4">
        <div className="hidden sm:block" />
        <p className="pb-3 text-[13px] font-semibold uppercase tracking-wider text-muted">Today</p>
        <p className="pb-3 text-[13px] font-semibold uppercase tracking-wider text-mint-deep">With Mint</p>
        {journey.map((row) => (
          <div
            key={row.step}
            className="col-span-full grid grid-cols-subgrid items-center border-t border-line py-3"
          >
            <p className="col-span-full flex items-center gap-2.5 pb-2 font-semibold sm:col-span-1 sm:pb-0">
              <span className="text-mint-deep">
                <Icon name={row.icon} className="size-5" />
              </span>
              {row.step}
            </p>
            <p className="flex items-start gap-2 text-sm leading-snug text-muted">
              <LooseLeaf variant={2} className="wilted mt-0.5 w-3.5 shrink-0 rotate-[150deg]" />
              {row.today}
            </p>
            <p className="flex items-start gap-2 text-sm leading-snug font-medium">
              <LooseLeaf className="mt-0.5 w-3.5 shrink-0 rotate-[20deg]" />
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
            {/* A generous invisible area so the marker is easy to tap. */}
            <rect x={p.label === "right" ? p.x - 16 : p.x - 96} y={p.y - 16} width="112" height="32" fill="transparent" />
            <circle
              cx={p.x}
              cy={p.y}
              r="8"
              style={{ animationDelay: `${(p.x % 7) * 300}ms` }}
              className={`map-ping ${on ? "fill-mint-deep" : "fill-mint-deep/60"}`}
            />
            {on && <circle cx={p.x} cy={p.y} r="17" className="fill-mint-deep/25" />}
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
