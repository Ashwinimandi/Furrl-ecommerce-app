import React, { useState, useEffect } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faHeart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [loading, setLoading] = useState(true);

  const handleBag = () => {
    window.location.href = "https://web.furrl.in/cart";
  };

  const handleWishlist = () => {
    window.location.href = "https://web.furrl.in/wishlist";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`fixed-header ${loading ? "loading" : ""}`}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="header-content">
            <h1>Furrl</h1>
          </div>
          <div className="header-buttons">
            <FontAwesomeIcon
              icon={faShoppingBag}
              onClick={handleBag}
              size="2x"
              style={{ color: "black", fill: "none" }}
            />
            <FontAwesomeIcon
              icon={faHeart}
              onClick={handleWishlist}
              size="2x"
              style={{ color: "black", fill: "none" }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
