export interface TeamNotificationData {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  topic?: string;
  message: string;
  submittedAt: string;
}

/**
 * Generates the clean, readable, plain and scannable notification email for the Fazal Zari team.
 * Focuses on quick scanning, clear data fields, and clickable mailto link.
 */
export function renderTeamNotificationHtml(data: TeamNotificationData): string {
  const fullName = [data.firstName, data.lastName].filter(Boolean).join(" ");
  const escapedMessage = (data.message || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br />");

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Website Inquiry</title>
</head>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8f9fa; color: #212529;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #dee2e6; border-radius: 4px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
    <h2 style="margin: 0 0 16px 0; font-size: 18px; color: #111111; border-bottom: 2px solid #967844; padding-bottom: 8px;">
      New Contact Form Submission &bull; fazalzari.com
    </h2>

    <p style="margin: 0 0 16px 0; font-size: 13px; color: #6c757d;">
      Submitted on: <strong>${escapeHtml(data.submittedAt)}</strong>
    </p>

    <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
      <tr>
        <td style="padding: 8px 12px; font-weight: bold; width: 120px; background-color: #f8f9fa; border: 1px solid #dee2e6;">Visitor Name:</td>
        <td style="padding: 8px 12px; border: 1px solid #dee2e6;">${escapeHtml(fullName)}</td>
      </tr>
      <tr>
        <td style="padding: 8px 12px; font-weight: bold; background-color: #f8f9fa; border: 1px solid #dee2e6;">Email Address:</td>
        <td style="padding: 8px 12px; border: 1px solid #dee2e6;">
          <a href="mailto:${escapeHtml(data.email)}" style="color: #967844; font-weight: 500; text-decoration: underline;">
            ${escapeHtml(data.email)}
          </a>
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 12px; font-weight: bold; background-color: #f8f9fa; border: 1px solid #dee2e6;">Phone Number:</td>
        <td style="padding: 8px 12px; border: 1px solid #dee2e6;">
          ${
            data.phone
              ? `<a href="tel:${escapeHtml(data.phone)}" style="color: #212529; text-decoration: none;">${escapeHtml(data.phone)}</a>`
              : "<em>Not provided</em>"
          }
        </td>
      </tr>
      ${
        data.topic
          ? `<tr>
        <td style="padding: 8px 12px; font-weight: bold; background-color: #f8f9fa; border: 1px solid #dee2e6;">Topic:</td>
        <td style="padding: 8px 12px; border: 1px solid #dee2e6;">${escapeHtml(data.topic)}</td>
      </tr>`
          : ""
      }
    </table>

    <div style="margin-bottom: 24px;">
      <div style="font-weight: bold; font-size: 14px; margin-bottom: 8px; color: #111111;">Message:</div>
      <div style="padding: 16px; background-color: #fbfbfb; border: 1px solid #e9ecef; border-left: 4px solid #967844; border-radius: 2px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #212529;">
        ${escapedMessage}
      </div>
    </div>

    <div style="padding-top: 16px; border-top: 1px solid #dee2e6; font-size: 12px; color: #6c757d;">
      You can reply directly to this email to respond to <strong>${escapeHtml(data.email)}</strong>.
    </div>
  </div>
</body>
</html>`;
}

/**
 * Plain-text version of the notification email
 */
export function renderTeamNotificationText(data: TeamNotificationData): string {
  const fullName = [data.firstName, data.lastName].filter(Boolean).join(" ");
  return `NEW WEBSITE INQUIRY | fazalzari.com
--------------------------------------------------
Submitted on: ${data.submittedAt}

VISITOR DETAILS:
Name:  ${fullName}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}${data.topic ? `\nTopic: ${data.topic}` : ""}

MESSAGE:
${data.message}
--------------------------------------------------
Reply directly to this email to respond to ${data.email}.
`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
