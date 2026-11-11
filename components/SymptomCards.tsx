export type Symptom = { today: string; mint: string };

/** Two plain tables side by side: the day as it runs now, and the same day with Mint. */
export function SymptomCards({ items }: { items: Symptom[] }) {
  const table = (title: string, rows: string[], mint: boolean) => (
    <table className={`w-full border-collapse overflow-hidden rounded-3xl text-left ${mint ? "bg-mint-soft" : "bg-white"}`}>
      <thead>
        <tr>
          <th
            scope="col"
            className={`px-6 pt-6 pb-3 text-sm font-semibold tracking-[0.14em] uppercase ${mint ? "text-mint-deep" : "text-muted"}`}
          >
            {title}
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row} className="border-t border-ink/10">
            <td className={`px-6 py-4 text-lg leading-snug ${mint ? "font-medium text-forest" : "text-ink/80"}`}>{row}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="mt-10 grid items-start gap-5 md:grid-cols-2">
      {table("Today", items.map((i) => i.today), false)}
      {table("With Mint", items.map((i) => i.mint), true)}
    </div>
  );
}
