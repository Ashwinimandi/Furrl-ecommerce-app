import React, { useState } from "react";
import "./Card.css";
import Share from "../Share";
import { Link } from "react-router-dom";

export const Card = ({ e }) => {
  const [isShareOpen, setShareOpen] = useState(false);

  const handleShareClick = () => {
    setShareOpen(true);
  };

  const handleShareClose = () => {
    setShareOpen(false);
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
      {isShareOpen && <Share link={e.id} onClose={handleShareClose} />}
    </div>
  );
};
