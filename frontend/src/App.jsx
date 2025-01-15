import { useNavigate } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header.jsx";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";

function App() {
  // const navigate = useNavigate();

  // function handleLoginButton() {
  //   navigate("/login");
  // }

  return (
    <div className="bg-gray-100">
      <Body />
      <Toaster />
    </div>
  );
}

export default App;
