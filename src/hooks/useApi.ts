import { useState, useCallback } from "react";
import { useAuth } from "../contexts/AuthContext";

interface ApiOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  headers?: Record<string, string>;
  requiresAuth?: boolean;
  formData?: boolean;
}

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T = any>() {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const { user, logout } = useAuth();

  const fetchData = useCallback(
    async (url: string, options: ApiOptions = {}) => {
      const {
        method = "GET",
        body,
        headers = {},
        requiresAuth = true,
        formData = false,
      } = options;

      setState((prev) => ({ ...prev, loading: true, error: null }));

      try {
        // Add auth header if required and user is logged in
        const requestHeaders: Record<string, string> = {
          ...headers,
        };

        // Don't set Content-Type for FormData, let the browser set it with the boundary
        if (!formData) {
          requestHeaders["Content-Type"] = "application/json";
        }

        if (requiresAuth && user?.token) {
          requestHeaders["Authorization"] = `Bearer ${user.token}`;
        }

        const response = await fetch(url, {
          method,
          headers: requestHeaders,
          body: formData ? body : body ? JSON.stringify(body) : undefined,
        });

        // Handle unauthorized responses
        if (response.status === 401 && requiresAuth) {
          logout();
          throw new Error("Your session has expired. Please log in again.");
        }

        if (!response.ok) {
          const errorData = await response
            .json()
            .catch(() => ({ message: "An error occurred" }));
          throw new Error(errorData.message || "Something went wrong");
        }

        const data = await response.json().catch(() => null);
        setState({ data, loading: false, error: null });
        return data;
      } catch (error: any) {
        setState({ data: null, loading: false, error: error.message });
        throw error;
      }
    },
    [user, logout],
  );

  return {
    ...state,
    fetchData,
    resetState: () => setState({ data: null, loading: false, error: null }),
  };
}
