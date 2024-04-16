const { text } = require("body-parser");
const { info } = require("console");
const nodemailer = require("nodemailer");
require("dotenv").config();
const path = require("path");
const { send } = require("process");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "gunyash665@gmail.com",
    pass: 'jelwshwcssywekje',
  },
});

module.exports = {
  sendMailToUser: async (recipientEmail) => {
    const emailOptions = {
      from: {
        name: "Ganesh Thapa",
        address: 'gunyash665@gmail.com',
      },
      to: recipientEmail,
      subject: "Better World Employment Services your Dream Job Awaits!",
      text: "You have successfully register with Better World Employment Services!",
      html: `<h1>Thank you for your presence</h1> <p>Welcome to Better World Employment Services! <br> 

      Dear user, <br> 
      
      Welcome to Better World Employment Services! We're thrilled to have you on board.<br> 
      
      At Better World Employment Services, we're dedicated to helping you find your dream job. Here's how to get started: <br> 
      
      1. Complete your profile: Showcase your skills and experience to stand out to employers.<br> 
      2. Explore job listings: Find opportunities that match your interests and career goals.<br> 
      3. Set up job alerts: Stay informed about new job openings that suit your preferences.<br> 
      4. Network with professionals: Connect with others in your field to expand your opportunities. <br> 
      
      If you have any questions, feel free to reach out to our support team at betterworldservices12@gmail.com <br> 
      
      Best regards,<br> 
      Better World Employment Services <br> 
      </p>`,
    //   attachments: {
    //     filename: "nodemailer.jpg",
    //     path: path.join(__dirname, "public", "images", "nodemailer.jpg"),
    //     contentType: "image/jpeg",
    //   },
    };

    try {
        const info = await transporter.sendMail(emailOptions);
        console.log("Email has been sent", info.response)
    } catch (error) {
        console.log("Error Occured", error.message)
    }

  },
};

