import React, { useState, useEffect } from "react";
import "./items.css";
import "./positioning.css";
import Footer from "../Footer/Footer";

const StoreSection = ({ images, title, subtitle, description, buttonText }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <div className="row5">
                <div className="imgWrapper">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={title}
                            className={`storeImg ${index === currentIndex ? "active" : ""}`}
                        />
                    ))}
                </div>
                <div className="contentWrapper">
                    <span className="textWrapper">
                        <span></span>{subtitle}
                    </span>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <a href="#">
                        {buttonText} <span className="thiscompany">BEISAWA!</span>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default StoreSection;