import React from "react";
import StoreSection from "./StoreSection";
import Grocery1 from "./Grocery/Grocery1.jpeg";
import Grocery2 from "./Grocery/Grocery2.jpeg";
import Grocery3 from "./Grocery/Grocery3.jpeg";
import Grocery4 from "./Grocery/Grocery4.jpeg";
import Grocery5 from "./Grocery/Grocery5.jpeg";
import Grocery6 from "./Grocery/Grocery6.jpeg";
import Grocery7 from "./Grocery/Grocery7.jpeg";
import Grocery from "./Grocery/Grocery.jpeg";




const GroceryStore = () => {
  return (
    <StoreSection
      images={[Grocery, Grocery1, Grocery2, Grocery3, Grocery4, Grocery5, Grocery6, Grocery7]}
      subtitle="Fresh & Quality Products"
      title="Beisawa Grocery Store"
      description="Shop the freshest fruits, vegetables, dairy products, baked goods, and beverages at Beisawa. Quality and affordability in one place."
      buttonText="Shop Now"
    />
  );
};

export default GroceryStore;
