import type { Section } from "./types";

export const primaryCareSections: Section[] = [
  {
    id: "primary-care",
    title: "Primary care",
    questions: [
      { id: "pc_type", label: "What best describes your practice?", type: "single", options: ["Family medicine", "Internal medicine", "Pediatrics", "Direct primary care or membership", "Concierge", "Mixed"] },
      { id: "pc_panel", label: "Roughly how many active patients are on your panel?", type: "text" },
      { id: "pc_new", label: "Are you accepting new patients?", type: "single", options: ["Yes", "Limited", "No"] },
      { id: "pc_third", label: "How many days out is your third next available appointment for an established patient?", type: "text", help: "Your best guess is fine." },
      { id: "pc_sameday", label: "Do you hold slots for same-day sick visits?", type: "single", options: ["Yes, enough", "Yes, but they fill", "No"] },
      { id: "pc_huddle", label: "Do you hold a daily huddle before clinic?", type: "single", options: ["Every day", "Some days", "No"] },
      { id: "pc_chartprep", label: "Is the chart prepared before the visit?", type: "single", options: ["Always", "Sometimes", "Rarely"] },
      { id: "pc_inbox", label: "Who works the inbox (results, refills, messages, forms)?", type: "single", options: ["The provider", "A nurse or MA with protocols", "A mix", "Not sure"] },
      { id: "pc_afterhours", label: "About how many hours a week do providers spend on the inbox and charting after hours?", type: "text" },
      { id: "pc_referrals", label: "How do you confirm that referrals and test results come back?", type: "single", options: ["A tracker or report", "Staff check informally", "We wait to hear", "Not tracked"] },
      { id: "pc_awv", label: "Do you book annual wellness visits and chronic care check-ins ahead of time?", type: "single", options: ["Yes, systematically", "Sometimes", "No"] },
      { id: "pc_discharge", label: "When a patient is discharged from a hospital or ER, how do you find out and follow up?", type: "textarea" },
      { id: "pc_contracts", label: "Are you in any value-based or shared savings contracts?", type: "single", options: ["Yes", "No", "Not sure"] },
    ],
  },
];
