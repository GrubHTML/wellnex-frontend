import { useState } from "react";
import { Link } from "react-router";
import { User, Mail, Key } from "lucide-react";
import { userRegister } from "../services/authService";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleChange = async (event) => {
    event.preventDefault();
    const formData = {
      username,
      email,
      password,
    };

    try {
      await userRegister(formData);
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (errMessage) {
      setError(errMessage);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="shadow-2xl py-10 px-20">
          <h2 className="text-center font-bold text-2xl mt-6 mb-6">Sign Up</h2>
          <form action="">
            <div className="border-b border-gray-400 flex gap-2 items-center my-6">
              <User className="h-4" />
              <input
                value={username}
                type="text"
                placeholder="Your Name"
                className="border-none outline-none"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
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
              Register
            </button>
          </form>
          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#0088FF] font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
