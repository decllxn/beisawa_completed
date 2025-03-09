import React, { useState } from "react";
import { fetchBranches } from "../../api"; // Centralized API call
import "./BranchesMap.css";

const BranchMap = () => {
  const [branches, setBranches] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const loadBranches = async () => {
    if (!isLoaded) {
      try {
        const data = await fetchBranches();
        setBranches(data.results || []);
      } catch (err) {
        setError("Failed to load branches");
        console.error("Error fetching branches:", err);
      }
      setIsLoaded(true);
    }
  };

  return (
    <div className="locations-container" onMouseEnter={loadBranches}>
      <h2 className="locations-title">📍 Our Branches</h2>

      {!isLoaded ? (
        <div className="loading-message">Hover here to load branch locations...</div>
      ) : branches.length === 0 ? (
        <div className="no-branches">
          <p>No branches updated yet!</p>
        </div>
      ) : (
        <div className="branches-grid">
          {branches.map((branch) => (
            <div key={branch.id} className="branch-card">
              <h3 className="branch-name">{branch.name}</h3>
              <p className="branch-address">{branch.address || "No address available"}</p>
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
      )}
    </div>
  );
};

export default BranchMap;