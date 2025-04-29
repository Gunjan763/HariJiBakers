import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      Swal.fire({
        title: 'Thank you! ❤️',
        text: 'Thank you for contacting Hari Ji Bakers!',
        icon: 'success',
        confirmButtonText: 'Okay'
      });
      setFormData({ name: '', email: '', message: '' });
    } else {
      Swal.fire({
        title: 'Oops! ❌',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonText: 'Retry'
      });
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2 className="contact-heading">Let's Bake a Conversation! 🍰</h2>
        <p className="contact-subheading">We'd love to hear from you — drop us a message!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="contact-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="contact-input"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="contact-textarea"
            required
          />
          <button type="submit" className="contact-submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
