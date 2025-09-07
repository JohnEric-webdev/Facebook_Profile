import React from "react";
import "../styles/Friends.css";

export default function Friends({ friends, total }) {
  return (
    <section className="friends">
      <div className="friends-header">
        <div className="friends-left">
          <h3>Friends</h3>
          <p className="friend-count">{total} 5,754 friends</p>
           </div>
            <a href="#" className="see-all">See all</a>
           </div>
      <div className="friend-grid">
        {friends.map((f, i) => (
          <div key={i} className="friend">
            <img src={f.avatar} alt={f.name} />
            <span>{f.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
