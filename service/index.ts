import axios from "axios";

const API_BASE_URL =
  "http://ec2-13-234-240-99.ap-south-1.compute.amazonaws.com:8000";

  export const getRecommendationsApi = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/recommendations`, {
        user_id: "user123"
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductById = async (id: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
