import { useState } from "react";
import "remixicon/fonts/remixicon.css";

const SearchBox = ({ searchInput, handleSearchChange, handleSearchClick }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={`search-box ${isActive ? "active" : ""}`}>
            <button onClick={handleSearchClick} className="search-button">
                <i className="ri-search-line search-icon"></i>
            </button>
            <input
                type="text"
                value={searchInput} // Use controlled input
                onChange={handleSearchChange}
                placeholder="Search..."
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
            />
        </div>
    );
};

export default SearchBox;