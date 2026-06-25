import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      subject,
      message
    });

    // Send confirmation to user
    await transporter.sendMail({
      from: `"Nexus Agency" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank you for contacting us - ${subject}`,
      html: `
        <h2>Thank You, ${name}!</h2>
        <p>We have received your message and will get back to you shortly.</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Your Message:</strong></p>
        <p>${message}</p>
        <br>
        <p>Best regards,<br>The Nexus Agency Team</p>
      `
    });

    res.status(201).json({ 
      success: true, 
      message: 'Thank you! Your message has been received.',
      contact 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};