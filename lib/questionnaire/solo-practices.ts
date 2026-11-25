import type { Section } from "./types";

export const soloSections: Section[] = [
  {
    id: "solo",
    title: "Running a solo practice",
    questions: [
      { id: "solo_team", label: "Who is on your team?", type: "multi", options: ["Front desk", "Medical assistant or nurse", "Biller in the office", "Outsourced biller", "Office manager", "A spouse or family member in the office", "Part-time or per-diem staff"] },
      { id: "solo_manager", label: "Who acts as office manager, and how long have they been with you?", type: "text" },
      { id: "solo_hours", label: "In a normal week, about how many hours do you work, and how many of those are admin or charting after the office closes?", type: "text" },
      { id: "solo_single", label: "Which jobs does only one person know how to do?", type: "textarea", help: "For example payroll, credentialing renewals, the clearinghouse, the phone system." },
      { id: "solo_written", label: "Are the main office routines written down?", type: "single", options: ["Most are", "A few are", "No"] },
      { id: "solo_crosstrain", label: "If your front desk person were out for two weeks, what would happen?", type: "textarea" },
      { id: "solo_coverage", label: "How are your patients covered when you are away or out sick?", type: "single", options: ["Another doctor cross-covers", "A locum", "An answering service only", "We close", "No plan"] },
      { id: "solo_aftercalls", label: "Who takes after-hours calls?", type: "single", options: ["An answering service", "Me directly", "A nurse line", "Voicemail only"] },
      { id: "solo_calendar", label: "Where do you track renewals (credentialing re-attestation, licenses, DEA, malpractice, HIPAA and OSHA training)?", type: "single", options: ["A shared calendar with owners", "A spreadsheet", "My memory", "An outside service"] },
      { id: "solo_aging", label: "How often do you and your biller review the unpaid claims (aging) report?", type: "single", options: ["Monthly or more", "Quarterly", "When there is a problem", "Never"] },
      { id: "solo_sra", label: "Do you have a current HIPAA security risk analysis on file?", type: "single", options: ["Yes, within the last year", "Yes, but older", "No", "Not sure"] },
      { id: "solo_baa", label: "Do you have business associate agreements with your billing company, answering service, IT and cloud vendors?", type: "single", options: ["All of them", "Some", "No", "Not sure"] },
      { id: "solo_future", label: "Where do you want the practice to be in five years?", type: "single", options: ["The same, but easier", "Bigger", "Sold or merged", "Winding down", "Not sure"] },
    ],
  },
];
