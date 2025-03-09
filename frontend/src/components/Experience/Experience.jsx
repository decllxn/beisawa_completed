import React from "react";
import { Link } from "react-router-dom";
import "./Experience.css";
import thisOrders from "./expimg/thisOrders.jpeg";
import SawaPoints from "./expimg/SawaPoints.jpeg";
import Online from "./expimg/online-shopping.jpeg";
import Special from "./expimg/Special-Offers.jpg";

const experiences = [
  {
    title: "What's up orders",
    subtitle: "Order at the comfort of your home",
    image: thisOrders,
    link: "/whatsapp-orders",
  },
  {
    title: "Sawa points",
    subtitle: "Loyalty points from shopping",
    image: SawaPoints,
    link: "/sawa-point",
  },
  {
    title: "Sizzling offers",
    subtitle: "Get the hottest deals",
    image: Special,
    link: "/offers",
  },
  {
    title: "Online Shopping",
    subtitle: "Shop from anywhere, anytime",
    image: Online,
    link: "https://www.grocerypik.com/",
    external: true, // Flag for external links
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      {/* Section Title */}
      <h2 className="experience-title">Experience Beisawa</h2>
      <p className="experience-subtitle">
        Discover the best of shopping, rewards, and convenience.
      </p>

      {/* Experience Items */}
      <div className="experience-section">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <img src={exp.image} alt={exp.title} className="experience-image" />
            <div className="experience-overlay">
              <h2>{exp.title}</h2>
              <p>{exp.subtitle}</p>

              {/* Conditional rendering for internal & external links */}
              {exp.external ? (
                <a
                  href={exp.link}
                  className="experience-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-arrow-right-s-line"></i>
                  <span>Explore</span>
                </a>
              ) : (
                <Link to={exp.link} className="experience-link">
                  <i className="ri-arrow-right-s-line"></i>
                  <span>Explore</span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;