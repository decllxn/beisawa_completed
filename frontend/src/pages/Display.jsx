import React, { useState } from 'react';
import Header from '../components/Header'
import Slider from '../components/Slider';
import Thumbnail from '../components/Thumbnail';
import '../styles/Display.css'

const Display = () => {
  const [activeIndex, setActiveIndex] = useState("");

  return (
    <div className="Body">
      <Header />
      <Slider />
      <Thumbnail activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
};

export default Display;
