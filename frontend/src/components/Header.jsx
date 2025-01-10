import CompassLogo from "../assets/Compass.png";
import React, { useState, useEffect } from "react";

export default function Header({ handleLogin }) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    // <div class="relative w-[70%] mx-auto">
    <header
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-[70%] z-50 transition-all duration-300}`}
    >
      <div
        className={`rounded-md absolute flex justify-between w-full pt-7 px-5 ${
          isScrolled ? "bg-red-900" : "bg-transparent"
        }`}
      >
        <div className="mt-[-30px] flex items-center ">
          <img
            src={CompassLogo}
            alt="bgImage"
            className="w-[100px] h-[100px]"
          />
          <span
            className={`text-red-900 font-bold text-4xl ${
              isScrolled ? "text-white" : "text-gray-600"
            }`}
          >
            COMPASS
          </span>
        </div>
        <div className="">
          <div
            className={`flex gap-8  items-center ${
              isScrolled ? "text-white" : "text-gray-600"
            }`}
          >
            <a href="#" className=" hover:opacity-90">
              Find buddy
            </a>
            <a href="#" className=" hover:opacity-90">
              About us
            </a>
            <a
              href="#"
              onClick={handleLogin}
              className={`hover:bg-red-700 px-5 py-2 rounded-md ${
                isScrolled ? "bg-white text-red-900" : "bg-red-900 text-white"
              }`}
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
    //</div>
  );
}
