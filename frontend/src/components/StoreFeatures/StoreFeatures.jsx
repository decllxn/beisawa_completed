import React from "react";
import "./StoreFeatures.css";
import { Link } from "react-router-dom";
import liquorImage from "../StoreSection/img/Red-Wine.jpg";
import cosmeticsImage from "../StoreSection/img/cosmetic.jpg";
import bakeryImage from "../StoreSection/img/img1.jpg";
import electronicsImage from "../StoreSection/img/appliances.jpg";

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
          <Link to="/liquor-store" className="store-link">
            <img src={liquorImage} alt="Liquor Store" className="store-image" />
            <div className="store-overlay">
              <span>Liquor Store</span>
            </div>
          </Link>
        </div>
        <div className="store-item">
          <Link to="/cosmetics-store" className="store-link">
            <img
              src={cosmeticsImage}
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
            <img src={bakeryImage} alt="Bakery" className="store-image" />
            <div className="store-overlay">
              <span>Bakery</span>
            </div>
          </Link>
        </div>
        <div className="store-item">
          <Link to="/electronics" className="store-link">
            <img
              src={electronicsImage}
              alt="Electronics"
              className="store-image"
            />
            <div className="store-overlay">
              <span>Fresh Fruits and Vegetables</span>
            </div>
          </Link>
          
        </div>
        <div className="store-item">
          <Link to="/electronics" className="store-link">
            <img
              src={electronicsImage}
              alt="Electronics"
              className="store-image"
            />
            <div className="store-overlay">
              <span>Electronics</span>
            </div>
          </Link>
          
        </div>
        <div className="store-item">
          <Link to="/electronics" className="store-link">
            <img
              src={electronicsImage}
              alt="Electronics"
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