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
const BRAND_BORDER = "#1E3352";

function generateTicketId(): string {
  const randomHex = Math.floor(100000 + Math.random() * 900000);
  return `MBH-${randomHex}`;
}

function emailHeader(title: string, subtitle: string, ticketId?: string) {
  const ticket = ticketId || generateTicketId();
  return `
    <div style="background-color: ${BRAND_DARK}; padding: 36px 28px; border-bottom: 3px solid ${BRAND_AMBER}; text-align: left;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td>
            <div style="font-family: 'Courier New', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: ${BRAND_AMBER}; font-weight: 700; margin-bottom: 6px;">
              MBH SOLUTIONS · INDUSTRIAL AUTOMATION &amp; ENGINEERING
            </div>
            <div style="font-size: 11px; font-family: monospace; color: #94a3b8; letter-spacing: 1px;">
              SIEMENS SOLUTION PARTNER · HYGIENIC PROCESS SYSTEMS
            </div>
          </td>
          <td style="text-align: right; vertical-align: top;">
            <span style="display: inline-block; background-color: rgba(200, 125, 0, 0.15); border: 1px solid ${BRAND_AMBER}; color: #ffffff; padding: 4px 10px; font-family: monospace; font-size: 11px; border-radius: 3px; font-weight: 600;">
              REF: ${ticket}
            </span>
          </td>
        </tr>
      </table>
      
      <div style="margin-top: 24px;">
        <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff; line-height: 1.25; letter-spacing: -0.5px;">
          ${title}
        </h1>
        <p style="margin: 8px 0 0 0; font-size: 14px; color: ${BRAND_TEXT_LIGHT}; line-height: 1.5;">
          ${subtitle}
        </p>
      </div>
    </div>
  `;
}

function processRoadmapSection() {
  return `
    <div style="margin: 32px 0; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 24px;">
      <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: ${BRAND_AMBER}; letter-spacing: 1.5px; font-weight: 700; margin-bottom: 16px;">
        WHAT HAPPENS NEXT · PROPOSAL TIMELINE
      </div>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="width: 33%; vertical-align: top; padding-right: 12px;">
            <div style="display: inline-block; background-color: ${BRAND_DARK}; color: #ffffff; width: 22px; height: 22px; line-height: 22px; text-align: center; border-radius: 50%; font-size: 11px; font-weight: 700; margin-bottom: 8px;">1</div>
            <div style="font-size: 13px; font-weight: 600; color: #0f172a; margin-bottom: 4px;">Engineering Review</div>
            <div style="font-size: 12px; color: #64748b; line-height: 1.4;">Parameters &amp; line capacity analyzed by our process team.</div>
          </td>
          <td style="width: 33%; vertical-align: top; padding: 0 6px;">
            <div style="display: inline-block; background-color: ${BRAND_AMBER}; color: #ffffff; width: 22px; height: 22px; line-height: 22px; text-align: center; border-radius: 50%; font-size: 11px; font-weight: 700; margin-bottom: 8px;">2</div>
            <div style="font-size: 13px; font-weight: 600; color: #0f172a; margin-bottom: 4px;">Technical Proposal</div>
            <div style="font-size: 12px; color: #64748b; line-height: 1.4;">Indicative cost, equipment specs &amp; layout draft in <strong>1 business day</strong>.</div>
          </td>
          <td style="width: 33%; vertical-align: top; padding-left: 12px;">
            <div style="display: inline-block; background-color: ${BRAND_DARK}; color: #ffffff; width: 22px; height: 22px; line-height: 22px; text-align: center; border-radius: 50%; font-size: 11px; font-weight: 700; margin-bottom: 8px;">3</div>
            <div style="font-size: 13px; font-weight: 600; color: #0f172a; margin-bottom: 4px;">Scoping Session</div>
            <div style="font-size: 12px; color: #64748b; line-height: 1.4;">Optional 30-min technical call with our lead automation engineer.</div>
          </td>
        </tr>
      </table>
    </div>
  `;
}

