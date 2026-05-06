import apiInstance from "./api.js";

// all products fetching
export const getProducts = async () => {
  try {
    const response = await apiInstance.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// single product fetching
export const getProductById = async (id) => {
  try {
    const response = await apiInstance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product ${id}`, error);
    throw error;
  }
};
