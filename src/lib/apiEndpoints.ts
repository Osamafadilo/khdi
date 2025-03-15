// API Endpoints Reference

// Base URL
const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";

// Auth Endpoints
export const AUTH_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/users/login`,
  REGISTER: `${API_BASE_URL}/users`,
  SOCIAL_LOGIN: `${API_BASE_URL}/users/social-login`,
  PROFILE: `${API_BASE_URL}/users/profile`,
  CHANGE_PASSWORD: `${API_BASE_URL}/users/change-password`,
};

// Service Categories Endpoints
export const SERVICE_ENDPOINTS = {
  CATEGORIES: `${API_BASE_URL}/services/categories`,
  RESIDENCE: `${API_BASE_URL}/services/residence`,
  STORES: `${API_BASE_URL}/services/stores`,
  RESTAURANTS: `${API_BASE_URL}/services/restaurants`,
  MAINTENANCE: `${API_BASE_URL}/services/maintenance`,
  TRAVEL: `${API_BASE_URL}/services/travel`,
  DELIVERY: `${API_BASE_URL}/services/delivery`,
  INVESTMENT: `${API_BASE_URL}/services/investment`,
  SEARCH: `${API_BASE_URL}/services/search`,
};

// User Profile Endpoints
export const PROFILE_ENDPOINTS = {
  UPDATE_PROFILE: `${API_BASE_URL}/users/profile`,
  NOTIFICATIONS: `${API_BASE_URL}/users/notifications`,
  FAVORITES: `${API_BASE_URL}/users/favorites`,
  ORDERS: `${API_BASE_URL}/users/orders`,
  PROVIDER_SETTINGS: `${API_BASE_URL}/users/provider-settings`,
};

// Settings Endpoints
export const SETTINGS_ENDPOINTS = {
  UPDATE_SETTINGS: `${API_BASE_URL}/users/settings`,
};

export default {
  AUTH_ENDPOINTS,
  SERVICE_ENDPOINTS,
  PROFILE_ENDPOINTS,
  SETTINGS_ENDPOINTS,
};
