import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { validateToken } from "../../lib/api";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { user, logout } = useAuth();
  const [isValidating, setIsValidating] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      if (user?.token) {
        try {
          // Validate the token on component mount
          const isValid = await validateToken(user.token);
          if (!isValid) {
            // Token is invalid, log the user out
            logout();
          }
        } catch (error) {
          console.error("Token validation error:", error);
          logout();
        }
      }
      setIsValidating(false);
    };

    checkToken();
  }, [user, logout]);

  if (isValidating) {
    // Show loading state while validating token
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthGuard;
