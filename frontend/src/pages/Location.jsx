import React from "react";
import Navbar from "../components/Navbar";
import BranchesMap from "../components/Locations/BranchesMap";
import Footer from "../components/Footer/Footer";

const Location = () => {
    return (
        <div>
            <Navbar />
            <BranchesMap />
            <Footer />
        </div>
    )
}

export default Location;