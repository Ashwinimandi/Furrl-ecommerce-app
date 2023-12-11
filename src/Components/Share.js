import React from "react";
import "./Share.css";

const Share = ({ link, onClose }) => {
  let origin = `${window.location.origin}/${link}`;
  return (
    <div className="share-modal">
      <a href={origin}>Share this product</a>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Share;
