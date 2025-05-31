import Emails from "../models/email.js";
import { sendNewMessageNotification } from "../utils/mailer.js";

export const saveEmails = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Check if email already exists
    const existing = await Emails.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email is already subscribed" });
    }

    // Save the new email
    const newEmail = await Emails.create({ email });
    console.log(newEmail);

    // Send confirmation email
    await sendNewMessageNotification({ to: email });

    return res
      .status(201)
      .json({ message: "Newsletter subscribed", email: newEmail });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
