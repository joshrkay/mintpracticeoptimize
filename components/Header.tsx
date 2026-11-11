import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Container } from "./ui";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/70 bg-paper/75 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-baseline gap-2.5">
          <span className="font-display text-2xl font-semibold text-mint-deep">{site.brand}</span>
          <span className="hidden text-sm text-muted md:inline">{site.descriptor}</span>
        </Link>
        <nav className="flex items-center gap-4 text-[15px] font-medium sm:gap-7">
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