function resourceHubSection() {
  return `
    <div style="margin: 36px 0 24px 0; border-top: 1px solid #e2e8f0; padding-top: 28px;">
      <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: ${BRAND_AMBER}; letter-spacing: 1.5px; font-weight: 700; margin-bottom: 6px;">
        TECHNICAL RESOURCES &amp; CASE ARCHITECTURE
      </div>
      <p style="margin: 0 0 18px 0; font-size: 13px; color: #64748b;">
        Explore our engineering modules, system architectures, and commissioned line references while we prepare your scope:
      </p>

      <table style="width: 100%; border-collapse: separate; border-spacing: 0 10px;">
        <tr>
          <td style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 3px solid ${BRAND_AMBER}; padding: 14px 16px; border-radius: 0 4px 4px 0;">
            <table style="width: 100%;">
              <tr>
                <td>
                  <div style="font-size: 14px; font-weight: 600; color: #0f172a;">
                    Turnkey Syrup Rooms &amp; Process Modules
                  </div>
                  <div style="font-size: 12px; color: #64748b; margin-top: 2px;">
                    Raw material intake, inline Brix blending, CIP recovery, and hygienic piping.
                  </div>
                </td>
                <td style="text-align: right; width: 100px;">
                  <a href="https://www.mbhsol.com/solutions#beverage-process" style="display: inline-block; font-size: 12px; color: ${BRAND_AMBER}; font-weight: 600; text-decoration: none;">
                    View Scope →
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 3px solid #0284c7; padding: 14px 16px; border-radius: 0 4px 4px 0;">
            <table style="width: 100%;">
              <tr>
                <td>
                  <div style="font-size: 14px; font-weight: 600; color: #0f172a;">
                    Industrial Automation, SCADA &amp; Control Panels
                  </div>
                  <div style="font-size: 12px; color: #64748b; margin-top: 2px;">
                    Siemens S7-1500 / TIA Portal programming, WinCC SCADA dashboards, and FAT-certified panels.
                  </div>
                </td>
                <td style="text-align: right; width: 100px;">
                  <a href="https://www.mbhsol.com/solutions#automation" style="display: inline-block; font-size: 12px; color: #0284c7; font-weight: 600; text-decoration: none;">
                    View Specs →
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 3px solid #16a34a; padding: 14px 16px; border-radius: 0 4px 4px 0;">
            <table style="width: 100%;">
              <tr>
                <td>
                  <div style="font-size: 14px; font-weight: 600; color: #0f172a;">
                    Featured Case Study: Enterprise CIP &amp; Recovery
                  </div>
                  <div style="font-size: 12px; color: #64748b; margin-top: 2px;">
                    Commissioned systems across Coca-Cola Tehran, Pepsi Northern, and Fauji Foods.
                  </div>
                </td>
                <td style="text-align: right; width: 100px;">
                  <a href="https://www.mbhsol.com/references/beverage-cip-recovery-modernization" style="display: inline-block; font-size: 12px; color: #16a34a; font-weight: 600; text-decoration: none;">
                    Read Study →
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 3px solid ${BRAND_DARK}; padding: 14px 16px; border-radius: 0 4px 4px 0;">
            <table style="width: 100%;">
              <tr>
                <td>
                  <div style="font-size: 14px; font-weight: 600; color: #0f172a;">
                    Equipment &amp; Spares Catalogue (31 Line Items)
                  </div>
                  <div style="font-size: 12px; color: #64748b; margin-top: 2px;">
                    Sanitary valves, pumps, flowmeters, and standardized automation panels with indicative lead times.
                  </div>
                </td>
                <td style="text-align: right; width: 100px;">
                  <a href="https://www.mbhsol.com/catalogue" style="display: inline-block; font-size: 12px; color: ${BRAND_DARK}; font-weight: 600; text-decoration: none;">
                    Catalogue →
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `;
}

function directActionsSection() {
  return `
    <div style="margin: 28px 0; background-color: ${BRAND_PANEL}; border: 1px solid ${BRAND_BORDER}; border-radius: 6px; padding: 22px; text-align: center;">
      <div style="font-size: 15px; font-weight: 600; color: #ffffff; margin-bottom: 6px;">
        Need an Immediate Scoping Call or Drawing Review?
      </div>
      <p style="margin: 0 0 16px 0; font-size: 13px; color: ${BRAND_TEXT_LIGHT};">
        Connect directly with our senior process automation engineering desk:
      </p>

      <table style="margin: 0 auto; border-collapse: separate; border-spacing: 10px 0;">
        <tr>
          <td>
            <a href="https://wa.me/923322007373" style="display: inline-block; background-color: #25D366; color: #ffffff; padding: 10px 18px; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 13px;">
              💬 Chat on WhatsApp (+92 332 2007373)
            </a>
          </td>
          <td>
            <a href="tel:+923322007373" style="display: inline-block; background-color: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.25); color: #ffffff; padding: 10px 18px; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 13px;">
              📞 Call Operations Desk
            </a>
          </td>
        </tr>
      </table>
    </div>
  `;
}

