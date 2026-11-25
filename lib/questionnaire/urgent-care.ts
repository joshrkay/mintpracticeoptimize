import type { Section } from "./types";

export const urgentCareSections: Section[] = [
  {
    id: "urgent-care",
    title: "Urgent care",
    questions: [
      { id: "uc_hours", label: "What are your hours, and how many days a week are you open?", type: "text" },
      { id: "uc_volume", label: "On a typical day, about how many patients do you see?", type: "text" },
      { id: "uc_flow", label: "How do patients get in line?", type: "multi", options: ["Walk in", "Online check-in or save my spot", "Scheduled appointment", "Telehealth"] },
      { id: "uc_wait", label: "Do you post wait times online?", type: "single", options: ["Yes, live", "Yes, estimated", "No"] },
      { id: "uc_lwbs", label: "Do you track patients who register and leave without being seen?", type: "single", options: ["Yes, we know the rate", "We notice but don't measure", "No"] },
      { id: "uc_peak", label: "When are your busiest and slowest periods?", type: "textarea" },
      { id: "uc_door", label: "Do you measure time from arrival to seeing a provider?", type: "single", options: ["Yes", "Roughly", "No"] },
      { id: "uc_waiting", label: "What do waiting patients hear or see about how long it will be?", type: "textarea" },
      { id: "uc_staffing", label: "How are provider shifts and handoffs arranged?", type: "textarea" },
      { id: "uc_services", label: "Which services do you offer?", type: "multi", options: ["X-ray", "Point-of-care lab tests", "Stitches and wound care", "Fracture care", "IV fluids", "Occupational medicine", "DOT exams", "Drug screens", "Physicals", "Vaccines", "Telehealth"] },
      { id: "uc_occ", label: "If you offer occupational medicine, how many employer accounts do you have?", type: "single", options: ["None", "1 to 10", "11 to 50", "More than 50"] },
      { id: "uc_occ_owner", label: "Who manages employer accounts and workers' compensation paperwork?", type: "single", options: ["Owner or doctor", "A dedicated person", "Front desk", "Nobody in particular", "Not applicable"] },
      { id: "uc_selfpay", label: "Do you publish self-pay prices?", type: "single", options: ["Yes", "On request", "No"] },
      { id: "uc_listings", label: "Who keeps your hours and phone number correct on Google, maps and directories?", type: "single", options: ["A staff member", "An agency", "Nobody in particular"] },
    ],
  },
];
