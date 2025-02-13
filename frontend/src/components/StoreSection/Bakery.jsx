import React from "react";
import StoreSection from "./StoreSection";
import school from "./img/school.jpg";
import cosmetic from "./img/cosmetic.jpg";
import appliance from "./img/appliances.jpg";
import myImg from "./img/img1.jpg";
import wine from "./img/Red-Wine.jpg";


const Bakery = () => {
  return (
    <StoreSection
      images={[myImg, school, cosmetic, appliance, wine]}
      subtitle="Experience Beisawa"
      title="This is Our Bakery!!!!"
      description="Indulge in freshly baked bread, cakes, pastries, and more. Our bakery is committed to delivering the finest baked goods for your enjoyment."
      buttonText="Visit Our Bakery"
    />
  );
};

export default Bakery;