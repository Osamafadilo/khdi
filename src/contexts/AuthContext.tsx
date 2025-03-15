import React, { createContext, useContext, useState, useEffect } from "react";
import { useSettings } from "./SettingsContext";
import { uploadProfileImage, getProfileImageUrl } from "../lib/supabase";
import { useApi } from "../hooks/useApi";
import { AUTH_ENDPOINTS } from "../lib/apiEndpoints";

export interface User {
  _id: string;
  name: string;
  email: string;
  userType: "customer" | "provider";
  serviceType?: string;
  language: "en" | "ar" | "fr";
  direction: "ltr" | "rtl";
  theme: "light" | "dark" | "system";
  profileImage?: string;
  token: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  login: (
    email: string,
    password: string,
    userType: "customer" | "provider",
  ) => Promise<void>;
  register: (
    name: string,
    email: string,
    password: string,
    userType: "customer" | "provider",
    serviceType?: string,
  ) => Promise<void>;
  socialLogin: (
    provider: string,
    email: string,
    name: string,
    userType: "customer" | "provider",
  ) => Promise<void>;
  updateProfileImage: (file: File) => Promise<void>;
  logout: () => void;
  clearError: () => void;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  login: async () => {},
  register: async () => {},
  socialLogin: async () => {},
  updateProfileImage: async () => {},
  logout: () => {},
  clearError: () => {},
  setUser: () => {},
});

export const useAuth = () => useContext(AuthContext);

import config from "../config";

