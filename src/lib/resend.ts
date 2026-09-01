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
