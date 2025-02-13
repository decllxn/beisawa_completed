import { motion } from "framer-motion";
import { useState } from "react";
import '../styles/AboutUs.css';
import schoolImage from './StoreSection/img/school.jpg';
import redWineImage from './StoreSection/img/Red-Wine.jpg';
import cosmeticImage from './StoreSection/img/cosmetic.jpg';
import Footer from "./Footer/Footer";

const images = [
  schoolImage,
  redWineImage,
  cosmeticImage,
];

export default function AboutUs() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="about-us-container">
        <motion.h2
          className="about-us-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>

        <div className="about-us-image-text-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="about-us-image-container"
          >
            <img
              src={images[current]}
              alt="Supermarket Interior"
              className="about-us-image"
            />
            <button
              onClick={nextSlide}
              className="about-us-next-button"
            >
              Next
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="about-us-text-container"
          >
            <p className="about-us-text">
              Welcome to <span className="about-us-highlight">Beisawa Supermarket</span>, where quality meets affordability. We take pride in
              offering a wide range of products, from fresh groceries to household essentials,
              ensuring a seamless shopping experience for our valued customers.
            </p>
            <p className="about-us-text">
              With a commitment to excellence, we continuously strive to provide
              top-notch customer service and unbeatable prices. Your satisfaction
              is our priority, and we look forward to serving you.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="about-us-features-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="about-us-features-title">Why Shop With Us?</h3>
          <div className="about-us-features-grid">
            {[
              { title: "Quality Products", desc: "We source only the best for you." },
              { title: "Affordable Prices", desc: "Best deals without compromise." },
              { title: "Customer Satisfaction", desc: "Your happiness, our mission." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="about-us-feature-card"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="about-us-feature-title">{feature.title}</h4>
                <p className="about-us-feature-description">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about-us-mission-branches-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-us-mission-branches-grid">
            <div className="about-us-mission-branches-item">
              <img src={schoolImage} alt="Our Mission" className="about-us-mission-branches-image" />
              <h4 className="about-us-mission-branches-title">Our Mission & Objectives</h4>
              <p className="about-us-mission-branches-text">
                To provide high-quality products and exceptional service, creating a
                pleasant shopping experience for our customers while achieving sustainable
                growth and contributing to the community.
              </p>
            </div>
            <div className="about-us-mission-branches-item">
              <img src={redWineImage} alt="Our Branches" className="about-us-mission-branches-image" />
              <h4 className="about-us-mission-branches-title">Our Branches</h4>
              <p className="about-us-mission-branches-text">
                We have multiple branches conveniently located across the city, making
                it easy for you to access our wide range of products and services. Find
                a branch near you!
              </p>
            </div>
            <div className="about-us-mission-branches-item">
              <img src={cosmeticImage} alt="Our Values" className="about-us-mission-branches-image" />
              <h4 className="about-us-mission-branches-title">Our Values</h4>
              <p className="about-us-mission-branches-text">
                 Integrity, customer focus, quality, innovation, and community engagement
                 are the core values that guide our operations and shape our culture.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
