import { validateToken } from "../lib/api";

// This middleware can be used in React Router to protect routes
export const requireAuth = async (token: string | null) => {
  if (!token) {
    throw new Error("Authentication required");
  }

  const user = await validateToken(token);
  if (!user) {
    throw new Error("Invalid or expired token");
  }

  return user;
};

// This middleware can be used to check if the user is a service provider
export const requireServiceProvider = async (token: string | null) => {
  const user = await requireAuth(token);

  if (user.userType !== "provider") {
    throw new Error("Service provider access required");
  }

  return user;
};

// This middleware can be used to check if the user is a customer
export const requireCustomer = async (token: string | null) => {
  const user = await requireAuth(token);

  if (user.userType !== "customer") {
    throw new Error("Customer access required");
  }

  return user;
};
