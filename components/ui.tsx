import Link from "next/link";
import type { ReactNode } from "react";
import { Aurora } from "./graphics";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-mint-deep in-data-hero:text-glow">{children}</p>
  );
}

const variants = {
  primary: "bg-mint-deep text-white hover:bg-forest hover:shadow-[0_12px_30px_-10px_rgba(47,158,119,0.8)]",
  light: "bg-white text-forest hover:bg-glow hover:shadow-[0_12px_36px_-8px_rgba(127,224,184,0.7)]",
  outline: "border border-ink/25 text-ink hover:border-ink",
  ghost: "border border-white/30 text-white backdrop-blur hover:border-white hover:bg-white/10",
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
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}

export function PageHero({ eyebrow, title, lede }: { eyebrow: string; title: string; lede: string }) {
  return (
    <section data-hero className="relative overflow-hidden bg-forest text-white">
      <Aurora />
      <Container className="relative py-16 sm:py-24">
        <div className="animate-rise">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1
          style={{ animationDelay: "120ms" }}
          className="mt-4 max-w-3xl animate-rise font-display text-4xl leading-tight text-balance sm:text-6xl"
        >
          {title}
        </h1>
        <p
          style={{ animationDelay: "260ms" }}
          className="mt-5 max-w-2xl animate-rise text-lg leading-relaxed text-white/75 sm:text-xl"
        >
          {lede}
        </p>
      </Container>
    </section>
  );
}

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      <Aurora />
      <Container className="relative flex flex-col items-start gap-6 py-16 sm:py-24 md:flex-row md:items-center md:justify-between">
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
