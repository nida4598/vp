import './ContactUs.css';
import React, { useState } from 'react';


function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
    <h1>Contact Us</h1>
    <div className="contact-us-container">
      {submitted ? (
        <p>Thank you for your submission!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
    </>
  );
}

export default ContactUs;





