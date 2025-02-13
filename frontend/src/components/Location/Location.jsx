import React from "react";
import "./Location.css"; // Import the CSS file

const Location = () => {
    return (
        <div className="location-container">
            <h2>Our Location</h2>
            <p className="location-address">
                Bei Sawa Supermarket Maua Branch <br />
                N & N Centre, Hospital Road, Murram Road, Maua
            </p>
            <div className="map-container">
                <iframe
                    loading="lazy"
                    allowFullScreen
                    src="https://maps.google.com/maps?q=0.234139,37.941833&hl=en&z=15&output=embed"
                    title="Bei Sawa Supermarket Maua Branch"
                ></iframe>
            </div>
        </div>
    );
};

export default Location;