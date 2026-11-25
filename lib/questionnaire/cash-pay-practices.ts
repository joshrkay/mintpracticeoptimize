import type { Section } from "./types";

export const cashPaySections: Section[] = [
  {
    id: "cash-pay",
    title: "Running a cash-pay practice",
    questions: [
      { id: "cash_model", label: "Which best describes your practice?", type: "single", options: ["Cash-pay visits, no insurance billing", "Direct primary care or membership", "Concierge (membership plus insurance)", "Cash services alongside insurance", "Out-of-network, patients seek reimbursement"] },
      { id: "cash_pricelist", label: "Do you have a written price list or package menu?", type: "single", options: ["Yes, published", "Yes, internal only", "No, we quote case by case"] },
      { id: "cash_firstcall", label: "When someone calls and asks what it costs, what happens?", type: "textarea" },
      { id: "cash_gfe", label: "For self-pay patients with a scheduled visit, do you send a written Good Faith Estimate?", type: "single", options: ["Always", "Sometimes", "Not sure what that is", "Not applicable"] },
      { id: "cash_gfe_owner", label: "Who sends the estimate, and when?", type: "text" },
      { id: "cash_added", label: "What happens when a service is added at the visit that the estimate did not include?", type: "textarea" },
      { id: "cash_deposit", label: "Do you take deposits or hold a card for new bookings?", type: "single", options: ["Deposit", "Card on file", "Both", "Neither"] },
      { id: "cash_policy", label: "Do patients sign a cancellation and refund policy?", type: "single", options: ["Yes, and we apply it evenly", "Yes, but we waive it often", "No"] },
      { id: "cash_agreement", label: "If you run memberships, is there a written agreement on file for each member?", type: "single", options: ["Yes, all", "Some", "No", "Not applicable"] },
      { id: "cash_renewals", label: "How do you track membership renewals and unused packages?", type: "single", options: ["A report in our system", "A spreadsheet", "We don't", "Not applicable"] },
      { id: "cash_processing", label: "What do you pay in card processing fees, and have you looked at it recently?", type: "text" },
      { id: "cash_receipt", label: "Can you give patients an itemized receipt or superbill for insurance or HSA?", type: "single", options: ["Yes, easily", "Yes, but it takes effort", "No"] },
      { id: "cash_recall", label: "How do patients come back for repeat services?", type: "single", options: ["Booked before they leave", "Reminder when due", "They call us", "No system"] },
      { id: "cash_consent", label: "Do you have written consent before texting or emailing patients about anything other than appointments?", type: "single", options: ["Yes, on file", "Partly", "No", "Not sure"] },
      { id: "cash_discount", label: "Do you offer different prices to insured and uninsured patients, or to patients who pay in cash?", type: "textarea" },
    ],
  },
];
