const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();


const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

class MailService {
  sendMail = async ( to, subject, html) => {
     await transporter.sendMail({to: to,subject: subject,html: html});
  };
}

module.exports = {
  mailService: new MailService(),
};
