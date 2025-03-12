import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchOffers } from "../../api"; // Import centralized API call
import "./Offers.css";
import { motion } from "framer-motion"; // Animation

const Offers = () => {
    const [offers, setOffers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadOffers = async () => {
            setLoading(true);
            setError(false); // Reset error state before fetching
            
            try {
                const data = await fetchOffers(currentPage);
                console.log("Fetched Offers Data:", data);

                if (data && Array.isArray(data.results)) {
                    setOffers(data.results);
                    const calculatedPages = data.count && data.count > 0 ? Math.ceil(data.count / (data.page_size || 10)) : 1;
                    setTotalPages(calculatedPages);
                } else {
                    setOffers([]);
                    setTotalPages(1);
                    console.error("Invalid data format:", data);
                }
            } catch (error) {
                console.error("Error fetching offers:", error);
                setError(true);
                setOffers([]);
            }

            setLoading(false);
        };

        loadOffers();
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

            {loading ? (
                <motion.div className="loading-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    Loading offers...
                </motion.div>
            ) : error ? (
                <motion.div className="error-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    Failed to load offers. Please try again later.
                </motion.div>
            ) : offers.length === 0 ? (
                <motion.div className="no-offers2" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
                    <i className="ri-emotion-sad-line"></i>
                    <p>No offers at the moment. Stay tuned!</p>
                </motion.div>
            ) : (
                <div className="offers-grid">
                    {offers.map((offer, index) => (
                        <motion.div key={offer.id || index} className="offer-item" whileHover={{ scale: 1.05 }}>
                            <img src={offer.image_url || "/default-offer.jpg"} alt={`Offer ${index + 1}`} className="offer-image" />
                        </motion.div>
                    ))}
                </div>
            )}

            {totalPages > 1 && (
                <div className="pagination">
                    <button
                        className={`page-arrow ${currentPage === 1 ? "disabled" : ""}`}
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        <i className="ri-arrow-left-s-line"></i>
                    </button>

                    <span className="page-number">
                        {currentPage} / {totalPages}
                    </span>

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