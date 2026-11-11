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
   pages and in structured data. There is a hub at `/arizona` and a page for each of the nine Phoenix-area
   cities (edit the list in `lib/cities.ts`). The city pages share most of their text,
   which search engines discount. Each gets stronger with something only that city has: a
   client result, a local partner, a named practice. Add those as they come. Still
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
