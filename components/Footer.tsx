import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import { LogoLockup } from "./Logo";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <LogoLockup />
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {footerNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
          <a href={`mailto:${site.email}`} className="hover:text-ink">
            {site.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}
