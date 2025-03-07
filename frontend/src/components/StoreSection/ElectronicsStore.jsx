import React from "react";
import StoreSection from "./StoreSection";
import Appliance from "./Appliance/Appliance.jpeg"
import Appliance1 from "./Appliance/Appliance1.jpeg"
import Appliance2 from "./Appliance/Appliance2.jpeg"
import Appliance3 from "./Appliance/Appliance3.jpeg"
import Appliance4 from "./Appliance/Appliance4.jpeg"
import Appliance5 from "./Appliance/Appliance5.jpeg"


const ElectronicsStore = () => {
  return (
    <StoreSection
      images={[Appliance, Appliance1, Appliance2, Appliance3, Appliance4, Appliance5]}
      subtitle="Experience Beisawa"
      title="Explore Our Electronics Store"
      description="Upgrade your life with the latest gadgets, home appliances, and electronics. Quality products at unbeatable prices."
      buttonText="Shop Electronics"
    />
  );
};

export default ElectronicsStore;