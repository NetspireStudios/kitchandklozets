// functions/index.js
// HTTPS Cloud Function (Gen 2) that receives ContactForm submissions from
// the static site, writes a record to Firestore, and relays the lead via
// Resend to sales@kitchandklozets.com.
//
// Deploy:   firebase deploy --only functions
// Endpoint after deploy: https://<region>-<project>.cloudfunctions.net/submitContact
// (Firebase Hosting can also rewrite /api/contact -> this function; see firebase.json.)

const { onRequest }    = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const { logger }       = require("firebase-functions");
const { initializeApp, getApps } = require("firebase-admin/app");
const { getFirestore }           = require("firebase-admin/firestore");
const { Resend }                 = require("resend");

if (!getApps().length) initializeApp();
const db = getFirestore();

const RESEND_API_KEY = defineSecret("RESEND_API_KEY");

// Allowed origins for browser CORS. Add staging URLs here if needed.
const ALLOWED_ORIGINS = [
  "https://kitchandklozets.com",
  "https://www.kitchandklozets.com",
  "https://kitchandklozets.web.app",
  "https://kitchandklozets.firebaseapp.com",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

exports.submitContact = onRequest(
  {
    region: "us-east1",            // adjust to your project's region
    secrets: [RESEND_API_KEY],
    cors: ALLOWED_ORIGINS,
    maxInstances: 10,              // small business: no need to autoscale wide
  },
  async (req, res) => {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    // Body comes pre-parsed when content-type is JSON. Be defensive.
    const body = (typeof req.body === "object" && req.body) || {};
    const name     = String(body.name     || "").trim().slice(0, 120);
    const email    = String(body.email    || "").trim().slice(0, 200);
    const phone    = String(body.phone    || "").trim().slice(0, 40);
    const message  = String(body.message  || "").trim().slice(0, 4000);
    const product  = String(body.product  || "").trim().slice(0, 200);
    const category = String(body.category || "").trim().slice(0, 200);

    if (!name || !email || !message) {
      return res.status(400).json({ error: "name, email, and message are required" });
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ error: "invalid email" });
    }

    // Cheap honeypot: if a hidden field "company" is non-empty, drop silently.
    if (body.company) {
      logger.warn("Honeypot tripped; ignoring submission", { email });
      return res.json({ ok: true });
    }

    const lead = {
      name, email, phone, message, product, category,
      createdAt: new Date(),
      userAgent: String(req.get("user-agent") || "").slice(0, 400),
      ip:        String(req.headers["x-forwarded-for"] || req.ip || "").split(",")[0].trim(),
    };

    let docId = null;
    try {
      const ref = await db.collection("contacts").add(lead);
      docId = ref.id;
    } catch (e) {
      logger.error("Firestore write failed", e);
      // Don't fail the whole request just because the archive write broke;
      // the email is the customer-facing part. Continue.
    }

    try {
      const resend = new Resend(RESEND_API_KEY.value());
      const subject = product
        ? `New inquiry: ${product}`
        : `New inquiry${category ? ": " + category : ""}`;

      const text = [
        `New lead via kitchandklozets.com`,
        ``,
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Phone:   ${phone || "—"}`,
        `Product: ${product || "—"}`,
        `Category:${category || "—"}`,
        ``,
        `Message:`,
        message,
        ``,
        `---`,
        `Submitted: ${new Date().toISOString()}`,
        docId ? `Firestore doc: contacts/${docId}` : `Firestore write failed (see logs)`,
      ].join("\n");

      const { data, error } = await resend.emails.send({
        from:     "Kitch & Klozets <sales@kitchandklozets.com>",
        to:       ["sales@kitchandklozets.com"],
        replyTo:  email,
        subject,
        text,
      });
      if (error) {
        logger.error("Resend returned error", { error, lead: { email, product, category } });
        return res.status(502).json({ error: "Email service failed; please try again or email sales@kitchandklozets.com directly." });
      }
      logger.info("Resend send ok", { id: data && data.id, to: "sales@kitchandklozets.com" });
    } catch (e) {
      logger.error("Resend send threw", e);
      return res.status(502).json({ error: "Email service failed; please try again or email sales@kitchandklozets.com directly." });
    }

    return res.json({ ok: true, id: docId });
  }
);
