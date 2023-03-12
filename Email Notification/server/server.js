const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());

app.post("/sendEmail", async (req, res) => {
  const { email, subject, message } = req.body;
  //console.log(email, subject, message);

  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "noshapplication1228@gmail.com",
      pass: "xhwcrapzqoanbadu",
    },
  });

  let mailDetails = {
    from: "noshapplication1228@gmail.com",
    to: email,
    subject: subject,
    text: message,
  };

  mailTransporter.sendMail(mailDetails, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully");
    }
  });

  res.send("Email sent!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

exports.app = app;
