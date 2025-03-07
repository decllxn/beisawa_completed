import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.jpeg';
import "../styles/Navbar.css";
import ImageSlider from './image_slider/ImageSlider';

const Navbar = () => {
    // State to manage the open/close status of the nav menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    // Function to toggle the menu open/close state
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    }
  
    return (
      <div className="header" id="header">
        <nav className="nav">
          <Link className="nav__logo">
            <img src={logo} alt="logo" />
          </Link>
  
          <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  <i className="ri-arrow-right-s-line"></i>
                  <span>Home</span>
                </Link>
              </li>
  
              <li className="nav__item">
                <Link to="/About" className="nav__link">
                  <i className="ri-arrow-right-s-line"></i>
                  <span>About Us</span>
                </Link>
              </li>

              <li className="nav__item">
                <Link to="/blog" className="nav__link">
                  <i className="ri-arrow-right-s-line"></i>
                  <span>Blog</span>
                </Link>
              </li>
  
              <li className="nav__item">
                <Link to="/policy" className="nav__link">
                  <i className="ri-arrow-right-s-line"></i>
                  <span>Policy</span>
                </Link>
              </li>
  
              <li className="nav__item">
                <Link to="/contact" className="nav__link">
                  <i className="ri-arrow-right-s-line"></i>
                  <span>Contact</span>
                </Link>
              </li>
  
              <li className="nav__item">
                <Link to="/whatsapp-orders" className="nav__link">
                  <i className="ri-arrow-right-s-line"></i>
                  <span>Whatsapp orders</span>
                </Link>
              </li>
            </ul>

            <div className="nav__close" onClick={toggleMenu}>
              <i className="ri-close-line"></i>
            </div>
  
            <div className="nav__social">
              <a href="https://www.instagram.com/beisawasupermarket/" rel="noreferrer" className="nav__social-link">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://tiktok.com/beisawasupermarket" rel="noreferrer" className="nav__social-link">
                <i className="ri-tiktok-line"></i>
              </a>
              <a href="https://web.facebook.com/people/Beisawa-Supermarket/100075878927275/#" target="_blank" rel="noreferrer" className="nav__social-link">
                <i className="ri-facebook-line"></i>
              </a>
              <a href="https://www.youtube.com/@BeisawaSupermarket" rel="noreferrer" className="nav__social-link">
                <i className="ri-youtube-line"></i>
              </a>
              <a href="https://x.com/?lang=en" rel="noreferrer" className="nav__social-link">
                <i className="ri-twitter-x-line"></i>
              </a>
            </div>
          </div>
  
          {/* Toggle button */}
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </div>
        </nav>
      </div>
    );
  };
  
  export default Navbar;