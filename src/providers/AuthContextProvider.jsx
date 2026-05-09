import { useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      setUser({ token });
    }

    setLoading(false);
  }, []);

  const login = (token) => {
    localStorage.setItem("accessToken", token);
    setUser({ token });
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  };
  const userInfo = {
    user,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;

// const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     const token = localStorage.getItem("accessToken");
//     return token ? { token } : null;
//   });
//   //   const [loading, setLoading] = useState(true);
//   const login = (token) => {
//     localStorage.setItem("accessToken", token);
//     setUser({ token });
//   };
//   const logout = () => {
//     localStorage.removeItem("accessToken");
//     setUser(null);
//   };
//   const infoValue = {
//     user,
//     login,
//     logout,
//     // loading,
//   };

//   return (
//     <AuthContext.Provider value={infoValue}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;

// Yes, the lazy initializer version is better. Here's why:
// localStorage.getItem() runs on every render without it:
// The rule is simple:
// useState accepts either a value or a function:

// 1. If you pass a value → React evaluates it on every render but only uses it the first time. Wasteful.
// 2. If you pass a function → React calls it only once on the initial mount and ignores it after that.

// Why does it matter here specifically?
// localStorage is a synchronous I/O operation — it reads from disk/memory outside of React. Calling it on every render is:

// 1. Unnecessary — the initial token doesn't change via localStorage after mount
// 2. Slightly expensive — synchronous I/O on every render adds up in complex UIs
// 3. Bad practice — side effects don't belong in the render cycle
