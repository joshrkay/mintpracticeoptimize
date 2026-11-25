import type { Section } from "./types";

export const insuranceSections: Section[] = [
  {
    id: "insurance",
    title: "The front end of an insurance-based practice",
    questions: [
      { id: "ins_payers", label: "Which payers make up most of your visits?", type: "multi", options: ["Commercial plans", "Medicare", "Medicare Advantage", "AHCCCS", "Tricare or VA", "Workers' compensation", "Auto injury"] },
      { id: "ins_capture", label: "What is collected when a patient first schedules?", type: "multi", options: ["Insurance card photo", "Member ID and subscriber details", "Secondary insurance", "Referral or authorization status", "Preferred contact method", "Nothing until check-in"] },
      { id: "ins_preregister", label: "Do patients complete forms and the financial policy before the visit?", type: "single", options: ["Almost always", "Sometimes", "Rarely, at the desk"] },
      { id: "ins_verify_when", label: "When is eligibility checked?", type: "multi", options: ["At scheduling", "A day or more ahead", "At check-in", "Only when a claim is denied"] },
      { id: "ins_verify_how", label: "How is it checked?", type: "multi", options: ["Real-time inquiry in the system", "Payer portal", "Phone call", "Outsourced service"] },
      { id: "ins_verify_owner", label: "Who owns verification, and what happens when it fails?", type: "textarea" },
      { id: "ins_auth", label: "Who tracks referrals and prior authorizations?", type: "single", options: ["A dedicated person", "Front desk", "Clinical staff", "Nobody in particular"] },
      { id: "ins_estimate", label: "Do you give patients an estimate of what they will owe?", type: "single", options: ["Always, labeled as an estimate", "Sometimes", "Rarely", "No"] },
      { id: "ins_pos", label: "Roughly what share of copays and known balances are collected at the visit?", type: "single", options: ["Almost all", "More than half", "Less than half", "Not sure"] },
      { id: "ins_script", label: "Does the desk have a script for asking for payment?", type: "single", options: ["Yes, written", "Informal", "No"] },
      { id: "ins_checkout", label: "What happens at checkout?", type: "multi", options: ["Next visit booked", "Payment taken", "Referral started", "Receipt given", "Patient often leaves before we can"] },
      { id: "ins_denials", label: "Do you know your top reasons for denials, and which start at the front desk?", type: "single", options: ["Yes, tracked by reason", "Roughly", "No"] },
      { id: "ins_statements", label: "How many statement cycles do balances go through before escalating, and who decides?", type: "text" },
      { id: "ins_waive", label: "Do you waive or discount copays or deductibles for any patients?", type: "single", options: ["No", "Case by case for hardship", "Routinely for some patients", "Not sure what our policy is"] },
    ],
  },
];
