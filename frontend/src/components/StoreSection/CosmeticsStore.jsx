import React from "react";
import StoreSection from "./StoreSection";
import Cosmetic1 from "./cosmetic/cosmetic1.jpeg";
import Cosmetic2 from "./cosmetic/cosmetic2.jpeg";
import Cosmetic3 from "./cosmetic/cosmetic3.jpeg";
import Cosmetic4 from "./cosmetic/cosmetic4.jpeg";



const CosmeticsStore = () => {
  return (
    <StoreSection
      images={[Cosmetic1, Cosmetic2, Cosmetic3, Cosmetic4]}
      subtitle="Experience Beisawa"
      title="Discover Our Cosmetics Store"
      description="Enhance your beauty with our premium range of cosmetics and skincare products. From everyday essentials to luxury brands."
      buttonText="Shop Cosmetics"
    />
  );
};

export default CosmeticsStore;