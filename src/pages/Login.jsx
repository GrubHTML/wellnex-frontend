import { Key, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { userLogin } from "../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  const handleChange = async (event) => {
    event.preventDefault();
    const formData = {
      email,
      password,
    };
    try {
      const data = await userLogin(formData);
      // console.log("data", data);
      setEmail("");
      setPassword("");
      setToken(data.accessToken);
      // console.log("token", data.accessToken);
      localStorage.setItem("accessToken", data.accessToken);
      navigate("/products");
    } catch (errMessage) {
      setError(errMessage);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        <div className="shadow-2xl py-10 px-20">
          <h2 className="text-center font-bold text-2xl mt-6 mb-6">Sign In</h2>
          <form action="">
            <div className="border-b border-gray-400 flex gap-2 items-center my-6">
              <Mail className="h-4" />
              <input
                value={email}
                type="text"
                placeholder="Your Email"
                className="border-none outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>{" "}
            <div className="border-b border-gray-400 flex gap-2 items-center my-6">
              <Key className="h-4" />
              <input
                value={password}
                type="password"
                placeholder="Your Password"
                className="border-none outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
            <button
              type="submit"
              onClick={handleChange}
              className=" mt-2 w-full py-2 bg-[#0088FF] text-white text-sm font-semibold"
            >
              Login
            </button>
          </form>
          <p className="text-center text-sm text-gray-400 mt-6">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#0088FF] font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
