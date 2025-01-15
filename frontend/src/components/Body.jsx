import React from "react";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./Login";
import Discover from "./Discover";
import LandingPage from "./LandingPage";
import Trip from "./Trip Details/TripComponent.jsx";
import ProfileLandingPage from "./User Profile/ProfileLandingPage.jsx";
import Header from "./Header.jsx";

export default function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/trip",
      element: <Trip />,
    },
    {
      path: "/discover",
      element: <Discover />,
    },
    {
      path: "/profile",
      element: <ProfileLandingPage />,
    },
  ]);
  return (
    <Router>
      <div>
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
