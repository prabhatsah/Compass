import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidLogInCircle } from "react-icons/bi";
import Logo from "./Meta/Logo.jsx";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate("/");
  }
  function handlelogin() {
    navigate("/Login");
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
    <header className="w-full h-[8vh] sticky top-0 z-[1] mb-5">
      <div
        className={`h-full border-b-[1px] border-sky-800 w-full flex items-center justify-between px-10 ${
          isScrolled ? "bg-white" : "bg-white"
        } mb-5`}
      >
        <div
          className=" flex items-center cursor-pointer"
          onClick={() => handleLogoClick()}
        >
          <Logo />
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
              onClick={() => handlelogin()}
              className="hover:opacity-90 px-5 py-2 rounded-md bg-sky-900 text-white flex gap-2"
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
