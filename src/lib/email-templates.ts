export interface ContactEmailPayload {
  name: string;
  company?: string;
  email: string;
  details: string;
  date?: string;
}

export interface QuoteEmailPayload {
  itemId?: string;
  itemName?: string;
  itemSpec?: string;
  name: string;
  company: string;
  email: string;
  phone?: string;
  message?: string;
  pageUrl?: string;
  fileName?: string;
  date?: string;
}

const BRAND_DARK = "#080B0F";
const BRAND_PANEL = "#0D1B2E";
const BRAND_AMBER = "#C87D00";
const BRAND_TEXT_MUTED = "#6A7A8A";
const BRAND_TEXT_LIGHT = "#C7D0DA";

function emailHeader(title: string, subtitle: string) {
  return `
    <div style="background-color: ${BRAND_DARK}; padding: 32px 24px; border-bottom: 2px solid ${BRAND_AMBER}; text-align: left;">
      <div style="font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: ${BRAND_AMBER}; margin-bottom: 8px;">
        MBH Solutions · Industrial Automation &amp; Engineering
      </div>
      <h1 style="margin: 0; font-size: 22px; font-weight: 600; color: #ffffff; line-height: 1.3;">
        ${title}
      </h1>
      <p style="margin: 6px 0 0 0; font-size: 14px; color: ${BRAND_TEXT_LIGHT};">
        ${subtitle}
      </p>
    </div>
  `;
}

function emailFooter() {
  return `
    <div style="background-color: #f8fafc; padding: 24px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; line-height: 1.6;">
      <div style="margin-bottom: 8px; font-weight: 600; color: ${BRAND_DARK};">
        MBH Solutions — Siemens Solution Partner
      </div>
      <div>Turnkey Syrup Rooms · Industrial Automation · PLC/SCADA Integration · Hygienic Fabrication</div>
      <div style="margin-top: 8px;">
        <strong>Email:</strong> <a href="mailto:sales@mbhsol.com" style="color: ${BRAND_AMBER}; text-decoration: none;">sales@mbhsol.com</a> | 
        <strong>WhatsApp:</strong> <a href="https://wa.me/923322007373" style="color: ${BRAND_AMBER}; text-decoration: none;">+92 332 2007373</a> | 
        <strong>Website:</strong> <a href="https://www.mbhsol.com" style="color: ${BRAND_AMBER}; text-decoration: none;">www.mbhsol.com</a>
      </div>
    </div>
  `;
}

/** 1. Notification sent to sales@mbhsol.com for general contact form submissions */
export function salesContactNotificationEmail(data: ContactEmailPayload) {
  const formattedDate = data.date || new Date().toUTCString();
  return `
    <!DOCTYPE html>
    <html>
      <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
      <body style="margin: 0; padding: 20px 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: 1px solid #cbd5e1;">
          ${emailHeader("New Website Lead Received", `Submitted on ${formattedDate}`)}
          
          <div style="padding: 28px 24px;">
            <div style="font-size: 12px; font-family: monospace; text-transform: uppercase; color: ${BRAND_AMBER}; letter-spacing: 1px; margin-bottom: 12px; font-weight: 600;">
              Enquiry Summary
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
              <tbody>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: ${BRAND_TEXT_MUTED}; width: 120px; font-weight: 500;">Client Name:</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${data.name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: ${BRAND_TEXT_MUTED}; font-weight: 500;">Company:</td>
                  <td style="padding: 10px 0; color: #0f172a;">${data.company || "Not specified"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: ${BRAND_TEXT_MUTED}; font-weight: 500;">Email:</td>
                  <td style="padding: 10px 0;"><a href="mailto:${data.email}" style="color: #0284c7; text-decoration: none; font-weight: 500;">${data.email}</a></td>
                </tr>
              </tbody>
            </table>

            <div style="font-size: 12px; font-family: monospace; text-transform: uppercase; color: ${BRAND_AMBER}; letter-spacing: 1px; margin-bottom: 8px; font-weight: 600;">
              Project Scope &amp; Details
            </div>
            <div style="background-color: #f8fafc; border-left: 3px solid ${BRAND_AMBER}; padding: 16px; font-size: 14px; line-height: 1.6; color: #1e293b; border-radius: 0 4px 4px 0; white-space: pre-wrap;">
${data.details}
            </div>

            <div style="margin-top: 28px; text-align: center;">
              <a href="mailto:${data.email}?subject=Re: MBH Solutions Enquiry" style="display: inline-block; background-color: ${BRAND_DARK}; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: 500; font-size: 14px;">
                Reply Directly to ${data.name} →
              </a>
            </div>
          </div>

          ${emailFooter()}
        </div>
      </body>
    </html>
  `;
}

