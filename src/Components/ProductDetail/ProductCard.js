// ProductCard.js

import React from "react";
import "./ProductCard.css";

const ProductCard = ({
  title,
  price,
  image,
  discount,
  vendor,
  compareprice,
}) => {
  return (
    <div className="product-detail">
      <img src={image} alt={title} />
      <div className="vendor"> {vendor}</div>
      <h2>{title}</h2>
      <div
        style={{
          display: "flex",
          marginRight: "6rem",
          justifyContent: "center",
        }}
      >
        <div className="price">Rs{price}</div>
        <div className="compare-price">Rs{compareprice}</div>
        <div className="discount">{discount}% off</div>
      </div>
    </div>
  );
};

export default ProductCard;
