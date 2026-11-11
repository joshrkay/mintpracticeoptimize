import type { Metadata } from "next";
import { Logo, LogoLockup, LogoMark } from "@/components/Logo";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Brand",
  robots: { index: false, follow: false },
};

const colors = [
  ["Forest", "#0b2219", "text-white"],
  ["Mint deep", "#17694c", "text-white"],
  ["Leaf", "#3f9a4c", "text-white"],
  ["Lime", "#cdf56a", "text-forest"],
  ["Mint soft", "#dbf3e4", "text-forest"],
  ["Paper", "#f4f8f1", "text-forest"],
];

/** Internal reference sheet for the logo and palette. Not linked or indexed. */
export default function Brand() {
  return (
    <Container className="space-y-10 py-16">
      <h1 className="font-display text-5xl tracking-tight">Mint brand sheet</h1>
      <div className="grid gap-5 md:grid-cols-2">
        <div id="lockup-light" className="flex items-center justify-center overflow-hidden rounded-3xl border border-line bg-white p-6 sm:p-14">
          <LogoLockup />
        </div>
        <div id="lockup-dark" className="flex items-center justify-center overflow-hidden rounded-3xl bg-forest p-6 sm:p-14">
          <LogoLockup tone="dark" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 rounded-3xl border border-line bg-white p-8 sm:p-14">
          <Logo className="text-7xl" />
          <LogoMark className="size-24" />
        </div>
        <div className="flex items-center justify-center gap-10 rounded-3xl bg-mint-soft p-14">
          <Logo className="text-3xl" />
          <LogoMark className="size-10" />
          <LogoMark className="size-6" />
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {colors.map(([name, hex, text]) => (
          <li key={hex} className={`rounded-2xl border border-line p-5 ${text}`} style={{ background: hex }}>
            <p className="font-semibold">{name}</p>
            <p className="text-sm opacity-80">{hex}</p>
          </li>
        ))}
      </ul>
      <p className="max-w-2xl text-muted">
        Wordmark: Fraunces Semibold, with a leaf for the dot of the i. Descriptor: Geist
        Semibold, uppercase, widely spaced. The mark alone is used where space is tight.
      </p>
    </Container>
  );
}
