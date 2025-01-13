import CompassLogo from "../assets/Compass.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidLogInCircle } from "react-icons/bi";

export default function Header({ handleLogin }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate("/");
  }

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
    <header
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-[100%] z-50 transition-all duration-300 }`}
    >
      <div
        className={` rounded-md absolute flex justify-between w-full pt-5 px-5 ${
          isScrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div
          className="mt-[-30px] flex items-center cursor-pointer"
          onClick={() => handleLogoClick()}
        >
          <img src={CompassLogo} alt="bgImage" className="w-[80px] h-[80px]" />
          <span
            className={`text-gray-600 font-bold text-2xl ${
              isScrolled ? "text-gray-600" : "text-gray-600"
            }`}
          >
            COMPASS
          </span>
        </div>
        <div className="">
          <div className={`flex gap-8  items-center text-gray-600`}>
            <a href="#" className=" hover:opacity-90">
              Find buddy
            </a>
            <a href="#" className=" hover:opacity-90">
              About us
            </a>
            <a
              href="#"
              onClick={handleLogin}
              className="hover:opacity-90 px-5 py-2 rounded-md bg-red-900 text-white flex gap-2"
            >
              <BiSolidLogInCircle className="text-2xl" />
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
    //</div>
  );
}
