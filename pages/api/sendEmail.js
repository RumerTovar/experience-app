import nodemailer from 'nodemailer';
import { nanoid } from 'nanoid';
import jwt from 'jsonwebtoken';
import { DgraphRegisterToken } from '../../utils/DgraphRegisterToken';
import { DgraphRegisterURL } from '../../utils/DgraphRegisterURL';

const appEmail = process.env.NEXT_PUBLIC_EMAIL;
const emailPassword = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
const jwtSecret = process.env.NEXT_PUBLIC_JWT_SECRET;
const localHomePage = process.env.NEXT_PUBLIC_LOCAL_HOMEPAGE;

export default async function verify(req, res) {
 const { email } = req.body;

 const emailToken = jwt.sign(
  {
   email,
  },
  jwtSecret,
  { expiresIn: '24h' }
 );

 const shortURL = nanoid(10);
 await DgraphRegisterToken(email, emailToken);
 await DgraphRegisterURL(emailToken, shortURL);

 const htmlMessage = `
 <!DOCTYPE html>
 <html
  lang="en"
  xmlns="https://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width,initial-scale=1" />
   <meta name="x-apple-disable-message-reformatting" />
   <title></title>
   <!--[if mso]>
    <noscript>
     <xml>
      <o:OfficeDocumentSettings>
       <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
     </xml>
    </noscript>
   <![endif]-->
   <body style="margin: 0; padding: 0">
   <table
   align="center"
    role="presentation"
    style="
     width: 300px;
     border-collapse: collapse;
     border: 0;
     border-spacing: 0;
     background: #ffffff;
    ">
    <tr>
     <td align="center" style="padding: 0">
      <table
       role="presentation"
       style="
        width: 602px;
        border-collapse: collapse;
        border: 1px solid #cccccc;
        border-spacing: 0; ;
       ">
       <tr>
        <td align="center" style="padding: 40px 0 30px 0">
         <img
          src="cid:logo"
          alt=""
          width="100"
          style="height: auto; display: block" />
        </td>
       </tr>
       <tr>
        <td align="center" style="padding: 0">
         <h1 style="color: #840a73">Forgotten password?</h1>
        </td>
       </tr>
       <tr>
        <td align="center" style="padding: 0">
         <p>
          You recently requested to rest the password for your account. <br />
          Please click the link below or copy and paste the URL in your browser.
         </p>
        </td>
       </tr>
       <tr>
        <td align="center" style="padding: 0">
         <a
          style="text-decoration: none"
          href="${localHomePage}/passwordRecovery/${shortURL}">
          <button
           style="
            font-family: 'Syne', sans-serif;
            margin-top: 1rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-top: 16px;
            padding: 6px 8px;
            gap: 4px;
            background: #f9eef8;
            border: 1px solid #f9eef8;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.24);
            border-radius: 12px;
            font-weight: 700;
            cursor: pointer;
           ">
           <img src="cid:key" alt="Italian Trulli" width="10px" height="10px" />
           <span style="margin-left: 5px">RESET PASSWORD</span>
          </button>
         </a>
         <br />
        </td>
       </tr>
       <tr>
        <td align="center" style="padding: 0; width: 300px;">
         <a
          style="
           font-family: 'Syne', sans-serif;
           margin-top: 1rem;
           color: #8b4e86;
           max-width: 300px;
          "
          href="${localHomePage}/passwordRecovery/${shortURL}"
          >${localHomePage}/passwordRecovery/${shortURL}</a
         >
        </td>
       </tr>
       <tr>
        <td align="center" style="padding: 0">
         <p style="font-family: 'Syne', sans-serif">
          If you did not request this, just ignore this email and your password
          will not be changed.
         </p>
        </td>
       </tr>
       <tr>
        <td align="center" style="padding: 0">
         <span
          align="center"
          style="font-family: 'Syne', sans-serif; margin-top: 2rem">
          if you are still having troubles, you can reach out to us at
         </span>
        </td>
       </tr>
       <tr>
        <td align="center" style="padding: 0">
         <a
          style="font-family: 'Syne', sans-serif; color: black;"
          href="mailto:luciano.polo@fakemail.com"
          >luciano.polo@fakemail.com</a
         >
         <br>
         <br>
         <br>
        </td>
       </tr>
      </table>
     </td>
    </tr>
   </table>
  </body>
   <style>
    table,
    td,
    div,
    h1,
    p {
     font-family: Arial, sans-serif;
    }
   </style>
  </head>
 </html>
 `;

 const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
   user: appEmail,
   pass: emailPassword,
  },
  tls: {
   rejectUnauthorized: false,
  },
 });

 const mailOptions = {
  from: appEmail,
  to: email,
  subject: 'Password reset request',
  html: htmlMessage,
  attachments: [
   {
    filename: 'logo.png',
    path: 'public/logo.png',
    cid: 'logo',
   },
   {
    filename: 'key.png',
    path: 'public/key.png',
    cid: 'key',
   },
  ],
 };

 transporter.sendMail(mailOptions, (err) => {
  if (err) {
   console.error(err);
  } else {
   return res.status(200).json({
    response: 'email sent successfully',
   });
  }
 });
}
