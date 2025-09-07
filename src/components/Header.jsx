import React from "react";
import { FaChevronDown, FaSearch, FaArrowLeft } from "react-icons/fa";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <FaArrowLeft className="arrow-icon" />

      <h1 className="header-name">
        Syrill Jay 
        <span className="notification-badge">20+</span>
        <FaChevronDown className="dropdown-icon" />
      </h1>

      <FaSearch className="search-icon" />
    </header>
  );
}
