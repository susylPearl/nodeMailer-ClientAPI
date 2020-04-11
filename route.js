const express = require('express');
const mailer = require("nodemailer");

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post("/sendMail", (req, res) => {
    const data = req.body;
    
    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        port: 587,
        auth: {
            user: "sushilpearl13@gmail.com",
            pass: "@chiran123!!!"
        }
    });

    var mail = {
        from: data.contactEmail,
        to: "sushilpearl13@gmail.com",
        subject: data.contactSubject,
        html: `<p>${data.contactName}</p>
              <p>${data.contactEmail}</p>
              <p>${data.contactMessage}</p>`
    };

    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
            res.send(error);
        } else {
            console.log( "email sent successfully");
            res.send('Success');
        }
    });
    smtpTransport.close();
});

module.exports = router;