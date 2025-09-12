import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    // Notification for site owner
    const adminEmail = await resend.emails.send({
      from: `New Enquiry <${process.env.RESEND_USER}>`,
      to: process.env.RESEND_USER || '',
      subject: `New Form Submission from ${name}`,
      replyTo: email,
      headers: {
        "X-Priority": "1 (Highest)",
        "X-MSMail-Priority": "High",
        Importance: "High"
      },
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    // Notification for sender
    const userEmail = await resend.emails.send({
      from: `Wisdom Coach Asli <${process.env.RESEND_USER}>`,
      to: email,
      subject: `Thank your for your enquiry!`,
      headers: {
        "X-Priority": "1 (Highest)",
        "X-MSMail-Priority": "High",
        Importance: "High"
      },
      html: `
        <h2>Hi, ${name}</h2>
        <p>Thank you for your message. This email is to confirm you enquiry has been received and you should hear from me soon</p>
        <p><strong>Message:</strong></p>
        <blockquote>${message}</blockquote>
        <p>Best Regards,<br></br> Wisdom Coach Asli</p>
      `
    });

    return res.status(200).json({ success: true, adminEmail, userEmail });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ success: false, error: error.message || 'Unknown Error' })
    }
  }
}