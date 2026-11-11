export type Symptom = { today: string; mint: string };

/** The practice's day as it runs now: a plain list, no interaction. */
export function SymptomCards({ items }: { items: Symptom[] }) {
  return (
    <ul className="mt-12 border-t border-line">
      {items.map((item) => (
        <li key={item.today} className="border-b border-line py-6 font-display text-2xl leading-snug text-ink sm:py-7 sm:text-4xl">
          {item.today}
        </li>
      ))}
    </ul>
  );
}
