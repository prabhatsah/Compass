import LPBG from "../assets/LoginPageVector.jpg";
import CompassLogo from "../assets/Compass.png";
import meghalayaPic from "../assets/Meghalaya_river.jpeg";
export default function LandingPage() {
  return (
    <>
      <div class="relative w-[70%] mx-auto">
        <div className="">
          <div className=" absolute flex justify-between w-full mt-10 ">
            <div className="mt-[-30px] flex items-center">
              <img
                src={CompassLogo}
                alt="bgImage"
                className="w-[100px] h-[100px]"
              />
              <span className="text-gray-600 font-bold text-4xl">COMPASS</span>
            </div>
            <div className="">
              <div className="flex gap-8 text-gray-600 items-center ">
                <a href="#" className=" hover:text-blue-700">
                  Find buddy
                </a>
                <a href="#" className=" hover:text-blue-700">
                  About us
                </a>
                <a
                  href="#"
                  className="bg-red-600 text-white hover:bg-red-700 px-5 py-2 rounded-md"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-[25vh]">
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

            <input
              placeholder="Enter the place you want to travel "
              className="w-[400px] border rounded-lg p-3 mt-5"
            />
          </div>
          <div class="h-[80vh] w-[40vw] absolute right-0 z-[-1] top-20">
            <img src={LPBG} alt="bgImage" className="" />
          </div>
        </div>
        {/* Bottom part */}
        <div className="mt-[40vh]">
          <div className="text-center">
            <h2 className="text-[40px] font-bold">Travel buddy in India</h2>
          </div>
          <div className="flex gap-5">
            <div className="border p-5 w-[20vw]">
              <img
                src={meghalayaPic}
                alt="place"
                className="rounded-lg w-[20vw]"
              />
              <div>
                <p>Meghalaya</p>
                <h3>Prabhat's diary</h3>
                <p>2025/01/02 - 2025/01/08 (flexible)</p>
                <p>
                  Meghalaya is a state in northeast India. Meghalaya was formed
                  on 21 January 1972 by carving out two districts from the state
                  of Assam: the United Khasi Hills and Jaintia Hills and the
                  Garo Hills.
                </p>
              </div>
            </div>
            <div className="border p-5 w-[20vw]">
              <img
                src={meghalayaPic}
                alt="place"
                className="rounded-lg w-[20vw]"
              />
              <div>
                <p>Meghalaya</p>
                <h3>Prabhat's diary</h3>
                <p>2025/01/02 - 2025/01/08 (flexible)</p>
                <p>
                  Meghalaya is a state in northeast India. Meghalaya was formed
                  on 21 January 1972 by carving out two districts from the state
                  of Assam: the United Khasi Hills and Jaintia Hills and the
                  Garo Hills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
