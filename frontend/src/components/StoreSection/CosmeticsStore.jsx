import React from "react";
import StoreSection from "./StoreSection";
import school from "./img/school.jpg";
import cosmetic from "./img/cosmetic.jpg";
import appliance from "./img/appliances.jpg";
import myImg from "./img/img1.jpg";
import wine from "./img/Red-Wine.jpg";


const CosmeticsStore = () => {
  return (
    <StoreSection
      images={[cosmetic, school, appliance, myImg, wine]}
      subtitle="Experience Beisawa"
      title="Discover Our Cosmetics Store"
      description="Enhance your beauty with our premium range of cosmetics and skincare products. From everyday essentials to luxury brands."
      buttonText="Shop Cosmetics"
    />
  );
};

export default CosmeticsStore;