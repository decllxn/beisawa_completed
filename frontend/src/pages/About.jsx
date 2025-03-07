import React from "react";
import AboutUs from "../components/AboutUs";
import Navbar from "../components/Navbar";
import BackToTop from "../components/Scroll/BackToTop";



const About = () => {
    return (
        <div>
            <BackToTop />
            <Navbar />
            <AboutUs />
        </div>
    )
}

export default About