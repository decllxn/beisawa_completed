import React from "react";
import StoreSection from "./StoreSection";
import school from "./img/school.jpg";
import cosmetic from "./img/cosmetic.jpg";
import appliance from "./img/appliances.jpg";
import myImg from "./img/img1.jpg";
import wine from "./img/Red-Wine.jpg";


const ElectronicsStore = () => {
  return (
    <StoreSection
      images={[appliance, school, cosmetic, myImg, wine]}
      subtitle="Experience Beisawa"
      title="Explore Our Electronics Store"
      description="Upgrade your life with the latest gadgets, home appliances, and electronics. Quality products at unbeatable prices."
      buttonText="Shop Electronics"
    />
  );
};

export default ElectronicsStore;