// src/components/Details.jsx
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import "../styles/Details.css";

export default function Details() {
  return (
    <div className="details">
      {/* Header */}
      <div className="details-header">
        <h3>
          <FaInfoCircle className="info-icon" /> Details
        </h3>
        <p>
          <strong>Profile</strong> <span className="dot">·</span> Digital creator
        </p>
      </div>

      {/* Boxes */}
      <div className="box-row">
        {/* Add box */}
        <div className="box add-box">+</div>

        {/* Image box with overlay */}
        <div className="box image-box">
          <img src="photo1.jpg" alt="Detail" />
          <span className="overlay">+1</span>
        </div>
      </div>

      {/* Labels */}
      <div className="box-labels">
        <span>New</span>
      </div>

      {/* Button */}
      <button className="edit-btn">Edit Public Details</button>
    </div>
  );
}
