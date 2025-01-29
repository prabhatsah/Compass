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

export default function ProfileBody() {
  return (
    <section className=" mt-[5vh] text-gray-600">
      <div>
        <h2 className="text-2xl font-bold">Profile</h2>
        <p>Welcome back to your home. Here to check yout activity you done.</p>
      </div>

      {/* personal info */}
      <div className="border rounded-md p-2 mt-5">
        <h2 className="font-bold text-md">Personal Information</h2>
        <div className="grid grid-cols-12 flex items-center mt-4">
          <span className="col-span-3">Name</span>
          <span className="col-span-8">Prabhat Kumar</span>
          <span className="col-span-1">
            <FaEdit className="text-sky-900 cursor-pointer" />
          </span>
        </div>
        <div className="grid grid-cols-12 flex items-center mt-4">
          <span className="col-span-3">Birthday</span>
          <span className="col-span-8">23 Aug 1998</span>
          <span className="col-span-1">
            <FaEdit className="text-sky-900 cursor-pointer" />
          </span>
        </div>
        <div className="grid grid-cols-12 flex items-center mt-4">
          <span className="col-span-3">Gender</span>
          <span className="col-span-8">Male</span>
          <span className="col-span-1">
            <FaEdit className="text-sky-900 cursor-pointer" />
          </span>
        </div>
        <div className="grid grid-cols-12 flex items-center mt-4">
          <span className="col-span-3">Address</span>
          <span className="col-span-8">
            Sector 5, Kolkata, West Bengal, 700091
          </span>
          <span className="col-span-1">
            <FaEdit className="text-sky-900 cursor-pointer" />
          </span>
        </div>
      </div>

      {/* basic setting */}
      <div className="border rounded-md p-2 mt-5">
        <h2 className="font-bold text-md">Basic settings</h2>
        <div className="grid grid-cols-12 flex items-center mt-4">
          <span className="col-span-3">Email</span>
          <span className="col-span-8">Prabhat.Kumar@gmail.com</span>
          <span className="col-span-1">
            <FaEdit className="text-sky-900 cursor-pointer" />
          </span>
        </div>
        <div className="grid grid-cols-12 flex items-center mt-4">
          <span className="col-span-3">Password</span>
          <span className="col-span-8">Password last changed 2 months ago</span>
          <span className="col-span-1">
            <FaEdit className="text-sky-900 cursor-pointer" />
          </span>
        </div>

        <div className="grid grid-cols-12 flex items-center mt-4">
          <span className="col-span-3">Sign-in with</span>
          <span className="col-span-8 flex gap-3 text-xl">
            <div className="border rounded-full p-2 text-green-700 text-md relative">
              <FaPhone className=" cursor-pointer" title="Mobile No : Verified" />
              <TiTick className="absolute top-[-6px] right-[-7px] text-green-700" />
            </div>
            <div className="border rounded-full p-2 relative">
              <FcGoogle  className=" cursor-pointer" title="Gmail : Not verified" />
              <FaExclamation className="absolute top-[-3px] right-[-2px] text-yellow-600 text-sm" />
            </div>
            <div className="border rounded-full p-2 text-blue-600 relative">
              <FaFacebook className=" cursor-pointer" title="Facebook : Not verified"  />
              <FaExclamation className="absolute top-[-3px] right-[-2px] text-yellow-600 text-sm" />
            </div>
          </span>
          <span className="col-span-1">
            <FaEdit className="text-sky-900 cursor-pointer" />
          </span>
        </div>

        <div className="grid grid-cols-12 flex items-center mt-4">
          <span className="col-span-3">Social Profile</span>
          <span className="col-span-8 flex gap-3 text-xl">
            <div className="border rounded-full p-2 text-green-700 text-md relative">
              <FaSnapchat
                className="text-yellow-500 cursor-pointer"
                title="Snapchat : Linked"
              />
              <TiTick className="absolute top-[-6px] right-[-7px] text-green-700" />
            </div>
            <div
              className="border rounded-full p-2 relative cursor-pointer"
              title="Instagram : Not linked"
            >
              <FaInstagram className="text-red-700" />
              <FaExclamation className="absolute top-[-3px] right-[-2px] text-yellow-600 text-sm" />
            </div>
            <div className="border rounded-full p-2 text-blue-600 relative">
              <FaFacebook
                className="cursor-pointer"
                title="Facebook : Not linked"
              />
              <FaExclamation className="absolute top-[-3px] right-[-2px] text-yellow-600 text-sm" />
            </div>
          </span>
          <span className="col-span-1">
            <FaEdit className="text-sky-900 cursor-pointer" />
          </span>
        </div>
      </div>
    </section>
  );
}
