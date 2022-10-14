require("dotenv").config();
export default async function (req, res) {
  let nodemailer = require("nodemailer");
  const EMAIL_ACCOUNT = process.env.mail_account;
  const EMAIL_PASSWORD = process.env.mail_password;
  const transporter = nodemailer.createTransport({
    host: "142.251.163.108",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: EMAIL_ACCOUNT,
      pass: EMAIL_PASSWORD,
    },
  });

  const mailData = {
    from: req.body.email,
    to: "tomivm98@gmail.com",
    subject: req.body.subject,
    text: req.body.message,
    // html: <div>{req.body.message}</div>,
  };

  await transporter.sendMail(mailData, function (err, info) {
    if (err) {
      res.status(500);
      return console.log(err);
    }
    return res.status(200);
  });

  res.send();
}
