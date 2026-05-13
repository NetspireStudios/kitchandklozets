# Firebase migration guide

This walks you through moving `kitchandklozets.com` from Vercel to Firebase and wiring the product-page contact form to **Firestore** (lead archive) + **Resend** (email to `sales@kitchandklozets.com`).

The static site stays exactly as it is — only the host and the form backend change.

---

## What you're standing up

| Piece | What it does |
|---|---|
| **Firebase Hosting** | Serves all the static HTML/CSS/JS (replaces Vercel) |
| **Cloud Function `submitContact`** | HTTPS endpoint at `/api/contact`. Validates form, writes to Firestore, sends Resend email |
| **Firestore `contacts` collection** | Archive of every form submission, server-only access |
| **Resend** | Outbound email service that actually delivers the lead to your inbox |

Files already in this repo for you:

```
firebase.json            hosting config, rewrites /api/contact -> function
firestore.rules          contacts collection is server-only
firestore.indexes.json   empty placeholder
functions/
  package.json           pinned firebase-admin, firebase-functions, resend
  index.js               the submitContact function (CORS, honeypot, validation)
  .gitignore             node_modules + env files
catalog.jsx              ContactForm now POSTs to window.CONTACT_ENDPOINT || "/api/contact"
```

---

## Prerequisites

