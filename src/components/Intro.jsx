// src/components/Intro.jsx
import React from "react";
import { FaEllipsisH } from "react-icons/fa";
import "../styles/Intro.css";

export default function Intro({ user }) {
  return (
    <section className="intro">
      <div className="intro-item">
        <span className="intro-emoji">🏠</span>
        <span className="intro-text">
          <span className="intro-label">Current city</span>
          <span className="intro-value">{user.location}</span>
        </span>
      </div>

      <div className="intro-item">
        <span className="intro-emoji">💼</span>
        <span className="intro-text">
          <span className="intro-label">Workplace</span>
          <span className="intro-value">{user.work}</span>
        </span>
      </div>

      <div className="intro-item">
        <span className="intro-emoji">🎓</span>
        <span className="intro-text">
          <span className="intro-label">School</span>
          <span className="intro-value">{user.school}</span>
        </span>
      </div>

      <div className="intro-item">
        <span className="intro-emoji">📍</span>
        <span className="intro-text">
          <span className="intro-label">Hometown</span>
          <span className="intro-value">{user.hometown}</span>
        </span>
      </div>

      <button type="button" className="intro-item see-more" aria-label="See more about yourself">
        <span className="see-more-icon"><FaEllipsisH /></span>
        <span className="intro-text">
          <span className="intro-label">See more about yourself</span>
        </span>
      </button>
    </section>
  );
}
