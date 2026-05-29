import { Router, type IRouter } from "express";
// Gmail integration via Replit connector (google-mail).
// Sends contact-form enquiries straight to the company inbox.
import { ReplitConnectors } from "@replit/connectors-sdk";
import { z } from "zod";

const router: IRouter = Router();

const connectors = new ReplitConnectors();

// Reject CR/LF to prevent email header injection in fields used in the Subject.
const noNewlines = (v: string) => !/[\r\n]/.test(v);

const ContactSchema = z.object({
  fullName: z.string().min(2).max(120).refine(noNewlines, "Invalid characters"),
  email: z.string().email().max(254),
  phone: z.string().max(40).refine(noNewlines, "Invalid characters").optional(),
  organisation: z.string().max(160).refine(noNewlines, "Invalid characters").optional(),
  eventDate: z.string().min(1).max(60).refine(noNewlines, "Invalid characters"),
  eventLocation: z.string().min(2).max(160).refine(noNewlines, "Invalid characters"),
  expectedAttendance: z.string().max(60).refine(noNewlines, "Invalid characters").optional(),
  servicesRequired: z.string().min(10).max(5000),
  preferredContact: z.string().max(300).optional(),
  recaptchaToken: z.string().max(4000).optional(),
});

// Minimum reCAPTCHA v3 score (0.0 = bot, 1.0 = human) to accept a submission.
const RECAPTCHA_MIN_SCORE = 0.5;

interface RecaptchaVerifyResult {
  ok: boolean;
  reason?: string;
}

// Verifies a reCAPTCHA v3 token with Google. When no secret is configured,
// verification is skipped so the form keeps working (graceful degradation).
async function verifyRecaptcha(
  token: string | undefined,
  expectedAction: string,
): Promise<RecaptchaVerifyResult> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return { ok: true };

  if (!token) return { ok: false, reason: "missing-token" };

  try {
    const params = new URLSearchParams({ secret, response: token });
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    if (!response.ok) return { ok: false, reason: `http-${response.status}` };

    const result = (await response.json()) as {
      success: boolean;
      score?: number;
      action?: string;
      "error-codes"?: string[];
    };

    if (!result.success) {
      return { ok: false, reason: (result["error-codes"] ?? ["failed"]).join(",") };
    }
    // Bind the token to the action it was generated for (prevents token reuse
    // from other reCAPTCHA-protected actions on the same site key).
    if (result.action && result.action !== expectedAction) {
      return { ok: false, reason: `action-mismatch-${result.action}` };
    }
    if (typeof result.score === "number" && result.score < RECAPTCHA_MIN_SCORE) {
      return { ok: false, reason: `low-score-${result.score}` };
    }
    return { ok: true };
  } catch {
    return { ok: false, reason: "verify-error" };
  }
}

