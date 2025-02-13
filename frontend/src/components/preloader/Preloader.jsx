import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="wrap">
      <div className="loading">
        <div className="bounceball"></div>
        <div className="text">NOW LOADING</div>
      </div>
    </div>
  );
};

export default Preloader;