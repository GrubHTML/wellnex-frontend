import axios from "axios";
import { refresh } from "./authService";

const apiInstance = axios.create({
  // baseURL: "https://wellnexapi.grubdev.top/api",
  baseURL: "http://192.168.88.11:5000/api/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json", // আমরা JSON data পাঠাচ্ছি সেটা সার্ভারকে জানাচ্ছে
  },
  withCredentials: true, // cookie (যেমন refresh token) পাঠানো ও গ্রহণ করার অনুমতি দিচ্ছে
});

let accessToken = ""; //token store korar global variable.
export const setAuthToken = (myToken) => {
  accessToken = myToken;
};
/* setAuthToken() => Axios instance-a global token set korar helper function।
🔹 accessToken নামে একটি local variable রাখা হচ্ছে। setAuthToken function call করলে এই variable-এ নতুন token সেট হয়।
*/

apiInstance.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  } // token thakle header a token attach korbe
  return config; // request proceed
});
/* Request Interceptors => request jaoar age modify korbe.
🔹 Request Interceptor — প্রতিটি API request পাঠানোর আগে এই কোড চলে:
 * যদি accessToken থাকে, তাহলে request-এর header-এ Authorization: Bearer <token> যোগ করে দেয়
 * এটা না থাকলে প্রতিটি API call-এ manually token দিতে হত
*/

//Response Interceptors => resonse handle korbe
apiInstance.interceptors.response.use(
  (response) => {
    return response;
  }, // 🔹 সফল response আসলে সেটা সরাসরি return করে দাও — কোনো পরিবর্তন নেই।
  async (error) => {
    console.log("INTERCEPTOR ERROR:", error.config?.url);
    // error handle
    const originalRequest = error.config;
    /* — error.config আসলে কী?
        যখন তুমি কোনো API call করো, axios সেই request-এর সব তথ্য একটা object-এ রাখে। Request fail হলে সেই object-টাই error.config হিসেবে পাওয়া যায়।

      🔹 Error আসলে এই অংশ চলে। error.config হলো যে request-টা fail করেছে, সেটার সব তথ্য — পরে আবার retry করার জন্য রেখে দেওয়া হচ্ছে।
    */
    if (
      error.response?.status === 401 && //401 error? → মানে Unauthorized — token মেয়াদ শেষ বা নেই
      !originalRequest._retry && //already retry hoyni? → এই request আগে retry হয়নি (infinite loop ঠেকাতে)
      !originalRequest.url.includes("/refresh") //refresh api na? → এটা নিজেই refresh request না (নয়তো loop হবে)
    ) {
      originalRequest._retry = true; // infinite loop prevent: 🔹 এই request-কে retry হিসেবে mark করা হলো, যাতে বারবার retry না হয়।

      try {
        const res = await refresh(); // new token nicchi
        const refreshAccessToken = res.accessToken; // token extract
        setAuthToken(refreshAccessToken); // axios a update
        // 🔹 নতুন access token আনার চেষ্টা করা হচ্ছে। পেলে সেটা axios instance-এ সেট করা হচ্ছে।

        originalRequest.headers = {
          ...originalRequest.headers,
          Authorization: `Bearer ${refreshAccessToken}`,
        };
        return apiInstance(originalRequest);
        //🔹 পুরনো failed request-এ নতুন token বসিয়ে আবার পাঠানো হচ্ছে — user কিছুই বুঝবে না, automatically কাজ হয়ে যাবে 🔁
      } catch (refreshError) {
        //Refresh fail hole
        setAuthToken("");
        window.location.href = "/login";
        console.log("REFRESH ERROR:", refreshError);
        /* 🔹 Refresh-ও fail করলে (মানে refresh token-ও মেয়াদ  শেষ):
         * token মুছে দাও
         * user-কে login পেজে পাঠিয়ে দাও
         */
        return Promise.reject(refreshError);
        // error propagate => error ke samne pathano(bubble up kora)
        // ekhane error handle na kore next .catch() ba caller er kache error ke pathano
        // এর মানে:
        // refresh fail হয়েছে
        // axios call যেখানে করা হয়েছিল
        // সেখানে গিয়ে .catch() এ error ধরা পড়বে
      }
    }
    return Promise.reject(error);
  },
);

export default apiInstance;
