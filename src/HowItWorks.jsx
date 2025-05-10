import React from "react";
import "./HowItWorks.css"; // Import the CSS file

const steps = [
  { title: "Upload License", icon: "📤" },
  { title: "Get Valuation", icon: "💰" },
  { title: "Get Paid", icon: "🏦" },
];

const HowItWorks = () => (
  <section className="how-it-works">
    <h2 className="how-it-works-title">How It Works</h2>
    <div className="steps-container">
      {steps.map(({ title, icon }) => (
        <div key={title} className="step-card">
          <div className="step-icon">{icon}</div>
          <h3 className="step-title">{title}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
