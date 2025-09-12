import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  };

  try {
    const { name, email } = req.body;

    const adminEmail = await resend.emails.send({
      from: `New Story Download <${process.env.RESEND_USER}>`,
      to: process.env.RESEND_USER || '',
      subject: 'New Story Downloaded',
      replyTo: email,
      headers: {
        'X-Priority': '1 (Highest)',
        'X-MSMail-Priority': 'High',
        Importance: 'High'
      },
      html: `
        <h2>You Have a New Download for your Story!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      `
    })

    // Notification for sender
    const userEmail = await resend.emails.send({
      from: `Wisdom Coach Asli <${process.env.RESEND_USER}>`,
      to: email,
      subject: `Thank you for your download`,
      headers: {
        "X-Priority": "1 (Highest)",
        "X-MSMail-Priority": "High",
        Importance: "High"
      },
      html: `
        <h2>Hi, ${name}</h2>
        <p>Thank you for downloading our free story. We truly believe it your child will love it.</p>
        <br></br>
        <p>For any other enquiries, please feel free to reach out or visit my website at <a href='www.wisdomcoachasli.com'>www.wisdomcoachasli.com</a></p>
        <p>Best Regards,<br></br> Wisdom Coach Asli</p>
      `
    });

    return res.status(200).json({ success: true, adminEmail, userEmail });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ success: false, error: error.message || 'Unknown Error' });
    }
  }
};
