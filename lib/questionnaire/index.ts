import { coreSections, goalsSection } from "./core";
import { podiatrySections } from "./podiatry";
import type { Questionnaire, Section } from "./types";

// To add a specialty: write its sections file and register it here.
const specialties: Record<string, { specialty: string; sections: Section[] }> = {
  podiatry: { specialty: "Podiatry", sections: podiatrySections },
};

export const specialtySlugs = Object.keys(specialties);

export function getQuestionnaire(slug: string): Questionnaire | null {
  const entry = Object.hasOwn(specialties, slug) ? specialties[slug] : null;
  if (!entry) return null;
  return {
    slug,
    specialty: entry.specialty,
    sections: [...coreSections, ...entry.sections, goalsSection],
  };
}
