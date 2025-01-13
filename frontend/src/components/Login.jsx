// App.js
import React, { useState } from "react";
import LoginPageBg from "../assets/LoginPageBg.jpg";
import toast from "react-hot-toast";
import axios from "axios";
import { API_END_POINT } from "../utils/contant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = () => {
    setIsLogin((prevLogin) => !prevLogin);
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
          navigate("/discover");
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
    <section
      className="flex items-center justify-center min-h-screen "
      style={{ backgroundImage: `url(${LoginPageBg})` }}
    >
      <div class="bg-[#74b4df9f] rounded-2xl flex  p-5 items-center w-[18vw]">
        <div class="px-8 w-full">
          <h2 class="font-bold text-3xl text-[#002D74] mb-5">
            {isLogin ? "Login" : "Register"}
          </h2>

          <form action="" class="flex flex-col gap-4" onSubmit={getInputData}>
            {!isLogin && (
              <input
                value={fullName}
                class="p-2 rounded-xl border "
                type="text"
                name="fullName"
                placeholder="Full name"
                onChange={(event) => setFullName(event.target.value)}
              />
            )}

            <input
              value={email}
              class="p-2 rounded-xl border w-full"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <div class="relative">
              <input
                value={password}
                class="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                id="togglePassword"
                class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer hidden"
                id="mama"
                viewBox="0 0 16 16"
              >
                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"></path>
                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"></path>
              </svg>
            </div>
            <button
              class="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
              type="submit"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
          {/* <div class="mt-6  items-center text-gray-100">
            <hr class="border-gray-300" />
            <p class="text-center text-sm">OR</p>
            <hr class="border-gray-300" />
          </div> */}
          <div class="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip">
            Forget password?
          </div>

          <div class="mt-4 text-sm flex justify-between items-center container-mr">
            <p class="mr-3 md:mr-0 ">
              {isLogin
                ? "Don't have an account.."
                : "Already have an account.."}
            </p>
            <button
              onClick={loginHandler}
              class="hover:border register text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
