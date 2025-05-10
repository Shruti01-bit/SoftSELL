import React from "react";
import "./ContactForm.css"; // Import the CSS file

const ContactForm = () => (
  <section className="contact-form-section">
    <h2 className="contact-form-title">Contact Us</h2>
    <form className="contact-form">
      <input type="text" placeholder="Name" required className="contact-form-input" />
      <input type="email" placeholder="Email" required className="contact-form-input" />
      <input type="text" placeholder="Company" className="contact-form-input" />
      <select required className="contact-form-select">
        <option value="">Select License Type</option>
        <option>Office Suite</option>
        <option>Antivirus</option>
        <option>Developer Tools</option>
      </select>
      <textarea placeholder="Message" required className="contact-form-textarea" rows="4"></textarea>
      <button type="submit" className="contact-form-button">
        Submit
      </button>
    </form>
  </section>
);

export default ContactForm;
