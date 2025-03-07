import { motion } from "framer-motion";
import { useState } from "react";
import '../styles/AboutUs.css';
import Footer from "./Footer/Footer";
import About1 from "/AboutImg/About1.jpeg";
import About2 from "/AboutImg/About2.jpeg";
import About3 from "/AboutImg/About3.jpeg";
import About4 from "/AboutImg/About4.jpeg";
import About5 from "/AboutImg/About5.jpeg";
import About6 from "/AboutImg/About6.jpeg";
import Info from "/AboutImg/info.jpeg";
import Info1 from "/AboutImg/info1.jpeg";
import Info2 from "/AboutImg/info2.jpeg";

const images = [About1, About2, About3, About4, About5, About6];

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
            <button onClick={nextSlide} className="about-us-next-button">
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
              <img src={Info} alt="Our Mission" className="about-us-mission-branches-image" />
              <h4 className="about-us-mission-branches-title">Our Mission & Objectives</h4>
              <p className="about-us-mission-branches-text">
                To provide high-quality products and exceptional service, creating a
                pleasant shopping experience for our customers while achieving sustainable
                growth and contributing to the community.
              </p>
            </div>
            <div className="about-us-mission-branches-item">
              <img src={Info1} alt="Our Branches" className="about-us-mission-branches-image" />
              <h4 className="about-us-mission-branches-title">Our Branches</h4>
              <p className="about-us-mission-branches-text">
                We have branches conveniently located across the central region, making
                it easy for you to access our wide range of products and services. Find
                a branch near you!
              </p>
            </div>
            <div className="about-us-mission-branches-item">
              <img src={Info2} alt="Our Values" className="about-us-mission-branches-image" />
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
