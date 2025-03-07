import React, { useState, useEffect } from "react";
import "./HomeOffer.css";

const HomeOffer = () => {
  const [offers, setOffers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/offers/homeOffer/");
        const data = await response.json();
        setOffers(data.results);
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };
    fetchOffers();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 4000); // Auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, [offers]);

  return (
    <div className="home-offer-container">
      <h2 className="home-offer-title">🔥 Hot Deals Just for You! 🔥</h2>
      <p className="home-offer-subtitle">Grab these amazing offers before they're gone!</p>

      <div className="home-offer-slider">
        {offers.length > 0 && (
          <img
            src={offers[currentIndex].image}
            alt={`Offer ${currentIndex + 1}`}
            className="home-offer-image"
          />
        )}
      </div>

      <div className="home-offer-buttons">
        <button className="prev-offer" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + offers.length) % offers.length)}>
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <button className="next-offer" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length)}>
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </div>
  );
};

export default HomeOffer;