/** 2. Auto-confirmation receipt sent to client when they submit the general contact form */
export function clientContactConfirmationEmail(data: ContactEmailPayload) {
  return `
    <!DOCTYPE html>
    <html>
      <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
      <body style="margin: 0; padding: 20px 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: 1px solid #cbd5e1;">
          ${emailHeader("We've Received Your Enquiry", "Thank you for reaching out to MBH Solutions")}
          
          <div style="padding: 28px 24px;">
            <p style="margin: 0 0 16px 0; font-size: 15px; color: #1e293b; line-height: 1.6;">
              Dear <strong>${data.name}</strong>,
            </p>
            <p style="margin: 0 0 16px 0; font-size: 15px; color: #334155; line-height: 1.6;">
              Thank you for contacting <strong>MBH Solutions</strong>. Our engineering and project leadership team has received your inquiry.
            </p>
            
            <div style="background-color: #fffbeb; border-left: 3px solid ${BRAND_AMBER}; padding: 14px 16px; margin: 20px 0; font-size: 14px; color: #92400e; line-height: 1.5; border-radius: 0 4px 4px 0;">
              <strong>Response Timeline:</strong> A senior technical engineer will review your project parameters and respond within <strong>one business day</strong>.
            </div>

            <div style="font-size: 12px; font-family: monospace; text-transform: uppercase; color: #64748b; letter-spacing: 1px; margin: 24px 0 8px 0;">
              Your Submitted Scope:
            </div>
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 14px; font-size: 13px; color: #475569; line-height: 1.6; border-radius: 4px; white-space: pre-wrap;">
${data.details}
            </div>

            <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0 0 8px 0; font-size: 14px; color: #1e293b; font-weight: 500;">
                Need urgent technical assistance?
              </p>
              <p style="margin: 0; font-size: 13px; color: #64748b; line-height: 1.6;">
                Reach our operations center directly via WhatsApp at 
                <a href="https://wa.me/923322007373" style="color: ${BRAND_AMBER}; text-decoration: none; font-weight: 600;">+92 332 2007373</a> 
                or call us during business hours.
              </p>
            </div>
          </div>

          ${emailFooter()}
        </div>
      </body>
    </html>
  `;
}

/** 3. Notification sent to sales@mbhsol.com for catalogue Quote Drawer / RFQ submissions */
export function salesQuoteNotificationEmail(data: QuoteEmailPayload) {
  const formattedDate = data.date || new Date().toUTCString();
  return `
    <!DOCTYPE html>
    <html>
      <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
      <body style="margin: 0; padding: 20px 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: 1px solid #cbd5e1;">
          ${emailHeader("Catalogue Quote / RFQ Request", `Received on ${formattedDate}`)}
          
          <div style="padding: 28px 24px;">
            ${
              data.itemId
                ? `
              <div style="background-color: ${BRAND_PANEL}; border: 1px solid #1E3352; border-radius: 4px; padding: 16px; margin-bottom: 24px;">
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                  <span style="font-size: 11px; font-family: monospace; background-color: ${BRAND_AMBER}; color: #ffffff; padding: 2px 8px; border-radius: 2px; font-weight: 600;">
                    ${data.itemId}
                  </span>
                  <span style="font-size: 12px; color: ${BRAND_TEXT_LIGHT}; font-family: monospace;">Line Item Target</span>
                </div>
                <div style="margin-top: 8px; font-size: 16px; font-weight: 600; color: #ffffff;">
                  ${data.itemName || "Industrial Module"}
                </div>
                ${data.itemSpec ? `<div style="margin-top: 4px; font-size: 12px; font-family: monospace; color: #9BAAB5;">Spec: ${data.itemSpec}</div>` : ""}
              </div>
            `
                : ""
            }

            <div style="font-size: 12px; font-family: monospace; text-transform: uppercase; color: ${BRAND_AMBER}; letter-spacing: 1px; margin-bottom: 12px; font-weight: 600;">
              Buyer &amp; Company Information
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
              <tbody>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: ${BRAND_TEXT_MUTED}; width: 130px; font-weight: 500;">Buyer Name:</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${data.name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: ${BRAND_TEXT_MUTED}; font-weight: 500;">Company:</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${data.company}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: ${BRAND_TEXT_MUTED}; font-weight: 500;">Email:</td>
                  <td style="padding: 10px 0;"><a href="mailto:${data.email}" style="color: #0284c7; text-decoration: none; font-weight: 500;">${data.email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: ${BRAND_TEXT_MUTED}; font-weight: 500;">Phone:</td>
                  <td style="padding: 10px 0; color: #0f172a;">${data.phone || "Not provided"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: ${BRAND_TEXT_MUTED}; font-weight: 500;">RFQ Attachment:</td>
                  <td style="padding: 10px 0; color: ${data.fileName ? "#16a34a" : "#64748b"}; font-weight: ${data.fileName ? "600" : "normal"};">
                    ${data.fileName ? `📎 ${data.fileName} (Attached to email)` : "No attachment uploaded"}
                  </td>
                </tr>
              </tbody>
            </table>

            <div style="font-size: 12px; font-family: monospace; text-transform: uppercase; color: ${BRAND_AMBER}; letter-spacing: 1px; margin-bottom: 8px; font-weight: 600;">
              Buyer Request &amp; Technical Requirements
            </div>
            <div style="background-color: #f8fafc; border-left: 3px solid ${BRAND_AMBER}; padding: 16px; font-size: 14px; line-height: 1.6; color: #1e293b; border-radius: 0 4px 4px 0; white-space: pre-wrap;">
${data.message || "Please prepare a technical proposal and indicative price based on this line item."}
            </div>

            <div style="margin-top: 28px; text-align: center;">
              <a href="mailto:${data.email}?subject=Re: [MBH Quote] ${data.itemId ? `${data.itemId} - ` : ""}${data.company}" style="display: inline-block; background-color: ${BRAND_DARK}; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: 500; font-size: 14px;">
                Reply with Proposal to ${data.name} →
              </a>
            </div>
          </div>

          ${emailFooter()}
        </div>
      </body>
    </html>
  `;
}

