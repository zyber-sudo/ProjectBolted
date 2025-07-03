// src/App.jsx
import React from "react";
import FeatureCard from "./components/FeatureCard";
import { features } from "./data/features";
import "./App.css";

function App() {
  return (
    <div className="features-container">
      {features.map((item, idx) => (
        <FeatureCard key={idx} {...item} />
      ))}
    </div>
  );
}

export default App;
