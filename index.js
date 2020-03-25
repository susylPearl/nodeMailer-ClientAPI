const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

const port = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
  console.log("We are live on port 4444");
});

app.get("/", (req, res) => {
  res.send("Welcome to my api");
});

app.post("/api/v1", (req, res) => {
  var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "susylpearl13@gmail.com",
      pass: "icannotdoanything123"
    }
  });

  var mailOptions = {
    from: data.email,
    to: "susylpearl13@gmail.com",
    subject: data.contactSubject,
    html: `<p>${data.contactName}</p>
          <p>${data.contactEmail}</p>
          <p>${data.contactMessage}</p>`
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("Success");
    }
    smtpTransport.close();
  });
});