/** 4. Auto-confirmation receipt sent to buyer when submitting a catalogue quote request */
export function clientQuoteConfirmationEmail(data: QuoteEmailPayload) {
  return `
    <!DOCTYPE html>
    <html>
      <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
      <body style="margin: 0; padding: 20px 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: 1px solid #cbd5e1;">
          ${emailHeader("Quote Request Received", "MBH Solutions Engineering Proposal Desk")}
          
          <div style="padding: 28px 24px;">
            <p style="margin: 0 0 16px 0; font-size: 15px; color: #1e293b; line-height: 1.6;">
              Dear <strong>${data.name}</strong>,
            </p>
            <p style="margin: 0 0 16px 0; font-size: 15px; color: #334155; line-height: 1.6;">
              Thank you for requesting a technical proposal from <strong>MBH Solutions</strong> on behalf of <strong>${data.company}</strong>.
            </p>

            ${
              data.itemId
                ? `
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; padding: 14px 16px; margin: 18px 0;">
                <div style="font-size: 11px; font-family: monospace; color: ${BRAND_AMBER}; font-weight: 600; text-transform: uppercase;">
                  Line Item: ${data.itemId}
                </div>
                <div style="font-size: 15px; font-weight: 600; color: #0f172a; margin-top: 4px;">
                  ${data.itemName || "Industrial Module"}
                </div>
                ${data.itemSpec ? `<div style="font-size: 12px; color: #64748b; margin-top: 4px; font-family: monospace;">${data.itemSpec}</div>` : ""}
              </div>
            `
                : ""
            }
            
            <div style="background-color: #fffbeb; border-left: 3px solid ${BRAND_AMBER}; padding: 14px 16px; margin: 20px 0; font-size: 14px; color: #92400e; line-height: 1.5; border-radius: 0 4px 4px 0;">
              <strong>Next Step:</strong> Our process engineering team is preparing a scope draft and indicative price. You will receive a technical response within <strong>one business day</strong>.
            </div>

            ${
              data.fileName
                ? `
              <div style="font-size: 13px; color: #475569; margin: 16px 0;">
                <strong>Attached Spec Sheet:</strong> 📎 ${data.fileName} (successfully received)
              </div>
            `
                : ""
            }

            <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0 0 8px 0; font-size: 14px; color: #1e293b; font-weight: 500;">
                Direct Inquiries &amp; Scoping Calls
              </p>
              <p style="margin: 0; font-size: 13px; color: #64748b; line-height: 1.6;">
                If you have additional drawings or require an immediate scoping call, reply directly to this email or connect with us on WhatsApp at 
                <a href="https://wa.me/923322007373" style="color: ${BRAND_AMBER}; text-decoration: none; font-weight: 600;">+92 332 2007373</a>.
              </p>
            </div>
          </div>

          ${emailFooter()}
        </div>
      </body>
    </html>
  `;
}
