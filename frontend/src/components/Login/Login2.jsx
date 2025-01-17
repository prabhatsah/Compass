import { useState } from "react";
import {
  FaStar,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaLock,
  FaUser,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import LoginImage from "../../assets/Meta Assets/LoginImage.svg";

export default function Login() {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Login Modal
  const LoginModal = () => (
    <div className="flex items-center justify-center w-[30vw]">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-[#245C7C]">Login</h2>
        <form className="space-y-4">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#245C7C]"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#245C7C]"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#245C7C] text-white py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don't have an account?
            <button
              onClick={() => {
                setShowLogin(false);
                setShowRegister(true);
              }}
              className="text-[#245C7C] font-semibold ml-1"
            >
              Register
            </button>
          </p>
        </div>
        
      </div>
    </div>
  );

  // Register Modal
  const RegisterModal = () => (
    <div className="flex items-center justify-center w-[30vw]">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-[#245C7C]">Register</h2>
        <form className="space-y-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#245C7C]"
              value={registerData.name}
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#245C7C]"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#245C7C]"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#245C7C] text-white py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?
            <button
              onClick={() => {
                setShowRegister(false);
                setShowLogin(true);
              }}
              className="text-[#245C7C] font-semibold ml-1"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section class="relative mx-auto">
        <div className="h-[60vh] flex bg-sky-800 mx-10 rounded-2xl items-center justify-around shadow">
          <div className="flex flex-col justify-center">
            {showLogin && <LoginModal />}
            {showRegister && <RegisterModal />}
          </div>
          <div class="">
            <img src={LoginImage} alt="bgImage" className="h-[50vh] " />
          </div>
        </div>
      </section>
    </>
  );
}
