import React from "react";
import StoreSection from "./StoreSection";
import school from "./img/school.jpg";
import cosmetic from "./img/cosmetic.jpg";
import appliance from "./img/appliances.jpg";
import myImg from "./img/img1.jpg";
import wine from "./img/Red-Wine.jpg";


const LiquorStore = () => {
  return (
    <StoreSection
      images={[wine, school, cosmetic, appliance, myImg]}
      subtitle="Experience Beisawa"
      title="Welcome to Our Liquor Store"
      description="Discover a wide range of premium wines, spirits, and beers to suit every occasion. From local favorites to international brands, we have something for everyone."
      buttonText="Shop Liquor"
    />
  );
};

export default LiquorStore;