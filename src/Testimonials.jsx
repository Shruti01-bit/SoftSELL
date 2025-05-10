import React from "react";
import "./Testimonials.css"; // Import the CSS file

const testimonials = [
  {
    name: "Alice Smith",
    role: "IT Manager",
    company: "TechCorp",
    feedback: "SoftSell made it super easy to sell our unused software licenses. Quick and reliable!",
  },
  {
    name: "John Doe",
    role: "CTO",
    company: "Innovate Inc",
    feedback: "Highly recommend! We got our payment within hours of submission.",
  },
];

const Testimonials = () => (
  <section className="testimonials">
    <h2 className="testimonials-title">What Our Customers Say</h2>
    <div className="testimonials-container">
      {testimonials.map((t, i) => (
        <div key={i} className="testimonial-card">
          <p className="testimonial-feedback">“{t.feedback}”</p>
          <h4 className="testimonial-name">{t.name}</h4>
          <p className="testimonial-role-company">{t.role}, {t.company}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
