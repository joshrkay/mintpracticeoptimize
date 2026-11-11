"use client";

import { useEffect, useRef, useState } from "react";

export type Symptom = { today: string; mint: string };

/** A list of problems; each line turns into the fix on hover or tap. */
export function SymptomCards({ items }: { items: Symptom[] }) {
  const [shown, setShown] = useState<Record<number, boolean>>({});
  const list = useRef<HTMLUListElement>(null);

  // Each line turns from the problem into the fix as it passes the reading line.
  useEffect(() => {
    const rows = [...(list.current?.querySelectorAll<HTMLElement>(".symptom") ?? [])];
    let frame = 0;
    const update = () => {
      frame = 0;
      for (const row of rows) {
        const r = row.getBoundingClientRect();
        row.toggleAttribute("data-on", (r.top + r.bottom) / 2 < innerHeight * 0.5);
      }
    };
    const onScroll = () => {
      frame ||= requestAnimationFrame(update);
    };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ul ref={list} className="mt-12 border-t border-line">
      {items.map((item, i) => (
        <li key={item.today} className="border-b border-line">
          <button
            type="button"
            aria-pressed={!!shown[i]}
            onClick={() => setShown((r) => ({ ...r, [i]: !r[i] }))}
            className="symptom group grid w-full gap-x-10 gap-y-1 py-6 text-left sm:grid-cols-[7rem_1fr] sm:py-7"
          >
            <span className="grid text-sm font-semibold tracking-[0.14em] uppercase sm:pt-2.5">
              <span className="symptom-today col-start-1 row-start-1 text-muted">Today</span>
              <span className="symptom-mint col-start-1 row-start-1 text-mint-deep">With Mint</span>
            </span>
            <span className="grid font-display text-2xl leading-snug sm:text-4xl">
              <span className="symptom-today col-start-1 row-start-1 text-ink/70">{item.today}</span>
              <span className="symptom-mint col-start-1 row-start-1 text-forest">{item.mint}</span>
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
