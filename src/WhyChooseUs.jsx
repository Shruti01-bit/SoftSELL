import React from "react";
import "./WhyChooseUs.css"; // Import the CSS file

const features = [
  { icon: "⚡", title: "Quick Payouts", desc: "Get your money within 24 hours." },
  { icon: "🔒", title: "Secure Transactions", desc: "We ensure safe license transfers." },
  { icon: "💼", title: "Trusted by Businesses", desc: "Thousands of happy customers." },
  { icon: "🛠️", title: "Expert Support", desc: "Support available 24/7." },
];

const WhyChooseUs = () => (
  <section className="why-choose-us">
    <h2 className="section-title">Why Choose SoftSell?</h2>
    <div className="features-container">
      {features.map(({ icon, title, desc }) => (
        <div key={title} className="feature-card">
          <div className="feature-icon">{icon}</div>
          <h3 className="feature-title">{title}</h3>
          <p className="feature-desc">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
