import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Contact route to handle email sending
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'gunjanaggarwal278@gmail.com',
      pass: 'trfitpglemxqnayn',
    },
  });

  const mailOptions = {
    from: 'gunjanaggarwal278@gmail.com',
    replyTo: email,
    to: 'gunjanaggarwal278@gmail.com',
    subject: `New Message from ${name}`,
    text: `You received a message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error('Email failed to send:', err);
    res.status(500).json({ error: 'Failed to send message', detail: err.message });
  }
});

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all route for any routes that aren't handled by the React app (this is crucial for React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