// API URL from configuration
const API_URL = config.apiUrl;

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setLanguage, setDirection, setTheme } = useSettings();
  const api = useApi();

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      // Sync settings with user preferences
      if (parsedUser.language) setLanguage(parsedUser.language);
      if (parsedUser.direction) setDirection(parsedUser.direction);
      if (parsedUser.theme) setTheme(parsedUser.theme);
    }
  }, [setLanguage, setDirection, setTheme]);

  const login = async (
    email: string,
    password: string,
    userType: "customer" | "provider",
  ) => {
    setLoading(true);
    setError(null);

    try {
      // In development mode, use mock data
      if (import.meta.env.DEV) {
        // Simulate API call with a timeout
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock successful login
        const loggedInUser: User = {
          _id: `user_${Math.random().toString(36).substring(2, 9)}`,
          name: email.split("@")[0],
          email: email,
          userType: userType,
          serviceType: userType === "provider" ? "general" : undefined,
          language: "ar",
          direction: "rtl",
          theme: "system",
          profileImage: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
          token: `mock_token_${Math.random().toString(36).substring(2, 15)}`,
        };

        // Store user in localStorage
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        setUser(loggedInUser);

        // Sync settings with user preferences
        setLanguage(loggedInUser.language);
        setDirection(loggedInUser.direction);
        setTheme(loggedInUser.theme);

        console.log("Login successful (DEV MODE):", loggedInUser);
      } else {
        // In production, make actual API call
        const userData = await api.fetchData(AUTH_ENDPOINTS.LOGIN, {
          method: "POST",
          body: { email, password, userType },
          requiresAuth: false,
        });

        // Store user in localStorage
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);

        // Sync settings with user preferences
        if (userData.language) setLanguage(userData.language);
        if (userData.direction) setDirection(userData.direction);
        if (userData.theme) setTheme(userData.theme);

        console.log("Login successful:", userData);
      }
    } catch (err: any) {
      setError(err.message || "Invalid email or password");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    userType: "customer" | "provider",
    serviceType?: string,
  ) => {
    setLoading(true);
    setError(null);

    try {
      // In development mode, use mock data
      if (import.meta.env.DEV) {
        // Simulate API call with a timeout
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock successful registration
        const newUser: User = {
          _id: `user_${Math.random().toString(36).substring(2, 9)}`,
          name: name,
          email: email,
          userType: userType,
          serviceType: serviceType,
          language: "ar",
          direction: "rtl",
          theme: "system",
          profileImage: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
          token: `mock_token_${Math.random().toString(36).substring(2, 15)}`,
        };

        // Store user in localStorage
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);

        // Sync settings with user preferences
        setLanguage(newUser.language);
        setDirection(newUser.direction);
        setTheme(newUser.theme);

        console.log("Registration successful (DEV MODE):", newUser);
      } else {
        // In production, make actual API call
        const userData = await api.fetchData(AUTH_ENDPOINTS.REGISTER, {
          method: "POST",
          body: { name, email, password, userType, serviceType },
          requiresAuth: false,
        });

        // Store user in localStorage
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);

        // Sync settings with user preferences
        if (userData.language) setLanguage(userData.language);
        if (userData.direction) setDirection(userData.direction);
        if (userData.theme) setTheme(userData.theme);

        console.log("Registration successful:", userData);
      }
    } catch (err: any) {
      setError(err.message || "Registration failed");
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  const socialLogin = async (
    provider: string,
    email: string,
    name: string,
    userType: "customer" | "provider",
  ) => {
    setLoading(true);
    setError(null);

    try {
      // In development mode, use mock data
      if (import.meta.env.DEV) {
        // Simulate API call with a timeout
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock successful social login
        const socialUser: User = {
          _id: `${provider}_user_${Math.random().toString(36).substring(2, 9)}`,
          name: name,
          email: email,
          userType: userType,
          serviceType: userType === "provider" ? "general" : undefined,
          language: "ar",
          direction: "rtl",
          theme: "system",
          profileImage: `https://api.dicebear.com/7.x/avataaars/svg?seed=${provider}-${email}`,
          token: `mock_token_${provider}_${Math.random().toString(36).substring(2, 15)}`,
        };

        // Store user in localStorage
        localStorage.setItem("user", JSON.stringify(socialUser));
        setUser(socialUser);

        // Sync settings with user preferences
        setLanguage(socialUser.language);
        setDirection(socialUser.direction);
        setTheme(socialUser.theme);

        console.log(`${provider} login successful (DEV MODE):`, socialUser);
      } else {
        // In production, make actual API call
        const userData = await api.fetchData(AUTH_ENDPOINTS.SOCIAL_LOGIN, {
          method: "POST",
          body: { email, name, userType, socialProvider: provider },
          requiresAuth: false,
        });

        // Store user in localStorage
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);

        // Sync settings with user preferences
        if (userData.language) setLanguage(userData.language);
        if (userData.direction) setDirection(userData.direction);
        if (userData.theme) setTheme(userData.theme);

        console.log(`${provider} login successful:`, userData);
      }
    } catch (err: any) {
      setError(err.message || `${provider} login failed`);
      console.error("Social login error:", err);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const clearError = () => {
    setError(null);
  };

  const updateProfileImage = async (file: File) => {
    if (!user) {
      setError("You must be logged in to update your profile image");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // In development mode, use mock data
      if (import.meta.env.DEV) {
        // Simulate API call with a timeout
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // For now, just use a mock URL since we can't actually upload
        const mockImageUrl = URL.createObjectURL(file);

        // Update user object with new image URL
        const updatedUser = { ...user, profileImage: mockImageUrl };

        // Update local user state
        setUser(updatedUser);

        // Save to localStorage
        localStorage.setItem("user", JSON.stringify(updatedUser));

        console.log("Profile image updated successfully (DEV MODE)");
      } else {
        // In production, create FormData and upload the image
        const formData = new FormData();
        formData.append("profileImage", file);

        const userData = await api.fetchData(AUTH_ENDPOINTS.PROFILE, {
          method: "PUT",
          body: formData,
          requiresAuth: true,
          formData: true,
        });

        // Update user object with new data
        setUser(userData);

        // Save to localStorage
        localStorage.setItem("user", JSON.stringify(userData));

        console.log("Profile image updated successfully");
      }
    } catch (err: any) {
      setError(err.message || "Failed to update profile image");
      console.error("Profile image update error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        error,
        login,
        register,
        socialLogin,
        updateProfileImage,
        logout,
        clearError,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
