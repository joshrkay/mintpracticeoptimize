import type { PracticeType } from "./schema";

export const dermatology: PracticeType = {
  slug: "dermatology",
  kind: "specialty",
  name: "Dermatology practices",
  short: "Dermatology",
  icon: "search",
  summary: "Medical, surgical and cosmetic care in one office: biopsy tracking, long waits, prior authorizations and two kinds of patient.",
  title: "Dermatology Practice Optimization in Arizona",
  description:
    "How Mint works with Arizona dermatology practices: wait times, biopsy log follow-up, Mohs referrals, biologic prior authorizations and cosmetic rebooking.",
  h1: "Practice optimization for Arizona dermatology practices.",
  lede: "A dermatology office is two businesses under one roof, one insurance-based and one cash-based, with a tracking problem in the middle: every biopsy has to come back, be reviewed and reach the patient.",
  blocks: [
    {
      type: "story",
      heading: "What makes a dermatology office different",
      paragraphs: [
        "Dermatology is a high-volume specialty with a long wait list. A new patient may wait weeks for a medical appointment, and the cosmetic side of the same office often has openings. Studies of access find waits that vary widely by insurance, city and ownership, and a front desk that has to decide, by phone and in thirty seconds, whether a call is a changing mole, a rash, or a request for filler.",
        "The risk that makes the specialty different is the biopsy. A sample leaves the room, goes to a dermatopathology lab, and a report comes back days later. Someone has to confirm the report arrived, the provider reviewed it, and the patient was told, and for a cancer diagnosis, that the next step was scheduled. Professional liability carriers describe a tracking system from specimen to notification as the foundation of pathology management.",
        "Arizona adds a context that makes recall matter: skin cancer incidence is high, most melanomas are diagnosed in dermatology offices, and patients with a history return on a schedule for life.",
      ],
    },
    {
      type: "journey",
      heading: "A skin check that becomes a biopsy",
      steps: [
        { title: "The call", body: "The scheduler learns whether it is a medical visit, a cosmetic consult or an urgent concern, and offers an appointment with a dermatologist or a PA or NP depending on the office.", leak: "A changing mole booked into the same queue as a routine rash." },
        { title: "Rooming", body: "A medical assistant takes the history, prepares the exam and, in many offices, acts as a scribe." },
        { title: "The exam and the biopsy", body: "The provider examines, may biopsy by shave or punch, and the specimen is labeled and logged. Cryotherapy of precancerous spots may happen in the same visit." },
        { title: "The biopsy log", body: "Each specimen is entered in a log: patient, date, type, site, lab, and the date the result came back and was communicated.", leak: "A report that never arrives, and a log nobody looks at on a busy week." },
        { title: "Closing the loop", body: "The provider reviews the result, and the patient is told. A national survey found most patients preferred a phone call to hear results.", leak: "A patient who assumes no news is good news." },
        { title: "The next step", body: "For skin cancer, Mohs surgery or excision is scheduled, often with another surgeon. A referral packet carries the report, demographics, the site and the insurance card.", leak: "A packet missing the site photo, and a week lost." },
        { title: "Recall", body: "Annual or more frequent skin checks are booked for the patients at higher risk.", leak: "Recall that depends on the patient remembering." },
      ],
    },
    {
      type: "terms",
      heading: "The words in a dermatology office",
      items: [
        { term: "TBSE", meaning: "Total body skin exam, the full head-to-toe check." },
        { term: "Biopsy log", meaning: "The tracking sheet or EMR report from specimen to patient notification." },
        { term: "Closing the loop", meaning: "Confirming a result was received, reviewed and communicated." },
        { term: "Derm path", meaning: "The dermatopathology lab and the report it sends back." },
        { term: "AK", meaning: "Actinic keratosis, a precancerous spot often treated with cryotherapy." },
        { term: "Modifier 25", meaning: "Used when an exam on the same day as a procedure is separately identifiable. A frequent audit target." },
        { term: "Mohs", meaning: "Staged surgery for skin cancer, usually done by a Mohs surgeon after a biopsy confirms cancer." },
        { term: "iPLEDGE", meaning: "The federal safety program for isotretinoin, with monthly steps for prescriber, pharmacy and patient. The FDA approved changes in 2026." },
        { term: "PA for biologics", meaning: "Prior authorization for injectable drugs for psoriasis, eczema and similar conditions." },
        { term: "APP", meaning: "Advanced practice provider: a physician assistant or nurse practitioner." },
        { term: "Neuromodulator, filler, laser", meaning: "The common cosmetic services, which are paid in cash." },
        { term: "Consult", meaning: "A cosmetic consultation, sometimes paid and credited toward treatment." },
        { term: "Recall", meaning: "Reminding patients when they are due for the next skin check." },
      ],
    },
    {
      type: "rules",
      heading: "What the rules mean at the desk",
      items: [
        { title: "Prior authorization eats the day", body: "A 2021 American Academy of Dermatology survey found staff and dermatologists spent about three hours a day on prior authorizations, and that most practices interrupted patient visits to handle them. The mechanism is the same in any office, but dermatology feels it more because biologics are expensive." },
        { title: "Screening skin checks may not be covered", body: "The US Preventive Services Task Force rates routine skin cancer screening of people without symptoms as insufficient evidence, which affects how coverage works. The desk should know what to tell a patient who calls for an annual check." },
        { title: "iPLEDGE changed in 2026", body: "FDA approved changes to pregnancy testing and prescription windows, effective months after approval. Confirm the effective date and current rules on the iPLEDGE site before changing office routines." },
        { title: "Physician assistants and collaboration", body: "Arizona changed its rules in 2024 so some experienced physician assistants practice by collaboration, while others still need a supervision agreement. It decides who can see which patients." },
        { title: "Advertising cosmetic work", body: "Arizona treats false or misleading advertising as unprofessional conduct. Before and after photos need the patient's written permission and should not suggest guaranteed results. The FTC's review rule applies to cosmetic reviews too." },
      ],
    },
    {
      type: "cards",
      heading: "Where Mint would look first",
      items: [
        { pillar: "operations", icon: "clipboard", title: "The biopsy log and who checks it", body: "A weekly review with a name, so the report that never arrived is found before the patient calls." },
        { pillar: "operations", icon: "phone", title: "The triage call", body: "A short script for the scheduler: changing mole, new rash, cosmetic. Clinical triage rules come from your providers." },
        { pillar: "operations", icon: "calendar", title: "Filled slots and no-show follow-up", body: "How medical no-shows are refilled from a waitlist, and whether a visit type is being held open too long." },
        { pillar: "revenue", icon: "repeat", title: "Cosmetic rebooking", body: "Patients on neuromodulator or laser cycles who are due, with a respectful reminder." },
        { pillar: "revenue", icon: "search", title: "Skin-check recall", body: "Patients with a history of skin cancer or precancer who are overdue." },
        { pillar: "marketing", icon: "pin", title: "Two audiences, two pages", body: "Medical conditions for patients who need an appointment, cosmetic services for those who are choosing a provider." },
      ],
    },
    {
      type: "compare",
      heading: "A busy biopsy day, today and with Mint",
      items: [
        { today: "Results are checked when someone has time.", mint: "A weekly log review with an owner and a list of what is outstanding." },
        { today: "All calls land in one queue.", mint: "Urgent skin concerns are handled by a script your providers approve." },
        { today: "Cosmetic patients rebook when they remember.", mint: "A reminder goes out when the patient is due." },
        { today: "Mohs referrals get missing items back.", mint: "A checklist at the desk: report, photo, demographics, insurance." },
      ],
    },
  ],
  faqs: [
    { q: "Can you help us shorten the wait for a new patient appointment?", a: "We look at how slots are held, how cancellations are refilled and how visit types are set, because waits are often partly a template problem. We do not change provider schedules." },
    { q: "Do you handle prior authorizations for biologics?", a: "No. Mint does not do prior authorizations or billing. We look at how the work is divided in the office so it interrupts patient care less." },
    { q: "Do you do marketing for cosmetic services?", a: "Yes, within Arizona's advertising rules: no guaranteed results, written consent for any photos, and no reviews that are filtered by sentiment." },
    { q: "How do you treat the medical and cosmetic sides differently?", a: "They are two front ends. Medical is insurance-based with authorizations and recall. Cosmetic is cash-based with consults, deposits and rebooking." },
  ],
  related: ["cash-pay-practices", "insurance-based-practices", "group-practices"],
  reviewed: "November 2026",
};