function emailFooter() {
  return `
    <div style="background-color: #f8fafc; padding: 28px 24px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; line-height: 1.6;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
        <tr>
          <td>
            <div style="font-weight: 700; color: ${BRAND_DARK}; font-size: 13px;">
              MBH Solutions — Process &amp; Automation Engineering
            </div>
            <div style="color: #64748b; font-size: 12px; margin-top: 2px;">
              Siemens Solution Partner · Hygienic Process Lines · Industrial SCADA
            </div>
            <div style="color: #94a3b8; font-size: 11px; margin-top: 4px;">
              Head Office: Industrial Area, Lahore, Pakistan · Worldwide Project Delivery
            </div>
          </td>
          <td style="text-align: right; vertical-align: top;">
            <div style="font-size: 11px; font-family: monospace; color: #94a3b8;">
              SECURE B2B DISPATCH
            </div>
          </td>
        </tr>
      </table>

      <div style="border-top: 1px solid #e2e8f0; padding-top: 12px; display: flex; justify-content: space-between; font-size: 11px; color: #94a3b8;">
        <div>
          <strong>Direct Sales:</strong> <a href="mailto:sales@mbhsol.com" style="color: ${BRAND_AMBER}; text-decoration: none;">sales@mbhsol.com</a> &nbsp;|&nbsp; 
          <strong>Website:</strong> <a href="https://www.mbhsol.com" style="color: ${BRAND_AMBER}; text-decoration: none;">www.mbhsol.com</a>
        </div>
      </div>
    </div>
  `;
}

