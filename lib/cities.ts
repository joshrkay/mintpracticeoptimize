export type City = {
  slug: string;
  name: string;
  area: string;
  /** One line for the meta description. */
  summary: string;
  /** Hospitals, health systems and schools that shape local medicine. */
  landscape: string;
  /** Who the patients are, and what that means for an independent practice. */
  patients: string;
  /** Where Mint would look first in a practice here. */
  focus: { title: string; body: string }[];
};

// The Phoenix-area cities Mint serves in person. The local facts below are sourced
// and dated in docs/SEO.md; recheck them yearly.
export const cities: City[] = [
  {
    slug: "phoenix",
    name: "Phoenix",
    area: "Central Phoenix",
    summary:
      "Phoenix has the Valley's densest concentration of hospitals and specialists, so an independent practice has to be the easiest one to reach.",
    landscape:
      "Phoenix is the center of Arizona medicine. Banner – University Medical Center Phoenix, St. Joseph's Hospital and its Barrow Neurological Institute, and Mayo Clinic's hospital in the north of the city all sit inside the city limits, each surrounded by employed specialists and referral networks.",
    patients:
      "Phoenix is younger than most of the Valley: roughly one resident in eight is 65 or older. Patients here are more often working age and commercially insured, and they have more practices to choose from than anywhere else in the state.",
    focus: [
      {
        title: "Being the practice that answers",
        body: "With this many options, a new patient who reaches voicemail calls the next name on the list. We start with how the phone is answered and how soon a new patient can be seen.",
      },
      {
        title: "Standing out on Google Maps",
        body: "In a crowded market, patients compare ratings side by side. We invite your most loyal patients to review you, so your rating reflects the people who stay.",
      },
      {
        title: "Staying on referring doctors' minds",
        body: "Large systems keep referrals in house. An independent practice has to stay visible to the primary care offices around it, in person as well as online.",
      },
    ],
  },
  {
    slug: "scottsdale",
    name: "Scottsdale",
    area: "East Valley",
    summary:
      "Scottsdale has the oldest patient base of the cities we serve and high expectations of service, so growth comes from caring better for the patients you have.",
    landscape:
      "Scottsdale is HonorHealth's home, with its Osborn, Shea and Thompson Peak hospitals in the city, and Mayo Clinic's Arizona campus on its northern edge. Patients here are used to well-run medicine.",
    patients:
      "About one Scottsdale resident in four is 65 or older, the highest share of the cities we serve, and the city's population has been close to flat. A Scottsdale practice sees more Medicare patients than most, and it grows less from new arrivals than from the patients already on its books.",
    focus: [
      {
        title: "The patients you already have",
        body: "With little population growth, the opportunity is in your census. We look for existing patients who qualify for care you already offer and have never been told.",
      },
      {
        title: "Follow-up that matches expectations",
        body: "A visit summary by email and a thank-you voicemail in the doctor's own voice. Small touches count for more where patients compare you with Mayo and HonorHealth.",
      },
      {
        title: "Collecting at the time of service",
        body: "Copays and cash services paid before the patient leaves, so an older patient with frequent visits never builds up a balance.",
      },
    ],
  },
  {
    slug: "mesa",
    name: "Mesa",
    area: "East Valley",
    summary:
      "Mesa is Arizona's third-largest city, with a large retiree and winter visitor population that makes a practice's year uneven.",
    landscape:
      "Mesa is Arizona's third-largest city and Banner country: Banner Desert Medical Center, a Level I trauma center, anchors the west side, and Banner Baywood and Banner Heart Hospital serve the retirement communities in the east.",
    patients:
      "About one Mesa resident in six is 65 or older, and winter visitors add to that every year. A Mesa practice can be stretched from fall to spring and quiet in summer, with patients who leave the state for months at a time.",
    focus: [
      {
        title: "Phones and scheduling in season",
        body: "The winter rush shows up first as missed calls and a full schedule. We look at how calls are handled and how the calendar is built before the season starts.",
      },
      {
        title: "Booking the next visit before they leave",
        body: "Seasonal patients who leave without a return visit often do not come back to you. We make rebooking part of checkout.",
      },
      {
        title: "Staying in touch through summer",
        body: "A focused health newsletter keeps the practice in front of patients while they are away, so they call you first when they return.",
      },
    ],
  },
  {
    slug: "tempe",
    name: "Tempe",
    area: "East Valley",
    summary:
      "Tempe is the youngest city we serve, home to Arizona State University, with patients who book online and move often.",
    landscape:
      "Tempe is built around Arizona State University, whose Tempe campus has about 51,000 students. It sits between the hospital campuses of Scottsdale, Mesa and Chandler rather than around one of its own, so outpatient practices carry much of the city's day-to-day care.",
    patients:
      "Tempe is the youngest city we serve: only about one resident in nine is 65 or older. Patients are students, young professionals and active adults. Many are new to town, choose a doctor from a search result, and move on within a few years.",
    focus: [
      {
        title: "Booking without a phone call",
        body: "Younger patients expect to book online and confirm by text. We look at how easy it is to become your patient without calling during business hours.",
      },
      {
        title: "Being found by people new to town",
        body: "Someone who moved here in August has no doctor and no one to ask. Your Google Maps listing and reviews do the work a neighbor's recommendation does elsewhere.",
      },
      {
        title: "Text check-ins",
        body: "Simple yes or no texts after a visit keep patients engaged without asking them to download an app.",
      },
    ],
  },
  {
    slug: "chandler",
    name: "Chandler",
    area: "East Valley",
    summary:
      "Chandler's patients are largely working families on employer health plans, which puts collections and convenience first.",
    landscape:
      "Chandler is served by Dignity Health's Chandler Regional Medical Center and by Banner Ocotillo Medical Center in the south of the city. It is also a major employment center: Intel alone has about 10,000 employees here.",
    patients:
      "Chandler's patients are mostly working families, with about one resident in eight aged 65 or older. Many are covered through an employer, often on plans with deductibles and copays that the practice has to collect itself.",
    focus: [
      {
        title: "Collections at check-in",
        body: "With employer plans, more of each visit is owed by the patient. We set up copays and known balances to be collected up front, not billed later.",
      },
      {
        title: "Eligibility checked before the visit",
        body: "Coverage changes with jobs and plan years. Verifying it the day before avoids a surprise at the desk and a claim that bounces.",
      },
      {
        title: "Reminders that fit a workday",
        body: "Text reminders and easy rescheduling keep working patients from becoming no-shows.",
      },
    ],
  },
  {
    slug: "gilbert",
    name: "Gilbert",
    area: "East Valley",
    summary:
      "Gilbert grew fast and has now slowed, so practices built on new arrivals need to turn to keeping the patients they have.",
    landscape:
      "Gilbert has two hospital campuses: Dignity Health's Mercy Gilbert Medical Center in the south and Banner Gateway Medical Center in the north, which is also home to Banner MD Anderson Cancer Center.",
    patients:
      "Gilbert is a town of young families: about one resident in ten is 65 or older. After years as one of the fastest-growing places in the country, its growth has slowed to under 1% a year. Practices that filled their schedules with newcomers now depend on the families they already see.",
    focus: [
      {
        title: "Keeping patients between visits",
        body: "Email to your existing patients, one useful topic at a time, so a family thinks of you first when something comes up.",
      },
      {
        title: "Reviews from loyal patients",
        body: "Parents ask other parents, and then they check Google. We invite the patients who know you best to say so.",
      },
      {
        title: "Care patients do not know you offer",
        body: "A review of your census to find patients eligible for services you already provide.",
      },
    ],
  },
  {
    slug: "glendale",
    name: "Glendale",
    area: "West Valley",
    summary:
      "Glendale is home to Arizona's podiatry school and Banner Thunderbird Medical Center, which makes it a competitive place to practice.",
    landscape:
      "Glendale is where Arizona trains its podiatrists. Midwestern University's Arizona College of Podiatric Medicine is here, along with the university's own foot and ankle clinic, which sees patients at reduced rates. Banner Thunderbird Medical Center is the city's main hospital.",
    patients:
      "Roughly one Glendale resident in eight is 65 or older. Patients have a university clinic and hospital-affiliated practices to choose from, so a private practice has to give them a reason to choose it and to come back.",
    focus: [
      {
        title: "A reason to choose you",
        body: "When a lower-priced teaching clinic is nearby, a private practice competes on access and attention: seen quickly, by the same doctor, with everything ready.",
      },
      {
        title: "Visit prep",
        body: "Orthotics and devices pulled and waiting at the front desk before the patient arrives. It is the kind of detail patients notice and remember.",
      },
      {
        title: "Reviews that reflect your regulars",
        body: "We invite your most loyal patients to review you by text, so the rating a new patient sees was written by the people who know you.",
      },
    ],
  },
  {
    slug: "peoria",
    name: "Peoria",
    area: "West Valley",
    summary:
      "Peoria has one of the fastest-growing 65-and-over populations in the country, which means more recurring care to keep on schedule.",
    landscape:
      "Peoria's care is mostly outpatient. Valleywise Health runs a comprehensive health center here, HonorHealth has a combined emergency room and urgent care at Lake Pleasant, and hospital care is a short drive away in Glendale.",
    patients:
      "About one Peoria resident in five is 65 or older, and that group is among the fastest growing in the country. For a practice, that means more Medicare patients, more recurring visits and more people who would rather call than book online.",
    focus: [
      {
        title: "Recall for recurring care",
        body: "Patients who need to be seen regularly should leave with the next visit booked, and hear from you if they miss it.",
      },
      {
        title: "A phone that gets answered",
        body: "Older patients call. We look at how many calls reach a person during business hours and what happens to the ones that do not.",
      },
      {
        title: "Patients eligible for more care",
        body: "An older census usually holds patients who qualify for services they have never been offered. We find them and reach out.",
      },
    ],
  },
  {
    slug: "goodyear",
    name: "Goodyear",
    area: "West Valley",
    summary:
      "Goodyear is one of the fastest-growing cities in the Valley, with new residents looking for doctors every month.",
    landscape:
      "Goodyear's medical base is being built as the city grows. Abrazo West Campus is the local hospital, Abrazo opened a medical building with inpatient rehabilitation in 2026, and Banner has added a health center in the new downtown.",
    patients:
      "Goodyear is growing by about 5% a year, among the fastest rates in the Valley, and close to one resident in five is 65 or older. Thousands of new residents arrive each year without a doctor, many of them retirees.",
    focus: [
      {
        title: "Being found first",
        body: "New residents search before they ask anyone. We build out your Google Maps presence and local search so you are the practice they find.",
      },
      {
        title: "Room for new patients",
        body: "Growth only helps if a new patient can get in. We look at how soon a first appointment is available and how new patient calls are handled.",
      },
      {
        title: "Turning new patients into regulars",
        body: "A follow-up after the first visit and the next appointment booked before they leave.",
      },
    ],
  },
];

export const cityNames = cities.map((c) => c.name);

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug) ?? null;
}

/** "A, B and C" */
export function listNames(names: string[]) {
  return names.length < 2 ? names.join("") : `${names.slice(0, -1).join(", ")} and ${names.at(-1)}`;
}
