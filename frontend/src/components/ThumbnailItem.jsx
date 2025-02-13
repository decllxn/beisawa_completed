import React from 'react';

const ThumbnailItem = ({ imgSrc, title, active, onClick }) => {
  return (
    <div className={`item ${active ? 'active' : ''}`} onClick={onClick}>
      <img src={imgSrc} alt={title} />
      <div className="content">{title}</div>
    </div>
  );
};

export default ThumbnailItem;