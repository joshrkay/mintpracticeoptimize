import type { CSSProperties } from "react";
import { alongCurve, leafPath } from "@/lib/leaf";

const STEM: Parameters<typeof alongCurve>[0] = [
  [200, 470],
  [168, 340],
  [236, 210],
  [200, 62],
];
const stemPath = `M${STEM[0]}C${STEM[1]} ${STEM[2]} ${STEM[3]}`;

// Mint grows its leaves in opposite pairs, smaller toward the tip.
const PAIRS = [
  { t: 0.17, length: 96, spread: 72 },
  { t: 0.33, length: 104, spread: 66 },
  { t: 0.48, length: 94, spread: 62 },
  { t: 0.62, length: 80, spread: 58 },
  { t: 0.75, length: 64, spread: 54 },
  { t: 0.87, length: 46, spread: 48 },
];

// Each fix to the practice is a leaf on the plant.
const TAGS = [
  "Phones answered",
  "Copays collected",
  "Visits prepared",
  "Charts finished",
  "Patients recalled",
  "Reviews earned",
];

const leaves = PAIRS.flatMap((pair, i) => {
  const { x, y, heading } = alongCurve(STEM, pair.t);
  return ([1, -1] as const).map((side) => {
    const rotation = heading + 90 + side * pair.spread;
    const rad = ((rotation - 90) * Math.PI) / 180;
    return {
      key: `${i}${side}`,
      x,
      y,
      rotation,
      side,
      length: pair.length,
      at: pair.t * 0.9 + (side === 1 ? 0 : 0.03),
      tipX: x + Math.cos(rad) * pair.length * 0.86,
      tipY: y + Math.sin(rad) * pair.length * 0.86,
      // One tag per pair, alternating sides up the stem.
      tag: side === (i % 2 === 0 ? 1 : -1) ? TAGS[i] : null,
    };
  });
});
const tip = alongCurve(STEM, 1);

function Leaf({ length, id }: { length: number; id: string }) {
  return (
    <>
      <path d={leafPath(length, length * 0.36)} fill={`url(#${id})`} />
      <path
        d={`M0 0V${-length * 0.9}M0 ${-length * 0.3}L${length * 0.2} ${-length * 0.48}M0 ${-length * 0.3}L${-length * 0.2} ${-length * 0.48}M0 ${-length * 0.55}L${length * 0.16} ${-length * 0.7}M0 ${-length * 0.55}L${-length * 0.16} ${-length * 0.7}`}
        className="fill-none stroke-white/45"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </>
  );
}

/**
 * A mint plant whose growth follows the `--grow` custom property (0 to 1).
 * Set it from a scroll handler, or add `grow-on-load` / `grow-on-reveal`.
 * Pass `relative` or `absolute` in className to place it.
 */
export function GrowingMint({
  id,
  tags = false,
  soil = false,
  className = "",
  style,
}: {
  /** Unique per page; names the leaf gradient. */
  id: string;
  tags?: boolean;
  soil?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`aspect-[400/520] ${className}`} style={style} aria-hidden="true">
      <svg viewBox="0 0 400 520" className="absolute inset-0 size-full overflow-visible">
        <defs>
          <linearGradient id={id}>
            <stop offset="0.5" className="[stop-color:var(--color-leaf)]" />
            <stop offset="0.5" className="[stop-color:var(--color-leaf-dark)]" />
          </linearGradient>
        </defs>
        {soil && (
          <>
            <path d="M70 474c60-10 200-10 260 0" className="fill-none stroke-ink/25" strokeWidth="3" strokeLinecap="round" />
            <path d="M110 490h28M176 496h50M262 489h30" className="fill-none stroke-ink/15" strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="200" cy="474" rx="13" ry="8" className="seed fill-[#8a6a3f]" />
          </>
        )}
        <path d={stemPath} pathLength="1" className="stem fill-none stroke-leaf-dark" strokeWidth="6" strokeLinecap="round" />
        {leaves.map((leaf, i) => (
          <g key={leaf.key} transform={`translate(${leaf.x.toFixed(1)} ${leaf.y.toFixed(1)}) rotate(${leaf.rotation.toFixed(1)})`}>
            <g className="leaf" style={{ "--at": leaf.at } as CSSProperties}>
              <g className="sway" style={{ animationDelay: `${-i * 0.7}s` }}>
                <Leaf length={leaf.length} id={id} />
              </g>
            </g>
          </g>
        ))}
        {[-24, 0, 24].map((angle, i) => (
          <g key={angle} transform={`translate(${tip.x} ${tip.y}) rotate(${tip.heading + 90 + angle})`}>
            <g className="leaf" style={{ "--at": 0.84 } as CSSProperties}>
              <g className="sway" style={{ animationDelay: `${-i}s` }}>
                <Leaf length={angle === 0 ? 34 : 26} id={id} />
              </g>
            </g>
          </g>
        ))}
      </svg>
      {tags &&
        leaves.map(
          (leaf) =>
            leaf.tag && (
              <span
                key={leaf.key}
                className={`plant-tag absolute hidden rounded-full bg-forest px-3 py-1.5 text-[13px] font-semibold whitespace-nowrap text-white shadow-lg sm:block ${
                  leaf.side === 1 ? "translate-x-2" : "-translate-x-[calc(100%+0.5rem)]"
                } -translate-y-1/2`}
                style={
                  {
                    left: `${(leaf.tipX / 400) * 100}%`,
                    top: `${(leaf.tipY / 520) * 100}%`,
                    "--at": leaf.at + 0.08,
                  } as CSSProperties
                }
              >
                {leaf.tag}
              </span>
            ),
        )}
    </div>
  );
}

/** A single loose leaf, for accents. */
export function LooseLeaf({ id, className = "" }: { id: string; className?: string }) {
  return (
    <svg viewBox="-22 -58 44 62" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={id}>
          <stop offset="0.5" className="[stop-color:var(--color-leaf)]" />
          <stop offset="0.5" className="[stop-color:var(--color-leaf-dark)]" />
        </linearGradient>
      </defs>
      <Leaf length={54} id={id} />
    </svg>
  );
}

// Deterministic scatter, so server and browser render the same leaves.
const FALLING = Array.from({ length: 14 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  size: 18 + ((i * 13) % 22),
  duration: 9 + ((i * 7) % 9),
  delay: -((i * 5) % 14),
  drift: (i % 2 ? 1 : -1) * (30 + ((i * 17) % 60)),
}));

/** Leaves drifting down through a dark band. */
export function FallingLeaves() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {FALLING.map((leaf, i) => (
        <span
          key={i}
          className="falling-leaf absolute -top-16"
          style={
            {
              left: `${leaf.left}%`,
              width: leaf.size,
              animationDuration: `${leaf.duration}s`,
              animationDelay: `${leaf.delay}s`,
              "--drift": `${leaf.drift}px`,
            } as CSSProperties
          }
        >
          <LooseLeaf id={`fall-${i}`} className="w-full opacity-80" />
        </span>
      ))}
    </div>
  );
}

/** A band of words sliding sideways, separated by leaves. */
export function Marquee({ words }: { words: string[] }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center">
      {words.map((word) => (
        <li key={word} className="flex items-center font-display text-3xl whitespace-nowrap sm:text-5xl">
          <span className="px-6 sm:px-10">{word}</span>
          <LooseLeaf id={`mq-${hidden ? "b" : "a"}-${word.replace(/\W/g, "")}`} className="w-6 rotate-45 sm:w-8" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="overflow-hidden border-y border-line bg-white py-6 sm:py-8">
      <div className="marquee flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
