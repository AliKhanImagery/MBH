import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

export const resend = apiKey ? new Resend(apiKey) : null;

export const RECEIVER_EMAIL =
  process.env.CONTACT_RECEIVER_EMAIL || "sales@mbhsol.com";

export const SENDER_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "MBH Solutions <onboarding@resend.dev>";

export function isResendConfigured(): boolean {
  return Boolean(apiKey && apiKey.startsWith("re_"));
}

export const LEAD_FALLBACK_MESSAGE =
  "We could not deliver your enquiry automatically. Please email sales@mbhsol.com or WhatsApp +92 332 2007373 and we will respond within one business day.";
