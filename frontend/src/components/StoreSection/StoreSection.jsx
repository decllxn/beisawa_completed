import React, { useState, useEffect } from "react";
import "./items.css";
import "./positioning.css";

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
            <footer className="storeFooter">
                <div className="row">
                    <div className="col">
                        <h2 className="thislogo">Beisawa</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquid neque facilis officiis necessitatibus! Iusto!</p>
                    </div>
                    <div className="col">
                        <h3>
                            Office
                            <div className="underline">
                                <span></span>
                            </div>
                        </h3>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                        <p className="email-id">beisawa@gmail.com</p>
                        <h4>+254-123456789</h4>
                    </div>
                    <div className="col">
                        <h3>
                            Links
                            <div className="underline">
                                <span></span>
                            </div>
                        </h3>
                        <ul>
                            <li className="footer-list"><a href="#home">Home</a></li>
                            <li className="footer-list"><a href="#services">Services</a></li>
                            <li className="footer-list"><a href="#about">About Us</a></li>
                            <li className="footer-list"><a href="#features">Features</a></li>
                            <li className="footer-list"><a href="#contacts">Contacts</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>
                            Newsletter
                            <div className="underline">
                                <span></span>
                            </div>
                        </h3>
                        <form className="footer-form">
                            <i className="far fa-envelope"></i>
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit">
                                <i id="myArrow" className="fas fa-arrow-right"></i>
                            </button>
                        </form>
                        <div className="footer-icons">
                            <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#twitter"><i className="fab fa-twitter"></i></a>
                            <a href="#whatsapp"><i className="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                <hr className="footer-hr" />
                <p className="copyright">Copyright © Beisawa Limited - All rights reserved</p>
            </footer>
        </>
    );
};

export default StoreSection;