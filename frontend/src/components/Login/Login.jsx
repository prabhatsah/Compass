import { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import LoginImage from "../../assets/Meta Assets/LoginImage.svg";
import LoginSvg from "../../assets/Meta Assets/LoginSvg.svg";
import axios from "axios";
import { API_END_POINT } from "../../utils/contant";
import { login } from "../../redux/slices/userSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Login Modal
const LoginModal = ({
  email,
  password,
  setEmail,
  setPassword,
  handleSubmit,
  setIsLogin,
}) => (
  <div className="flex items-center justify-center w-[30vw]">
    <div className="bg-white rounded-lg p-8 max-w-md w-full">
      <h2 className="text-2xl font-bold mb-6 text-[#245C7C]">Login</h2>
      <form action="" className="space-y-4" onSubmit={handleSubmit}>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#245C7C]"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="relative">
          <FaLock className="absolute left-3 top-3 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#245C7C]"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
              setIsLogin(false);
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
const RegisterModal = ({
  fullName,
  email,
  password,
  setFullName,
  setEmail,
  setPassword,
  handleSubmit,
  setIsLogin,
}) => (
  <div className="flex items-center justify-center w-[30vw]">
    <div className="bg-white rounded-lg p-8 max-w-md w-full">
      <h2 className="text-2xl font-bold mb-6 text-[#245C7C]">Register</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="relative">
          <FaUser className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#245C7C]"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#245C7C]"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="relative">
          <FaLock className="absolute left-3 top-3 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#245C7C]"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
              setIsLogin(true);
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

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const getInputData = async (e) => {
    e.preventDefault();

    if (isLogin) {
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            "content-type": "application/json",
          },
          withCredentials: true,
        });
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
          dispatch(login(res.data.user));
          navigate("/profile");
        }
      } catch (error) {
        console.error(error);
        const errorMessage =
          error.response?.data?.message || "Something went wrong!";
        toast.error(errorMessage);
      }
    } else {
      //register
      const user = { fullName, email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            "content-type": "application/json",
          },
          withCredentials: true,
        });
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    }

    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <section class="relative mx-auto">
        <div className="h-[60vh] flex bg-sky-800 mx-10 rounded-2xl items-center justify-around shadow">
          <div className="flex flex-col justify-center">
            {isLogin ? (
              <LoginModal
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                handleSubmit={getInputData}
                setIsLogin={setIsLogin}
              />
            ) : (
              <RegisterModal
                fullName={fullName}
                email={email}
                password={password}
                setFullName={setFullName}
                setEmail={setEmail}
                setPassword={setPassword}
                handleSubmit={getInputData}
                setIsLogin={setIsLogin}
              />
            )}
          </div>
          <div class="">
            <img
              src={isLogin ? LoginSvg : LoginImage}
              alt="bgImage"
              className="h-[50vh] "
            />
          </div>
        </div>
      </section>
    </>
  );
}
