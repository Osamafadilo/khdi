import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredUserType?: "customer" | "provider" | null;
}

const ProtectedRoute = ({
  children,
  requiredUserType = null,
}: ProtectedRouteProps) => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // If a specific user type is required, check it
  if (requiredUserType && user?.userType !== requiredUserType) {
    // Redirect to home or unauthorized page
    return <Navigate to="/" replace />;
  }

  // User is authenticated and has the required user type (if any)
  return <>{children}</>;
};

export default ProtectedRoute;
