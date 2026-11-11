# Going live: Vercel and GoDaddy

The domain practiceoptimize.com is registered at GoDaddy. The site is hosted on Vercel.

## 1. Create the Vercel project

1. In Vercel, choose **Add New > Project** and import `joshrkay/mintpracticeoptimize`.
   If the repo is not listed, use "Adjust GitHub App Permissions" to grant Vercel access.
2. Leave the framework preset as Next.js and the build settings at their defaults.
3. Deploy. Vercel gives the site a `*.vercel.app` address straight away.

Vercel deploys the repository's default branch as production and every other branch as a
preview.

## 2. Point the domain at Vercel

1. In the Vercel project, open **Settings > Domains** and add `practiceoptimize.com` and
   `www.practiceoptimize.com`. Make `www.practiceoptimize.com` the main address and have
   `practiceoptimize.com` redirect to it; the site's canonical URLs use the `www` address.
2. Vercel shows the DNS records it wants. Use the values it shows. They are normally:

   | Type | Name | Value |
   | --- | --- | --- |
   | A | `@` | `76.76.21.21` |
   | CNAME | `www` | `cname.vercel-dns.com` |

3. In GoDaddy, open **My Products > practiceoptimize.com > DNS**. Edit the existing `@`
   A record (GoDaddy's default points at a parking page) and the `www` CNAME to the
   values above. Delete any other A record on `@`, and turn off domain forwarding if it
   is on.
4. Back in Vercel the domain turns green once DNS has spread, usually within the hour.
   Vercel issues the HTTPS certificate by itself.

Leave the nameservers at GoDaddy. That keeps email (MX) records where they are.

## 3. Turn on form email

Until this is done the questionnaire and contact form show visitors a "couldn't send,
please email us" message.

1. Create a [Resend](https://resend.com) account and add the domain `practiceoptimize.com`.
   Resend lists a few DNS records; add them in the same GoDaddy DNS screen.
2. In Vercel, open **Settings > Environment Variables** and add:
   - `RESEND_API_KEY`: the key from Resend
   - `INBOX_EMAIL`: where submissions should arrive
   - `FROM_EMAIL`: for example `Mint <forms@practiceoptimize.com>`
3. Redeploy, then submit both forms once to confirm the emails arrive.

## 4. After launch

- Replace the placeholder `hello@practiceoptimize.com` in `lib/site.ts` once the real
  mailbox exists.
- Submit `https://www.practiceoptimize.com/sitemap.xml` in Google Search Console and Bing
  Webmaster Tools (see [SEO.md](SEO.md)).
