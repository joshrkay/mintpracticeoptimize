import type { Section } from "./types";

export const physicalTherapySections: Section[] = [
  {
    id: "physical-therapy",
    title: "Physical therapy",
    questions: [
      { id: "pt_focus", label: "What does your clinic mainly treat?", type: "multi", options: ["Orthopedic and sports", "Post-surgical", "Neurologic", "Pelvic health", "Vestibular", "Workers' compensation", "Pediatrics", "Wellness or cash-based programs"] },
      { id: "pt_payer", label: "Which payers make up most of your visits?", type: "multi", options: ["Commercial insurance", "Medicare", "Medicare Advantage", "AHCCCS", "Workers' compensation", "Auto injury", "Cash"] },
      { id: "pt_emr", label: "Which EMR do you use, and which home exercise program tool?", type: "text" },
      { id: "pt_direct", label: "What share of new patients come without a physician referral?", type: "single", options: ["Most", "About half", "A few", "Not sure"] },
      { id: "pt_auth", label: "Who checks visits remaining and authorization before the evaluation?", type: "single", options: ["Front desk", "A dedicated person", "The therapist", "Nobody before the first visit"] },
      { id: "pt_series", label: "Do patients leave with the whole series of visits booked?", type: "single", options: ["Almost always", "Sometimes", "Rarely, one visit at a time"] },
      { id: "pt_noshow_policy", label: "Do you have a written cancellation policy that patients sign at intake?", type: "single", options: ["Yes, and we enforce it", "Yes, but we rarely enforce it", "No"] },
      { id: "pt_waitlist", label: "When a patient cancels, how is the slot refilled?", type: "single", options: ["Waitlist text", "Staff call patients", "It usually stays empty"] },
      { id: "pt_cert", label: "How do you track plans of care waiting for a physician's signature?", type: "single", options: ["A report in the EMR", "A spreadsheet or paper list", "Therapist remembers", "Not tracked"] },
      { id: "pt_dropoff", label: "Of patients who have an evaluation, roughly how many come back for a second visit?", type: "text" },
      { id: "pt_discharge", label: "Do patients get a formal discharge, and does the referring office hear the outcome?", type: "single", options: ["Always", "Sometimes", "Rarely"] },
      { id: "pt_referrers", label: "Who are your top referral sources, and how often do you contact them?", type: "textarea" },
      { id: "pt_assistants", label: "Do you use PTAs or aides? How is their schedule built?", type: "textarea" },
    ],
  },
];
