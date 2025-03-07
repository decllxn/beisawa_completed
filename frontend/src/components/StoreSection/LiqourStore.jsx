import React from "react";
import StoreSection from "./StoreSection";
import Liqour1 from "./liqour/liqour1.jpeg";
import Liqour2 from "./liqour/liqour2.jpeg";
import Liqour3 from "./liqour/liqour3.jpeg";
import Liqour4 from "./liqour/liqour4.jpeg";
import Liqour5 from "./liqour/liqour5.jpeg";
import Liqour6 from "./liqour/liqour6.jpeg";
import Liqour7 from "./liqour/liqour7.jpeg";
import Liqour8 from "./liqour/liqour8.jpeg";



const LiquorStore = () => {
  return (
    <StoreSection
      images={[Liqour1, Liqour2, Liqour3, Liqour4, Liqour5, Liqour6, Liqour7, Liqour8]}
      subtitle="Experience Beisawa"
      title="Welcome to Our Liquor Store"
      description="Discover a wide range of premium wines, spirits, and beers to suit every occasion. From local favorites to international brands, we have something for everyone."
      buttonText="Shop Liquor"
    />
  );
};

export default LiquorStore;