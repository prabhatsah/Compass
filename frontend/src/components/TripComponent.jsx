import Header from "./Header";
import { FaDotCircle } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsBookmarkHeartFill } from "react-icons/bs";

export default function Trip() {
  const tripDetails = {
    title: "Meghalay : The Heaven of NorthEast",
    source: "Kolkata, West Bnegal",
    destination: "Shillong, Meghalaya",
    meetPoint: "Howrah, West Bengal",
    desc: "Discover the breathtaking beauty of Shillong, Cherrapunji, and Dawki as you explore misty hills, cascading waterfalls, and pristine rivers in the 'Abode of Clouds' .Trek through dense forests to witness Meghalaya’s famous Double Decker Living Root Bridge, a marvel of bio-engineering made entirely of natural roots.",
    userName: "Prabhat Kumar",
    userAddress: " Salt Lake, Kolkata",
  };
  return (
    <>
      <Header />
      <div class="w-[70%] mx-auto mt-[10vh]">
        <div>
          <BsBookmarkHeartFill />
        </div>
        <div className="grid grid-cols-12 text-gray-700">
          <div className="col-span-8">
            <h3 className="text-2xl font-medium mb-10">
              Meghalay : The Heaven of NorthEast
            </h3>
            <div>
              <div className="flex gap-2 items-center">
                <FaDotCircle className="text-red-600 text-2xl" />
                <p className="text-xl">Kolkata</p>
              </div>
              <div className="font-bold text-red-600 ms-2">
                <p>|</p>
                <p>|</p>
                <p>|</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaMapLocationDot className="text-red-600 text-2xl" />
                <p className="text-xl">Kolkata</p>
              </div>
            </div>
          </div>
          <div className="col-span-4">Hello 2</div>
        </div>
      </div>
    </>
  );
}
