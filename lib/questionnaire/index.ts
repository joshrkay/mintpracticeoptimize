import { coreSections, goalsSection } from "./core";
import { chiropracticSections } from "./chiropractic";
import { dermatologySections } from "./dermatology";
import { physicalTherapySections } from "./physical-therapy";
import { podiatrySections } from "./podiatry";
import { primaryCareSections } from "./primary-care";
import { urgentCareSections } from "./urgent-care";
import type { Questionnaire, Section } from "./types";

// To add a specialty: write its sections file and register it here.
const specialties: Record<string, { specialty: string; sections: Section[] }> = {
  podiatry: { specialty: "Podiatry", sections: podiatrySections },
  chiropractic: { specialty: "Chiropractic", sections: chiropracticSections },
  "physical-therapy": { specialty: "Physical therapy", sections: physicalTherapySections },
  dermatology: { specialty: "Dermatology", sections: dermatologySections },
  "primary-care": { specialty: "Primary care", sections: primaryCareSections },
  "urgent-care": { specialty: "Urgent care", sections: urgentCareSections },
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
