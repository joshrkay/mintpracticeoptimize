// The logo's leaf: base at the origin, tip straight up. Flat by design, so the
// mark stays crisp at favicon size and prints in one colour.
export const LOGO_LEAF = "M0 0C-33 -20-40-62 0-100C40-62 33-20 0 0Z";
const VEIN = "M0-6V-84";

/** The symbol on its own: a pair of mint leaves on a forest tile. */
export function LogoMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Mint">
      <rect width="64" height="64" rx="15" className="fill-forest" />
      <g transform="translate(32 51)">
        <path d="M0 0V-14" className="stroke-[#8fe0a8]" strokeWidth="2.6" strokeLinecap="round" />
        {[-38, 38].map((angle) => (
          <g key={angle} transform={`translate(0 -13) rotate(${angle}) scale(0.3)`}>
            <path d={LOGO_LEAF} className="fill-[#8fe0a8]" />
            <path d={VEIN} className="stroke-forest" strokeWidth="5" strokeLinecap="round" />
          </g>
        ))}
        <g transform="translate(0 -15) scale(0.2)">
          <path d={LOGO_LEAF} className="fill-lime" />
        </g>
      </g>
    </svg>
  );
}

/**
 * The wordmark: "Mint" with a leaf for the dot of the i.
 * Sized by the surrounding font size.
 */
export function Logo({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  const ink = tone === "light" ? "text-forest" : "text-white";
  const leaf = tone === "light" ? "fill-leaf" : "fill-lime";
  return (
    <span role="img" aria-label="Mint" className={`inline-flex font-display font-semibold tracking-tight ${ink} ${className}`}>
      <span aria-hidden="true">M</span>
      <span aria-hidden="true" className="relative">
        ı
        <svg viewBox="-42 -102 84 104" className="absolute bottom-[0.6em] left-1/2 w-[0.3em] -translate-x-[30%] rotate-[32deg]">
          <path d={LOGO_LEAF} className={leaf} />
        </svg>
      </span>
      <span aria-hidden="true">nt</span>
    </span>
  );
}

/** Wordmark with the descriptor beneath it. */
export function LogoLockup({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="inline-flex max-w-full items-center gap-4">
      <LogoMark className="size-16" />
      <span className="flex flex-col">
        <Logo tone={tone} className="text-5xl leading-none" />
        <span className={`mt-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase sm:text-[11px] sm:tracking-[0.22em] ${tone === "light" ? "text-muted" : "text-white/70"}`}>
          Practice Optimization Partners
        </span>
      </span>
    </span>
  );
}
