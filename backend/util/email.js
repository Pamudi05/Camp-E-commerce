import fs from "fs";
import path from "path";
import transporter from "../util/nodemailer.js";

export const sendEmail = async (to, subject, templateName, variables) => {
  try {
    const templatePath = path.join(
      process.cwd(),
      "util",
      "emailTemplates",
      `${templateName}.html`,
      // "createdEmail.html",
    );

    let html = fs.readFileSync(templatePath, "utf8");

    for (const key in variables) {
      html = html.replaceAll(`{{${key}}}`, variables[key]);
    }

    const mailOptions = {
      from: `"Camp E-Commerce" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Email sending failed:", error);
    throw new Error("Email could not be sent");
  }
};
