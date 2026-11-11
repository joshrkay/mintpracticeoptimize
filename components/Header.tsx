import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo, LogoMark } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { Container } from "./ui";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/70 bg-paper/75 backdrop-blur-xl">
      <Container className="relative flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex min-h-11 items-center gap-2.5" aria-label={`${site.brand} ${site.descriptor}, home`}>
          <LogoMark className="hidden size-9 min-[420px]:block" />
          <Logo className="text-[1.7rem] leading-none" />
          <span className="ml-1 hidden border-l border-line pl-3 text-[11px] leading-tight font-semibold tracking-[0.16em] text-muted uppercase md:inline">
            Practice Optimization
            <br />
            Partners
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <nav aria-label="Main" className="hidden items-center gap-7 text-[15px] font-medium md:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="flex min-h-11 items-center text-ink/80 hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="flex min-h-11 items-center rounded-full bg-lime px-5 text-[15px] font-semibold text-forest transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest hover:text-white md:ml-5"
          >
            Contact
          </Link>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
