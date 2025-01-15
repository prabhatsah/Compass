import LPBG from "../assets/LoginPageVector.jpg";

import BottomCarousel from "./BottomCarousel";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
export default function LandingPage() {
  const navigate = useNavigate();

  function handleLoginButton() {
    navigate("/login");
  }
  return (
    <>
      <div class="relative w-[70%] mx-auto">
        <div className="h-[60vh] flex ">
          <div className="flex flex-col justify-center">
            <p className="text-2xl text-gray-700">
              Need a&nbsp;
              <strong className="text-blue-700 text-[50px]">
                travel buddy
              </strong>
              &nbsp;or want to&nbsp;
              <span className="block mt-4">
                <strong className="text-red-900 text-[50px]">
                  share your experience?
                </strong>
              </span>
            </p>

            <div class="relative w-full mt-7">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full px-4 py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Search destinations ..."
                required
              />
              <button
                type="submit"
                class="text-white absolute end-3.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-1 "
              >
                Search
              </button>
            </div>
          </div>
          <div class="h-[50vh] w-[40vw] absolute right-0 z-[-1] ">
            <img src={LPBG} alt="bgImage" className="h-[65vh]" />
          </div>
        </div>

        {/* Bottom part */}
        <div className="mt-[10vh]">
          <div className="text-center">
            <h2 className="text-[40px] font-bold">Travel buddy in India</h2>
          </div>
          <BottomCarousel />
        </div>
      </div>
    </>
  );
}
