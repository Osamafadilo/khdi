import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAuth } from "../../contexts/AuthContext";
import { useApi } from "../../hooks/useApi";
import { AUTH_ENDPOINTS } from "../../lib/apiEndpoints";

interface UpdateProfileFormProps {
  isRTL?: boolean;
  onSuccess?: () => void;
}

const UpdateProfileForm = ({
  isRTL = false,
  onSuccess,
}: UpdateProfileFormProps) => {
  const { user, setUser } = useAuth();
  const { loading, error, fetchData } = useApi();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "", // Add any additional fields from your user model
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) return;

    try {
      const updatedUser = await fetchData(AUTH_ENDPOINTS.PROFILE, {
        method: "PUT",
        body: formData,
        requiresAuth: true,
      });

      // Update local user state
      if (updatedUser) {
        setUser({ ...user, ...updatedUser });
        localStorage.setItem(
          "user",
          JSON.stringify({ ...user, ...updatedUser }),
        );
        if (onSuccess) onSuccess();
      }
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">{isRTL ? "الاسم الكامل" : "Full Name"}</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={isRTL ? "text-right" : "text-left"}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{isRTL ? "البريد الإلكتروني" : "Email"}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={isRTL ? "text-right" : "text-left"}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">{isRTL ? "رقم الهاتف" : "Phone Number"}</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={isRTL ? "text-right" : "text-left"}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">{isRTL ? "العنوان" : "Address"}</Label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={isRTL ? "text-right" : "text-left"}
          />
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-sm">
          {isRTL ? "حدث خطأ أثناء تحديث الملف الشخصي" : error}
        </div>
      )}

      <Button type="submit" disabled={loading}>
        {loading
          ? isRTL
            ? "جاري الحفظ..."
            : "Saving..."
          : isRTL
            ? "حفظ التغييرات"
            : "Save Changes"}
      </Button>
    </form>
  );
};

export default UpdateProfileForm;
