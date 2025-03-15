import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAuth } from "../../contexts/AuthContext";
import { AUTH_ENDPOINTS } from "../../lib/apiEndpoints";

interface LoginFormProps {
  isRTL?: boolean;
  onSuccess?: () => void;
  userType: "customer" | "provider";
}

const LoginForm = ({ isRTL = false, onSuccess, userType }: LoginFormProps) => {
  const { login, loading, error } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await login(formData.email, formData.password, userType);
      if (onSuccess) onSuccess();
    } catch (err) {
      // Error is handled by the AuthContext
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">{isRTL ? "البريد الإلكتروني" : "Email"}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={isRTL ? "أدخل بريدك الإلكتروني" : "Enter your email"}
          required
          className={isRTL ? "text-right" : "text-left"}
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <Label htmlFor="password">{isRTL ? "كلمة المرور" : "Password"}</Label>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
            {isRTL ? "نسيت كلمة المرور؟" : "Forgot password?"}
          </a>
        </div>
        <Input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder={isRTL ? "أدخل كلمة المرور" : "Enter your password"}
          required
          className={isRTL ? "text-right" : "text-left"}
        />
      </div>

      {error && (
        <div className="text-red-500 text-sm">
          {isRTL ? "خطأ في تسجيل الدخول" : error}
        </div>
      )}

      <Button type="submit" className="w-full" disabled={loading}>
        {loading
          ? isRTL
            ? "جاري التحميل..."
            : "Loading..."
          : isRTL
            ? "تسجيل الدخول"
            : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
