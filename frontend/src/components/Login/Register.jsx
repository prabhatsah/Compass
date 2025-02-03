import { useState } from "react";
import { FaEnvelope, FaLock, FaUser, FaTransgender } from "react-icons/fa";
import LoginImage from "../../assets/Meta Assets/LoginImage.svg";
import axios from "axios";
import { API_END_POINT } from "../../utils/contant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import femaleProfileTemplate from "../../assets/Meta Assets/female-profile-template.jpg";
import maleProfileTemplate from "../../assets/Meta Assets/male-profile-template.jpg";

// Register Modal
const RegisterModal = ({
  name,
  email,
  password,
  gender,
  setName,
  setEmail,
  setPassword,
  setGender,
  handleSubmit,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center w-[30vw]">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-[#245C7C]">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#245C7C]"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#245C7C]"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#245C7C]"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="relative">
            <FaTransgender className="absolute left-3 top-3 text-gray-400" />
            <select
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#245C7C] bg-white"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#245C7C] text-white py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="text-[#245C7C] font-semibold ml-1"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const getInputData = async (e) => {
    e.preventDefault();

    //register
    let profile_image =
      gender === "male" ? maleProfileTemplate : femaleProfileTemplate;
    const user = { name, email, password, gender, profile_image };
    try {
      const res = await axios.post(`${API_END_POINT}/register`, user, {
        headers: {
          "content-type": "application/json",
        },
        withCredentials: true,
      });
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }

    setName("");
    setEmail("");
    setPassword("");
    setGender("");
  };

  return (
    <>
      <section class="relative mx-auto">
        <div className="h-[60vh] flex bg-sky-800 mx-10 rounded-2xl items-center justify-around shadow">
          <div className="flex flex-col justify-center">
            <RegisterModal
              name={name}
              email={email}
              password={password}
              gender={gender}
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
              setGender={setGender}
              handleSubmit={getInputData}
            />
          </div>
          <div class="">
            <img src={LoginImage} alt="bgImage" className="h-[50vh] " />
          </div>
        </div>
      </section>
    </>
  );
}
