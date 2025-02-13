import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Offers.css";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/offers/api/?page=${currentPage}`)
      .then((response) => {
        setOffers(response.data.results);

        // Correct total pages calculation
        const totalItems = response.data.count; // Total offers available
        const itemsPerPage = response.data.page_size || 10; // Ensure page size is set correctly
        setTotalPages(Math.ceil(totalItems / itemsPerPage));
      })
      .catch((error) => console.error("Error fetching offers:", error));
  }, [currentPage]);

  return (
    <div className="offers-container">
      <div className="return-home">
        <Link to="/" className="return-link">
          <i className="ri-arrow-left-double-line return-icon"></i>
          <span className="return-text">Return</span>
        </Link>
      </div>
      <h1 className="offers-title">Latest Offers</h1>
      <div className="offers-grid">
        {offers.map((offer, index) => (
          <div key={index} className="offer-item">
            <img src={offer.image} alt={`Offer ${index + 1}`} className="offer-image" />
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className={`page-arrow ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <i className="ri-arrow-left-s-line"></i>
          </button>

          <span className="page-number">{currentPage} / {totalPages}</span>

          <button
            className={`page-arrow ${currentPage >= totalPages ? "disabled" : ""}`}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage >= totalPages}
          >
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Offers;