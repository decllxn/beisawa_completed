import React from "react";
import Grocery from "../components/StoreSection/Grocery";
import Navbar from "../components/Navbar"

const GroceryPage = () => {
    return (
        <div>
            <Navbar />
            <Grocery />
        </div>
    );
};

export default GroceryPage;