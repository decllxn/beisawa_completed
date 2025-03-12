import React, { useState, useEffect, useRef } from "react";
import { fetchHomeOffers } from "../../api";
import "./HomeOffer.css";

const HomeOffer = () => {
    const [offers, setOffers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const observerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
            console.log("Observer attached to:", observerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            const loadOffers = async () => {
                try {
                    const response = await fetchHomeOffers();
                    console.log("Fetched Offers Full Response:", response);

                    // Check if response has results and it's an array
                    const offersData = response?.results || response || [];
                    if (!Array.isArray(offersData)) {
                        console.error("Invalid offers format:", offersData);
                        setOffers([]);
                        return;
                    }

                    setOffers(offersData);
                } catch (error) {
                    console.error("Error fetching offers:", error);
                    setOffers([]); // Ensure UI still works even if API fails
                }
            };
            loadOffers();
        }
    }, [isVisible]);

    useEffect(() => {
        if (offers.length > 0) {
            console.log("Offers updated:", offers);
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [offers]);

    return (
        <div ref={observerRef} className="home-offer-container">
            <h2 className="home-offer-title">🔥 Hot Deals Just for You! 🔥</h2>
            <p className="home-offer-subtitle">Grab these amazing offers before they're gone!</p>

            {offers.length > 0 ? (
                <>
                    <div className="home-offer-slider">
                        <img
                            src={offers[currentIndex]?.image_url || "/default-offer.jpg"}
                            alt={`Offer ${currentIndex + 1}`}
                            className="home-offer-image"
                        />
                    </div>

                    <div className="home-offer-buttons">
                        <button
                            className="prev-offer"
                            onClick={() =>
                                setCurrentIndex((prevIndex) => (prevIndex - 1 + offers.length) % offers.length)
                            }
                        >
                            <i className="ri-arrow-left-s-line"></i>
                        </button>
                        <button
                            className="next-offer"
                            onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length)}
                        >
                            <i className="ri-arrow-right-s-line"></i>
                        </button>
                    </div>
                </>
            ) : (
                <div className="no-offers">
                    <p>No offers at the moment</p>
                </div>
            )}
        </div>
    );
};

export default HomeOffer;