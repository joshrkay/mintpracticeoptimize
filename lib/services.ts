export type Pillar = {
  id: string;
  icon: "flow" | "chart" | "megaphone" | "message";
  name: string;
  summary: string;
  items: { title: string; body: string }[];
};

export const pillars: Pillar[] = [
  {
    id: "operations",
    icon: "flow",
    name: "Operations",
    summary:
      "The day-to-day mechanics of the practice: every call answered, every visit prepared, every dollar collected when it is due.",
    items: [
      {
        title: "Phones and scheduling",
        body: "How calls are answered, how appointments are booked and how the schedule gets filled.",
      },
      {
        title: "Visit prep",
        body: "Everything ready before the patient walks in. Orthotics waiting at the front desk, not hunted down mid-visit.",
      },
      {
        title: "Collections",
        body: "Copays collected up front and cash pay collected at the time of service, so balances never pile up across visits.",
      },
      {
        title: "Documentation",
        body: "AI-assisted EMR workflows aimed at cutting the time you spend charting after hours.",
      },
      {
        title: "Patient follow-up",
        body: "A post-visit email summary and a warm thank-you voicemail in your own voice, with no health details in the message.",
      },
      {
        title: "Workflow optimization",
        body: "The process fixes that don't fit a category: handoffs, bottlenecks and steps nobody remembers the reason for.",
      },
    ],
  },
  {
    id: "revenue",
    icon: "chart",
    name: "Revenue Opportunities",
    summary:
      "Most practices already have the patients. We help make sure each one is offered the care they are eligible for.",
    items: [
      {
        title: "Census review",
        body: "We work through your patient census to find patients eligible for services you already offer.",
      },
      {
        title: "Targeted outreach",
        body: "Those patients hear from the practice directly, with a clear reason to come back in.",
      },
      {
        title: "Per-visit value",
        body: "The goal is more value from each visit for the patient and the practice, not more volume for its own sake.",
      },
    ],
  },
  {
    id: "marketing",
    icon: "megaphone",
    name: "Marketing",
    summary:
      "Start with the patients who already trust you, then build a local presence that brings in new ones.",
    items: [
      {
        title: "Patient remarketing",
        body: "Email to your existing patient base, so the people who know you hear from you between visits.",
      },
      {
        title: "Health newsletters",
        body: "One focused topic per send. A timely track for what is going around now, and an evergreen track by condition.",
      },
      {
        title: "Google reviews",
        body: "A QR code on the counter mostly reaches unhappy patients. We invite your most loyal patients by text with a direct link, and follow up politely.",
      },
      {
        title: "Local presence",
        body: "Boots on the ground in your community alongside SEO, Google Maps and social.",
      },
      {
        title: "Doctor-led content",
        body: "A short monthly video from you beats a calendar of generic holiday posts. Quality and local relevance over frequency, for search engines and AI search alike.",
      },
      {
        title: "Booking marketplaces",
        body: "Listings only pay off when someone works the leads. We set up the confirmation calls that get new patients to show.",
      },
    ],
  },
];

export const messaging = {
  icon: "message" as const,
  name: "Patient Messaging",
  summary:
    "A separate service line for practices that want to stay in touch between visits without asking patients to download an app.",
  items: [
    {
      title: "Text check-ins",
      body: "Simple yes or no reminders by text do most of what a patient app does, with none of the download friction.",
    },
    {
      title: "One inbox",
      body: "Every patient text and email lands in one place, so replies are seen and answered.",
    },
    {
      title: "Activity tracking and secure messaging",
      body: "For practices that do want an app, we focus it on the two things patients use.",
    },
  ],
};
