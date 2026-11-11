import type { Metadata } from "next";
import { ContactForm } from "@/components/forms";
import { Container, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
  description: "Start a conversation with Mint about your practice.",
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
        <aside className="self-start rounded-2xl border border-line bg-white p-7">
          <h2 className="font-display text-xl">Prefer email?</h2>
          <a href={`mailto:${site.email}`} className="mt-2 block font-semibold text-mint-deep hover:underline">
            {site.email}
          </a>
        </aside>
      </Container>
    </>
  );
}
