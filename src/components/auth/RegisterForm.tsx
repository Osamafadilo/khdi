import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAuth } from "../../contexts/AuthContext";
import { AUTH_ENDPOINTS } from "../../lib/apiEndpoints";

interface RegisterFormProps {
  isRTL?: boolean;
  onSuccess?: () => void;
  userType: "customer" | "provider";
}

const RegisterForm = ({
  isRTL = false,
  onSuccess,
  userType,
}: RegisterFormProps) => {
  const { register, loading, error } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    serviceType: "",
  });

  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setFormError(
        isRTL ? "كلمات المرور غير متطابقة" : "Passwords do not match",
      );
      return;
    }

    try {
      await register(
        formData.name,
        formData.email,
        formData.password,
        userType,
        userType === "provider" ? formData.serviceType : undefined,
      );
      if (onSuccess) onSuccess();
    } catch (err) {
      // Error is handled by the AuthContext
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="register-name">
          {isRTL ? "الاسم الكامل" : "Full Name"}
        </Label>
        <Input
          id="register-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={isRTL ? "أدخل اسمك الكامل" : "Enter your full name"}
          required
          className={isRTL ? "text-right" : "text-left"}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="register-email">
          {isRTL ? "البريد الإلكتروني" : "Email"}
        </Label>
        <Input
          id="register-email"
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
        <Label htmlFor="register-password">
          {isRTL ? "كلمة المرور" : "Password"}
        </Label>
        <Input
          id="register-password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder={isRTL ? "أدخل كلمة المرور" : "Create a password"}
          required
          className={isRTL ? "text-right" : "text-left"}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="register-confirm-password">
          {isRTL ? "تأكيد كلمة المرور" : "Confirm Password"}
        </Label>
        <Input
          id="register-confirm-password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder={
            isRTL ? "أعد إدخال كلمة المرور" : "Confirm your password"
          }
          required
          className={isRTL ? "text-right" : "text-left"}
        />
      </div>

      {userType === "provider" && (
        <div className="space-y-2">
          <Label htmlFor="provider-service-type">
            {isRTL ? "نوع الخدمة" : "Service Type"}
          </Label>
          <Input
            id="provider-service-type"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            placeholder={
              isRTL
                ? "أدخل نوع الخدمة التي تقدمها"
                : "Enter the type of service you provide"
            }
            required
            className={isRTL ? "text-right" : "text-left"}
          />
        </div>
      )}

      {(formError || error) && (
        <div className="text-red-500 text-sm">
          {formError || (isRTL ? "خطأ في إنشاء الحساب" : error)}
        </div>
      )}

      <Button type="submit" className="w-full" disabled={loading}>
        {loading
          ? isRTL
            ? "جاري التحميل..."
            : "Loading..."
          : isRTL
            ? "إنشاء حساب"
            : "Register"}
      </Button>
    </form>
  );
};

export default RegisterForm;
