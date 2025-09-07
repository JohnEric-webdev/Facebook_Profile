// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProfileHeader from "./components/ProfileHeader";
import Tabs from "./components/Tabs";
import Intro from "./components/Intro";
import Friends from "./components/Friends";
import Photos from "./components/Photos";
import Post from "./components/Post";
import Details from "./components/Details";

export default function App() {

  const user = {
    name: "Syill Jay (Say)",
    handle: "",
    friends: "257k",
    bio: "App Developer",
    avatar: "/avatar1.jpg",
    cover: "/cover.jpg",
    location: "Pagadian City",
    work: "Student / Content Creator",
    school: "West Prime Horizon Institute Inc.",
    hometown: "Pagadian City",
  };


  const posts = [
    {
      author: "Syrill Jay",
      avatar: "/avatar1.jpg",
      time: "2 hours ago",
      content: "Hello! This is my first Static Mobile App.",
      image: "",
      likes: 1523,
      comments: 346,
      shares: 1021,
    },
    {
      author: "Syrill Jay",
      avatar: "/avatar1.jpg",
      time: "13 hours ago",
      content: "Hmm?",
      image: "/post6.jpg",
      likes: 4565,
      comments: 100,
      shares: 290,
    },
    {
      author: "Baira Sasao",
      avatar: "/avatar5.jpg",
      time: "10 hours ago",
      content: "Less perfection, more authenticity.",
      image: "/post3.jpg",
      likes: 5432,
      comments: 100,
      shares: 250,
    },
    {
      author: "Cherry Magallon",
      avatar: "/avatar2.jpg",
      time: "19 hours ago",
      content: "Smile big, laugh often.",
      image: "/post2.jpg",
      likes: 7565,
      comments: 100,
      shares: 890,
    },
    {
      author: "Syrill Jay",
      avatar: "/avatar1.jpg",
      time: "4 hours ago",
      content: "Off the road, onto the adventure.",
      image: "/post7.jpg",
      likes: 2565,
      comments: 100,
      shares: 1240,
    },
    {
      author: "Cherry Magallon",
      avatar: "/avatar2.jpg",
      time: "11 hours ago",
      content: "Sassy, classy, and a little smart-assy....",
      image: "/post8.jpg",
      likes: 6565,
      comments: 120,
      shares: 680,
    },
    {
      author: "Baira Sasao",
      avatar: "/avatar5.jpg",
      time: "7 hours ago",
      content: "Do it with passion or not at all.",
      image: "/post9.jpg",
      likes: 4565,
      comments: 1056,
      shares: 1450,
    },
    
  ];

  const friends = [
    { name: "Sy Ortega", avatar: "friend7.jpg" },
    { name: "Baira Sasao", avatar: "/friend3.jpg" },
    { name: "Syrill Jay", avatar: "/friend6.jpg" },
    { name: "Baira", avatar: "/friend8.jpg" },
    { name: "Cherry Magallon", avatar: "/friend5.jpg" },
    { name: "Cherry", avatar: "/friend1.jpg" },
  ];

  const photos = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
    "/photo6.jpg",
    "/photo7.jpg",
    "/photo8.jpg",
    "/photo9.jpg",
    "/photo10.jpg",
    "/photo11.jpg",
    "/photo12.jpg",
    "/photo13.jpg",
    "/photo14.jpg",
    "/photo15.jpg",
    "/photo16.jpg",
    "/photo17.jpg",
    "/photo18.jpg",
  ];

    const miniAvatars = [
      "/avatar1.jpg",
      "/avatar2.jpg",
      "/avatar3.jpg",
      "/avatar4.jpg",
      "/avatar5.jpg",
      "/avatar6.jpg",
      "/avatar7.jpg",
  ];

  <div className="mini-avatar-wrapper">
    {miniAvatars.map((src, index) => (
      <img key={index} src={src} alt={`mini-${index}`} className="mini-avatar" />
    ))}
  </div>

  return (
    <Router>
      <div className="app-root">
        <Header />
        <ProfileHeader user={user} />
        <Tabs />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Details />
                {posts.map((p, i) => (
                  <Post key={i} post={p} showCreateBox={i === 0} />
                ))}
              </div>
            }
          />
          <Route path="/intro" element={<Intro user={user} />} />
          <Route path="/photos" element={<Photos photos={photos} />} />
          <Route path="/friends" element={<Friends friends={friends} />} />
        </Routes>
      </div>
    </Router>
    
  );
}
