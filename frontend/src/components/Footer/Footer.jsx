import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col">
                    <h2 className="thislogo">Beisawa</h2>
                    <p>
                        Beisawa in Maua, Meru County, offers quality products, 
                        great deals, and an exceptional shopping experience.
                    </p>
                </div>
                <div className="col">
                    <h3>
                        Our Head Office
                        <div className="underline">
                            <span></span>
                        </div>
                    </h3>
                    <div className="contact-info-footer">
                        <p><i className="ri-map-pin-line"></i>Meru County</p>
                        <p><i className="ri-phone-line"></i> +254 700 123 456</p>
                        <p><i className="ri-mail-line"></i> info@beisawa.com</p>
                    </div>
                </div>
                <div className="col">
                    <h3>
                        Links
                        <div className="underline">
                            <span></span>
                        </div>
                    </h3>
                    

                    <ul>
                        <li className="footer-list">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="footer-list">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className="footer-list">
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className="footer-list">
                            <Link to="/policy">Policy</Link>
                        </li>
                        <li className="footer-list">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>

                </div>
                <div className="col">
                    <h3>
                        Customer Service
                        <div className="underline">
                            <span></span>
                        </div>
                    </h3>
                    <p>Our Customer Service team is here to help you.</p>
                    <div className="opening-hours">
                        <p><i className="ri-time-line"></i> Mon - Fri: 8am to 5pm</p>
                        <p><i className="ri-time-line"></i> Sat: 8am to 1pm</p>
                        <p><i className="ri-close-circle-line"></i> Sun: Closed</p>
                    </div>

                </div>
            </div>
            <hr className="footer-hr"/>
            <p className="copyright">Copyright © Beisawa limited - all rights reserved</p>
        </footer>
    );
};

export default Footer;