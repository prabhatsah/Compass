import {
  FaEdit,
  FaPhone,
  FaFacebook,
  FaExclamation,
  FaSnapchat,
  FaInstagram,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TiTick } from "react-icons/ti";
import "./ProfileBody.css";
import LoadEditModal from "../CommonComponents/LoadEditModal.jsx";
import { useState } from "react";

export default function ProfileBody() {
  const [editModalDetails, setEditModalDetails] = useState({
    isVisible: false,
    details: {
      type: "",
      title: "",
      value: "",
    },
  });

  function handleEditModal(type, key, value) {
    let modalDetails = { ...editModalDetails };
    modalDetails.isVisible = true;
    modalDetails.details.type = type;
    modalDetails.details.title = key;
    modalDetails.details.value = value;
    setEditModalDetails(modalDetails);
  }

  const personalInfo = {
    Name: "Prabhat Kumar",
    Birthday: "23 Aug 1998",
    Gender: "Male",
    Address: "Sector 5, Kolkata, West Bengal, 700091",
  };

  const basicSettings = [
    { key: "Email", val: "prabhat.kumar@gmail.com" },
    { key: "Password", val: "Password last changed 2 months ago" },
    {
      key: "Sign-in with",
      val: [
        <FaPhone className="text-green-800 " />,
        <FcGoogle />,
        <FaFacebook className="text-blue-800 " />,
      ],
    },
    {
      key: "Social Profile",
      val: [
        <FaSnapchat className="text-yellow-500 " />,
        <FaInstagram className="text-red-800 " />,
        <FaFacebook className="text-blue-800 " />,
      ],
    },
  ];

  return (
    <section className=" mt-[5vh] text-gray-600">
      {editModalDetails.isVisible && (
        <LoadEditModal modalDetails={editModalDetails} />
      )}
      <div>
        <h2 className="text-2xl font-bold">Profile</h2>
        <p>Welcome back to your home. Here to check yout activity you done.</p>
      </div>

      {/* personal info */}
      <div className="border rounded-md p-2 mt-5">
        <h2 className="font-bold text-md">Personal Information</h2>
        {Object.entries(personalInfo).map(([key, value]) => (
          <div className="grid grid-cols-12 flex items-center mt-4">
            <span className="col-span-3">{key}</span>
            <span className="col-span-8">{value}</span>
            <span className="col-span-1">
              <FaEdit
                className="text-sky-900 cursor-pointer"
                onClick={() => handleEditModal("personalInfo", key, value)}
              />
            </span>
          </div>
        ))}
      </div>

      {/* basic setting */}
      <div className="border rounded-md p-2 mt-5">
        <h2 className="font-bold text-md">Basic settings</h2>
        {basicSettings.map((setting) =>
          typeof setting.val === "object" ? (
            <div className="grid grid-cols-12 flex items-center mt-4">
              <span className="col-span-3">{setting.key}</span>
              <span className="col-span-8 flex gap-3 text-xl">
                {setting.val.map((icon) => (
                  <div className="border rounded-full p-2 text-md">{icon}</div>
                ))}
              </span>

              <span className="col-span-1">
                <FaEdit
                  className="text-sky-900 cursor-pointer"
                  onClick={handleEditModal}
                />
              </span>
            </div>
          ) : (
            <div className="grid grid-cols-12 flex items-center mt-4">
              <span className="col-span-3">{setting.key}</span>
              <span className="col-span-8">{setting.val}</span>
              <span className="col-span-1">
                <FaEdit
                  className="text-sky-900 cursor-pointer"
                  onClick={handleEditModal}
                />
              </span>
            </div>
          )
        )}
      </div>
    </section>
  );
}
