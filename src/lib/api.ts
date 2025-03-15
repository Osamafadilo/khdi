import { User } from "../contexts/AuthContext";
import config from "../config";

// API URL from configuration
const API_URL = config.apiUrl;

// Helper function to handle API responses
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "API request failed");
  }
  return response.json();
};

// User API functions
export const getUserProfile = async (token: string): Promise<User> => {
  const response = await fetch(`${API_URL}/users/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return handleResponse(response);
};

export const updateUserProfile = async (
  token: string,
  userData: Partial<User>,
): Promise<User> => {
  const response = await fetch(`${API_URL}/users/profile`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return handleResponse(response);
};

// Function to update user settings (language, direction, theme)
export const updateUserSettings = async (
  token: string,
  settings: { language?: string; direction?: string; theme?: string },
): Promise<User> => {
  return updateUserProfile(token, settings);
};

// Function to validate token and refresh user data
export const validateToken = async (token: string): Promise<User | null> => {
  try {
    const userData = await getUserProfile(token);
    return userData;
  } catch (error) {
    console.error("Token validation failed:", error);
    return null;
  }
};
