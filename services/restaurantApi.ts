import { API_BASE_URL } from "@/constants/apiConfig";

export const restaurantApi = {
  async searchRestaurants(params: {
    city?: string;
    cuisine?: string;
    category?: string;
    search?: string;
    priceRange?: string;
  }) {
    const query = new URLSearchParams(params as any).toString();

    const res = await fetch(`${API_BASE_URL}/restaurants?${query}`);

    const data = await res.json();

    if (!data.success) {
      throw new Error("API error");
    }

    return data.restaurants;
  },

  async getFeaturedRestaurants() {
    const res = await fetch(`${API_BASE_URL}/restaurants/featured`);

    const data = await res.json();

    return data.restaurants;
  },
};