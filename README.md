# Mint | Practice Optimization Partners

Website for practiceoptimize.com, plus the pre-meeting practice questionnaire.
Docs: [business plan](docs/PLAN.md), [competitive landscape](docs/COMPETITORS.md), [audience and page map](docs/AUDIENCE.md), [SEO and AEO](docs/SEO.md), [going live](docs/DEPLOY.md).

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Pitch, three pillars, how it works |
| `/services` | Operations, Revenue Opportunities, Marketing, Patient Messaging |
| `/discovery` | The discovery offer and fee |
| `/podiatry` | Podiatry landing page |
| `/arizona`, `/arizona/<city>` | Service area hub and a page per city (`lib/cities.ts`) |
| `/for-your-team` | For practice managers and staff |
| `/compare` | Mint next to the other kinds of help a practice can hire |
| `/faq` | Direct answers, with FAQ structured data |
| `/contact` | Contact form |
| `/questionnaire/podiatry` | Pre-meeting questionnaire. Unlisted and not indexed; send the link directly. |

## Develop

```bash
npm install
npm run dev
```

## Where to edit

- Site copy: `lib/site.ts`, `lib/services.ts`, `lib/faqs.ts` and the files under `app/`.
- Questionnaire: `lib/questionnaire/core.ts` holds the questions shared by every specialty,
  `podiatry.ts` the podiatry additions. To add a specialty, create its sections file and
  register it in `lib/questionnaire/index.ts`; the page appears at `/questionnaire/<slug>`.

## Brand and leaf artwork

- Logo: `components/Logo.tsx` (wordmark, symbol and lockup). Exported files are in
  `public/brand/`, and `/brand` is an unlisted reference sheet.
- Plant photography: the originals are in `photos-source/`. `scripts/prepare-photos.mjs`
  cuts them out of their backgrounds and writes the files the site uses: two sprigs and
  a dark background in `public/photos/`, and a single leaf (three variants) in
  `public/leaves/`. Replace an original and rerun the script to change the artwork.
- **Licensing:** the files in `photos-source/` are stock photographs (iStock and Getty).
  Confirm a licence covers each one before the site goes live.
- Colour follows the 60-30-10 rule, documented at the top of `app/globals.css`.
  `scripts/measure-colors.mjs` reports each page's split.

## Form delivery

Both forms email their submissions through [Resend](https://resend.com). Set the variables
in `.env.example` (locally in `.env.local`, in production in the host's settings).
Without them, development logs submissions to the terminal and production shows the
visitor an error asking them to email instead, so nothing is lost silently.
