import apiInstance from "./api";

export const userRegister = async (formData) => {
  try {
    const response = await apiInstance.post("/register", formData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Something went wrong!";
  }
};

export const userLogin = async (formData) => {
  try {
    const response = await apiInstance.post("/login", formData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Something went wrong!";
  }
};

export const me = async () => {
  try {
    const response = await apiInstance.get("/me");
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Something went wrong!";
  }
};
export const refresh = async () => {
  try {
    const response = await apiInstance.post("/refresh");
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Something went wrong!";
  }
};
export const logoutFunct = async () => {
  try {
    const response = await apiInstance.post("/logout");
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Something went wrong!";
  }
};
