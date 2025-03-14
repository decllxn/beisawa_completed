import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

// Import images
import sliding from "./imageslider.bs/sliding.jpeg";
import sliding1 from "./imageslider.bs/sliding1.jpeg";
import sliding2 from "./imageslider.bs/sliding2.jpeg";
import sliding3 from "./imageslider.bs/sliding3.jpeg";
import sliding4 from "./imageslider.bs/sliding4.jpeg";
import sliding5 from "./imageslider.bs/sliding5.jpeg";

const slidesData = [
  {
    image: sliding,
    title: "Welcome to Beisawa",
    description:
      "Step into Beisawa, where quality meets convenience. Experience top-tier shopping like never before!",
  },
  {
    image: sliding1,
    title: "A Landmark of Excellence",
    description:
      "Our supermarket stands as a beacon of quality, offering a premium shopping experience for all.",
  },
  {
    image: sliding2,
    title: "Spacious & Inviting",
    description:
      "Designed for comfort, our store provides a relaxing atmosphere for all your shopping needs.",
  },
  {
    image: sliding3,
    title: "Easily Accessible",
    description:
      "Located in a prime area, Beisawa is your go-to supermarket with ample parking and convenience.",
  },
  {
    image: sliding4,
    title: "A Community Hub",
    description:
      "More than a store—Beisawa is a place where the community comes together for great deals and fresh products.",
  },
  {
    image: sliding5,
    title: "Shop With Confidence",
    description:
      "From fresh produce to household essentials, we ensure the best quality for you and your family.",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length
    );
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 3000); // Auto-slide every 4 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div
      className="image-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="slides-container">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay"></div>
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button className="prev-button" onClick={prevSlide}>
        ❮
      </button>
      <button className="next-button" onClick={nextSlide}>
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="dots-container">
        {slidesData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;