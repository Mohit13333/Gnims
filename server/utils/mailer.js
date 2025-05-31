import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendMail = async function ({ to, html }) {
  let info = await transporter.sendMail({
    from: `"GNIMS"<${process.env.EMAIL}>`,
    to,
    html,
  });
  return info;
};

export const sendNewMessageNotification = async ({ to }) => {
  const html = `
  <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; text-align: center;">
    
    <img src="https://res.cloudinary.com/dty757ahb/image/upload/v1748596517/genesis_h0eti1.png" alt="GNIMS Logo" style="max-width: 120px; margin-bottom: 20px;" />

    <h2 style="color: #D3413F;">GNIMS</h2>

    <p style="font-size: 18px; margin-top: 10px;">Thank you for subscribing!</p>

    <p style="font-size: 14px; color: #777; margin-top: 30px;">
      You will now receive updates and news from us.
    </p>

  </div>
`;

  const info = await sendMail({
    to,
    html,
  });

  return info;
};
