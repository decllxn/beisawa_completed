import React from "react";
import StoreSection from "./StoreSection";
import school from "./img/school.jpg";
import cosmetic from "./img/cosmetic.jpg";
import appliance from "./img/appliances.jpg";
import myImg from "./img/img1.jpg";
import wine from "./img/Red-Wine.jpg";

const BackToSchool = () => {
  return (
    <StoreSection
      images={[school, cosmetic, appliance, myImg, wine]}
      subtitle="Experience Beisawa"
      title="Back to School Offers"
      description="Get ready for the new school year with our amazing back-to-school deals on stationery, uniforms, bags, and more."
      buttonText="Shop Now"
    />
  );
};

export default BackToSchool;
