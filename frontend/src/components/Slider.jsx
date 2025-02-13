import React, { useState, useEffect } from 'react';
import SlideItem from './SlideItem';

const slides = [
  { img: '/images/groceryshopping.jpg', title: 'Groceries', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?' },
  { img: '/images/bakery.jpg', title: 'Bakery', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?' },
  { img: '/images/alcohol.jpg', title: 'Liquor', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?' },
  { img: '/images/backtoschool.jpg', title: 'School', description: 'Back to school offers' },
  { img: '/images/electronics.jpg', title: 'Appliances', description: 'Lorem ipsum dolor sit amet consectetur.' }
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const countItem = slides.length;

  // Move to the next slide
  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % countItem);
  // Move to the previous slide
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + countItem) % countItem);

  // Auto-slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="list">
        {slides.map((slide, index) => (
          <SlideItem
            key={index}
            imgSrc={slide.img}
            title={slide.title}
            description={slide.description}
            active={index === activeIndex}  // Highlight the active slide
          />
        ))}
      </div>
      <div className="arrows">
        <button onClick={prevSlide}>{"<"}</button>
        <button onClick={nextSlide}>{">"}</button>
      </div>
    </div>
  );
};

export default Slider;