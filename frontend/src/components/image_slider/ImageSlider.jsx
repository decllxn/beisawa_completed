import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

// Importing images
import sliding from "./imageslider.bs/sliding.jpeg";
import sliding1 from "./imageslider.bs/sliding1.jpeg";
import sliding2 from "./imageslider.bs/sliding2.jpeg";
import sliding3 from "./imageslider.bs/sliding3.jpeg";
import sliding4 from "./imageslider.bs/sliding4.jpeg";
import sliding5 from "./imageslider.bs/sliding5.jpeg";

const ImageSlider = () => {
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

  const [slides, setSlides] = useState(slidesData);

  const nextSlide = () => {
    setSlides((prevSlides) => [...prevSlides.slice(1), prevSlides[0]]);
  };

  const prevSlide = () => {
    setSlides((prevSlides) => [
      prevSlides[prevSlides.length - 1],
      ...prevSlides.slice(0, -1),
    ]);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="container10">
      <div className="slider10">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slides10 ${index < 2 ? "visible-slide" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="content10">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;