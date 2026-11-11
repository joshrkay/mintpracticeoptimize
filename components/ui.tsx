import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-mint-deep">{children}</p>
  );
}

const variants = {
  primary: "bg-mint-deep text-white hover:bg-forest",
  light: "bg-white text-forest hover:bg-mint-soft",
  outline: "border border-ink/25 text-ink hover:border-ink",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-colors ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}

export function PageHero({ eyebrow, title, lede }: { eyebrow: string; title: string; lede: string }) {
  return (
    <section className="border-b border-line bg-mint-soft/60">
      <Container className="py-16 sm:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
      </Container>
    </section>
  );
}

export function CallToAction() {
  return (
    <section className="bg-forest text-white">
      <Container className="flex flex-col items-start gap-6 py-16 sm:py-20 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl">See what your practice could be doing.</h2>
          <p className="mt-3 max-w-xl text-lg text-white/75">
            Start with a conversation. If it is a fit, discovery comes next.
          </p>
        </div>
        <ButtonLink href="/contact" variant="light">
          Start a conversation
        </ButtonLink>
      </Container>
    </section>
  );
}
