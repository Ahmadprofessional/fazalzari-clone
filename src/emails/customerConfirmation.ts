export interface CustomerConfirmationData {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  message: string;
  submittedAt: string;
}

/**
 * Generates an email-safe HTML template for the visitor confirmation email.
 * - Table-based layout (<table cellpadding="0" cellspacing="0" border="0">)
 * - Strict inline CSS for Gmail/Outlook/Apple Mail/Yahoo compatibility
 * - Max width: 600px centered
 * - Fazal Zari brand palette: Gold (#967844), Light Gold (#e8c686), Cream (#f7efe2), Ink (#0a0a0a)
 * - Safe typography: Cormorant Garamond / Georgia, Poppins / system-ui
 * - Absolute HTTPS logo URL from fazalzari.com
 */
export function renderCustomerConfirmationHtml(data: CustomerConfirmationData): string {
  const fullName = [data.firstName, data.lastName].filter(Boolean).join(" ");
  const escapedMessage = (data.message || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br />");

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" />
  <title>We got your message, ${escapeHtml(data.firstName)}</title>
  <style type="text/css">
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    body { margin: 0; padding: 0; width: 100% !important; min-width: 100%; background-color: #f7efe2; }
    @media only screen and (max-width: 600px) {
      .email-container { width: 100% !important; max-width: 100% !important; }
      .mobile-padding { padding-left: 20px !important; padding-right: 20px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f7efe2; font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <!-- Outer wrapper table -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f7efe2; padding: 32px 12px;">
    <tr>
      <td align="center" valign="top">
        <!-- Main 600px container -->
        <table role="presentation" class="email-container" width="600" cellpadding="0" cellspacing="0" border="0" style="width: 600px; max-width: 600px; background-color: #ffffff; border: 1px solid #d1beaa; margin: 0 auto; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
          
          <!-- Top gold accent line -->
          <tr>
            <td height="4" style="background-color: #967844; line-height: 4px; font-size: 4px;">&nbsp;</td>
          </tr>

          <!-- Header (Brand Dark Bar) -->
          <tr>
            <td align="center" style="background-color: #0a0a0a; padding: 36px 24px 30px; text-align: center;">
              <a href="https://fazalzari.com" target="_blank" style="text-decoration: none; display: inline-block;">
                <img
                  src="https://fazalzari.com/images/logo.png"
                  alt="Fazal Zari"
                  width="72"
                  height="72"
                  style="display: block; width: 72px; height: 72px; margin: 0 auto; object-fit: contain;"
                />
              </a>
              <div style="font-family: 'Poppins', -apple-system, sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 3px; color: #e8c686; text-transform: uppercase; margin-top: 14px;">
                Heritage Luxury &bull; Handcrafted for Royalty
              </div>
            </td>
          </tr>

          <!-- Card Content Body -->
          <tr>
            <td class="mobile-padding" style="padding: 40px 36px 32px; background-color: #ffffff;">
              
              <!-- Greeting / Heading -->
              <h1 style="margin: 0 0 12px 0; font-family: 'Cormorant Garamond', Georgia, 'Times New Roman', serif; font-size: 28px; line-height: 34px; font-weight: 500; text-align: center; color: #0a0a0a; text-transform: uppercase; letter-spacing: 1px;">
                Thank You, ${escapeHtml(data.firstName)}
              </h1>

              <!-- Subtle decorative divider -->
              <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto 24px auto;">
                <tr>
                  <td width="36" height="1" style="background-color: #967844; font-size: 1px; line-height: 1px;">&nbsp;</td>
                  <td style="padding: 0 8px; color: #967844; font-size: 11px; line-height: 11px; text-align: center;">✦</td>
                  <td width="36" height="1" style="background-color: #967844; font-size: 1px; line-height: 1px;">&nbsp;</td>
                </tr>
              </table>

              <!-- Warm message -->
              <p style="margin: 0 0 16px 0; font-family: 'Poppins', -apple-system, sans-serif; font-size: 14px; line-height: 24px; color: #333333; text-align: center;">
                We have received your message and appreciate your interest in Fazal Zari. Whether you are inquiring about our bespoke bridal couture, scheduling an appointment, or seeking styling advice, our team is delighted to assist you.
              </p>

              <!-- Expected timeframe statement -->
              <div style="margin: 0 0 28px 0; padding: 14px 18px; background-color: #fcf9f5; border-left: 3px solid #967844; font-family: 'Poppins', -apple-system, sans-serif; font-size: 13px; line-height: 22px; color: #4a4a4a;">
                <strong style="color: #0a0a0a;">When to expect a reply:</strong> Our bridal concierge team will review your inquiry and respond within <strong>24 to 48 hours</strong> (Monday &ndash; Saturday, 11:00 AM &ndash; 9:00 PM PKT).
              </div>

              <!-- Inquiry Summary Box -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border: 1px solid #d1beaa; background-color: #faf7f2; margin-bottom: 28px;">
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e8ded2; background-color: #f4ece1;">
                    <span style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; color: #0a0a0a;">
                      Summary of Your Inquiry
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="110" valign="top" style="padding-bottom: 10px; font-family: 'Poppins', -apple-system, sans-serif; font-size: 12px; font-weight: 600; color: #7a7a7a; text-transform: uppercase; letter-spacing: 0.5px;">
                          Full Name:
                        </td>
                        <td valign="top" style="padding-bottom: 10px; font-family: 'Poppins', -apple-system, sans-serif; font-size: 13px; font-weight: 500; color: #0a0a0a;">
                          ${escapeHtml(fullName)}
                        </td>
                      </tr>
                      <tr>
                        <td width="110" valign="top" style="padding-bottom: 10px; font-family: 'Poppins', -apple-system, sans-serif; font-size: 12px; font-weight: 600; color: #7a7a7a; text-transform: uppercase; letter-spacing: 0.5px;">
                          Email:
                        </td>
                        <td valign="top" style="padding-bottom: 10px; font-family: 'Poppins', -apple-system, sans-serif; font-size: 13px; color: #0a0a0a;">
                          ${escapeHtml(data.email)}
                        </td>
                      </tr>
                      ${
                        data.phone
                          ? `<tr>
                        <td width="110" valign="top" style="padding-bottom: 10px; font-family: 'Poppins', -apple-system, sans-serif; font-size: 12px; font-weight: 600; color: #7a7a7a; text-transform: uppercase; letter-spacing: 0.5px;">
                          Phone:
                        </td>
                        <td valign="top" style="padding-bottom: 10px; font-family: 'Poppins', -apple-system, sans-serif; font-size: 13px; color: #0a0a0a;">
                          ${escapeHtml(data.phone)}
                        </td>
                      </tr>`
                          : ""
                      }
                      <tr>
                        <td width="110" valign="top" style="padding-bottom: 10px; font-family: 'Poppins', -apple-system, sans-serif; font-size: 12px; font-weight: 600; color: #7a7a7a; text-transform: uppercase; letter-spacing: 0.5px;">
                          Date:
                        </td>
                        <td valign="top" style="padding-bottom: 10px; font-family: 'Poppins', -apple-system, sans-serif; font-size: 13px; color: #0a0a0a;">
                          ${escapeHtml(data.submittedAt)}
                        </td>
                      </tr>
                      <tr>
                        <td width="110" valign="top" style="padding-top: 4px; font-family: 'Poppins', -apple-system, sans-serif; font-size: 12px; font-weight: 600; color: #7a7a7a; text-transform: uppercase; letter-spacing: 0.5px;">
                          Message:
                        </td>
                        <td valign="top" style="padding-top: 4px; font-family: 'Poppins', -apple-system, sans-serif; font-size: 13px; line-height: 20px; color: #222222;">
                          ${escapedMessage}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Immediate Assistance Note -->
              <p style="margin: 0 0 24px 0; font-family: 'Poppins', -apple-system, sans-serif; font-size: 13px; line-height: 22px; color: #666666; text-align: center;">
                Need immediate assistance or planning an urgent bridal consultation? You can also message our senior consultant directly on WhatsApp:
              </p>

              <!-- CTA Buttons (WhatsApp / Browse Collection) -->
              <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto 12px auto;">
                <tr>
                  <td align="center" style="padding: 0 6px;">
                    <a
                      href="https://wa.me/923009736020"
                      target="_blank"
                      style="display: inline-block; background-color: #0a0a0a; color: #e8c686; border: 1.5px solid #967844; padding: 12px 24px; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; text-decoration: none; border-radius: 2px;"
                    >
                      Chat on WhatsApp
                    </a>
                  </td>
                  <td align="center" style="padding: 0 6px;">
                    <a
                      href="https://fazalzari.com/bridal-wear"
                      target="_blank"
                      style="display: inline-block; background-color: #967844; color: #ffffff; border: 1.5px solid #967844; padding: 12px 24px; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; text-decoration: none; border-radius: 2px;"
                    >
                      View Bridal Collection
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="background-color: #0a0a0a; padding: 32px 24px 28px; text-align: center; border-top: 1px solid #1f1f1f;">
              <div style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 18px; font-weight: 500; text-transform: uppercase; letter-spacing: 2px; color: #e8c686; margin-bottom: 8px;">
                Fazal Zari
              </div>
              <p style="margin: 0 0 6px 0; font-family: 'Poppins', -apple-system, sans-serif; font-size: 12px; line-height: 18px; color: #888888;">
                Shop # 4, 5 St. # 10, New Bano Bazar, Faisalabad, Pakistan
              </p>
              <p style="margin: 0 0 12px 0; font-family: 'Poppins', -apple-system, sans-serif; font-size: 12px; line-height: 18px; color: #888888;">
                Call: <a href="tel:+923009736020" style="color: #b8935a; text-decoration: none;">+92 300 9736020</a> &bull; Email: <a href="mailto:info@fazalzari.com" style="color: #b8935a; text-decoration: none;">info@fazalzari.com</a>
              </p>
              <p style="margin: 0; font-family: 'Poppins', -apple-system, sans-serif; font-size: 11px; line-height: 16px; color: #555555;">
                &copy; ${new Date().getFullYear()} Fazal Zari. All rights reserved.<br />
                You received this email because you submitted a contact request on <a href="https://fazalzari.com" style="color: #777777; text-decoration: underline;">fazalzari.com</a>.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Plain-text fallback version of customer confirmation email
 */
export function renderCustomerConfirmationText(data: CustomerConfirmationData): string {
  const fullName = [data.firstName, data.lastName].filter(Boolean).join(" ");
  return `FAZAL ZARI — HERITAGE LUXURY
Handcrafted for Royalty

Dear ${data.firstName},

Thank you for contacting Fazal Zari. We have received your inquiry and appreciate you reaching out to us.

RESPONSE TIMEFRAME:
Our bridal concierge team will review your message and get back to you within 24 to 48 hours (Monday – Saturday, 11:00 AM – 9:00 PM PKT).

SUMMARY OF YOUR INQUIRY:
----------------------------------------
Name: ${fullName}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Date: ${data.submittedAt}
Message:
${data.message}
----------------------------------------

NEED IMMEDIATE ASSISTANCE?
For urgent inquiries or bridal appointments, feel free to contact us:
- WhatsApp / Mobile: +92 300 9736020
- Phone: +92 321 6066906 / 041-2600463
- Email: info@fazalzari.com
- Boutique Address: Shop # 4, 5 St. # 10, New Bano Bazar, Faisalabad, Pakistan
- Explore Collection: https://fazalzari.com/bridal-wear

Warm regards,
The Fazal Zari Team
https://fazalzari.com
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
