import type { PracticeType } from "./schema";

export const soloPractices: PracticeType = {
  slug: "solo-practices",
  kind: "size",
  name: "Solo practices",
  short: "Solo",
  icon: "user",
  summary: "One clinician, a small team and a lot of knowledge held by one or two people.",
  title: "Practice Optimization for Solo Practices",
  description:
    "How Mint works with solo medical practices in Arizona: owner time, single points of failure, call coverage, credentialing upkeep and referral relationships.",
  h1: "Practice optimization for solo practices in Arizona.",
  lede: "In a solo practice the owner is the doctor, the call schedule and often the HR department. The work is taking things out of the owner's head and putting them where someone else can use them.",
  blocks: [
    {
      type: "story",
      heading: "What a solo practice is really like",
      paragraphs: [
        "A solo practice usually has an owner, a front desk, a medical assistant or nurse, often a biller inside or outside the office, and someone in the office manager role who may be a spouse or a long-tenured employee. The practice runs on a handful of staff-built spreadsheets, a huddle that may or may not happen and knowledge that lives in two or three people.",
        "The owner's time is the scarcest thing. National data on physician work find long weeks, with several hours a week going to administrative work like insurance forms and prior authorization, and more hours of EHR work after the office closes. Independent physicians in a recent survey reported more control over their volume than employed doctors, and less debilitating stress, while carrying more administrative burden and financial worry.",
        "The risk that is specific to solo is the single point of failure. When the one person who knows how payer credentialing renewals work leaves, or the doctor is out sick for two weeks, a solo practice has no bench. Cross-training is the standard advice, and it is harder in an office where staff are family or have worked together for twenty years.",
      ],
    },
    {
      type: "journey",
      heading: "A week in a solo office",
      steps: [
        { title: "Monday: weekend calls and refills", body: "The week begins with a backlog: the answering service's overnight messages, refill requests and results." },
        { title: "Clinic sessions", body: "Clinic runs most days. Charting and the inbox are done at lunch, at night or on the weekend.", leak: "The doctor's evenings are the buffer, so the problems are invisible." },
        { title: "Admin block", body: "Payroll approval, refills, forms, and a look at the aging report with the biller.", leak: "The aging report reviewed when time allows, which is not monthly." },
        { title: "Month-end", body: "Collections and accounts receivable are reviewed, if at all, by the owner personally." },
        { title: "The yearly cycle", body: "Payer credentialing re-attestation, license and DEA renewal, HIPAA and OSHA training, malpractice renewal.", leak: "A re-attestation deadline missed, and a payer drops the doctor from the directory." },
        { title: "The vacation", body: "Cross-cover with another doctor or a locum arranged weeks ahead, and a written plan for who answers what.", leak: "No written plan, so the doctor takes the phone from the beach." },
      ],
    },
    {
      type: "terms",
      heading: "The words in a solo office",
      items: [
        { term: "Overhead", meaning: "Operating expenses as a share of revenue. Definitions differ, so never compare figures without asking whose." },
        { term: "A/R and A/R days", meaning: "Unpaid claims and how long they have been unpaid, in an aging report." },
        { term: "Point-of-service collections", meaning: "Copays and balances collected at the visit." },
        { term: "Superbill and charge capture", meaning: "The form of services provided, and making sure each billable service is billed." },
        { term: "Pajama time", meaning: "Doctors' after-hours work in the EHR." },
        { term: "In-basket", meaning: "Results, refills, messages and forms waiting for someone." },
        { term: "Template", meaning: "How the schedule is cut into slots by visit type." },
        { term: "Third next available", meaning: "How far out the third open appointment is." },
        { term: "Answering service", meaning: "The paid service that takes overnight calls and relays urgent ones." },
        { term: "Cross-cover and locum", meaning: "Another doctor covering your patients, or a temporary substitute." },
        { term: "CAQH", meaning: "The shared credentialing profile payers pull from. It must be re-attested regularly or payers can stop pulling the data." },
        { term: "Credentialing and enrollment", meaning: "Verifying the doctor, and linking the doctor to a payer's contract. People use the two words loosely." },
        { term: "Security risk analysis", meaning: "The HIPAA-required assessment of risks to electronic patient information." },
        { term: "BAA", meaning: "Business associate agreement: the contract with any vendor who touches patient information." },
      ],
    },
    {
      type: "rules",
      heading: "What the rules mean for a solo practice",
      items: [
        { title: "Anyone who touches patient information needs a BAA", body: "Federal guidance names consulting and administrative services among those that can make a vendor a business associate. Mint assumes a BAA is needed whenever we see schedules, patient lists or phones." },
        { title: "The staff wall", body: "Mint does not hire, fire or manage your staff, set clinical policy, or negotiate with payers. Those are management functions, and keeping them out of our work matters for how Arizona views outside management arrangements." },
        { title: "Flat fees", body: "Arizona's medical board treats splitting fees for referrals as unprofessional conduct. Percentage-of-revenue pricing can look like that, which is why we price at a flat fee." },
        { title: "Closing or selling a practice", body: "Arizona requires records be kept for years after last treatment, and there is professional guidance on notifying patients and naming a custodian. A written closure and coverage plan is worth having before it is needed." },
      ],
    },
    {
      type: "cards",
      heading: "Where Mint would look first",
      items: [
        { pillar: "operations", icon: "clipboard", title: "Write down what only one person knows", body: "A three-column list: the process, who does it, and who else could." },
        { pillar: "operations", icon: "calendar", title: "The yearly calendar", body: "Every renewal and attestation on one calendar with a named owner and a back-up." },
        { pillar: "operations", icon: "phone", title: "Phones and after-hours", body: "How calls are answered, routed and covered when the owner is away." },
        { pillar: "revenue", icon: "search", title: "Patients overdue and unfinished plans", body: "Existing patients who are overdue for care and could be reached." },
        { pillar: "marketing", icon: "pin", title: "The doctor as the brand", body: "A site and profile where the doctor's own voice and approach come through." },
        { pillar: "marketing", icon: "message", title: "Reviews, asked of everyone", body: "A steady, simple request without quotas or filtering." },
      ],
    },
    {
      type: "compare",
      heading: "A solo practice, today and with Mint",
      items: [
        { today: "Knowledge is in two people's heads.", mint: "The critical ten processes are written down and a second person has done each one." },
        { today: "Renewals are remembered.", mint: "They are on a shared calendar with owners." },
        { today: "The doctor covers the phone on vacation.", mint: "A written coverage plan arranged weeks ahead." },
        { today: "The aging report is reviewed when possible.", mint: "A monthly twenty-minute review with a standing agenda." },
      ],
    },
  ],
  faqs: [
    { q: "Is a solo practice too small for outside help?", a: "Often it is the opposite. The owner is carrying the work, and a few written routines and a calendar pay off quickly." },
    { q: "Do you take over the office manager's role?", a: "No. We work alongside whoever holds that role and do not manage staff." },
    { q: "Can you help me prepare to sell or close?", a: "We can document how the office runs, which any buyer or custodian will ask for. Legal and financial planning belong to your attorney and advisors." },
    { q: "Do you sign a BAA?", a: "Yes. We expect to sign one whenever we see patient information." },
  ],
  related: ["group-practices", "cash-pay-practices", "podiatry"],
  reviewed: "November 2026",
};
