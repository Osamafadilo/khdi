import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAuth } from "../../contexts/AuthContext";
import { useApi } from "../../hooks/useApi";
import { AUTH_ENDPOINTS } from "../../lib/apiEndpoints";

interface ChangePasswordFormProps {
  isRTL?: boolean;
  onSuccess?: () => void;
}

const ChangePasswordForm = ({
  isRTL = false,
  onSuccess,
}: ChangePasswordFormProps) => {
  const { user } = useAuth();
  const { loading, error, fetchData } = useApi();

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) return;

    // Validate passwords match
    if (formData.newPassword !== formData.confirmPassword) {
      setFormError(
        isRTL ? "كلمات المرور غير متطابقة" : "Passwords do not match",
      );
      return;
    }

    try {
      await fetchData(AUTH_ENDPOINTS.CHANGE_PASSWORD, {
        method: "PUT",
        body: {
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        },
        requiresAuth: true,
      });

      // Reset form
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("Error changing password:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="currentPassword">
          {isRTL ? "كلمة المرور الحالية" : "Current Password"}
        </Label>
        <Input
          id="currentPassword"
          name="currentPassword"
          type="password"
          value={formData.currentPassword}
          onChange={handleChange}
          required
          className={isRTL ? "text-right" : "text-left"}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="newPassword">
          {isRTL ? "كلمة المرور الجديدة" : "New Password"}
        </Label>
        <Input
          id="newPassword"
          name="newPassword"
          type="password"
          value={formData.newPassword}
          onChange={handleChange}
          required
          className={isRTL ? "text-right" : "text-left"}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">
          {isRTL ? "تأكيد كلمة المرور" : "Confirm Password"}
        </Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className={isRTL ? "text-right" : "text-left"}
        />
      </div>

      {(formError || error) && (
        <div className="text-red-500 text-sm">
          {formError || (isRTL ? "حدث خطأ أثناء تغيير كلمة المرور" : error)}
        </div>
      )}

      <Button type="submit" disabled={loading}>
        {loading
          ? isRTL
            ? "جاري التحديث..."
            : "Updating..."
          : isRTL
            ? "تحديث كلمة المرور"
            : "Update Password"}
      </Button>
    </form>
  );
};

export default ChangePasswordForm;
