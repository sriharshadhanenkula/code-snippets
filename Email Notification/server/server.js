const express = require("express");
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const app = express();

app.use(express.json());

const accountCreateHtml = fs.readFileSync(
  "./accountCreation.handlebars",
  "utf-8"
);
const accountCreateTemplate = handlebars.compile(accountCreateHtml);

const paymentHtml = fs.readFileSync("./payment.handlebars", "utf-8");
const paymentTemplate = handlebars.compile(paymentHtml);

app.post("/sendEmail", async (req, res) => {
  const { email, subject } = req.body;
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
    //text: message,
    html: paymentTemplate({
      name: "John Doe",
      orderItems: [
        { name: "Pizza", price: "$10.99" },
        { name: "Salad", price: "$5.99" },
      ],
      total: "$16.98",
    }),
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
