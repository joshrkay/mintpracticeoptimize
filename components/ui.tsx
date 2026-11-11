import Link from "next/link";
import type { ReactNode } from "react";
import { DepthHero } from "./DepthHero";
import { FallingLeaves } from "./mint";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-mint-deep in-data-dark:text-lime">{children}</p>
  );
}

const variants = {
  // The accent: one primary action per view.
  primary: "bg-lime text-forest hover:bg-forest hover:text-white in-data-dark:hover:bg-white in-data-dark:hover:text-forest",
  // On a lime band, where the accent is already the background.
  dark: "bg-forest text-white hover:bg-mint-deep",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-white in-data-dark:border-white/35 in-data-dark:text-white in-data-dark:hover:bg-white/10",
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
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}

export function PageHero({ eyebrow, title, lede }: { eyebrow: string; title: string; lede: string }) {
  return (
    <DepthHero>
      <Container className="py-20 sm:py-28">
        <div className="max-w-2xl">
          <div className="animate-rise">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h1
            style={{ animationDelay: "120ms" }}
            className="mt-4 animate-rise font-display text-5xl leading-[1.02] tracking-tight text-balance sm:text-6xl"
          >
            {title}
          </h1>
          <p
            style={{ animationDelay: "260ms" }}
            className="mt-6 animate-rise text-lg leading-relaxed text-white/80 sm:text-xl"
          >
            {lede}
          </p>
        </div>
      </Container>
    </DepthHero>
  );
}

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-lime text-forest">
      <FallingLeaves />
      <Container className="relative flex min-h-[72svh] flex-col items-center justify-center py-16 text-center">
        <h2 className="mx-auto max-w-4xl font-display text-4xl leading-[1.02] tracking-tight text-balance sm:text-6xl">
          See what your practice could <span className="italic">grow</span> into.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-xl text-forest/75">
          Start with a conversation. If it is a fit, discovery comes next.
        </p>
        <div className="mt-8">
          <ButtonLink href="/contact" variant="dark">
            Start a conversation
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
