import React from "react";
import "../styles/Photos.css";

export default function Photos({ photos }) {
  return (
    <section className="photos">
      <div className="photos-header">
        <h3 className="photos-title">Photos</h3>
        <a href="#" className="see-all">See all Photos</a>
      </div>
      <div className="photo-grid">
        {photos.map((photo, i) => (
          <img key={i} src={photo} alt={`photo-${i}`} />
        ))}
      </div>
    </section>
    
  );
}
