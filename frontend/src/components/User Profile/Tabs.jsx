import { FaUser } from "react-icons/fa";
import { BiTrip } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaBitbucket } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

export default function Tabs({ activeTab, handleTabClick }) {
  return (
    <div className="flex flex-col items-center  gap-3 ">
      <div
        className={` px-5 py-3 rounded-xl flex items-center gap-3 w-[9vw] cursor-pointer group ${
          activeTab === "Basic Details"
            ? "bg-sky-900 text-white"
            : "text-sky-900"
        }`}
        onClick={handleTabClick}
      >
        <FaUser className=" text-lg" />
        <span>Basic Details</span>
      </div>
      <div
        className={` px-5 py-3 rounded-xl flex items-center gap-3 w-[9vw] cursor-pointer ${
          activeTab === "Trips" ? "bg-sky-900 text-white" : "text-sky-900"
        }`}
        onClick={handleTabClick}
      >
        <BiTrip className=" text-xl" />
        <span className="">Trips</span>
      </div>
      <div
        className={` px-5 py-3 rounded-xl flex items-center gap-3 w-[9vw] cursor-pointer ${
          activeTab === "Destination" ? "bg-sky-900 text-white" : "text-sky-900"
        }`}
        onClick={handleTabClick}
      >
        <FaMapLocationDot className=" text-lg" />
        <span className="">Destination</span>
      </div>
      <div
        className={` px-5 py-3 rounded-xl flex items-center gap-3 w-[9vw] cursor-pointer ${
          activeTab === "Bucket List" ? "bg-sky-900 text-white" : "text-sky-900"
        }`}
      >
        <FaBitbucket className=" text-lg" />
        <span className="">Bucket List</span>
      </div>
      <div
        className={` px-5 py-3 rounded-xl flex items-center gap-3 w-[9vw] cursor-pointer ${
          activeTab === "Settings" ? "bg-sky-900 text-white" : "text-sky-900"
        }`}
      >
        <IoSettings className=" text-lg" />
        <span className="">Settings</span>
      </div>
    </div>
  );
}
