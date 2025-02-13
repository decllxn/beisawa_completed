import React from 'react';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/image_slider/ImageSlider';
import Page from '../components/Page';
import Footer from '../components/Footer/Footer';

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <ImageSlider />
            <Page />
            <Footer />
        </div>
    );
};

export default LandingPage;