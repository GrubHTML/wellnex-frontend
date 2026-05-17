import { Key, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { userLogin } from "../services/authService";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const { setUser, setLoading, setToken } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success] = useState(null);
  const navigate = useNavigate();

  const handleChange = async (event) => {
    event.preventDefault();
    const formData = {
      email,
      password,
    };
    try {
      const data = await userLogin(formData);
      setEmail("");
      setPassword("");
      setLoading(false);
      // console.log(data.user);
      setUser(data.user);
      setToken(data.accessToken);
      toast.success(data.message);
      navigate("/products");
    } catch (errMessage) {
      setError(errMessage);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        {/* Decorative circles */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full -translate-y-1/3 translate-x-1/2"
          style={{ background: "#0088FF", opacity: 0.07 }}
        />
        <div
          className="absolute bottom-0 left-0 w-48 h-48 rounded-full translate-y-1/5 -translate-x-1/2"
          style={{ background: "#0088FF", opacity: 0.07 }}
        />
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
            {success && (
              <p className="text-green-500 text-center mt-2 font-bold">
                {success}
              </p>
            )}
            <button
              type="submit"
              onClick={handleChange}
              className="cursor-pointer mt-2 w-full py-2 bg-[#0088FF] text-white text-sm font-semibold"
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
