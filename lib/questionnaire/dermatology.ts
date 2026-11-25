import type { Section } from "./types";

export const dermatologySections: Section[] = [
  {
    id: "dermatology",
    title: "Dermatology",
    questions: [
      { id: "derm_mix", label: "How is your practice split?", type: "single", options: ["Mostly medical", "Medical and cosmetic about equally", "Mostly cosmetic"] },
      { id: "derm_services", label: "Which services do you offer?", type: "multi", options: ["Skin checks", "Biopsies", "Cryotherapy", "Excisions", "Mohs surgery", "Isotretinoin (iPLEDGE)", "Biologics", "Phototherapy", "Patch testing", "Neuromodulators and fillers", "Lasers and devices", "Teledermatology"] },
      { id: "derm_providers", label: "Who sees patients?", type: "multi", options: ["Dermatologists", "PAs", "NPs", "Aestheticians or nurse injectors"] },
      { id: "derm_wait", label: "How far out is a new medical appointment?", type: "single", options: ["Under a week", "1 to 4 weeks", "1 to 3 months", "More than 3 months"] },
      { id: "derm_triage", label: "Who decides whether a caller needs to be seen urgently, and how?", type: "textarea" },
      { id: "derm_biopsy_log", label: "How do you track biopsies from specimen to patient notification?", type: "single", options: ["A log in the EMR", "A paper or spreadsheet log", "Each provider tracks their own", "Not tracked"] },
      { id: "derm_biopsy_review", label: "Does someone review the log for outstanding results on a schedule?", type: "single", options: ["Weekly or more", "Monthly", "Occasionally", "Never"] },
      { id: "derm_results", label: "How do patients usually get their results?", type: "multi", options: ["Phone call", "Portal", "Text", "At the next visit", "Letter"] },
      { id: "derm_mohs", label: "How are Mohs and surgical referrals handled?", type: "textarea" },
      { id: "derm_pa", label: "Who handles prior authorizations, and how much time do they take?", type: "textarea" },
      { id: "derm_recall", label: "Do you recall patients for annual or high-risk skin checks?", type: "single", options: ["Automated recall", "Staff track manually", "No system"] },
      { id: "derm_cosmetic_rebook", label: "How do cosmetic patients rebook for repeat treatments?", type: "single", options: ["Booked before they leave", "Reminder when due", "They call us", "No system"] },
      { id: "derm_cosmetic_pay", label: "For cosmetic care, do you take deposits or have a cancellation policy?", type: "single", options: ["Deposit and policy", "Policy only", "Neither", "Not applicable"] },
    ],
  },
];
