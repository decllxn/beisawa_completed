import React from 'react';

const SlideItem = ({ imgSrc, title, description, active }) => {
  return (
    <div className={`item ${active ? 'active' : ''}`}>
      <img src={imgSrc} alt={title} />
      <div className="content">
        <p>design</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SlideItem;
