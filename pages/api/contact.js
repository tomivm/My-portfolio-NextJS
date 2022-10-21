require("dotenv").config();
const { google } = require("googleapis");
export default async function (req, res) {
  let nodemailer = require("nodemailer");
  const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
  const EMAIL_PASSWORD = process.env.mail_password;
  const CLIENT_ID = process.env.EMAIL_CLIENT_ID;
  const CLIENT_SECRET = process.env.EMAIL_CLIENT_SECRET;
  const REFRESH_TOKEN = process.env.EMAIL_REFRESH_TOKEN;

  const getGmailAccessToken = async () => {
    const REDIRECT_URI = process.env.EMAIL_CLIENT_REDIRECT_URI;
    console.log("CLIENT_ID", CLIENT_ID);
    const OAuth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI
    );

    OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
    try {
      return await OAuth2Client.getAccessToken();
    } catch (err) {
      console.log(err);
      return null;
    }
  };
  const accessToken = await getGmailAccessToken();
  const transporter = nodemailer.createTransport({
    // host: "142.251.163.108",
    // port: 465,
    // secure: true,
    // service: "gmail",
    // auth: {
    //   user: EMAIL_ACCOUNT,
    //   pass: EMAIL_PASSWORD,
    // },
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: CLIENT_EMAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  const mailData = {
    from: req.body.email,
    to: "tomivm98@gmail.com",
    subject: req.body.subject,
    text: req.body.message,
    html: `<div>From: ${req.body.email}</div><br/><div>message: ${req.body.message}</div>`,
  };

  if (!accessToken) {
    res.status(500);
    res.send();
    return console.log("invalid accessToken");
  }

  return new Promise((resolve, reject) => {
    transporter
      .sendMail(mailData, function (err, info) {
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
      })
      .catch((error) => {
        res.status(500);
        res.send();
      });
  });
}