/** 1. Notification sent to sales@mbhsol.com for general contact form submissions */
export function salesContactNotificationEmail(data: ContactEmailPayload) {
  const formattedDate = data.date || new Date().toUTCString();
  const ticketId = generateTicketId();
  return `
    <!DOCTYPE html>
    <html>
      <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
      <body style="margin: 0; padding: 24px 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <div style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: 1px solid #cbd5e1;">
          ${emailHeader("New Website Lead Received", `Submitted on ${formattedDate}`, ticketId)}
          
          <div style="padding: 28px 24px;">
            <div style="font-size: 12px; font-family: monospace; text-transform: uppercase; color: ${BRAND_AMBER}; letter-spacing: 1px; margin-bottom: 12px; font-weight: 700;">
              Lead &amp; Company Summary
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
              <tbody>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: ${BRAND_TEXT_MUTED}; width: 130px; font-weight: 500;">Client Name:</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 700;">${data.name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: ${BRAND_TEXT_MUTED}; font-weight: 500;">Company:</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${data.company || "Not specified"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: ${BRAND_TEXT_MUTED}; font-weight: 500;">Email:</td>
                  <td style="padding: 10px 0;"><a href="mailto:${data.email}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${data.email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: ${BRAND_TEXT_MUTED}; font-weight: 500;">Reference Ticket:</td>
                  <td style="padding: 10px 0; font-family: monospace; font-weight: 700; color: ${BRAND_AMBER};">${ticketId}</td>
                </tr>
              </tbody>
            </table>

            <div style="font-size: 12px; font-family: monospace; text-transform: uppercase; color: ${BRAND_AMBER}; letter-spacing: 1px; margin-bottom: 8px; font-weight: 700;">
              Project Scope &amp; Facility Parameters
            </div>
            <div style="background-color: #f8fafc; border-left: 3px solid ${BRAND_AMBER}; padding: 18px; font-size: 14px; line-height: 1.65; color: #1e293b; border-radius: 0 4px 4px 0; white-space: pre-wrap;">
${data.details}
            </div>

            <div style="margin-top: 28px; text-align: center;">
              <a href="mailto:${data.email}?subject=Re: [MBH ${ticketId}] Project Consultation with MBH Solutions" style="display: inline-block; background-color: ${BRAND_DARK}; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 14px;">
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
  const ticketId = generateTicketId();
  return `
    <!DOCTYPE html>
    <html>
      <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
      <body style="margin: 0; padding: 24px 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <div style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: 1px solid #cbd5e1;">
          ${emailHeader("We've Received Your Project Parameters", "MBH Solutions Engineering &amp; Project Delivery Desk", ticketId)}
          
          <div style="padding: 32px 28px;">
            <p style="margin: 0 0 16px 0; font-size: 16px; color: #0f172a; line-height: 1.6;">
              Dear <strong>${data.name}</strong>,
            </p>
            <p style="margin: 0 0 18px 0; font-size: 15px; color: #334155; line-height: 1.65;">
              Thank you for contacting <strong>MBH Solutions</strong>${data.company ? ` on behalf of <strong>${data.company}</strong>` : ""}. Your project requirements have been registered under engineering reference <strong style="color: ${BRAND_AMBER}; font-family: monospace;">${ticketId}</strong>.
            </p>
            
            <div style="background-color: #fffbeb; border-left: 4px solid ${BRAND_AMBER}; padding: 16px 18px; margin: 24px 0; font-size: 14px; color: #92400e; line-height: 1.6; border-radius: 0 4px 4px 0;">
              <strong>Response Commitment:</strong> A senior process automation engineer is reviewing your parameters. You will receive an initial technical assessment and scope response within <strong>one business day</strong>.
            </div>

            <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #64748b; letter-spacing: 1.5px; font-weight: 700; margin: 28px 0 8px 0;">
              YOUR SUBMITTED PROJECT SCOPE:
            </div>
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; font-size: 13.5px; color: #334155; line-height: 1.65; border-radius: 4px; white-space: pre-wrap;">
${data.details}
            </div>

            <!-- What Happens Next Roadmap -->
            ${processRoadmapSection()}

            <!-- Direct Actions (WhatsApp & Phone) -->
            ${directActionsSection()}

            <!-- Rich Clickable Resource Hub -->
            ${resourceHubSection()}
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
  const ticketId = generateTicketId();
  return `
    <!DOCTYPE html>
    <html>
      <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
      <body style="margin: 0; padding: 24px 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <div style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: 1px solid #cbd5e1;">
          ${emailHeader("Catalogue Quote / RFQ Request", `Received on ${formattedDate}`, ticketId)}
          
          <div style="padding: 28px 24px;">
            ${
              data.itemId
                ? `
              <div style="background-color: ${BRAND_PANEL}; border: 1px solid ${BRAND_BORDER}; border-radius: 4px; padding: 18px; margin-bottom: 24px;">
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                  <span style="font-size: 11px; font-family: monospace; background-color: ${BRAND_AMBER}; color: #ffffff; padding: 3px 10px; border-radius: 2px; font-weight: 700; letter-spacing: 0.5px;">
                    ${data.itemId}
                  </span>
                  <span style="font-size: 12px; color: ${BRAND_TEXT_LIGHT}; font-family: monospace;">Line Item Target</span>
                </div>
                <div style="margin-top: 10px; font-size: 17px; font-weight: 700; color: #ffffff;">
                  ${data.itemName || "Industrial Module"}
                </div>
                ${data.itemSpec ? `<div style="margin-top: 6px; font-size: 12px; font-family: monospace; color: #9BAAB5;">Specification: ${data.itemSpec}</div>` : ""}
              </div>
            `
                : ""
            }

            <div style="font-size: 12px; font-family: monospace; text-transform: uppercase; color: ${BRAND_AMBER}; letter-spacing: 1px; margin-bottom: 12px; font-weight: 700;">
              Buyer &amp; Organization Information
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
              <tbody>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: ${BRAND_TEXT_MUTED}; width: 140px; font-weight: 500;">Buyer Name:</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 700;">${data.name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: ${BRAND_TEXT_MUTED}; font-weight: 500;">Company:</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${data.company}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: ${BRAND_TEXT_MUTED}; font-weight: 500;">Email:</td>
                  <td style="padding: 10px 0;"><a href="mailto:${data.email}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${data.email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: ${BRAND_TEXT_MUTED}; font-weight: 500;">Phone:</td>
                  <td style="padding: 10px 0; color: #0f172a;">${data.phone || "Not provided"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: ${BRAND_TEXT_MUTED}; font-weight: 500;">RFQ Attachment:</td>
                  <td style="padding: 10px 0; color: ${data.fileName ? "#16a34a" : "#64748b"}; font-weight: ${data.fileName ? "700" : "normal"};">
                    ${data.fileName ? `📎 ${data.fileName} (Attached to email)` : "No attachment uploaded"}
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: ${BRAND_TEXT_MUTED}; font-weight: 500;">Ticket Reference:</td>
                  <td style="padding: 10px 0; font-family: monospace; font-weight: 700; color: ${BRAND_AMBER};">${ticketId}</td>
                </tr>
              </tbody>
            </table>

            <div style="font-size: 12px; font-family: monospace; text-transform: uppercase; color: ${BRAND_AMBER}; letter-spacing: 1px; margin-bottom: 8px; font-weight: 700;">
              Buyer Requirements &amp; Notes
            </div>
            <div style="background-color: #f8fafc; border-left: 3px solid ${BRAND_AMBER}; padding: 18px; font-size: 14px; line-height: 1.65; color: #1e293b; border-radius: 0 4px 4px 0; white-space: pre-wrap;">
${data.message || "Please prepare a technical proposal and indicative price based on this line item."}
            </div>

            <div style="margin-top: 28px; text-align: center;">
              <a href="mailto:${data.email}?subject=Re: [MBH ${ticketId}] Technical Proposal for ${data.itemId ? `${data.itemId} - ` : ""}${data.company}" style="display: inline-block; background-color: ${BRAND_DARK}; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 14px;">
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
  const ticketId = generateTicketId();
  return `
    <!DOCTYPE html>
    <html>
      <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
      <body style="margin: 0; padding: 24px 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <div style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: 1px solid #cbd5e1;">
          ${emailHeader("Quote Request Registered", "MBH Solutions Engineering Proposal Desk", ticketId)}
          
          <div style="padding: 32px 28px;">
            <p style="margin: 0 0 16px 0; font-size: 16px; color: #0f172a; line-height: 1.6;">
              Dear <strong>${data.name}</strong>,
            </p>
            <p style="margin: 0 0 18px 0; font-size: 15px; color: #334155; line-height: 1.65;">
              Thank you for requesting a technical proposal from <strong>MBH Solutions</strong> on behalf of <strong>${data.company}</strong>. Your enquiry has been assigned tracking code <strong style="color: ${BRAND_AMBER}; font-family: monospace;">${ticketId}</strong>.
            </p>

            ${
              data.itemId
                ? `
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; padding: 18px; margin: 22px 0;">
                <div style="font-size: 11px; font-family: monospace; color: ${BRAND_AMBER}; font-weight: 700; text-transform: uppercase;">
                  Line Item Target: ${data.itemId}
                </div>
                <div style="font-size: 16px; font-weight: 700; color: #0f172a; margin-top: 6px;">
                  ${data.itemName || "Industrial Module"}
                </div>
                ${data.itemSpec ? `<div style="font-size: 12px; color: #64748b; margin-top: 4px; font-family: monospace;">Specification: ${data.itemSpec}</div>` : ""}
              </div>
            `
                : ""
            }
            
            <div style="background-color: #fffbeb; border-left: 4px solid ${BRAND_AMBER}; padding: 16px 18px; margin: 24px 0; font-size: 14px; color: #92400e; line-height: 1.6; border-radius: 0 4px 4px 0;">
              <strong>Indicative Proposal Turnaround:</strong> Our process engineering team is assembling the layout specification and pricing draft. You will receive the scope document within <strong>one business day</strong>.
            </div>

            ${
              data.fileName
                ? `
              <div style="font-size: 13.5px; color: #16a34a; background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 12px 16px; border-radius: 4px; margin: 20px 0;">
                <strong>Attached Spec Sheet Received:</strong> 📎 ${data.fileName} (queued for engineer review)
              </div>
            `
                : ""
            }

            <!-- What Happens Next Roadmap -->
            ${processRoadmapSection()}

            <!-- Direct Actions (WhatsApp & Phone) -->
            ${directActionsSection()}

            <!-- Rich Clickable Resource Hub -->
            ${resourceHubSection()}
          </div>

          ${emailFooter()}
        </div>
      </body>
    </html>
  `;
}
