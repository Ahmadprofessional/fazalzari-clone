import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  renderCustomerConfirmationHtml,
  renderCustomerConfirmationText,
} from "@/emails/customerConfirmation";
import {
  renderTeamNotificationHtml,
  renderTeamNotificationText,
} from "@/emails/teamNotification";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactRequestBody {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  topic?: string;
  message?: string;
  recaptchaToken?: string;
  // Honeypot field (hidden from legitimate users)
  website?: string;
  honeypot?: string;
}

interface RecaptchaVerifyResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactRequestBody = await req.json().catch(() => ({}));

    // 1. Honeypot check (Second layer bot protection)
    // If a bot filled out the hidden field, return 200 silently without sending emails
    if (body.website || body.honeypot) {
      console.warn("[Contact Form] Bot submission blocked by honeypot field");
      return NextResponse.json(
        { success: true, message: "Your message has been received." },
        { status: 200 }
      );
    }

    const firstName = (body.firstName || "").trim();
    const lastName = (body.lastName || "").trim();
    const email = (body.email || "").trim().toLowerCase();
    const phone = (body.phone || "").trim();
    const topic = (body.topic || "").trim();
    const message = (body.message || "").trim();
    const recaptchaToken = (body.recaptchaToken || "").trim();

    // 2. Server-side validations
    if (!firstName) {
      return NextResponse.json(
        { success: false, error: "First name is required." },
        { status: 400 }
      );
    }
    if (firstName.length < 2 || firstName.length > 50) {
      return NextResponse.json(
        { success: false, error: "First name must be between 2 and 50 characters." },
        { status: 400 }
      );
    }

    if (lastName && lastName.length > 50) {
      return NextResponse.json(
        { success: false, error: "Last name cannot exceed 50 characters." },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email address is required." },
        { status: 400 }
      );
    }
    if (email.length > 100 || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (phone && phone.length > 30) {
      return NextResponse.json(
        { success: false, error: "Phone number cannot exceed 30 characters." },
        { status: 400 }
      );
    }

    if (!message) {
      return NextResponse.json(
        { success: false, error: "Message is required." },
        { status: 400 }
      );
    }
    if (message.length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }
    if (message.length > 2000) {
      return NextResponse.json(
        { success: false, error: "Message cannot exceed 2000 characters." },
        { status: 400 }
      );
    }

    // 3. reCAPTCHA v2 token verification
    if (!recaptchaToken) {
      return NextResponse.json(
        { success: false, error: "Please complete the reCAPTCHA verification." },
        { status: 400 }
      );
    }

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      console.error("[Contact Form] Server configuration error: RECAPTCHA_SECRET_KEY is not defined");
      return NextResponse.json(
        { success: false, error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }

    try {
      const verifyUrl = "https://www.google.com/recaptcha/api/siteverify";
      const verifyParams = new URLSearchParams({
        secret: recaptchaSecret,
        response: recaptchaToken,
      });

      const verifyRes = await fetch(verifyUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: verifyParams.toString(),
      });

      const verifyData: RecaptchaVerifyResponse = await verifyRes.json();

      if (!verifyData.success) {
        console.error("[Contact Form] reCAPTCHA verification failed:", verifyData["error-codes"] || verifyData);
        return NextResponse.json(
          {
            success: false,
            error: "reCAPTCHA verification failed. Please check the box again.",
          },
          { status: 400 }
        );
      }
    } catch (recaptchaErr) {
      console.error("[Contact Form] Error contacting reCAPTCHA verification API:", recaptchaErr);
      return NextResponse.json(
        { success: false, error: "Failed to verify reCAPTCHA. Please try again." },
        { status: 500 }
      );
    }

    // 4. Initialize Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("[Contact Form] Server configuration error: RESEND_API_KEY is not defined");
      return NextResponse.json(
        { success: false, error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const fullName = [firstName, lastName].filter(Boolean).join(" ");
    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Karachi",
      dateStyle: "full",
      timeStyle: "short",
    }) + " (PKT)";

    const recipientEmail = process.env.CONTACT_TO_EMAIL || "info@fazalzari.com";
    const teamFromEmail =
      process.env.RESEND_FROM_EMAIL || "Fazalzari Website <info@fazalzari.com>";
    const customerFromEmail =
      process.env.RESEND_FROM_CONFIRMATION_EMAIL || "Fazalzari <info@fazalzari.com>";

    const teamSubject = topic
      ? `New website inquiry from ${fullName}: ${topic}`
      : `New website inquiry from ${fullName} | fazalzari.com contact form`;

    // 5. Send Email 1: Notification to the Fazal Zari team
    const teamHtml = renderTeamNotificationHtml({
      firstName,
      lastName,
      email,
      phone,
      topic,
      message,
      submittedAt,
    });
    const teamText = renderTeamNotificationText({
      firstName,
      lastName,
      email,
      phone,
      topic,
      message,
      submittedAt,
    });

    const teamEmailResult = await resend.emails.send({
      from: teamFromEmail,
      to: recipientEmail,
      replyTo: email,
      subject: teamSubject,
      html: teamHtml,
      text: teamText,
    });

    if (teamEmailResult.error) {
      console.error("[Contact Form] Resend team notification failed:", teamEmailResult.error);
      return NextResponse.json(
        {
          success: false,
          error: "Failed to send notification email. Please try again or reach out on WhatsApp.",
        },
        { status: 500 }
      );
    }

    console.info(`[Contact Form] Team notification sent successfully. Resend ID: ${teamEmailResult.data?.id}`);

    // 6. Send Email 2: Confirmation to the visitor
    // Sent ONLY after notification succeeds. If this fails, log the error and still return success.
    try {
      const customerHtml = renderCustomerConfirmationHtml({
        firstName,
        lastName,
        email,
        phone,
        message,
        submittedAt,
      });
      const customerText = renderCustomerConfirmationText({
        firstName,
        lastName,
        email,
        phone,
        message,
        submittedAt,
      });

      const customerEmailResult = await resend.emails.send({
        from: customerFromEmail,
        to: email,
        replyTo: "info@fazalzari.com",
        subject: `We got your message, ${firstName}`,
        html: customerHtml,
        text: customerText,
      });

      if (customerEmailResult.error) {
        console.error(
          "[Contact Form] Resend customer confirmation email error:",
          customerEmailResult.error
        );
      } else {
        console.info(
          `[Contact Form] Customer confirmation email sent successfully. Resend ID: ${customerEmailResult.data?.id}`
        );
      }
    } catch (customerEmailErr) {
      console.error(
        "[Contact Form] Unexpected exception sending customer confirmation email:",
        customerEmailErr
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully. We will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Contact Form] Unexpected error processing request:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
