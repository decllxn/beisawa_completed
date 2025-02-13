import React from "react";
import Navbar from "../components/Navbar"
import CosmeticsStore from "../components/StoreSection/CosmeticsStore";

const Cosmetics = () => {
    return (
        <div>
            <Navbar />
            <CosmeticsStore />
        </div>
    );
};

export default Cosmetics;