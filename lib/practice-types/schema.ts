import type { IconName } from "@/components/icons";

export type Pillar = "operations" | "revenue" | "marketing";

export const pillarLabels: Record<Pillar, string> = {
  operations: "Operations",
  revenue: "Revenue opportunities",
  marketing: "Marketing",
};

/**
 * A page is a hero followed by a list of blocks, and each practice type chooses its own mix
 * and order, so a physical therapy page is not a podiatry page with the nouns swapped.
 */
export type Block =
  /** Prose: how this kind of office actually runs. */
  | { type: "story"; heading: string; paragraphs: string[] }
  /** A step-by-step path (the patient's, or the work's), with where each step goes wrong. */
  | { type: "journey"; heading: string; intro?: string; steps: { title: string; body: string; leak?: string }[] }
  /** The office's own vocabulary, in plain words. */
  | { type: "terms"; heading: string; intro?: string; items: { term: string; meaning: string }[] }
  /** Rules and facts that change what happens at the desk. */
  | { type: "rules"; heading: string; intro?: string; items: { title: string; body: string }[] }
  /** Where Mint would look first, tagged by pillar. */
  | { type: "cards"; heading: string; intro?: string; items: { pillar: Pillar; icon: IconName; title: string; body: string }[] }
  /** The office's day as it runs now, beside the same moment with Mint. */
  | { type: "compare"; heading: string; intro?: string; items: { today: string; mint: string }[] };

export type PracticeType = {
  /** The page lives at /<slug>. */
  slug: string;
  kind: "specialty" | "size" | "payment";
  name: string;
  /** Short form, used in headings: "Podiatry", "Solo". */
  short: string;
  icon: IconName;
  /** One or two lines on the hub page. */
  summary: string;
  /** Page title, 46 characters or fewer, so the full title fits in search results. */
  title: string;
  /** Meta description, 70 to 160 characters. */
  description: string;
  h1: string;
  lede: string;
  blocks: Block[];
  faqs: { q: string; a: string }[];
  /** Slugs of other practice types to link to. */
  related: string[];
  /** When the rules on this page were last checked, shown beside any rule that can change. */
  reviewed?: string;
};

export const kindHeadings: Record<PracticeType["kind"], string> = {
  specialty: "By specialty",
  size: "By size",
  payment: "By how you are paid",
};
