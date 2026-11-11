import type { Section } from "./types";

const FREQ = ["Always", "Sometimes", "Rarely", "Not sure"];

// Questions shared by every specialty. Specialty files add their own sections.
export const coreSections: Section[] = [
  {
    id: "practice",
    title: "About your practice",
    questions: [
      { id: "practice_name", label: "Practice name", type: "text", required: true },
      { id: "contact_name", label: "Your name", type: "text", required: true },
      { id: "contact_role", label: "Your role", type: "text" },
      { id: "contact_email", label: "Email", type: "email", required: true },
      { id: "contact_phone", label: "Phone", type: "tel" },
      { id: "location", label: "City and state", type: "text" },
      { id: "locations_count", label: "How many locations?", type: "single", options: ["1", "2", "3 to 5", "More than 5"] },
      { id: "providers_count", label: "How many providers?", type: "single", options: ["1", "2 to 3", "4 to 6", "More than 6"] },
      { id: "visits_per_week", label: "Roughly how many patient visits per week?", type: "text" },
      { id: "payer_mix", label: "How are you mostly paid?", type: "single", options: ["Mostly insurance", "A mix of insurance and cash", "Mostly cash pay"] },
      { id: "emr", label: "Which EMR or practice management system do you use?", type: "text" },
    ],
  },
  {
    id: "phones",
    title: "Phones and scheduling",
    questions: [
      { id: "phone_owner", label: "Who answers the phone?", type: "single", options: ["Front desk, alongside check-in", "Dedicated phone staff", "Answering service or call center", "A mix"] },
      { id: "missed_calls", label: "During business hours, how often do calls go to voicemail?", type: "single", options: ["Rarely", "Sometimes", "Often", "Not sure"] },
      { id: "online_scheduling", label: "Can patients book online?", type: "single", options: ["Yes", "No", "Request only, staff confirm"] },
      { id: "reminders", label: "How do you remind patients of appointments?", type: "multi", options: ["Text", "Email", "Phone call", "We don't"] },
      { id: "new_patient_wait", label: "How soon can a new patient usually be seen?", type: "single", options: ["Same or next day", "Within a week", "1 to 2 weeks", "More than 2 weeks"] },
      { id: "no_show", label: "What is your best guess at your no-show rate?", type: "single", options: ["Under 5%", "5 to 10%", "10 to 20%", "Over 20%", "Not sure"] },
    ],
  },
  {
    id: "visits",
    title: "Visit prep and collections",
    questions: [
      { id: "schedule_review", label: "Does someone review tomorrow's schedule to prepare for each visit?", type: "single", options: FREQ },
      { id: "eligibility", label: "Is insurance eligibility verified before the visit?", type: "single", options: FREQ },
      { id: "copay_timing", label: "When are copays collected?", type: "single", options: ["At check-in", "At check-out", "Billed after the visit", "It varies"] },
      { id: "balances", label: "How often do patient balances carry over from one visit to the next?", type: "single", options: ["Often", "Sometimes", "Rarely", "Not sure"] },
      { id: "card_on_file", label: "Do you keep a card on file for patients?", type: "single", options: ["Yes, for most", "For some", "No"] },
      { id: "billing", label: "Who handles billing?", type: "single", options: ["In-house", "Outsourced", "A mix"] },
    ],
  },
  {
    id: "documentation",
    title: "Documentation and follow-up",
    questions: [
      { id: "notes_timing", label: "When are visit notes usually finished?", type: "single", options: ["In the room", "Same day, during hours", "After hours", "Days later"] },
      { id: "ai_scribe", label: "Do you use an AI scribe or dictation tool?", type: "single", options: ["Yes", "Tried it and stopped", "No"] },
      { id: "charting_hours", label: "About how many hours a week do providers chart after hours?", type: "text" },
      { id: "post_visit", label: "What follow-up do patients get after a visit?", type: "multi", options: ["Phone call", "Text", "Email", "Visit summary", "None"] },
    ],
  },
  {
    id: "revenue",
    title: "Revenue opportunities",
    questions: [
      { id: "census_review", label: "Do you review your patient list to find patients eligible for additional services?", type: "single", options: ["Regularly", "Occasionally", "Never"] },
      { id: "underused_services", label: "Which services do you offer that you wish more patients used?", type: "textarea" },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    questions: [
      { id: "patient_email", label: "Do you email your existing patients?", type: "single", options: ["Regularly", "Occasionally", "Never"] },
      { id: "google_reviews", label: "About how many Google reviews do you have, and what is your rating?", type: "text" },
      { id: "review_ask", label: "How do you ask for reviews?", type: "multi", options: ["We don't", "QR code or sign in the office", "Staff ask in person", "Text or email with a link"] },
      { id: "new_patient_sources", label: "Where do new patients come from?", type: "multi", options: ["Physician referrals", "Word of mouth", "Google search or Maps", "Insurance directory", "Social media", "Booking marketplace (e.g. Zocdoc)", "Not sure"] },
      { id: "social", label: "Which social channels are active?", type: "multi", options: ["Facebook", "Instagram", "YouTube", "TikTok", "None"] },
      { id: "marketing_owner", label: "Who handles marketing today?", type: "single", options: ["Nobody", "The doctor or owner", "A staff member", "An outside agency"] },
    ],
  },
];

export const goalsSection: Section = {
  id: "goals",
  title: "What you want fixed",
  questions: [
    { id: "frustrations", label: "What are your top three frustrations in the practice right now?", type: "textarea", required: true },
    { id: "ninety_days", label: "If one thing were fixed in the next 90 days, what should it be?", type: "textarea" },
    { id: "anything_else", label: "Anything else we should know before we meet?", type: "textarea" },
  ],
};