function encodeHeader(value: string): string {
  // RFC 2047 encoded-word for any non-ASCII characters in headers.
  if (/^[\x00-\x7F]*$/.test(value)) return value;
  return `=?UTF-8?B?${Buffer.from(value, "utf-8").toString("base64")}?=`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildRawMessage(opts: {
  to: string;
  from: string;
  replyTo: string;
  subject: string;
  html: string;
  text: string;
}): string {
  const boundary = `b_${Date.now().toString(36)}_${Math.random().toString(36).slice(2)}`;
  const lines = [
    `From: ${opts.from}`,
    `To: ${opts.to}`,
    `Reply-To: ${opts.replyTo}`,
    `Subject: ${encodeHeader(opts.subject)}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "",
    Buffer.from(opts.text, "utf-8").toString("base64"),
    "",
    `--${boundary}`,
    "Content-Type: text/html; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "",
    Buffer.from(opts.html, "utf-8").toString("base64"),
    "",
    `--${boundary}--`,
    "",
  ];
  return Buffer.from(lines.join("\r\n"), "utf-8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

router.post("/contact", async (req, res) => {
  // Honeypot: bots fill this hidden field, humans don't
  if (req.body?.website) {
    req.log.warn("Honeypot triggered — likely spam submission");
    res.json({ success: true, message: "Enquiry received." });
    return;
  }

  const parsed = ContactSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: "Invalid submission. Please check all fields." });
    return;
  }

  const {
    fullName,
    email,
    phone,
    organisation,
    eventDate,
    eventLocation,
    expectedAttendance,
    servicesRequired,
    preferredContact,
    recaptchaToken,
  } = parsed.data;

  // Invisible reCAPTCHA v3 check (skipped automatically when not configured).
  const captcha = await verifyRecaptcha(recaptchaToken, "contact_submit");
  if (!captcha.ok) {
    req.log.warn({ reason: captcha.reason }, "reCAPTCHA verification failed — rejecting submission");
    res.status(400).json({
      error: "We could not verify your submission. Please refresh the page and try again.",
    });
    return;
  }

  const toAddress = process.env.CONTACT_EMAIL ?? "info@emtservices.uk";

  // Escape all user-supplied content before embedding in the HTML email body.
  const notProvided = "—";
  const safe = {
    fullName: escapeHtml(fullName),
    email: escapeHtml(email),
    phone: phone ? escapeHtml(phone) : notProvided,
    organisation: organisation ? escapeHtml(organisation) : notProvided,
    eventDate: escapeHtml(eventDate),
    eventLocation: escapeHtml(eventLocation),
    expectedAttendance: expectedAttendance ? escapeHtml(expectedAttendance) : notProvided,
    servicesRequired: escapeHtml(servicesRequired),
    preferredContact: preferredContact ? escapeHtml(preferredContact) : notProvided,
  };

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e293b; border-bottom: 2px solid #1e293b; padding-bottom: 8px;">
        New Enquiry — EMT Services Website
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 180px;">Name</td>
          <td style="padding: 8px 0; color: #1e293b;">${safe.fullName}</td>
        </tr>
        <tr style="background: #f8fafc;">
          <td style="padding: 8px 4px; font-weight: bold; color: #475569;">Reply-To Email</td>
          <td style="padding: 8px 4px; color: #1e293b;">
            <a href="mailto:${safe.email}" style="color: #1d4ed8;">${safe.email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone</td>
          <td style="padding: 8px 0; color: #1e293b;">${safe.phone}</td>
        </tr>
        <tr style="background: #f8fafc;">
          <td style="padding: 8px 4px; font-weight: bold; color: #475569;">Organisation</td>
          <td style="padding: 8px 4px; color: #1e293b;">${safe.organisation}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #475569;">Event Date</td>
          <td style="padding: 8px 0; color: #1e293b;">${safe.eventDate}</td>
        </tr>
        <tr style="background: #f8fafc;">
          <td style="padding: 8px 4px; font-weight: bold; color: #475569;">Event Location</td>
          <td style="padding: 8px 4px; color: #1e293b;">${safe.eventLocation}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #475569;">Expected Attendance</td>
          <td style="padding: 8px 0; color: #1e293b;">${safe.expectedAttendance}</td>
        </tr>
        <tr style="background: #f8fafc;">
          <td style="padding: 8px 4px; font-weight: bold; color: #475569;">Preferred Contact</td>
          <td style="padding: 8px 4px; color: #1e293b;">${safe.preferredContact}</td>
        </tr>
      </table>
      <div style="margin-top: 20px;">
        <p style="font-weight: bold; color: #475569; margin-bottom: 8px;">Services Required / Details</p>
        <div style="background: #f8fafc; border-left: 4px solid #1e293b; padding: 12px 16px; color: #1e293b; white-space: pre-wrap;">${safe.servicesRequired}</div>
      </div>
      <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">
        Sent from the EMT Services website contact form.
      </p>
    </div>
  `;

  const textBody = `
New Enquiry — EMT Services Website
===================================
Name:                ${fullName}
Reply-To Email:      ${email}
Phone:               ${phone ?? notProvided}
Organisation:        ${organisation ?? notProvided}
Event Date:          ${eventDate}
Event Location:      ${eventLocation}
Expected Attendance: ${expectedAttendance ?? notProvided}
Preferred Contact:   ${preferredContact ?? notProvided}

Services Required / Details:
${servicesRequired}
  `.trim();

  const raw = buildRawMessage({
    to: toAddress,
    from: toAddress,
    replyTo: email,
    subject: `New Enquiry: ${fullName} — ${eventLocation} (${eventDate})`,
    html: htmlBody,
    text: textBody,
  });

  try {
    const response = await connectors.proxy(
      "google-mail",
      "/gmail/v1/users/me/messages/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ raw }),
      },
    );

    if (!response.ok) {
      const detail = await response.text();
      req.log.error({ status: response.status, detail }, "Gmail send failed");
      res.status(502).json({
        error:
          "We could not send your enquiry at this time. Please email us directly at info@emtservices.uk",
      });
      return;
    }

    req.log.info({ to: toAddress, from: email }, "Contact enquiry email sent via Gmail");
    res.json({ success: true, message: "Enquiry received." });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email");
    res.status(500).json({
      error:
        "We could not send your enquiry at this time. Please email us directly at info@emtservices.uk",
    });
  }
});

export default router;
