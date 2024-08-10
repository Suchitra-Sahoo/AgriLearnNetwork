const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  fullname: String,
  emailaddress: String,
  mobileNumber: String,
  emailsubject: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Contact form route
app.post('/contact', (req, res) => {
  const { fullname, emailaddress, mobileNumber, emailsubject, message } = req.body;

  // Save contact to database
  const newContact = new Contact({ fullname, emailaddress, mobileNumber, emailsubject, message });
  newContact.save()
    .then(() => {
      // Send acknowledgment email
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: emailaddress,
        subject: 'Thank you for contacting us',
        text: `Dear ${fullname},\n\nThank you for reaching out. We will respond to your inquiry as soon as possible.\n\nBest regards,\n AgriLearnNetwork`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).send('Error sending email');
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).send('Contact saved and email sent');
        }
      });
    })
    .catch(err => res.status(500).send('Error saving contact'));
});

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
