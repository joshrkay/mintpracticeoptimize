import Image from "next/image";
import type { CSSProperties } from "react";

// The leaf artwork in public/leaves is a cut-out photograph in a 480 x 660 frame
// (any resolution with those proportions), leaf base at the bottom centre and the
// tip 602 units above it. All photographs are prepared by scripts/prepare-photos.mjs.
const ART = { width: 480, height: 660, baseX: 240, baseY: 628, length: 602 };
const artFile = (variant: number) => `/leaves/leaf-${(((variant - 1) % 3) + 3) % 3 + 1}.webp`;

/** A leaf image inside an SVG, base at the origin and tip `length` units straight up. */
export function LeafImage({ length, variant = 1 }: { length: number; variant?: number }) {
  const k = length / ART.length;
  return (
    <image
      href={artFile(variant)}
      x={-ART.baseX * k}
      y={-ART.baseY * k}
      width={ART.width * k}
      height={ART.height * k}
    />
  );
}

// The two plant photographs, and where each fix to the practice is pinned on them
// (percent of the photo's box; `side` is the side the label hangs off).
const PHOTOS = {
  // A sprig on its stem, standing upright: it grows from the base.
  sprig: {
    src: "/photos/mint-sprig.webp",
    width: 343,
    height: 398,
    motion: "photo-grow",
    tags: [
      { text: "Phones answered", x: 74, y: 86, side: 1 },
      { text: "Copays collected", x: 8, y: 46, side: -1 },
      { text: "Visits prepared", x: 94, y: 30, side: 1 },
      { text: "Charts finished", x: 20, y: 28, side: -1 },
      { text: "Patients recalled", x: 62, y: 6, side: 1 },
      { text: "Reviews earned", x: 30, y: 66, side: -1 },
    ],
  },
  // The whole sprig seen from above: it opens out from the centre.
  crown: {
    src: "/photos/mint-crown.webp",
    width: 510,
    height: 454,
    motion: "photo-bloom",
    tags: [
      { text: "Phones answered", x: 90, y: 84, side: 1 },
      { text: "Copays collected", x: 4, y: 76, side: -1 },
      { text: "Visits prepared", x: 98, y: 34, side: 1 },
      { text: "Charts finished", x: 2, y: 44, side: -1 },
      { text: "Patients recalled", x: 62, y: 4, side: 1 },
      { text: "Reviews earned", x: 22, y: 6, side: -1 },
    ],
  },
} as const;

/**
 * A photographed mint plant whose growth follows the `--grow` custom property
 * (0 to 1). Set it from a scroll handler, or add `grow-on-load` / `grow-on-reveal`.
 * Pass `relative` or `absolute` in className to place it, and a width to size it.
 */
export function GrowingMint({
  photo = "sprig",
  tags = false,
  ground = false,
  priority = false,
  className = "",
  style,
}: {
  photo?: keyof typeof PHOTOS;
  tags?: boolean;
  /** Draw the shadow the plant casts on the ground. */
  ground?: boolean;
  /** Load the photo early; for a plant visible when the page opens. */
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const art = PHOTOS[photo];
  return (
    <div
      className={className}
      style={{ aspectRatio: `${art.width} / ${art.height}`, ...style }}
      aria-hidden="true"
    >
      {ground && <span className="ground absolute inset-x-[8%] -bottom-[3%] h-[7%] rounded-[50%]" />}
      <div className={`absolute inset-0 ${art.motion}`}>
        <div className="photo-sway size-full">
          <Image
            src={art.src}
            alt=""
            width={art.width}
            height={art.height}
            priority={priority}
            sizes="(min-width: 1024px) 480px, 60vw"
            className="size-full object-contain drop-shadow-[0_18px_22px_rgba(11,34,25,0.22)]"
          />
        </div>
      </div>
      {tags &&
        art.tags.map((tag, i) => (
          <span
            key={tag.text}
            className={`plant-tag absolute hidden rounded-full bg-white px-3 py-1.5 text-[13px] font-semibold whitespace-nowrap text-forest shadow-[0_8px_24px_-8px_rgba(11,34,25,0.45)] ring-1 ring-forest/10 sm:block ${
              tag.side === 1 ? "" : "-translate-x-full"
            } -translate-y-1/2`}
            style={{ left: `${tag.x}%`, top: `${tag.y}%`, "--at": 0.3 + i * 0.1 } as CSSProperties}
          >
            {tag.text}
          </span>
        ))}
    </div>
  );
}

/** A single loose leaf, for accents. Size it with a width class. */
export function LooseLeaf({
  variant = 1,
  className = "",
  style,
}: {
  variant?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg viewBox={`0 0 ${ART.width} ${ART.height}`} aria-hidden="true" className={className} style={style}>
      <image href={artFile(variant)} width={ART.width} height={ART.height} />
    </svg>
  );
}

// Deterministic scatter, so server and browser render the same leaves.
const FALLING = Array.from({ length: 14 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  size: 20 + ((i * 13) % 26),
  duration: 10 + ((i * 7) % 9),
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
          <LooseLeaf variant={i + 1} className={`w-full ${i % 3 === 0 ? "opacity-50 blur-[1.5px]" : "opacity-90"}`} />
        </span>
      ))}
    </div>
  );
}

/** A band of words sliding sideways, separated by leaves. */
export function Marquee({ words }: { words: string[] }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center">
      {words.map((word, i) => (
        <li key={word} className="flex items-center font-display text-3xl whitespace-nowrap sm:text-5xl">
          <span className="px-6 sm:px-10">{word}</span>
          <LooseLeaf variant={i + 1} className="w-5 rotate-[55deg] sm:w-7" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="overflow-hidden bg-lime py-6 text-forest sm:py-8">
      <div className="marquee flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

/** A leaf used as a list bullet. */
export function LeafBullet({ index = 0 }: { index?: number }) {
  return <LooseLeaf variant={index + 1} className="mt-0.5 w-4 shrink-0 rotate-[35deg]" />;
}
