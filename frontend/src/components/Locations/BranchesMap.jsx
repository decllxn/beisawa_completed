import React, { useEffect, useState } from "react";
import "./BranchesMap.css"; // Import the CSS file

const BranchMap = () => {
    const [branches, setBranches] = useState([]);

    useEffect(() => {
        // Fetch branches from the API
        fetch("http://127.0.0.1:8000/locations/api/branches/")
            .then((response) => response.json())
            .then((data) => setBranches(data.results))
            .catch((error) => console.error("Error fetching branches:", error));
    }, []);

    return (
        <div className="locations-container">
            <h2 className="locations-title">Our Branches</h2>

            <div className="branches-grid">
                {branches.map((branch) => (
                    <div key={branch.id} className="branch-card">
                        <h3 className="branch-name">{branch.name}</h3>
                        <p className="branch-address">
                            
                        </p>
                        <div className="map-container">
                            <iframe
                                loading="lazy"
                                allowFullScreen
                                src={`https://maps.google.com/maps?q=${branch.latitude},${branch.longitude}&hl=en&z=17&output=embed`}
                                title={branch.name}
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BranchMap;