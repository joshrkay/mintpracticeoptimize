import type { Section } from "./types";

export const groupSections: Section[] = [
  {
    id: "group",
    title: "Running a group practice",
    questions: [
      { id: "group_structure", label: "How is the group structured?", type: "single", options: ["Partners only", "Partners and employed associates", "One owner and employed providers", "Multiple entities or sites with separate ownership"] },
      { id: "group_admin", label: "Who runs day-to-day operations, and what is their title?", type: "text" },
      { id: "group_decide", label: "Who decides and signs for outside vendors and projects?", type: "single", options: ["Managing partner", "Executive committee or all partners", "Administrator", "Varies"] },
      { id: "group_sites", label: "How many sites, and does each have its own front desk?", type: "text" },
      { id: "group_phones", label: "How are calls handled across sites?", type: "single", options: ["Each site answers its own", "A central team", "A phone tree that routes by site", "A mix"] },
      { id: "group_templates", label: "How different are provider schedule templates from each other?", type: "single", options: ["Mostly the same", "Some differences", "Each provider has their own rules"] },
      { id: "group_rules", label: "Are provider-specific scheduling rules written down?", type: "single", options: ["Yes, in one place", "Partly", "They live in staff members' heads"] },
      { id: "group_standard", label: "Do sites do the same task, like check-in or collections, the same way?", type: "single", options: ["Yes", "Mostly", "Each site does its own thing"] },
      { id: "group_reports", label: "What reports does leadership see each month?", type: "multi", options: ["Visits by provider", "Collections by provider or site", "Unpaid claims (aging)", "No-show rate", "Third next available", "Patient reviews", "None regularly"] },
      { id: "group_noshow", label: "Do you know where no-shows concentrate by site, provider or visit type?", type: "single", options: ["Yes", "Roughly", "No"] },
      { id: "group_newprovider", label: "When a new provider joins, how long from start date to a full schedule, and where does it stall?", type: "textarea" },
      { id: "group_credentialing", label: "How are new providers handled while payer enrollment is pending?", type: "textarea" },
      { id: "group_listings", label: "Does each site have its own Google listing and page, and who manages them?", type: "text" },
      { id: "group_network", label: "Are you part of any physician network, IPA or ACO?", type: "single", options: ["Yes", "No", "Considering it"] },
    ],
  },
];
