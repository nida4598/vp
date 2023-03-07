import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us-container">
      <br />
      <h1>Contact Us</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactUs;
