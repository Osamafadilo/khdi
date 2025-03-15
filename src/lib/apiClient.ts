import { useApi } from "../hooks/useApi";
import {
  AUTH_ENDPOINTS,
  SERVICE_ENDPOINTS,
  PROFILE_ENDPOINTS,
  SETTINGS_ENDPOINTS,
} from "./apiEndpoints";
import { User } from "../contexts/AuthContext";

// Auth API functions
export const authApi = {
  login: async (
    email: string,
    password: string,
    userType: "customer" | "provider",
  ) => {
    const { fetchData } = useApi();
    return fetchData(AUTH_ENDPOINTS.LOGIN, {
      method: "POST",
      body: { email, password, userType },
      requiresAuth: false,
    });
  },

  register: async (
    name: string,
    email: string,
    password: string,
    userType: "customer" | "provider",
    serviceType?: string,
  ) => {
    const { fetchData } = useApi();
    return fetchData(AUTH_ENDPOINTS.REGISTER, {
      method: "POST",
      body: { name, email, password, userType, serviceType },
      requiresAuth: false,
    });
  },

  socialLogin: async (
    provider: string,
    email: string,
    name: string,
    userType: "customer" | "provider",
  ) => {
    const { fetchData } = useApi();
    return fetchData(AUTH_ENDPOINTS.SOCIAL_LOGIN, {
      method: "POST",
      body: { email, name, userType, socialProvider: provider },
      requiresAuth: false,
    });
  },

  getUserProfile: async () => {
    const { fetchData } = useApi();
    return fetchData(AUTH_ENDPOINTS.PROFILE, {
      method: "GET",
      requiresAuth: true,
    });
  },

  updateUserProfile: async (userData: Partial<User>) => {
    const { fetchData } = useApi();
    return fetchData(AUTH_ENDPOINTS.PROFILE, {
      method: "PUT",
      body: userData,
      requiresAuth: true,
    });
  },

  changePassword: async (currentPassword: string, newPassword: string) => {
    const { fetchData } = useApi();
    return fetchData(AUTH_ENDPOINTS.CHANGE_PASSWORD, {
      method: "PUT",
      body: { currentPassword, newPassword },
      requiresAuth: true,
    });
  },

  uploadProfileImage: async (file: File) => {
    const { fetchData } = useApi();
    const formData = new FormData();
    formData.append("profileImage", file);

    return fetchData(AUTH_ENDPOINTS.PROFILE, {
      method: "PUT",
      body: formData,
      requiresAuth: true,
      formData: true,
    });
  },
};

// Service API functions
export const serviceApi = {
  getCategories: async () => {
    const { fetchData } = useApi();
    return fetchData(SERVICE_ENDPOINTS.CATEGORIES, {
      method: "GET",
      requiresAuth: false,
    });
  },

  getServicesByCategory: async (category: string) => {
    const { fetchData } = useApi();
    return fetchData(`${SERVICE_ENDPOINTS.CATEGORIES}/${category}`, {
      method: "GET",
      requiresAuth: false,
    });
  },

  searchServices: async (query: string, category?: string) => {
    const { fetchData } = useApi();
    const queryParams = new URLSearchParams();
    queryParams.append("query", query);
    if (category) queryParams.append("category", category);

    return fetchData(`${SERVICE_ENDPOINTS.SEARCH}?${queryParams.toString()}`, {
      method: "GET",
      requiresAuth: false,
    });
  },
};

// Profile API functions
export const profileApi = {
  getNotifications: async () => {
    const { fetchData } = useApi();
    return fetchData(PROFILE_ENDPOINTS.NOTIFICATIONS, {
      method: "GET",
      requiresAuth: true,
    });
  },

  getFavorites: async () => {
    const { fetchData } = useApi();
    return fetchData(PROFILE_ENDPOINTS.FAVORITES, {
      method: "GET",
      requiresAuth: true,
    });
  },

  getOrders: async () => {
    const { fetchData } = useApi();
    return fetchData(PROFILE_ENDPOINTS.ORDERS, {
      method: "GET",
      requiresAuth: true,
    });
  },

  updateProviderSettings: async (providerData: any) => {
    const { fetchData } = useApi();
    return fetchData(PROFILE_ENDPOINTS.PROVIDER_SETTINGS, {
      method: "PUT",
      body: providerData,
      requiresAuth: true,
    });
  },
};

// Settings API functions
export const settingsApi = {
  updateSettings: async (settings: {
    language?: string;
    direction?: string;
    theme?: string;
  }) => {
    const { fetchData } = useApi();
    return fetchData(SETTINGS_ENDPOINTS.UPDATE_SETTINGS, {
      method: "PUT",
      body: settings,
      requiresAuth: true,
    });
  },
};

export default {
  auth: authApi,
  service: serviceApi,
  profile: profileApi,
  settings: settingsApi,
};
