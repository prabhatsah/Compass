import { FaEdit } from "react-icons/fa";

export default function ProfileBody() {
  return (
    <section className=" mt-[5vh] text-gray-600">
      <div>
        <h2 className="text-2xl font-bold">Profile</h2>
        <p>Welcome back to your home. Here to check yout activity you done.</p>
      </div>
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
    </section>
  );
}
