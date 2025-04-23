const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // For handling cross-origin requests
const app = express();

app.use(cors()); // Allow cross-origin requests (important for development)
app.use(express.json()); // Parse JSON body in requests

// Serve the contact form page (if needed)
app.get('/', (req, res) => {
  res.send('Contact form API is running');
});

// API to handle contact form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gunjanaggarwal278@gmail.com', // Your email
      pass: 'otdh erlf xeag romz', // App password (make sure you have 2FA and an app password)
    },
  });

  // Email to the sender (thank you message)
  const senderMailOptions = {
    from: 'gunjanaggarwal278@gmail.com', // Your email
    to: email, // Sender's email
    subject: 'Thank you for your feedback!',
    text: `Dear ${name},\n\nThank you for reaching out to Hari Ji Bakers. We will get back to you soon.\n\nBest regards,\nHari Ji Bakers`,
  };

  // Email to the receiver (details about the sender)
  const receiverMailOptions = {
    from: email, // Sender's email
    to: 'gunjanaggarwal278@gmail.com', // Your email
    subject: `Contact form message from ${name}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  // Send email to the sender
  transporter.sendMail(senderMailOptions, (error, info) => {
    if (error) {
      console.log('Error sending sender email:', error);
      return res.status(500).json({ message: 'Error sending email' });
    }

    // Send email to the receiver
    transporter.sendMail(receiverMailOptions, (error, info) => {
      if (error) {
        console.log('Error sending receiver email:', error);
        return res.status(500).json({ message: 'Error sending email' });
      }

      // Success, return response
      console.log('Emails sent:', info.response);
      return res.status(200).json({ message: 'Message sent successfully!' });
    });
  });
});

// Start the server
const PORT = 5200;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
