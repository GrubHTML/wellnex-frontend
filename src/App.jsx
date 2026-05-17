import { BrowserRouter } from "react-router";

import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import { me, refresh } from "./services/authService";
// refresh → new accesstoken niye ashe, me → current/logged-in user er info niye ashe
import { useAuth } from "./hooks/useAuth";
import { setAuthToken } from "./services/api";
import { ToastContainer } from "react-toastify";
import CustomSpinner from "./components/CustomSpinner";

const App = () => {
  const { setLoading, setUser, loading, setToken } = useAuth();
  useEffect(() => {
    const authMe = async () => {
      try {
        const refreshRes = await refresh();
        // ekhane refresh() function call kore server theke refresh token diye new access token nicchi through backend logic
        setAuthToken(refreshRes.accessToken);
        // axios er header a token boshay(API call er jonno)
        setToken(refreshRes.accessToken);
        // global auth state a token save korlam
        const res = await me();
        // me() function দিয়ে সার্ভার থেকে লগইন করা user-এর তথ্য আনা হচ্ছে, তারপর সেই তথ্য global state-এ সেট করা হচ্ছে।
        setUser(res.user);
        // user state update
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
        // finally মানে — সফল হোক বা error হোক, সবশেষে loading false করে দাও। অর্থাৎ loading spinner বন্ধ হবে।
      }
    };
    authMe();
  }, []);
  if (loading) {
    return <CustomSpinner />;
  } // যতক্ষণ loading true আছে (অর্থাৎ token/user fetch চলছে), ততক্ষণ "Loading..." দেখাবে। এটা না থাকলে user অথেনটিকেট হওয়ার আগেই পেজ render হয়ে যেত।
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={2000} />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
