import type { Section } from "./types";

export const podiatrySections: Section[] = [
  {
    id: "podiatry",
    title: "Podiatry",
    questions: [
      { id: "pod_services", label: "Which services do you offer?", type: "multi", options: ["Routine foot care", "Diabetic foot care", "Wound care", "Custom orthotics", "Braces, boots and other DME", "Diabetic shoes", "In-office procedures", "Surgery", "Sports medicine", "Laser, shockwave or other cash services", "In-office X-ray or ultrasound"] },
      { id: "pod_surgery_site", label: "Where do you perform surgery?", type: "multi", options: ["In the office", "Surgery center", "Hospital", "We don't"] },
      { id: "pod_orthotics_capture", label: "How do you capture feet for custom orthotics?", type: "single", options: ["In-office 3D scan", "Plaster or foam casting", "We don't dispense orthotics"] },
      { id: "pod_orthotics_payment", label: "When do patients pay for orthotics?", type: "single", options: ["In full at order", "Deposit at order, balance at pickup", "At pickup", "We bill insurance", "Not applicable"] },
      { id: "pod_orthotics_ready", label: "Are orthotics and DME pulled and ready at the front desk before the patient arrives?", type: "single", options: ["Always", "Sometimes", "Rarely", "Not applicable"] },
      { id: "pod_orthotics_notify", label: "When orthotics arrive, how does the patient find out and get scheduled?", type: "textarea" },
      { id: "pod_diabetic_recall", label: "How do you recall diabetic patients for their annual foot exam?", type: "single", options: ["Automated recall", "Staff track it manually", "No system"] },
      { id: "pod_rfc_recall", label: "Do routine foot care patients leave with their next visit booked?", type: "single", options: ["Always", "Sometimes", "Rarely"] },
      { id: "pod_offsite", label: "Do you see patients in nursing homes or on house calls?", type: "single", options: ["Yes", "No"] },
      { id: "pod_retail", label: "Do you sell products in the office (creams, insoles, footwear)?", type: "single", options: ["Yes", "No", "Used to"] },
    ],
  },
];
