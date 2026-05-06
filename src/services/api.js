import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://wellnexapi.grubdev.top/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiInstance;
