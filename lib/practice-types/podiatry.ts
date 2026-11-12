import type { PracticeType } from "./schema";

export const podiatry: PracticeType = {
  slug: "podiatry",
  kind: "specialty",
  name: "Podiatry practices",
  short: "Podiatry",
  icon: "box",
  summary: "Routine foot care cycles, diabetic shoes, orthotics and nursing-home days: a schedule that runs on recall and paperwork handoffs.",
  title: "Podiatry Practice Optimization in Arizona",
  description:
    "How Mint works with Arizona podiatry practices: routine foot care recall, diabetic shoe handoffs, orthotic pickups, nursing-home days and local reputation.",
  h1: "Practice optimization for Arizona podiatry practices.",
  lede: "A podiatry schedule runs on cycles: the routine foot care patient who returns every nine to twelve weeks, the diabetic shoe order that waits on another doctor's signature, the orthotic that waits on a lab. Mint looks at the handoffs between those cycles.",
  blocks: [
    {
      type: "story",
      heading: "What makes a podiatry office different",
      paragraphs: [
        "Most specialties wait for a problem. Podiatry has an unusual amount of scheduled, repeating work: nail and callus care for patients who cannot do it safely themselves, diabetic foot checks, post-op follow-ups, and a nursing-home day that may be a third of the week. The patient base is often older, often on Medicare or a Medicare Advantage plan, and often has a daughter or caregiver who books, drives and asks the questions.",
        "That makes the front desk a memory system. Someone has to know when this patient was last seen for routine foot care, whether the plan limits visits, which doctor manages the diabetes, and whether the orthotic is back from the lab. When that lives in one person's head, or on a sticky note by the schedule, patients quietly stop coming back and nobody can say why.",
        "Mint does not code, bill or give clinical advice. We look at the work around those things: how recall is run, how the handoffs between offices are tracked, and how the practice shows up for the people searching for a podiatrist near them.",
      ],
    },
    {
      type: "journey",
      heading: "The cycle of a routine foot care patient",
      intro: "Routine foot care (RFC) is a big share of many podiatry schedules and the most documentation-sensitive. This is where the cycle tends to leak.",
      steps: [
        { title: "Booked as a nail or RFC visit", body: "The schedule has its own visit types: new patient, RFC, diabetic foot exam, post-op, orthotic scan, orthotic pickup, nursing-home day. Each is a different length and needs different things ready." },
        { title: "Eligibility and plan limits", body: "Staff check Original Medicare, Medicare Advantage or AHCCCS. Some plans cap routine foot care visits or want a referral or an ordering provider on the claim.", leak: "A visit limit nobody noticed until the claim comes back, and the patient hears about it from a statement." },
        { title: "Check-in and the systemic condition", body: "For routine care to be covered, the chart has to tie the visit to a qualifying systemic condition and name who manages it. The desk is often where that detail is first asked.", leak: "A patient who cannot remember which doctor manages the diabetes, and a note that says only \"diabetic.\"" },
        { title: "Rooming and exam", body: "The assistant removes shoes and socks, takes the medication list and may set up the room. The podiatrist checks pulses and sensation, often with a monofilament, then treats.", leak: "A thorough exam that is only half-written in the note, which is a documentation problem that shows up months later." },
        { title: "Checkout and the next cycle", body: "The next visit is booked at the interval the plan allows. The copay or balance is collected. For a caregiver who drives, the time of day matters as much as the date.", leak: "The patient leaves without a next appointment, and unless recall catches them they are a lapsed patient by spring." },
        { title: "Recall", body: "Someone calls or messages the patients who are coming due. In practices without a recall habit, the schedule is whoever happened to call.", leak: "Recall that depends on the one person who remembers, and stops when they are out." },
      ],
    },
    {
      type: "journey",
      heading: "A diabetic shoe order crosses three offices",
      intro: "Therapeutic shoes are a handoff, not a visit. Medicare's shoe benefit involves the doctor who manages the diabetes, the supplier, and the patient who has to come back.",
      steps: [
        { title: "The at-risk foot is identified", body: "The podiatrist sees neuropathy, deformity, calluses or a past ulcer and decides the patient is a candidate." },
        { title: "The certifying physician", body: "The shoe benefit has a certifying physician, usually the MD or DO who manages the diabetes, who signs a statement. That is a different office with its own schedule.", leak: "A form sent by fax, a week of silence, and nobody assigned to chase it." },
        { title: "Fitting and delivery", body: "The practice, if it is an enrolled supplier, fits and dispenses shoes and inserts. The claim needs the right documents in the right order and dates." },
        { title: "The pickup visit", body: "Custom orthotics and shoes are multi-visit: scan or cast, lab turnaround of a couple of weeks, then a fitting visit.", leak: "The patient who never rebooks the pickup, so the product sits in a bin and the practice carries the cost." },
      ],
    },
    {
      type: "terms",
      heading: "The words in a podiatry office",
      intro: "You will not need these explained. We use them so you do not have to explain them to us.",
      items: [
        { term: "RFC", meaning: "Routine foot care: nail debridement, paring of corns and calluses. Medicare generally excludes it unless a qualifying systemic condition is documented." },
        { term: "Class findings (A, B, C)", meaning: "The objective findings of severe vascular or neurologic involvement that support coverage, recorded alongside the Q modifier." },
        { term: "Mycotic nails", meaning: "Fungal nails, the usual reason for nail debridement." },
        { term: "LOPS", meaning: "Loss of protective sensation, checked with a monofilament." },
        { term: "Certifying physician", meaning: "The MD or DO managing the patient's diabetes who certifies the need for therapeutic shoes." },
        { term: "Depth shoe and inserts", meaning: "The covered shoe benefit, limited per calendar year, as distinct from custom-molded shoes." },
        { term: "DMEPOS supplier", meaning: "The enrolled status the office needs to dispense shoes and certain devices to Medicare patients." },
        { term: "Orthotic", meaning: "A custom insert from a scan or cast. Medicare excludes foot orthotics in general, so for many patients they are a cash item." },
        { term: "POS 31 and POS 32", meaning: "Place of service for a skilled nursing stay and a long-term nursing facility. The wrong one means payment taken back later." },
        { term: "Recall", meaning: "The outbound reminder that a patient is coming due for the next cycle." },
      ],
    },
    {
      type: "rules",
      heading: "What the rules mean at the desk",
      intro: "Mint does not interpret coverage rules. These are the ones that shape how the front office has to work, as of the review date below.",
      items: [
        { title: "Routine foot care is the audit target", body: "A federal audit published in December 2025 reviewed routine foot care claims from 2019 to 2020 and found that about half of the sampled claims did not meet Medicare requirements, with documentation the leading cause. The lesson for the office is that the note, not the visit, is what gets reviewed." },
        { title: "The frequency limit is not the same everywhere", body: "Sources disagree on whether the interval between routine visits is 60 or 61 days, and Medicare Advantage and AHCCCS add their own caps. Confirm the current rule with your Medicare contractor and your plans before building a recall interval around it." },
        { title: "The ABN form changed in 2026", body: "The Advance Beneficiary Notice form was replaced and the old version stopped being valid for dates of service from May 12, 2026. It applies to Original Medicare, not Medicare Advantage." },
        { title: "Waiving copays is not a marketing tool", body: "Routinely waiving Medicare copays or giving away items above a nominal value can create federal problems. A hardship-based, case-by-case approach is different from a promotion. Ask your compliance contact before any free-visit offer." },
        { title: "Advertising in Arizona", body: "Arizona's podiatry board statute treats false or misleading advertising as unprofessional conduct. Reviews and testimonials are also covered by the FTC's rule on fake and suppressed reviews. We write for compliance review, not around it." },
      ],
    },
    {
      type: "cards",
      heading: "Where Mint would look first",
      items: [
        { pillar: "operations", icon: "calendar", title: "Recall that does not depend on one person", body: "A written, shared recall routine for routine foot care and diabetic checks, so the cycle survives vacations and turnover." },
        { pillar: "operations", icon: "clipboard", title: "Handoff tracking", body: "A simple tracker for shoe certifications and orthotic pickups: sent, signed, ready, picked up, with a name next to each." },
        { pillar: "revenue", icon: "search", title: "Lapsed cycle patients", body: "Patients who were on a regular interval and stopped. Often they are not gone, they just were never called." },
        { pillar: "revenue", icon: "card", title: "Orthotic pickups left in the bin", body: "Product the practice has already paid for that the patient never came back to collect." },
        { pillar: "marketing", icon: "pin", title: "Be findable by the caregiver", body: "The adult child searching for a foot doctor near a parent. Clear page copy about what you treat, where, and how to book." },
        { pillar: "marketing", icon: "message", title: "Respectful review requests", body: "Ask every patient after a visit, the same way, with no screening. Staff never quote a number of reviews." },
      ],
    },
    {
      type: "compare",
      heading: "A routine foot care day, today and with Mint",
      items: [
        { today: "Recall happens when someone has time.", mint: "A named person and a weekly list, with a back-up." },
        { today: "The shoe certification form goes out and is forgotten.", mint: "Every open form has an owner and a follow-up date." },
        { today: "Orthotics wait in a bin.", mint: "Pickup calls are on the schedule the week the lab ships." },
        { today: "The desk is not sure who manages the patient's diabetes.", mint: "Intake asks once, writes it down, and the chart shows it every visit." },
      ],
    },
  ],
  faqs: [
    { q: "Do you advise on routine foot care coverage or coding?", a: "No. Mint does not do coding, billing or clinical advice. We look at the work around it: the questions asked at the desk, the recall cycle and the handoffs, so your biller and your compliance contact get cleaner information." },
    { q: "Can you help with nursing-home days?", a: "We look at the scheduling and communication around them: who books the facility days, how patients are tracked between visits, and how results reach the facility. We do not set billing or place-of-service rules." },
    { q: "Our diabetic shoe program stalls waiting for signatures. Is that something you work on?", a: "Yes, as a process question. We map who sends what to whom, add an owner and a follow-up date to each step, and see where it stalls." },
    { q: "We are a one-podiatrist office. Is that enough to be worth it?", a: "Often it is the best fit. One person's memory is carrying the recall, the shoe paperwork and the front desk, and a written routine protects it." },
  ],
  related: ["solo-practices", "insurance-based-practices", "physical-therapy"],
  reviewed: "November 2026",
};
