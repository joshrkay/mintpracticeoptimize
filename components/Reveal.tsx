"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Blocks that fade up as they scroll into view: section headings and the items of
// every grid or list inside the page body. The hero animates on its own.
const TARGETS = [
  "main section:not([data-hero]) h2",
  "main section:not([data-hero]) :is(ul, ol, dl, .grid) > :is(li, div, a, figure, svg)",
  "main section:not([data-hero]) :is(figure, table)",
].join(", ");

export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = [...document.querySelectorAll<HTMLElement>(TARGETS)].filter(
      (el) => !el.parentElement?.closest("[data-reveal]"),
    );
    const viewport = window.innerHeight;
    for (const el of els) {
      el.dataset.reveal = "";
      // Stagger siblings so a row of cards arrives in sequence.
      const index = [...(el.parentElement?.children ?? [])].indexOf(el);
      el.style.setProperty("--reveal-delay", `${Math.min(index, 6) * 80}ms`);
      // Anything already on screen stays put; no flash on load.
      if (el.getBoundingClientRect().top < viewport) el.classList.add("in");
    }
    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    for (const el of els) if (!el.classList.contains("in")) observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
