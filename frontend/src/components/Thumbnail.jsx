import React from 'react';
import ThumbnailItem from './ThumbnailItem';

const Thumbnail = ({ activeIndex, setActiveIndex }) => {
  const thumbnails = [
    { img: '/images/groceryshopping.jpg', title: 'Fresh Vegetables' },
    { img: '/images/bakery.jpg', title: 'Hot Kitchen' },
    { img: '/images/alcohol.jpg', title: 'Beverages' },
    { img: '/images/backtoschool.jpg', title: 'Shopping' },
    { img: '/images/electronics.jpg', title: 'Appliances' }
  ];

  return (
    <div className="thumbnail">
      {thumbnails.map((thumb, index) => (
        <ThumbnailItem
          key={index}
          imgSrc={thumb.img}
          title={thumb.title}
          active={index === activeIndex}  // Highlight active thumbnail
          onClick={() => setActiveIndex(index)}  // Update the slider when thumbnail is clicked
        />
      ))}
    </div>
  );
};

export default Thumbnail;