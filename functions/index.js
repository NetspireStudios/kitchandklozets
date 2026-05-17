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
        `Phone:   ${phone || "-"}`,
        `Product: ${product || "-"}`,
        `Category:${category || "-"}`,
        ``,
        `Message:`,
        message,
        ``,
        `---`,
        `Submitted: ${new Date().toISOString()}`,
        docId ? `Firestore doc: contacts/${docId}` : `Firestore write failed (see logs)`,
      ].join("\n");

      const html = buildLeadHtml({
        name, email, phone, product, category, message, docId,
      });

      const { data, error } = await resend.emails.send({
        from:     "Kitch & Klozets <sales@kitchandklozets.com>",
        to:       ["sales@kitchandklozets.com"],
        replyTo:  email,
        subject,
        text,
        html,
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

// Escape user-supplied strings before embedding in HTML. Email clients are
// way more permissive than browsers but we still want to keep a customer's
// message from breaking the layout (or worse).
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Inbox-safe HTML using a table-based layout (Outlook/Gmail clip <style>
// blocks and ignore most modern CSS, so everything is inlined). Brand colors
// match the site: walnut #3B2A1E, clay #B85A3F, cream #FAEEDF.
function buildLeadHtml({ name, email, phone, product, category, message, docId }) {
  const submittedAt = new Date().toLocaleString("en-CA", {
    timeZone: "America/Toronto",
    dateStyle: "medium",
    timeStyle: "short",
  });
  const safeMessage = esc(message).replace(/\n/g, "<br>");
  const row = (label, value, isLink) => {
    const display = value && String(value).trim() ? esc(value) : "<span style=\"color:#9b8e80;\">-</span>";
    const cell = isLink && value
      ? `<a href="${esc(isLink)}" style="color:#B85A3F;text-decoration:none;font-weight:600;">${display}</a>`
      : display;
    return `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #ece3d4;width:110px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#6b5b4c;font-weight:600;vertical-align:top;">${esc(label)}</td>
        <td style="padding:10px 0;border-bottom:1px solid #ece3d4;font-size:15px;color:#2a1f15;vertical-align:top;">${cell}</td>
      </tr>`;
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>New inquiry - Kitch &amp; Klozets</title>
</head>
<body style="margin:0;padding:0;background:#f4ead8;font-family:'Helvetica Neue',Arial,sans-serif;color:#2a1f15;-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;color:transparent;opacity:0;font-size:1px;line-height:1px;">
    New inquiry from ${esc(name)} - ${esc(product || category || "general")}
  </div>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f4ead8;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 4px 18px rgba(42,31,21,0.08);">

          <tr>
            <td style="background:#3B2A1E;padding:28px 32px;color:#FAEEDF;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="font-size:13px;letter-spacing:0.18em;text-transform:uppercase;color:#B85A3F;font-weight:700;">New inquiry</td>
                  <td align="right" style="font-size:12px;color:rgba(250,238,223,0.65);">${esc(submittedAt)} ET</td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top:8px;font-family:Georgia,'Times New Roman',serif;font-size:26px;line-height:1.25;color:#FAEEDF;font-weight:500;">
                    ${esc(name)} wrote in${product ? ` about <span style="color:#E8B89A;">${esc(product)}</span>` : ""}.
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 32px 8px;">
              <div style="font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#B85A3F;font-weight:700;margin-bottom:6px;">Message</div>
              <div style="font-size:15.5px;line-height:1.65;color:#2a1f15;background:#FAEEDF;border-left:3px solid #B85A3F;padding:18px 20px;border-radius:6px;">
                ${safeMessage || "<em style=\"color:#9b8e80;\">(no message body)</em>"}
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 32px 8px;">
              <div style="font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#B85A3F;font-weight:700;margin-bottom:6px;">Contact</div>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                ${row("Name", name)}
                ${row("Email", email, `mailto:${email}`)}
                ${row("Phone", phone, phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : null)}
                ${row("Product", product)}
                ${row("Category", category)}
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 32px 28px;" align="left">
              <a href="mailto:${esc(email)}?subject=${encodeURIComponent("Re: " + (product || category || "your inquiry"))}"
                 style="display:inline-block;background:#B85A3F;color:#FAEEDF;text-decoration:none;padding:13px 22px;border-radius:8px;font-size:14px;font-weight:600;letter-spacing:0.01em;">
                Reply to ${esc(name.split(" ")[0] || "customer")} -&gt;
              </a>
            </td>
          </tr>

          <tr>
            <td style="background:#FAEEDF;padding:16px 32px;border-top:1px solid #ece3d4;font-size:11px;color:#6b5b4c;letter-spacing:0.04em;">
              Submitted via the contact form on
              <a href="https://kitchandklozets.com" style="color:#B85A3F;text-decoration:none;">kitchandklozets.com</a>.
              ${docId ? `Archived as <code style="background:#fff;padding:2px 6px;border-radius:4px;color:#3B2A1E;font-family:Menlo,Consolas,monospace;">contacts/${esc(docId)}</code>.` : "Firestore archive write failed - check function logs."}
            </td>
          </tr>

        </table>
        <div style="font-size:11px;color:#7a6b5c;margin-top:14px;text-align:center;">
          Kitch &amp; Klozets - Showrooms in Sudbury &amp; Toronto - Ships from GTA
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
