import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.NEXT_MAIL_HOST,
  port: process.env.NEXT_MAIL_PORT,
  secure: true,
  auth: {
    user: process.env.NEXT_MAIL_USER,
    pass: process.env.NEXT_MAIL_PASS,
  },
});

export const sendMail = async (options) => {
  try {
    const info = await transporter.sendMail({
      from: options.sender, // sender address
      to: options.receiver, // list of receivers
      subject: options.subject, // Subject line

      html: options.html, // html body
    });

    return info;
  } catch (error) {
    console.log(error);
  }
};
