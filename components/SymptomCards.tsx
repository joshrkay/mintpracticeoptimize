"use client";

import { useState } from "react";
import { LooseLeaf } from "./mint";

export type Symptom = { today: string; mint: string };

/** Problem cards that start wilted and revive into the fix on hover or tap. */
export function SymptomCards({ items }: { items: Symptom[] }) {
  const [revived, setRevived] = useState<Record<number, boolean>>({});

  return (
    <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <li key={item.today}>
          <button
            type="button"
            aria-pressed={!!revived[i]}
            onClick={() => setRevived((r) => ({ ...r, [i]: !r[i] }))}
            className="symptom group relative flex size-full min-h-48 flex-col items-start overflow-hidden rounded-3xl border border-line bg-paper p-6 text-left transition-colors duration-500 hover:border-mint-deep hover:bg-mint-soft aria-pressed:border-mint-deep aria-pressed:bg-mint-soft"
          >
            <LooseLeaf variant={i + 1} className="symptom-leaf w-9 shrink-0" />
            <span className="mt-4 grid text-xl leading-snug">
              <span className="symptom-today col-start-1 row-start-1">
                <span className="sr-only">Today: </span>
                {item.today}
              </span>
              <span className="symptom-mint col-start-1 row-start-1 font-semibold text-forest">
                <span className="sr-only">With Mint: </span>
                {item.mint}
              </span>
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
