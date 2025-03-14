import React from "react";
import "./StoreFeatures.css";
import { Link } from "react-router-dom";
import Whiskey from "./Storefeatures/whiskey.jpeg";
import Cosmetic from "./Storefeatures/cosmeticss.avif";
import Appliance from "./Storefeatures/appliancess.jpg";
import Bakery from "./Storefeatures/Bakery.jpeg";
import Fruits from "./Storefeatures/fruitsandveggies.jpg";
import Home from "./Storefeatures/home.jpeg";


const StoreFeatures = () => {
  return (
    <div className="store-features-container">
      <h2 className="store-title">What you can find in our store</h2>
      <p className="store-description">
        Our store boasts a diverse range of high-quality products, including a
        premium Liquor Store, an exquisite Cosmetics Store, a delightful Bakery,
        cutting-edge Electronics, and fresh Fruits & Vegetables. Explore the
        best products curated just for you.
      </p>
      <div className="store-grid">
        <div className="store-item">
          <Link to="/liqourstore" className="store-link">
            <img src={Whiskey} alt="Liquor Store" className="store-image" />
            <div className="store-overlay">
              <span>Liquor Store</span>
            </div>
          </Link>
        </div>
        <div className="store-item">
          <Link to="/cosmetics" className="store-link">
            <img
              src={Cosmetic}
              alt="Cosmetics Store"
              className="store-image"
            />
            <div className="store-overlay">
              <span>Cosmetics Store</span>
            </div>
          </Link>
        </div>
        <div className="store-item">
          <Link to="/bakery" className="store-link">
            <img src={Bakery} alt="Bakery" className="store-image" />
            <div className="store-overlay">
              <span>Bakery</span>
            </div>
          </Link>
        </div>
        <div className="store-item">
          <Link to="/grocery" className="store-link">
            <img
              src={Fruits}
              alt="Fruits"
              className="store-image"
            />
            <div className="store-overlay">
              <span>Fresh Fruits and Vegetables</span>
            </div>
          </Link>
          
        </div>
        <div className="store-item">
          <Link to="/electronicsstore" className="store-link">
            <img
              src={Appliance}
              alt="Electronics"
              className="store-image"
            />
            <div className="store-overlay">
              <span>Electronics</span>
            </div>
          </Link>
          
        </div>
        <div className="store-item">
          <Link to="/home" className="store-link">
            <img
              src={Home}
              alt="Home"
              className="store-image"
            />
            <div className="store-overlay">
              <span>Home</span>
            </div>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default StoreFeatures;