- Node 20+ (you have 23).
- A Google account that will own the Firebase project.
- A Resend account (https://resend.com) — free tier ships 100 emails/day, plenty for leads.
- DNS access for `kitchandklozets.com` (Namecheap, GoDaddy, Cloudflare, etc.).

---

## Step 1 — Create the Firebase project

1. Go to https://console.firebase.google.com.
2. Click **Add project**. Name it `kitchandklozets`. Skip Google Analytics.
3. Once created, in the left sidebar:
   - **Build → Firestore Database**: click **Create database**, pick **Production mode**, region **us-east1** (closest to MA).
   - **Build → Hosting**: click **Get started** (just acknowledges, no setup yet).
   - **Build → Functions**: same, click **Get started**.
4. **Project settings → General**: switch the project to the **Blaze (pay-as-you-go)** plan. Cloud Functions need it. For a small lead form you'll pay essentially $0/month (well inside the free tier).

---

## Step 2 — Install the Firebase CLI

```bash
npm install -g firebase-tools
firebase --version       # confirm it's >= 13.x
firebase login           # opens browser, sign in with the Google account from Step 1
```

---

## Step 3 — Connect this repo to the Firebase project

From the repo root (`C:\Users\huzai\OneDrive\Desktop\KitchandKlozets`):

```bash
firebase use --add
```

When it asks which project, pick `kitchandklozets`. Give it an alias of `default`.

This creates a `.firebaserc` file pointing to your project. Don't commit secrets — `.firebaserc` is safe to commit (it only contains the project ID).

---

## Step 4 — Install the Cloud Function dependencies

```bash
cd functions
npm install
cd ..
```

This pulls in `firebase-admin`, `firebase-functions`, and `resend`.

---

## Step 5 — Set up Resend

1. Create the account at https://resend.com.
2. **Domains → Add Domain** → `kitchandklozets.com`. Resend will give you a few DNS records (SPF/DKIM TXT plus a return-path CNAME). Add them at your registrar. Verification usually finishes inside 10 minutes.
3. Once verified, you can send `from: "Kitch & Klozets <leads@kitchandklozets.com>"` (the function already uses this address — change it in `functions/index.js` if you prefer something else).
4. **API Keys → Create API Key** → name it `prod`. Copy the key (`re_…`).

---

## Step 6 — Store the Resend key as a Firebase secret

```bash
firebase functions:secrets:set RESEND_API_KEY
# paste the re_... key when prompted
```

This stores it in Google Secret Manager. The function loads it at runtime via `defineSecret("RESEND_API_KEY")`. The key never lives in your repo.

---

## Step 7 — Test locally with the emulators

Before deploying, you can run everything on your laptop:

```bash
firebase emulators:start
```

You'll get URLs:
- Hosting:   http://localhost:5000
- Functions: http://localhost:5001/kitchandklozets/us-east1/submitContact
- Firestore: http://localhost:8080
- Emulator UI: http://localhost:4000

Open http://localhost:5000, navigate to any product page, fill the form. The emulator UI will show the new doc in Firestore. (Resend is the only thing the emulator can't fake — set `RESEND_API_KEY` and it'll send real email.)

---

## Step 8 — Deploy

```bash
firebase deploy
```

That pushes hosting + functions + firestore rules in one shot. First Functions deploy takes ~3 minutes; subsequent deploys are faster.

After it finishes you'll see two URLs:

```
Hosting URL: https://kitchandklozets.web.app
Function URL: https://us-east1-kitchandklozets.cloudfunctions.net/submitContact
```

Test the form on `https://kitchandklozets.web.app/contact`. Submission should land in:
- **Firestore Console → contacts collection** (new doc with name/email/message/timestamp).
- **Your inbox** at `sales@kitchandklozets.com` (subject: "New inquiry: …").

---

## Step 9 — Point `kitchandklozets.com` at Firebase

1. Firebase Console → **Hosting → Add custom domain** → enter `kitchandklozets.com`. Repeat for `www.kitchandklozets.com`.
2. Firebase shows two `A` records (or a `TXT` for ownership verification first). Add them at your registrar:
   ```
   A    @    151.101.1.195
   A    @    151.101.65.195
   ```
   (Firebase shows the exact IPs; copy theirs, not these.)
3. DNS propagation usually finishes in 5–30 minutes. Firebase auto-issues an SSL certificate once the records resolve.

---

## Step 10 — Switch DNS off Vercel

You have two options:

**Quick swap** (chosen domain immediately points to Firebase):
- Just change the A records as in Step 9. Vercel's deployment URL (`kitchandklozets.vercel.app`) keeps working as a staging mirror.

**Side-by-side** (test before flipping):
- Add `firebase.kitchandklozets.com` as the Firebase custom domain instead of the apex.
- Verify it works end-to-end (form submission, all routes).
- Then flip the apex `A` records to Firebase's IPs.

Either way, **don't delete the Vercel project yet** — keep it as an instant rollback if anything goes sideways in the first 24 hours.

---

## Step 11 — Optional: pause Vercel auto-deploys

In Vercel dashboard → Project Settings → Git → disable "Automatically deploy from `main`" so pushes only build on Firebase from now on. Firebase Hosting auto-deploys via GitHub if you opted into that during `firebase init`; if not, you'll deploy from your machine with `firebase deploy`.

To wire GitHub auto-deploys to Firebase later:

```bash
firebase init hosting:github
```

Pick the `NetspireStudios/kitchandklozets` repo. It'll add a `.github/workflows/firebase-hosting-merge.yml` that runs `firebase deploy --only hosting` on every push to `main`.

---

## Where leads live

- **Email**: every submission emails `sales@kitchandklozets.com`.
- **Firestore archive**: every submission also writes to `contacts/{autoId}` with `{ name, email, phone, message, product, category, createdAt, userAgent, ip }`. Open Firebase Console → Firestore Database to browse.
- **Logs**: Firebase Console → Functions → `submitContact` → Logs. Any failures (Resend down, validation errors) show up there.

---

## Spam controls (already in place)

- **Honeypot field** `company` in the form — hidden from users, bots fill it. Function silently drops those submissions.
- **CORS allowlist** — the function only accepts requests from `kitchandklozets.com`, the `www` variant, and the `*.web.app` / `*.firebaseapp.com` hosts.
- **maxInstances: 10** caps how wide the function can scale, so a flood can't run up your bill overnight.

If spam ramps up, add Firebase **App Check** with reCAPTCHA Enterprise — about 20 lines of front-end code plus a check on the function side. Worth doing once you start getting hits.

---

## Operating costs (rough)

For a small business getting <500 form submissions/month:

| Service | Likely cost |
|---|---|
| Firebase Hosting | $0 (10 GB/month free) |
| Cloud Functions | $0 (2M invocations free) |
| Firestore | $0 (50K reads / 20K writes / 20K deletes per day free) |
| Resend | $0 (100 emails/day free; $20/mo if you outgrow it) |

You'll have a Blaze plan card on file, but actual charges should round to $0 unless you have a real traffic spike.

---

## Re-running the catalog generator

If you change `catalog-data.jsx` (new products, new sections, new categories), regenerate all the catalog HTML and the sitemap with:

```bash
node scripts/generate-catalog-pages.js
```

Then commit and push (or `firebase deploy --only hosting`).

---

## Troubleshooting

- **`firebase deploy` errors with "billing not enabled"** — Step 1.4: upgrade to Blaze.
- **Function returns 502 "Email service failed"** — Resend key isn't set or domain isn't verified. Check `firebase functions:secrets:access RESEND_API_KEY` and verify the Resend dashboard shows the domain as "Verified".
- **CORS error in browser console** — your origin isn't in the function's `ALLOWED_ORIGINS` list. Edit `functions/index.js`, add the origin, redeploy.
- **Form submits OK but no email arrives** — check Resend dashboard → Emails. Bounces show up there. Spam folder in your inbox too.
- **Static asset (jsx) returns wrong MIME type after deploy** — Firebase Hosting serves `.jsx` as `text/jsx` by default, which works for `<script type="text/babel">`. If a console error appears about a refused script, add an explicit content type rule to `firebase.json` headers.
