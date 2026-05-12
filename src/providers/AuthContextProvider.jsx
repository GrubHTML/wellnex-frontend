import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { logoutFunct } from "../services/authService";
import { setAuthToken } from "../services/api";
import { toast } from "react-toastify";

// eta ekta provider component jeta kina puro app ke auth data dibe
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // loggoed in user info rakhbe initially null
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  // app loading state — authentication check চলাকালীন true থাকবে

  const logout = async () => {
    const data = await logoutFunct();
    setAuthToken(""); // axios theke token remove korbe
    setUser(null);
    setToken("");
    toast.success(data.message);
  };

  const userInfo = {
    user,
    token,
    setToken,
    setUser,
    logout,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    // puro app a ei data gulo available kore dicchi
  );
};

export default AuthContextProvider;
