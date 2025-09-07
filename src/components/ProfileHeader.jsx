import React from "react";
import { FaCamera } from "react-icons/fa";  
import "../styles/ProfileHeader.css";

export default function ProfileHeader({ user }) {
  return (
    <section className="profile-header">
      <div
        className="cover"
        style={{ backgroundImage: `url(${user.cover})` }}>
        <div className="cover-camera">
          <FaCamera />
        </div>
      </div>

      <div className="avatar-wrapper">
        <img className="avatar-lg" src={user.avatar} alt="profile" />
        <div className="camera-icon">
          <FaCamera /> 
        </div>
      </div>

      <div className="profile-info">
        <h2>{user.name}</h2>
        
        {/* Followers + Following with small avatar */}
        <div className="friends-followers">
          <p className="friends">{user.friends} followers · 100 following</p>
          <div className="mini-avatar-wrapper">
            <img src="/avatar1.jpg" alt="mini" className="mini-avatar" />
            <img src="/avatar2.jpg" alt="mini" className="mini-avatar" />
            <img src="/avatar3.jpg" alt="mini" className="mini-avatar" />
            <img src="/avatar4.jpg" alt="mini" className="mini-avatar" />
            <img src="/avatar5.jpg" alt="mini" className="mini-avatar" />
            <img src="/avatar6.jpg" alt="mini" className="mini-avatar" />
            <img src="/avatar7.jpg" alt="mini" className="mini-avatar" />
          </div>
          <p className="bio">{user.bio}</p>
        </div>

        <p className="handle">{user.handle}</p>
        
        <div className="actions">
          <button className="add-story">+ Add to Story</button>
          <button className="edit-profile">Edit Profile</button>
          <button className="more-options">...</button>
        </div>
      </div>
    </section>
  );
}
