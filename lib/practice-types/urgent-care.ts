import type { PracticeType } from "./schema";

export const urgentCare: PracticeType = {
  slug: "urgent-care",
  kind: "specialty",
  name: "Urgent care practices",
  short: "Urgent care",
  icon: "phone",
  summary: "Walk-ins, online wait times, patients who leave without being seen and an occupational medicine line that runs on employer relationships.",
  title: "Urgent Care Practice Optimization in Arizona",
  description:
    "How Mint works with Arizona urgent care centers: walk-in flow, online check-in, patients who leave without being seen, occupational medicine and local search.",
  h1: "Practice optimization for Arizona urgent care.",
  lede: "Urgent care is a flow business. The patient decides in minutes and compares you with the clinic down the road on a map. The work is shortening the path from the search result to the exam room and keeping the second business, occupational medicine, running on relationships.",
  blocks: [
    {
      type: "story",
      heading: "What makes urgent care different",
      paragraphs: [
        "Most urgent care visits are decided by the patient on a phone in a parking lot or at home. They search, look at hours, wait times and reviews, and go. Industry surveys describe a median volume of only a few patients per provider hour, which means a bad hour in a small center is a handful of patients, and every one of them can leave.",
        "The walk-in model is both the product and the problem. Some centers take online check-in or a save-my-spot reservation so the patient waits at home. Centers that do not may lose patients who leave without being seen, an outcome so common it has its own abbreviation, LWBS, and it is measured in real revenue and real risk.",
        "The second business is occupational medicine: work injuries, drug screens, pre-employment physicals and, at some centers, commercial driver exams. It is sold to employers, not patients, and it depends on an account relationship, a clean workers' compensation process, and billing arrangements that are nothing like the walk-in side.",
      ],
    },
    {
      type: "journey",
      heading: "From a search to discharge",
      steps: [
        { title: "The search", body: "A patient searches near me. The result shows hours, a rating, sometimes a wait time or a save-my-spot button.", leak: "Hours that are wrong on one listing, or a phone number that rings through to a voicemail." },
        { title: "Arrival or online check-in", body: "A walk-in registers at the desk. A save-my-spot patient arrives at a time the clinic expected." },
        { title: "Registration", body: "ID, insurance card, consent forms, and in many centers a card on file and a copay up front." },
        { title: "Triage", body: "A nurse or MA takes vitals and the chief complaint and decides the order of care.", leak: "A waiting room with no one telling people how long it will be." },
        { title: "The provider visit", body: "Exam and treatment, with x-ray and point-of-care testing in house.", leak: "A provider gap at shift change." },
        { title: "Discharge and follow-up", body: "Instructions, prescriptions, and a plain explanation of what to do next. Some centers call back or direct the patient to primary care.", leak: "A patient with no primary doctor and no plan for follow-up." },
        { title: "The employer visit", body: "Occupational patients arrive from an employer with an authorization, a drug screen to collect or an injury to report.", leak: "A work-injury report that is incomplete when the employer calls." },
      ],
    },
    {
      type: "terms",
      heading: "The words in an urgent care center",
      items: [
        { term: "Walk-in", meaning: "A patient who arrives without an appointment, the core urgent care model." },
        { term: "Save my spot or online check-in", meaning: "Letting a patient hold a place in line from home." },
        { term: "LWBS", meaning: "Left without being seen: patients who register and leave before the provider visit." },
        { term: "Door-to-provider", meaning: "The time from arrival to seeing a provider, the metric patients feel." },
        { term: "Provider hour", meaning: "A unit of staffing: how many patients a provider sees per hour." },
        { term: "Occ-med", meaning: "Occupational medicine: work injuries, screens and employer physicals." },
        { term: "Workers' comp", meaning: "The employer-paid insurance for work injuries, with its own forms and billing." },
        { term: "DOT exam", meaning: "A commercial driver medical exam, which can only be done by an examiner listed on the federal registry." },
        { term: "Employer account", meaning: "A contract with an employer for screens, physicals and injury care." },
        { term: "Point-of-care testing", meaning: "In-house tests like rapid strep, flu and urinalysis." },
        { term: "Self-pay price list", meaning: "Published cash prices for common visits." },
        { term: "Capture rate", meaning: "How many of the people who looked you up actually came in." },
      ],
    },
    {
      type: "rules",
      heading: "What the rules mean at the desk",
      items: [
        { title: "Workers' comp is its own process", body: "A work injury goes through the employer and the state's workers' compensation system, not the patient's health insurance. The desk needs to know who authorized the visit and which injury forms are required." },
        { title: "DOT examiners are registered", body: "Commercial driver exams must be done by an examiner on the federal National Registry, and the clinic has to know which provider on shift qualifies." },
        { title: "Self-pay patients get a Good Faith Estimate", body: "Self-pay patients scheduled in advance are covered by the federal Good Faith Estimate rules. Walk-ins who ask the price are treated differently. See our cash-pay page." },
        { title: "Reviews: ask everyone", body: "Google and the FTC both discourage selective review requests, such as sending the link only to patients who seem happy. Ask every patient the same way after a visit." },
        { title: "Texting waiting patients", body: "Notifying a patient that their room is ready is different from a promotion. Marketing texts need written consent, and Arizona has its own do-not-call rules." },
      ],
    },
    {
      type: "cards",
      heading: "Where Mint would look first",
      items: [
        { pillar: "operations", icon: "phone", title: "Door-to-provider and the waiting room", body: "What patients see and are told while they wait, and where the time actually goes." },
        { pillar: "operations", icon: "clipboard", title: "Shift handoffs", body: "Coverage gaps and provider changes that cause the LWBS spikes." },
        { pillar: "revenue", icon: "users", title: "Employer accounts", body: "A list of who sends you work-injury and screening patients, and who used to." },
        { pillar: "revenue", icon: "search", title: "Capture rate", body: "How many of the people who view your listing become visits." },
        { pillar: "marketing", icon: "pin", title: "Listings that are right", body: "Hours, holiday hours, wait times and phone numbers consistent across Google, maps and your site." },
        { pillar: "marketing", icon: "message", title: "Honest reviews", body: "A request to every patient, a reply policy that never confirms patient details." },
      ],
    },
    {
      type: "compare",
      heading: "A busy evening, today and with Mint",
      items: [
        { today: "Patients leave when the wait grows.", mint: "Wait times are posted and patients can hold a place from home." },
        { today: "Hours differ across listings.", mint: "One set of hours kept in one place and pushed to each listing." },
        { today: "Employers call when something goes wrong.", mint: "Each account has an owner and a monthly check-in." },
        { today: "Reviews are whoever felt strongly.", mint: "Every patient is asked, and replies follow a privacy-safe routine." },
      ],
    },
  ],
  faqs: [
    { q: "Can you reduce our LWBS rate?", a: "We find where patients leave, by time of day and by stage, and look at communication and handoffs. Staffing levels remain yours to decide." },
    { q: "Do you help with occupational medicine accounts?", a: "We help organize the account list, the follow-up routine and the web presence for employers. We do not do workers' compensation billing." },
    { q: "Do you run our online check-in tool?", a: "No. We look at how it is presented and whether the process behind it works." },
    { q: "How do you handle reviews at a walk-in clinic?", a: "We recommend asking every patient after discharge in the same way. We do not screen patients for satisfaction before asking." },
  ],
  related: ["primary-care", "cash-pay-practices", "group-practices"],
  reviewed: "November 2026",
};
