import apiInstance from "./api.js";

export const addToCart = async (id) => {
  try {
    const response = await apiInstance.post("/carts", id);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Something went wrong!";
  }
};

export const getCarts = async () => {
  try {
    const response = await apiInstance.get("/carts");
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Something went wrong!";
  }
};

export const getCartById = async (id) => {
  try {
    const response = await apiInstance.get(`/carts/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Something went wrong!";
  }
};

export const updateCart = async (id) => {
  try {
    const response = await apiInstance.put(`/carts/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Something went wrong!";
  }
};
export const deleteCart = async (id) => {
  try {
    const response = await apiInstance.delete(`/carts/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Something went wrong!";
  }
};
