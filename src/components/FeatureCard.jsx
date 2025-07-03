// src/components/FeatureCard.jsx
import React from "react";
import "./FeatureCard.css"; // optional CSS module or styles

const FeatureCard = ({ title, desc, image }) => {
  return (
    <div
      className="feature-card"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="overlay">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
