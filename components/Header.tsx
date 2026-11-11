import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo, LogoMark } from "./Logo";
import { Container } from "./ui";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/70 bg-paper/75 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.brand} ${site.descriptor}, home`}>
          <LogoMark className="hidden size-9 min-[420px]:block" />
          <Logo className="text-[1.7rem] leading-none" />
          <span className="ml-1 hidden border-l border-line pl-3 text-[11px] leading-tight font-semibold tracking-[0.16em] text-muted uppercase md:inline">
            Practice Optimization
            <br />
            Partners
          </span>
        </Link>
        <nav className="flex items-center gap-3 text-[15px] font-medium sm:gap-7">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-ink/80 hover:text-ink">
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-forest px-4 py-2 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-mint-deep"
          >
            Contact
          </Link>
        </nav>
      </Container>
    </header>
  );
}
