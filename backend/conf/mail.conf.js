
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export const createMailOptions = (to, subject, html) => ({
  from: process.env.MAIL_USER,
  to,
  subject,
  html,
});

export const otpEmailTemplate = (otp) => `
${otp}
`;
