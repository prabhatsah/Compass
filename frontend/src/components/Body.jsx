import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login.jsx";
import Discover from "./Discover";
import LandingPage from "./Landing Page/LandingPage.jsx";
import Trip from "./Trip Details/TripComponent.jsx";
import ProfileLandingPage from "./UserProfile/ProfileLandingPage.jsx";
import Header from "./Header.jsx";
import Register from "./Login/Register.jsx";

export default function Body() {
  return (
    <Router>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/trip" element={<Trip />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/profile" element={<ProfileLandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}
