import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import '../styles/Page.css';
import myImage from '../assets/shoppingpic.jpg';
import StoreFeatures from './StoreFeatures/StoreFeatures';
import Experience from './Experience/Experience';
import Read from './Read/Read';
import HomeOffer from './HomeOffer/HomeOffer';
import BackToTop from './Scroll/BackToTop';

const Page = () => {
  useEffect(() => {
    const scrollRevealOptions = {
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
    };

    ScrollReveal().reveal(".header__image img", { ...scrollRevealOptions, origin: "right" });
    ScrollReveal().reveal(".header__content h1", { ...scrollRevealOptions, delay: 400 });
    ScrollReveal().reveal(".header__content p", { ...scrollRevealOptions, delay: 800 });
    ScrollReveal().reveal(".header__content form", { ...scrollRevealOptions, delay: 1200 });
    ScrollReveal().reveal(".header__content .bar", { ...scrollRevealOptions, delay: 1600 });
    ScrollReveal().reveal(".header__image__card", { interval: 300, delay: 1800 });
  }, []);

  return (
    <>
      <BackToTop />
      <div className="header__container">
        <div className="header__image">
          <div className="header__image__card header__image__card-1">
            <span><i className="ri-bread-line"></i></span>
            <Link to="/bakery" className="text__link">Bakery</Link>
          </div>
          <div className="header__image__card header__image__card-2">
            <span><i className="ri-goblet-line"></i></span>
            <Link to="/liqourstore" className="text__link">Liquor Store</Link>
          </div>
          <div className="header__image__card header__image__card-3">
            <span><i className="ri-shopping-basket-fill"></i></span>
            <Link to="/electronicsstore" className="text__link">Appliances</Link>
          </div>
          <div className="header__image__card header__image__card-4">
            <span><i className="ri-store-2-line"></i></span>
            <Link to="/cosmetics" className="text__link">Cosmetics</Link>
          </div>
          <div className="header__image__card header__image__card-5">
            <span><i className="ri-shopping-basket-line"></i></span>
            <Link to="/grocery" className="text__link">Groceries</Link>
          </div>
          <img src={myImage} alt="Beisawa Supermarket" />
        </div>

        <div className="header__content">
          <h1>WELCOME TO <br />THE <span>BEISAWA</span></h1>
          <p>
            Where quality meets convenience! 
            Discover fresh produce, unbeatable prices, and friendly service 
            that makes every shopping trip a delight. 
            Your satisfaction is our priority!
          </p>
          <form action="/">
            <div className="input__row">
              <div className="input__group">
                <h5>Located at:</h5>
                <div>
                  <span><i className="ri-map-pin-line"></i></span>
                  <Link to="/location" className='text__link'>Our Branches</Link>
                </div>
              </div>
            </div>
          </form>
          <div className="bar"></div>
        </div>
      </div>

      <HomeOffer />
      <StoreFeatures />
      <Read />
      <Experience />
    </>
  );
};

export default Page;