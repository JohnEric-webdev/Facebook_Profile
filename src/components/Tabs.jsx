import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Tabs.css";

export default function Tabs() {
  return (
    <div className="tabs">
      <NavLink to="/" className="tab">Posts</NavLink>
      <NavLink to="/intro" className="tab">About</NavLink>
      <NavLink to="/photos" className="tab">Photos</NavLink>
      <NavLink to="/friends" className="tab">Friends</NavLink>
    </div>
  );
}
