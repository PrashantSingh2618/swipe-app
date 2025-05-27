import axios from "axios";
import { getProductResposne, recommendations, soraImageResponse, swipeResponse } from "./mockResponse";

const isMocked = true;

const API_BASE_URL =
  "http://ec2-13-234-240-99.ap-south-1.compute.amazonaws.com:8000";

const getUserId = () => {
  const userId = localStorage.getItem("userId") || "user1";
  console.log("userId", userId);
  return userId;
};

export const getSoraImage = async (productId: number) => {
  if(isMocked){
    return soraImageResponse
  }
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

export const getProductDetails = async (productId: string) => {
  if(isMocked){
    return getProductResposne(productId)
  }
  try {
    const response = await axios.get(`${API_BASE_URL}/product/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching sora iamges:", error);
    throw error;
  }
};

export const handleSwipeApi = async (productId: number, actionType: number) => {
  if(isMocked){
    return swipeResponse
  }
  try {
    const user_id = getUserId();
    const response = await axios.post(`${API_BASE_URL}/swipe`, {
      item_id: productId,
      user_id: user_id,
      interaction_type: actionType,
    });
    return response.data;
  } catch (error) {
    console.error("Error syncing :", error);
    throw error;
  }
};

export const getRecommendationsApi = async () => {
  if(isMocked){
    return recommendations
  }
  
  try {
    const response = await axios.post(`${API_BASE_URL}/recommendations`, {
      user_id: getUserId(),
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

export const updateUserPreference = async (preferences: string[]) => {
  try {
    const user_id = getUserId();
    const response = await axios.post(`${API_BASE_URL}/users`, {
      user_id: user_id,
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

export const getWishlist = async () => {
  try {
    const user_id = getUserId();
    const response = await axios.get(`${API_BASE_URL}/wishlist/${user_id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    throw error;
  }
};

export const removeFromWishlist = async (item_id: string) => {
  try {
    const user_id = getUserId();
    const response = await axios.delete(
      `${API_BASE_URL}/wishlist/${user_id}/${item_id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error removing from wishlist:", error);
    throw error;
  }
};

export const handleBackApi = async () => {
  try {
    const user_id = getUserId();
    const response = await axios.post(`${API_BASE_URL}/undo-swipe/${user_id}`);
    return response.data;
  } catch (error) {
    console.error("Error removing from wishlist:", error);
    throw error;
  }
};
