import React from "react";
import { Link } from "react-router-dom";
import "./Experience.css";
import liquorImage from "../StoreSection/img/Red-Wine.jpg";
import cosmeticsImage from "../StoreSection/img/cosmetic.jpg";
import bakeryImage from "../StoreSection/img/img1.jpg";
import electronicsImage from "../StoreSection/img/appliances.jpg";

const experiences = [
  {
    title: "What's up orders",
    subtitle: "Order at the comfort of your home",
    image: liquorImage,
    link: "/whats-up-orders",
  },
  {
    title: "Sawa points",
    subtitle: "Loyalty points from shopping",
    image: cosmeticsImage,
    link: "/sawa-point",
  },
  {
    title: "Sizzling offers",
    subtitle: "Get the hottest deals",
    image: bakeryImage,
    link: "/offers",
  },
  {
    title: "Online Shopping",
    subtitle: "Shop from anywhere, anytime",
    image: electronicsImage,
    link: "/online-shopping",
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      {/* Section Title */}
      <h2 className="experience-title">Experience Beisawa</h2>
      <p className="experience-subtitle">Discover the best of shopping, rewards, and convenience.</p>

      {/* Experience Items */}
      <div className="experience-section">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <img src={exp.image} alt={exp.title} className="experience-image" />
            <div className="experience-overlay">
              <h2>{exp.title}</h2>
              <p>{exp.subtitle}</p>
              <Link to={exp.link} className="experience-link">
                <i className="ri-arrow-right-s-line"></i>
                <span>Explore</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;