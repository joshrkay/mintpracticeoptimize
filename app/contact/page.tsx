import type { Metadata } from "next";
import { ContactForm } from "@/components/forms";
import { Container, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
  description:
    "Tell Mint about your practice and what you would like to improve. We work on site with independent medical practices across the Phoenix area.",
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation."
        lede="Tell us a little about your practice and what you would like to improve. We will take it from there."
      />
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[2fr_1fr]">
        <ContactForm />
        <aside className="self-start rounded-3xl border border-line bg-white p-7">
          <h2 className="font-display text-xl">Prefer email?</h2>
          <a href={`mailto:${site.email}`} className="mt-1 flex min-h-11 items-center font-semibold break-all text-mint-deep hover:underline">
            {site.email}
          </a>
        </aside>
      </Container>
    </>
  );
}
