import { NextResponse } from "next/server";
import { resend, isResendConfigured, RECEIVER_EMAIL, SENDER_EMAIL } from "@/lib/resend";
import {
  salesQuoteNotificationEmail,
  clientQuoteConfirmationEmail,
} from "@/lib/email-templates";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB limit

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name")?.toString()?.trim() || "";
    const company = formData.get("company")?.toString()?.trim() || "";
    const email = formData.get("email")?.toString()?.trim() || "";
    const phone = formData.get("phone")?.toString()?.trim() || "";
    const message = formData.get("message")?.toString()?.trim() || "";
    const itemId = formData.get("itemId")?.toString()?.trim() || "";
    const itemName = formData.get("itemName")?.toString()?.trim() || "";
    const itemSpec = formData.get("itemSpec")?.toString()?.trim() || "";
    const pageUrl = formData.get("pageUrl")?.toString()?.trim() || "";

    const attachment = formData.get("attachment") as File | null;

    // 1. Validation
    if (!name || name.length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name." },
        { status: 400 }
      );
    }

    if (!company || company.length < 1) {
      return NextResponse.json(
        { success: false, error: "Please enter your company or organization name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid business email address." },
        { status: 400 }
      );
    }

    // 2. Attachment processing
    let attachmentBuffer: Buffer | null = null;
    let attachmentFilename: string | undefined = undefined;

    if (attachment && attachment.size > 0) {
      if (attachment.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            success: false,
            error: "The attached file exceeds the 10MB size limit. Please upload a smaller file or email it directly.",
          },
          { status: 400 }
        );
      }

      attachmentFilename = attachment.name;
      const arrayBuffer = await attachment.arrayBuffer();
      attachmentBuffer = Buffer.from(arrayBuffer);
    }

    const payload = {
      itemId: itemId || undefined,
      itemName: itemName || undefined,
      itemSpec: itemSpec || undefined,
      name,
      company,
      email,
      phone: phone || undefined,
      message: message || undefined,
      pageUrl: pageUrl || undefined,
      fileName: attachmentFilename,
      date: new Date().toUTCString(),
    };

    // 3. Dispatch via Resend
    if (isResendConfigured() && resend) {
      const attachmentsList = [];
      if (attachmentBuffer && attachmentFilename) {
        attachmentsList.push({
          filename: attachmentFilename,
          content: attachmentBuffer,
        });
      }

      const salesResult = await resend.emails.send({
        from: SENDER_EMAIL,
        to: [RECEIVER_EMAIL],
        replyTo: payload.email,
        subject: `[QUOTE REQUEST] ${payload.itemId ? `${payload.itemId} · ` : ""}${payload.company}`,
        html: salesQuoteNotificationEmail(payload),
        attachments: attachmentsList.length > 0 ? attachmentsList : undefined,
      });

      if (salesResult.error) {
        console.error("Resend sales quote notification error:", salesResult.error);
      }

      // Send auto-confirmation receipt to buyer
      try {
        await resend.emails.send({
          from: SENDER_EMAIL,
          to: [payload.email],
          subject: `Quote Request Received: ${payload.itemId ? `${payload.itemId}` : "MBH Solutions Proposal"}`,
          html: clientQuoteConfirmationEmail(payload),
        });
      } catch (clientErr) {
        console.warn("Client confirmation dispatch error (non-fatal):", clientErr);
      }
    } else {
      // Development fallback logging
      console.log("\n=======================================================");
      console.log("📥 [LEAD CAPTURED: QUOTE REQUEST / RFQ]");
      console.log(`Item ID:    ${payload.itemId || "General RFQ"}`);
      console.log(`Item Name:  ${payload.itemName || "N/A"}`);
      console.log(`Name:       ${payload.name}`);
      console.log(`Company:    ${payload.company}`);
      console.log(`Email:      ${payload.email}`);
      console.log(`Phone:      ${payload.phone || "N/A"}`);
      console.log(`Attachment: ${payload.fileName || "None"}`);
      console.log(`Message:    ${payload.message || "N/A"}`);
      console.log("⚠️  [NOTICE] Set RESEND_API_KEY in .env.local for live email dispatch.");
      console.log("=======================================================\n");
    }

    return NextResponse.json({
      success: true,
      message: "Your quote request has been received. We will respond within one business day.",
    });
  } catch (error) {
    console.error("Quote API handler error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your quote request. Please contact sales@mbhsol.com directly.",
      },
      { status: 500 }
    );
  }
}
