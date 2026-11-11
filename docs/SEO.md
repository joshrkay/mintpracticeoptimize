# SEO and AEO

AEO (answer engine optimization) means being the source that ChatGPT, Claude, Perplexity
and Google's AI answers quote. The two overlap heavily: clear pages that answer real
questions directly do well in both.

## Built into the site

- **Titles, descriptions and canonical URLs** on every page, with keyword-led titles
  ("Podiatry Practice Optimization", "Medical Practice Optimization Services").
- **Structured data:** Organization on every page, FAQPage on `/faq`, and a Service with
  the $1,500 offer on `/discovery`.
- **`/faq`:** eleven questions, each answered in a first sentence that stands on its own.
  That is the form assistants lift. Edit in `lib/faqs.ts`.
- **`/compare`:** Mint next to coaching programs, agencies, consultants, software and
  MSOs. "X vs Y" and "alternatives to" are common assistant queries.
- **`/podiatry`:** a specialty landing page. Add one per specialty as they launch.
- **A definition sentence** ("Mint is a practice optimization partner for independent
  medical practices") repeated on the home page, in metadata and in structured data, so
  engines agree on what Mint is.
- **`sitemap.xml`, `robots.txt`** (open to search and AI crawlers) and **`/llms.txt`**,
  a plain summary of the site for language models.
- **Social share image** generated at `/opengraph-image`.
- Questionnaire pages are `noindex` and left out of the sitemap.
- Pages are static HTML, so crawlers that do not run JavaScript still see all the text.

## What only you can do

1. **After launch:** verify the domain in Google Search Console and Bing Webmaster Tools
   and submit the sitemap. Bing matters because ChatGPT search draws on it.
2. **Claim the name.** "Mint" alone is unwinnable in search (the finance app, the mobile
   carrier, the plant). Always pair it: "Mint Practice Optimization Partners". Create a
   Google Business Profile and a LinkedIn company page with that exact name and the
   site's description, then add their URLs to the Organization data in `app/layout.tsx`
   (`sameAs`).
3. **Go deeper on location.** The site now says Arizona on the home, podiatry and FAQ
   pages and in structured data. There is a hub at `/arizona` and a page for each of the nine
   Phoenix-area cities. Each page has its own account of local medicine (hospitals,
   health systems, patient mix) and three starting points that follow from it; edit in
   `lib/cities.ts`. The facts and their sources are listed at the end of this file. Still
   needed: a street address or city for the Google Business Profile.
4. **Publish proof.** A case study with real numbers is the most-cited kind of page.
5. **Write long-form articles**, one topic each, in the doctor's language: "How to
   collect copays at check-in", "Why QR codes get you bad Google reviews", "What to do
   when orthotics sit uncollected". The plan already notes AI search favors long-form,
   locally relevant content; the same applies to Mint's own site. A `/insights` section
   is the next thing to build once there are two or three drafts.
6. **Get mentioned elsewhere.** Assistants weigh third-party mentions heavily: a
   Podiatry Management article, podcast guest spots, state podiatric association
   listings.

## Target queries

- podiatry practice consultant Arizona / Phoenix podiatry practice management help
- medical practice optimization
- how to get more Google reviews for a medical practice
- how to improve copay collections at the front desk
- practice consultant vs MSO / alternatives to selling to an MSO
- how to reduce after-hours charting

## City page facts

Checked November 2026. Figures are rounded on the site ("one in four") so they age
slowly. Recheck yearly. The "what this means for a practice" text is Mint's own
inference from these facts, not a sourced claim.

| City | Facts used | Source |
| --- | --- | --- |
| Phoenix | 11.9% aged 65+; Banner University Medical Center Phoenix, St. Joseph's and Barrow, Mayo Clinic Hospital | [Census QuickFacts](https://census.gov/quickfacts/fact/table/phoenixcityarizona,US/PST045221), [Phoenix Magazine](https://www.phoenixmag.com/?p=143878) |
| Scottsdale | 26.3% aged 65+; HonorHealth Osborn, Shea, Thompson Peak; Mayo campus; flat growth | [Census](https://census.gov/quickfacts/geo/chart/phoenixcityarizona/AGE135219), [Phoenix Magazine](https://www.phoenixmag.com/?p=143880), [Scottsdale Realtors](https://www.scottsdalerealtors.org/2025/12/17/az-commerce-authority-scottsdales-growth-is-flat/) |
| Mesa | 17.2% aged 65+; third-largest city; Banner Desert (Level I trauma), Banner Baywood, Banner Heart; winter visitors | [Census](https://census.gov/quickfacts/fact/table/peoriacityarizona,mesacityarizona/PST045224), [Select Mesa](https://www.selectmesa.com/business-environment/demographics), [Phoenix Magazine](https://www.phoenixmag.com/?p=143874), [KJZZ](https://kjzz.org/content/1634630/fewer-snowbirds-would-hurt-arizonas-economy) |
| Tempe | 10.8% aged 65+; about 51,200 students on ASU's Tempe campus | [Census](https://census.gov/quickfacts/geo/chart/phoenixcityarizona/AGE135219), [ASU News](https://news.asu.edu/20260810-university-news-asu-reaches-milestone-enrollment) |
| Chandler | 13.1% aged 65+; Chandler Regional, Banner Ocotillo; Intel about 10,000 employees | [Census](https://census.gov/quickfacts/fact/table/chandlercityarizona/PST045223), [City of Chandler](https://www.chandleraz.gov/sites/default/files/departments/economic-development/City-of-Chandler-Semiconductor-and-Electronics-MFG-Brochure-April-2026.pdf) |
| Gilbert | 10.6% aged 65+; growth 0.9%; Mercy Gilbert, Banner Gateway, Banner MD Anderson | [Census](https://census.gov/quickfacts/fact/table/gilberttownarizona/INC110223), [Arizona Capitol Times](https://azcapitoltimes.com/news/2025/12/11/several-valley-cities-grew-faster-than-phoenix-report-shows) |
| Glendale | About 13% aged 65+ (older Census release; other sources say 12%); Midwestern University Arizona College of Podiatric Medicine and its foot and ankle clinic | [Census](https://census.gov/quickfacts/fact/table/glendalecityarizona/INC110223), [Midwestern University](https://midwestern.edu/academics/podiatric-medicine), [clinic](https://clinics.midwestern.edu/glendale-clinics/multispecialty-clinic-az/foot-and-ankle) |
| Peoria | 19.6% aged 65+, 42.3% five-year growth in that group; Valleywise Peoria; HonorHealth Complete Care at Lake Pleasant | [Phoenix New Times](https://www.phoenixnewtimes.com/news/phoenix-suburbs-among-fastest-growing-retirement-hubs-in-us-22326077/), [Valleywise](https://valleywisehealth.org/valleywise-health-celebrates-five-years-of-care-in-peoria/), [HonorHealth](https://www.honorhealth.com/healthy-living/honorhealth-opens-complete-care-lake-pleasant-full-service-emergency-room-and-urgent) |
| Goodyear | 18.1% aged 65+; 5.0% annual growth; Abrazo rehabilitation building opened January 2026; Banner health center | [Census](https://census.gov/quickfacts/fact/table/goodyearcityarizona/PST045223), [Arizona Capitol Times](https://azcapitoltimes.com/news/2025/12/11/several-valley-cities-grew-faster-than-phoenix-report-shows), [Banner](https://www.bannerhealth.com/newsroom/press-releases/goodyear-health-center-opening) |

Stated from general knowledge and not confirmed by search: Banner Thunderbird Medical
Center as Glendale's main hospital, Abrazo West Campus as Goodyear's hospital, and that
Tempe has no large general hospital of its own. Check these three before launch.
