import { chiropractic } from "./chiropractic";
import { cashPayPractices } from "./cash-pay-practices";
import { dermatology } from "./dermatology";
import { groupPractices } from "./group-practices";
import { insuranceBasedPractices } from "./insurance-based-practices";
import { physicalTherapy } from "./physical-therapy";
import { podiatry } from "./podiatry";
import { primaryCare } from "./primary-care";
import type { PracticeType } from "./schema";
import { soloPractices } from "./solo-practices";
import { urgentCare } from "./urgent-care";

export * from "./schema";

// The order here is the order on the hub page.
export const practiceTypes: PracticeType[] = [
  podiatry,
  chiropractic,
  physicalTherapy,
  dermatology,
  primaryCare,
  urgentCare,
  soloPractices,
  groupPractices,
  insuranceBasedPractices,
  cashPayPractices,
];

export function getPracticeType(slug: string) {
  return practiceTypes.find((t) => t.slug === slug) ?? null;
}
