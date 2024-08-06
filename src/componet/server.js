// server.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3001; // Choose any port you prefer

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// POST route for handling form submission
app.post('/send-email', (req, res) => {
  const { name, email, subject, company, message } = req.body;

  // Create a transporter with SMTP settings
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com', // Your Gmail email address
      pass: 'your-password' // Your Gmail password or app-specific password
    }
  });

  // Email message configuration
  const mailOptions = {
    from: email,
    to: 'export_bruk@purposeblack.et', // Recipient email address
    subject: subject,
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Company: ${company}</p>
      <p>Message: ${message}</p>
    `
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
