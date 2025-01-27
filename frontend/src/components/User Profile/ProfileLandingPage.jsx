import BasicDetails from "./BasicDetails";
import ProfileBody from "./ProfileBody";
import Tabs from "./Tabs";

export default function ProfileLandingPage() {
  return (
    <div className="grid grid-cols-12 h-[90vh] w-[70%] mx-auto bg-white rounded-3xl ">
      <div className=" col-span-2 mt-[5vh]">
        <Tabs />
      </div>
      <div className="col-span-7 border-l pl-5">
        <ProfileBody />
      </div>
      <div className="col-span-3 p-5">
        <BasicDetails />
      </div>
    </div>
  );
}
