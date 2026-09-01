import { NextResponse } from "next/server";
import { resend, isResendConfigured, RECEIVER_EMAIL, SENDER_EMAIL } from "@/lib/resend";
import {
  salesContactNotificationEmail,
  clientContactConfirmationEmail,
} from "@/lib/email-templates";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, details, _gotcha } = body;

    // Silent drop for automated bots filling honeypot field
    if (_gotcha) {
      return NextResponse.json({
        success: true,
        message: "Thank you. Your enquiry has been received.",
      });
    }

    // 1. Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!details || typeof details !== "string" || details.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please describe your project scope or facility requirements." },
        { status: 400 }
      );
    }

    const payload = {
      name: name.trim(),
      company: company ? String(company).trim() : undefined,
      email: email.trim(),
      details: details.trim(),
      date: new Date().toUTCString(),
    };

    const textSummary = `
MBH SOLUTIONS — NEW ENQUIRY
Client: ${payload.name}
Company: ${payload.company || "N/A"}
Email: ${payload.email}

Project Scope:
${payload.details}

Submitted: ${payload.date}
    `.trim();

    // 2. Dispatch via Resend if API Key is present
    if (isResendConfigured() && resend) {
      // Send notification to sales team
      const salesResult = await resend.emails.send({
        from: SENDER_EMAIL,
        to: [RECEIVER_EMAIL],
        replyTo: payload.email,
        subject: `[New Website Lead] ${payload.name}${payload.company ? ` · ${payload.company}` : ""}`,
        text: textSummary,
        html: salesContactNotificationEmail(payload),
      });

      if (salesResult.error) {
        console.error("Resend sales notification error:", salesResult.error);
      }

      // Send auto-confirmation receipt to customer
      try {
        await resend.emails.send({
          from: SENDER_EMAIL,
          to: [payload.email],
          subject: "We've received your project parameters · MBH Solutions",
          text: `Dear ${payload.name},\n\nThank you for contacting MBH Solutions. Our process engineering desk has received your project scope. We will review your parameters and respond within one business day.\n\nDirect WhatsApp: +92 332 2007373\nWebsite: https://www.mbhsol.com\n\nSubmitted Scope:\n${payload.details}`,
          html: clientContactConfirmationEmail(payload),
        });
      } catch (clientErr) {
        console.warn("Client confirmation dispatch error (non-fatal):", clientErr);
      }
    } else {
      // Development fallback logging
      console.log("\n=======================================================");
      console.log("📥 [LEAD CAPTURED: CONTACT FORM]");
      console.log(`Name:    ${payload.name}`);
      console.log(`Company: ${payload.company || "N/A"}`);
      console.log(`Email:   ${payload.email}`);
      console.log(`Details: ${payload.details}`);
      console.log("⚠️  [NOTICE] Set RESEND_API_KEY in .env.local for live email dispatch.");
      console.log("=======================================================\n");
    }

    return NextResponse.json({
      success: true,
      message: "Thank you. Your enquiry has been received by our engineering team.",
    });
  } catch (error) {
    console.error("Contact API handler error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please contact sales@mbhsol.com or via WhatsApp.",
      },
      { status: 500 }
    );
  }
}
