import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export const Card = ({ e }) => {
  const handleShareClick = () => {
    let origin = `${window.location.origin}/${e.id}`;
    navigator
      .share({
        title: "Share your Product",
        url: origin,
      })
      .then(() => {
        console.log("Successfully shared");
      })
      .catch((error) => {
        console.error("Error sharing:", error);
      });
  };

  return (
    <div className="card">
      <div className="card-image-container">
        <Link to={e.id}>
          <img
            src={e.images[0].src}
            alt={`Product ${e.id}`}
            className="card-image"
          />
        </Link>
        <button className="share-button" onClick={handleShareClick}>
          Share
        </button>
      </div>
      <div className="card-content">
        <div className="vendor"> {e.vendor}</div>
        <h2 className="card-title"> {e.title}</h2>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div className="price">Rs{e.price}</div>
          <div className="compare-price">Rs{e.compare_at_price}</div>
          <div className="discount"> {e.furrlDiscountPercent}% off</div>
        </div>
      </div>
    </div>
  );
};
