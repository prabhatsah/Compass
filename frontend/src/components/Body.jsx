import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Discover from "./Discover";
import LandingPage from "./LandingPage";
import Trip from "./Trip Details/TripComponent.jsx";

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
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}
