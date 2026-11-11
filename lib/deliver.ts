import "server-only";

type Message = { subject: string; text: string; replyTo?: string };

/**
 * Sends a submission to the Mint inbox through Resend.
 * Needs RESEND_API_KEY, INBOX_EMAIL and FROM_EMAIL. Without them, development
 * logs the message and succeeds; production fails so nothing is silently lost.
 */
export async function deliver({ subject, text, replyTo }: Message): Promise<boolean> {
  const { RESEND_API_KEY, INBOX_EMAIL, FROM_EMAIL } = process.env;

  if (!RESEND_API_KEY || !INBOX_EMAIL || !FROM_EMAIL) {
    if (process.env.NODE_ENV !== "production") {
      console.log(`[deliver] email not configured, logging instead\n${subject}\n\n${text}`);
      return true;
    }
    console.error("[deliver] email not configured; submission dropped");
    return false;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [INBOX_EMAIL],
        subject,
        text,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });
    if (!res.ok) console.error("[deliver] send failed", res.status, await res.text());
    return res.ok;
  } catch (err) {
    console.error("[deliver] send failed", err);
    return false;
  }
}
