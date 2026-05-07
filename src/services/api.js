import axios from "axios";

const apiInstance = axios.create({
  // baseURL: "https://wellnexapi.grubdev.top/api",
  baseURL: "http://192.168.88.11:5000/api/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiInstance;
