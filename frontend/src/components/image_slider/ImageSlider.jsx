// ImageSlider.jsx
import React, { useState } from "react";
import "./ImageSlider.css";

// Importing images
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";

const ImageSlider = () => {
  const slidesData = [
    {
      image: img1,
      title: "Slide 01",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni autem fugiat ipsa distinctio commodi natus.",
    },
    {
      image: img2,
      title: "Slide 02",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni autem fugiat ipsa distinctio commodi natus.",
    },
    {
      image: img3,
      title: "Slide 03",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni autem fugiat ipsa distinctio commodi natus.",
    },
    {
      image: img4,
      title: "Slide 04",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni autem fugiat ipsa distinctio commodi natus.",
    },
    {
      image: img5,
      title: "Slide 05",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni autem fugiat ipsa distinctio commodi natus.",
    },
    {
      image: img6,
      title: "Slide 06",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni autem fugiat ipsa distinctio commodi natus.",
    },
  ];

  const [slides, setSlides] = useState(slidesData);

  const nextSlide = () => {
    const updatedSlides = [...slides.slice(1), slides[0]];
    setSlides(updatedSlides);
  };

  const prevSlide = () => {
    const updatedSlides = [slides[slides.length - 1], ...slides.slice(0, -1)];
    setSlides(updatedSlides);
  };

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

      <div className="buttons10">
        <span className="prev10" onClick={prevSlide}>
          <i className="ri-arrow-left-line"></i>
        </span>
        <span className="next10" onClick={nextSlide}>
          <i className="ri-arrow-right-line"></i>
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;