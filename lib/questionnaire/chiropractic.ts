import type { Section } from "./types";

export const chiropracticSections: Section[] = [
  {
    id: "chiropractic",
    title: "Chiropractic",
    questions: [
      { id: "chiro_services", label: "Which services do you offer?", type: "multi", options: ["Spinal adjustments", "Exams and re-exams", "In-office X-ray", "Modalities (stim, ultrasound, heat or ice)", "Traction or decompression", "Acupuncture", "Massage", "Nutrition or supplements", "Auto injury care", "Workers' compensation care"] },
      { id: "chiro_payer", label: "Which kinds of patients do you see?", type: "multi", options: ["Commercial insurance", "Medicare", "Medicare Advantage", "AHCCCS", "Cash plans or packages", "Auto injury (med-pay or attorney)", "Workers' compensation"] },
      { id: "chiro_rof", label: "Do new patients have a separate report of findings visit?", type: "single", options: ["Always", "Sometimes", "No, we explain at the first visit"] },
      { id: "chiro_financial", label: "Who has the money conversation about the plan, and when?", type: "textarea" },
      { id: "chiro_script", label: "Does every staff member explain coverage and cost the same way?", type: "single", options: ["Yes, it is written down", "Mostly", "It varies by person"] },
      { id: "chiro_plan_booked", label: "Do patients leave with their upcoming visits booked?", type: "single", options: ["The whole block", "The next visit only", "Often neither"] },
      { id: "chiro_missed", label: "When a patient misses a visit, what happens?", type: "single", options: ["Same-day call", "Text", "A weekly list", "Nothing in particular"] },
      { id: "chiro_reexam", label: "Do re-exams happen on schedule?", type: "single", options: ["Almost always", "Sometimes", "Rarely"] },
      { id: "chiro_dropoff", label: "Where do you lose patients before they finish a plan?", type: "textarea" },
      { id: "chiro_medicare", label: "How does the desk handle Medicare patients who want care Medicare does not cover?", type: "textarea", help: "Describe the process, not the patient." },
      { id: "chiro_pi", label: "If you see auto injury patients, who tracks liens, letters of protection and attorney requests?", type: "single", options: ["Owner or doctor", "Front desk", "Biller", "An outside service", "We don't see them"] },
      { id: "chiro_reactivation", label: "Do you reach out to patients who stopped before finishing a plan?", type: "single", options: ["Regularly", "Occasionally", "Never"] },
    ],
  },
];
