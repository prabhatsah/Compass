import { FaUser } from "react-icons/fa";
import { BiTrip } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaBitbucket } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import "./Tabs.css";

export default function Tabs({ activeTab, handleTabClick }) {
  const tabList = [
    { name: "Basic Details", icon: <FaUser className=" text-lg" /> },
    { name: "Trips", icon: <BiTrip className=" text-lg" /> },
    { name: "Destinations", icon: <FaMapLocationDot className=" text-lg" /> },
    { name: "Bucket List", icon: <FaBitbucket className=" text-lg" /> },
    { name: "Settings", icon: <IoSettings className=" text-lg" /> },
  ];

  return (
    <div className="flex flex-col items-center gap-3 group">
      {tabList.map((tab, index) => (
        <div
          key={index}
          className={`tab ${activeTab === tab.name ? "active" : ""}`}
          onClick={handleTabClick}
        >
          {tab.icon}
          <span>{tab.name}</span>
        </div>
      ))}
    </div>
  );
}
