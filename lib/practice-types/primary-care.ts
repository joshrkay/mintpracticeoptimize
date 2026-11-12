import type { PracticeType } from "./schema";

export const primaryCare: PracticeType = {
  slug: "primary-care",
  kind: "specialty",
  name: "Primary care practices",
  short: "Primary care",
  icon: "heart",
  summary: "Panels, the inbox, third next available and a schedule that has to hold chronic care, wellness visits and same-day sick.",
  title: "Primary Care Practice Optimization in Arizona",
  description:
    "How Mint works with Arizona primary care practices: panel and access, the daily huddle, the inbox, wellness visits, transitions of care and referral loops.",
  h1: "Practice optimization for Arizona primary care practices.",
  lede: "Primary care is a panel, not a queue. The practice owns a list of patients, and the work is keeping that list healthy, reachable and booked, while the inbox, the phones and the same-day sick call all compete for the same hours.",
  blocks: [
    {
      type: "story",
      heading: "What makes a primary care office different",
      paragraphs: [
        "In primary care the patient is not a visit, the patient is a relationship that may run for twenty years. A panel is the list of patients attached to a clinician, and the first measure of a healthy practice is whether the panel is the right size and whether its patients can get in. The standard measure of access is third next available: how many days out is the third open appointment for a given visit type. It is harder to game than the next open slot.",
        "The day has a shape. A short huddle before clinic reviews who is coming and what is open. Charts are prepped. The medical assistant rooms the patient, takes vitals and reconciles medications, and the clinician sees the patient with the chart already half-built. After clinic, and often at night, the clinician works the inbox: results, refills, patient messages, forms and referrals. Studies of physician time find that more of the day goes to the EHR and desk work than to face time, and after-hours EHR time has stayed stubbornly flat.",
        "Because so much of the work is invisible, primary care practices are good at hiding problems. A referral that never came back, a result nobody called about, a patient who is overdue for a wellness visit: none of these show up on the schedule. Mint looks for them.",
      ],
    },
    {
      type: "journey",
      heading: "A day, from the huddle to the inbox",
      steps: [
        { title: "The huddle", body: "A five- or ten-minute meeting: who is on the schedule, which patients need a lab or a form, which slots are open for same-day, who is out.", leak: "No huddle, so the first problem of the day is found when the patient is already in the room." },
        { title: "Chart prep", body: "Staff review the chart before the visit: open gaps in care, outside records to request, prior results, forms due." },
        { title: "Rooming", body: "The medical assistant brings the patient back, takes vitals, updates the medication list and the reason for the visit, and may complete screening questionnaires." },
        { title: "The visit", body: "The clinician sees the patient. A visit booked for one problem often becomes three, and the template did not plan for it.", leak: "Running behind by ten each hour, so by afternoon every patient waits and every no-show is a relief." },
        { title: "Checkout and the next step", body: "Follow-up, referral, lab order, wellness visit. The referral leaves the building here.", leak: "A referral ordered and never confirmed, which is the one the patient assumes was handled." },
        { title: "The inbox", body: "Results, refills, messages, forms. Many practices divide it between the clinician and a nurse or MA with standing protocols.", leak: "Everything lands on the clinician, who works it at night." },
        { title: "Transitions and outreach", body: "After a hospital or ER stay, the practice is expected to contact the patient quickly and see them soon. Annual wellness visits and chronic care check-ins are booked ahead.", leak: "A patient who left the hospital on Friday and is not called until they call." },
      ],
    },
    {
      type: "terms",
      heading: "The words in a primary care office",
      items: [
        { term: "Panel", meaning: "The patients attached to a clinician. Panel size and who is on it drive everything else." },
        { term: "Third next available", meaning: "How far out the third open appointment is for a given visit type, the standard access measure." },
        { term: "Template", meaning: "How the day is divided into slots by visit type and length." },
        { term: "Same-day, work-in, add-on", meaning: "Patients squeezed into a schedule that was not built for them." },
        { term: "Huddle", meaning: "The short pre-clinic team meeting." },
        { term: "Rooming", meaning: "What the medical assistant does before the clinician walks in." },
        { term: "In-basket", meaning: "The queue of results, refills, messages and forms. After-hours work on it is often called pajama time." },
        { term: "Care gap", meaning: "A recommended service the patient is overdue for, like a screening or vaccine." },
        { term: "AWV", meaning: "Medicare annual wellness visit, a planning visit distinct from the one-time welcome visit and from a physical." },
        { term: "TCM", meaning: "Transitional care management: contact and a visit soon after a hospital or facility discharge." },
        { term: "Closing the loop", meaning: "Confirming a referral or test result came back and the patient was told." },
        { term: "Standing orders and protocols", meaning: "Pre-approved instructions that let staff act without waiting on the clinician." },
        { term: "Attribution", meaning: "Which patients a value-based contract counts as yours, which depends on who they actually saw." },
      ],
    },
    {
      type: "rules",
      heading: "What the rules mean at the desk",
      items: [
        { title: "Wellness visits are not physicals", body: "Medicare's annual wellness visit and the one-time welcome visit are planning visits with their own rules. Patients often expect a physical, so the desk needs a plain way to explain the difference when booking." },
        { title: "Transitions have a clock", body: "After a hospital discharge, transitional care management has contact and visit windows that start at discharge. Whether the practice learns of the discharge in time is an operations question." },
        { title: "Fee disclosure and no-show policy", body: "A missed-visit fee has to be disclosed in advance and applied evenly, and Medicare patients can be charged only if others are. Many primary care practices skip the fee and use reminders and waitlists." },
        { title: "Texting patients", body: "Appointment reminders to a number the patient gave are treated differently from marketing messages, and billing texts need their own consent. Keep health detail out of the text." },
        { title: "Direct primary care is its own legal category", body: "Arizona treats a direct primary care agreement as not insurance, with written terms. If you run a membership model, see our cash-pay page." },
      ],
    },
    {
      type: "cards",
      heading: "Where Mint would look first",
      items: [
        { pillar: "operations", icon: "calendar", title: "Third next available and the template", body: "Where slots are held, which visit types are too long or too short, and whether the same-day slots are doing their job." },
        { pillar: "operations", icon: "mail", title: "Who works the inbox", body: "What goes to the clinician and what goes to a nurse or MA with a protocol, so after-hours work shrinks." },
        { pillar: "operations", icon: "flow", title: "Referral and result loop", body: "A short tracker for referrals and critical results: sent, scheduled, back, patient told." },
        { pillar: "revenue", icon: "heart", title: "Overdue wellness and chronic visits", body: "Patients on the panel who have not been in, with a personal outreach that does not read like marketing." },
        { pillar: "revenue", icon: "phone", title: "Discharge call routine", body: "A way for the practice to learn about hospital stays and call early." },
        { pillar: "marketing", icon: "pin", title: "Be accurate about who you take", body: "Which insurances, whether you are accepting new patients, and how to get a same-day visit, stated clearly." },
      ],
    },
    {
      type: "compare",
      heading: "A clinic day, today and with Mint",
      items: [
        { today: "The day starts without a huddle.", mint: "Ten minutes, one page, and the open slots known." },
        { today: "The inbox lands on the doctor.", mint: "A split by protocol, with the doctor seeing what needs the doctor." },
        { today: "Referrals are assumed handled.", mint: "A weekly list of referrals not yet confirmed." },
        { today: "Hospital stays are discovered when the patient calls.", mint: "A named person checks discharge lists and calls within the window." },
      ],
    },
  ],
  faqs: [
    { q: "Can you help us with our panel size?", a: "We look at the data you have: who is attached, who has been seen, and how access looks. Panel size decisions belong to your physicians." },
    { q: "Do you work on value-based contract measures?", a: "We help with the practical work around them, like outreach lists and recall. We do not do coding, risk adjustment or quality submissions." },
    { q: "Can you reduce the inbox burden?", a: "We map who touches each message type and propose a split with standing protocols. Your clinicians approve which tasks can move." },
    { q: "Do you work with direct primary care practices?", a: "Yes. They have a different front end, with membership agreements and no billing. See the cash-pay page." },
  ],
  related: ["urgent-care", "group-practices", "insurance-based-practices"],
  reviewed: "November 2026",
};
