import axios from "axios";

const API_BASE_URL =
  "http://ec2-13-234-240-99.ap-south-1.compute.amazonaws.com:8000";

export const getSoraImage = async (productId: number) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/products/${productId}/image`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching sora iamges:", error);
    throw error;
  }
};

export const getProductDetails = async (productId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/product/${productId}`);
    return response.data;
   
  } catch (error) {
    console.error("Error fetching sora iamges:", error);
    throw error;
  }
};

export const handleSwipeApi = async (productId: number, actionType: number) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/swipe`, {
        item_id: productId,
        user_id: "user123",
        interaction_type:actionType
      });
      return response.data;
     
    } catch (error) {
      console.error("Error syncing :", error);
      throw error;
    }
  };

export const getRecommendationsApi = async () => {
  try {
    return {
      user_id: "user123",
      recommendations: ["7350", "7350","7350","7350","7350","7350"],
      message: null,
    };
    //   const response = await axios.post(`${API_BASE_URL}/recommendations`, {
    //     user_id: "user123"
    //   });
    //   return response.data;
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

export const updateUserPreference = async (preferences: string[]) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, {
      user_id: "user234",
      metadata: {
        preferences: {
          favorite_categories: preferences,
        },
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user preference:", error);
    throw error;
  }
};
