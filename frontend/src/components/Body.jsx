import React from "react";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./Login/Login2.jsx";
import Discover from "./Discover";
import LandingPage from "./Landing Page/LandingPage.jsx";
import Trip from "./Trip Details/TripComponent.jsx";
import ProfileLandingPage from "./User Profile/ProfileLandingPage.jsx";
import Header from "./Header.jsx";

export default function Body() {
  return (
    <Router>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/trip" element={<Trip />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/profile" element={<ProfileLandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}
