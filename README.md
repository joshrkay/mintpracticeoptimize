# Mint | Practice Optimization Partners

Website for practiceoptimize.com, plus the pre-meeting practice questionnaire.
The business plan behind it is in [docs/PLAN.md](docs/PLAN.md).

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Pitch, three pillars, how it works |
| `/services` | Operations, Revenue Opportunities, Marketing, Patient Messaging |
| `/discovery` | The discovery offer and fee |
| `/contact` | Contact form |
| `/questionnaire/podiatry` | Pre-meeting questionnaire. Unlisted and not indexed; send the link directly. |

## Develop

```bash
npm install
npm run dev
```

## Where to edit

- Site copy: `lib/site.ts`, `lib/services.ts` and the files under `app/`.
- Questionnaire: `lib/questionnaire/core.ts` holds the questions shared by every specialty,
  `podiatry.ts` the podiatry additions. To add a specialty, create its sections file and
  register it in `lib/questionnaire/index.ts`; the page appears at `/questionnaire/<slug>`.

## Form delivery

Both forms email their submissions through [Resend](https://resend.com). Set the variables
in `.env.example` (locally in `.env.local`, in production in the host's settings).
Without them, development logs submissions to the terminal and production shows the
visitor an error asking them to email instead, so nothing is lost silently.
