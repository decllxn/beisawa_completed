import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      {/* Floating Decorative Elements */}
      <div className="floating-circle"></div>
      <div className="floating-square"></div>

      {/* Animated 404 Title */}
      <motion.h1 
        className="error-code"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        4<span className="zero">0</span>4
      </motion.h1>

      {/* Animated Error Message */}
      <motion.p
        className="error-message"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>

      {/* Home Button with Hover Effects */}
      <motion.div
        className="home-button-container"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/" className="home-button">
          Return Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;