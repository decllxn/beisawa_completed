import React from "react";
import StoreSection from "./StoreSection";
import Bakeryimg1 from "./Bakery/bakeryimg1.jpeg";
import Bakeryimg2 from "./Bakery/bakeryimg2.jpeg";
import Bakeryimg3 from "./Bakery/bakeryimg3.jpeg";
import Bakeryimg4 from "./Bakery/bakeryimg4.jpeg";


const Bakery = () => {
  return (
    <StoreSection
      images={[Bakeryimg1, Bakeryimg2, Bakeryimg3, Bakeryimg4]}
      subtitle="Experience Beisawa"
      title="This is Our Bakery!!!!"
      description="Indulge in freshly baked bread, cakes, pastries, and more. Our bakery is committed to delivering the finest baked goods for your enjoyment."
      buttonText="Visit Our Bakery"
    />
  );
};

export default Bakery;