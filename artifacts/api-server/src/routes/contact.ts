import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";
import { z } from "zod";

const router: IRouter = Router();

const ContactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  eventDate: z.string().min(1),
  eventLocation: z.string().min(2),
  servicesRequired: z.string().min(10),
});

function createTransport() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = parseInt(process.env.SMTP_PORT ?? "587", 10);

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
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

  const { fullName, email, eventDate, eventLocation, servicesRequired } = parsed.data;
  const toAddress = process.env.CONTACT_EMAIL ?? "info@emtservices.uk";

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e293b; border-bottom: 2px solid #1e293b; padding-bottom: 8px;">
        New Enquiry — EMT Services Website
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 160px;">Name</td>
          <td style="padding: 8px 0; color: #1e293b;">${fullName}</td>
        </tr>
        <tr style="background: #f8fafc;">
          <td style="padding: 8px 4px; font-weight: bold; color: #475569;">Reply-To Email</td>
          <td style="padding: 8px 4px; color: #1e293b;">
            <a href="mailto:${email}" style="color: #1d4ed8;">${email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #475569;">Event Date</td>
          <td style="padding: 8px 0; color: #1e293b;">${eventDate}</td>
        </tr>
        <tr style="background: #f8fafc;">
          <td style="padding: 8px 4px; font-weight: bold; color: #475569;">Event Location</td>
          <td style="padding: 8px 4px; color: #1e293b;">${eventLocation}</td>
        </tr>
      </table>
      <div style="margin-top: 20px;">
        <p style="font-weight: bold; color: #475569; margin-bottom: 8px;">Services Required / Details</p>
        <div style="background: #f8fafc; border-left: 4px solid #1e293b; padding: 12px 16px; color: #1e293b; white-space: pre-wrap;">${servicesRequired}</div>
      </div>
      <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">
        Sent from the EMT Services website contact form.
      </p>
    </div>
  `;

  const textBody = `
New Enquiry — EMT Services Website
===================================
Name:           ${fullName}
Reply-To Email: ${email}
Event Date:     ${eventDate}
Event Location: ${eventLocation}

Services Required / Details:
${servicesRequired}
  `.trim();

  const transport = createTransport();

  if (!transport) {
    req.log.warn("SMTP not configured — logging enquiry to console");
    req.log.info({ enquiry: parsed.data }, "Contact form submission (no SMTP)");
    res.json({ success: true, message: "Enquiry received." });
    return;
  }

  try {
    await transport.sendMail({
      from: `"EMT Services Website" <${process.env.SMTP_USER}>`,
      to: toAddress,
      replyTo: email,
      subject: `New Enquiry: ${fullName} — ${eventLocation} (${eventDate})`,
      text: textBody,
      html: htmlBody,
    });

    req.log.info({ to: toAddress, from: email }, "Contact enquiry email sent");
    res.json({ success: true, message: "Enquiry received." });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email");
    res.status(500).json({ error: "We could not send your enquiry at this time. Please email us directly at info@emtservices.uk" });
  }
});

export default router;
