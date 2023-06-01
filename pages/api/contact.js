require("dotenv").config();

export default async function (req, res) {
  let nodemailer = require("nodemailer");
  const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
  const EMAIL_PASSWORD = process.env.mail_password;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: CLIENT_EMAIL,
      pass: EMAIL_PASSWORD,
    },
  });

  const mailData = {
    from: req.body.email,
    to: "tomivm98@gmail.com",
    subject: req.body.subject,
    text: req.body.message,
    html: `<div>From: ${req.body.email}</div><br/><div>message: ${req.body.message}</div>`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        res.status(500);
        res.send();
        reject(new Error());
        return console.log(err);
      }
      res.status(200);
      res.send();
      resolve();
      return;
    });
  });
}
