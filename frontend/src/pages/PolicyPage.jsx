import React from "react";
import Navbar from "../components/Navbar";
import Policy from "../components/Policy/Policy";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/Scroll/BackToTop";


const PolicyPage = () => {
    return (
        <div>
            <BackToTop />
            <Navbar />
            <Policy />
            <Footer />
        </div>
    );
};


export default PolicyPage;