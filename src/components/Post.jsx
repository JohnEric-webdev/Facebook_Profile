import React from "react";
import { 
  FaCog, 
  FaImage, 
  FaVideo, 
  FaFlag, 
  FaEllipsisH, 
  FaThumbsUp, 
  FaCommentAlt, 
  FaShare 
} from "react-icons/fa"; 
import "../styles/Post.css";

export default function Post({ post, showCreateBox }) {
  return (
    <div className="post">
      {/* Create Post Box - show only above first post */}
      {showCreateBox && (
        <div className="create-post">
          <h3 className="post-title">Posts</h3>
          <div className="create-post-box">
            <img src={post.avatar} alt="avatar" className="post-avatar" />
            <div className="create-post-input">Post a status update</div>
            <FaImage className="post-icon" />
          </div>

          <div className="create-post-actions">
            <div className="action-item">
              <FaImage className="photo-icon" /> <span>Photo</span>
            </div>
            <div className="divider" />
            <div className="action-item">
              <FaVideo className="video-icon" /> <span>Reels</span>
            </div>
            <div className="divider" />
            <div className="action-item">
              <FaFlag className="flag-icon" /> <span>Life event</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Post header */}
      <div className="post-header">
        <div className="post-header-left">
          <img src={post.avatar} alt={post.author} className="post-avatar" />
          <div className="post-header-info">
            <strong>{post.author}</strong>
            <div className="time-settings">
              <span className="time">{post.time}</span>
              <FaCog className="settings-icon" />
            </div>
          </div>
        </div>
        <FaEllipsisH className="post-menu-icon" />
      </div>

      {/* Post content */}
      <p>{post.content}</p>
      {post.image && <img className="post-img" src={post.image} alt="" />}

      {/* Post actions with icons */}
      <div className="post-actions">
        <button className="action-btn">
          <FaThumbsUp className="btn-icon" /> Like
        </button>
        <button className="action-btn">
          <FaCommentAlt className="btn-icon" /> Comment
        </button>
        <button className="action-btn">
          <FaShare className="btn-icon" /> Share
        </button>
      </div>

      {/* Stats */}
      <div className="post-stats">
        <span>{post.likes} likes</span>
        <span>{post.comments} comments</span>
        <span>{post.shares} shares</span>
      </div>
    </div>
  );
}
