import { FaUser } from "react-icons/fa";
import { BiTrip } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaBitbucket } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

export default function Tabs() {
  return (
    <div className="flex flex-col items-center mt-[5vh] gap-3 ">
      <div className="bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-3 w-[9vw]">
        <FaUser className="text-white text-lg" />
        <span>Basic Details</span>
      </div>
      <div className=" px-5 py-3 rounded-xl flex items-center justify-start gap-3 w-[9vw]">
        <BiTrip className="text-blue-700 text-lg" />
        <span className="">Trips</span>
      </div>
      <div className="px-5 py-3 rounded-xl flex items-center gap-3  w-[9vw]">
        <FaMapLocationDot className="text-blue-700 text-lg" />
        <span>Destination</span>
      </div>
      <div className=" px-5 py-3 rounded-xl flex items-center gap-3 w-[9vw]">
        <FaBitbucket className="text-blue-700 text-lg" />
        <span className="">Bucket List</span>
      </div>
      <div className=" px-5 py-3 rounded-xl flex items-center gap-3 w-[9vw]">
        <IoSettings className="text-blue-700 text-lg" />
        <span>Settings</span>
      </div>
    </div>
  );
}
