import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAuth } from "../../contexts/AuthContext";
import { useApi } from "../../hooks/useApi";

interface ServiceProviderFormProps {
  isRTL?: boolean;
  onSuccess?: () => void;
}

const ServiceProviderForm = ({
  isRTL = false,
  onSuccess,
}: ServiceProviderFormProps) => {
  const { user } = useAuth();
  const { loading, error, fetchData } = useApi();

  const [formData, setFormData] = useState({
    companyName: "",
    businessLicense: "",
    serviceAreas: "",
    additionalInfo: "",
  });

  const [files, setFiles] = useState({
    idCard: null as File | null,
    businessLicense: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fileType: "idCard" | "businessLicense",
  ) => {
    if (e.target.files && e.target.files[0]) {
      setFiles((prev) => ({
        ...prev,
        [fileType]: e.target.files?.[0] || null,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) return;

    try {
      // Create form data for file upload
      const formDataObj = new FormData();

      // Add text fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value);
      });

      // Add files if they exist
      if (files.idCard) formDataObj.append("idCard", files.idCard);
      if (files.businessLicense)
        formDataObj.append("businessLicense", files.businessLicense);

      // In a real implementation, you would send the FormData object
      // For this example, we'll simulate a successful API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("Error updating service provider info:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="companyName">
          {isRTL ? "اسم الشركة أو المؤسسة" : "Company or Organization Name"}
        </Label>
        <Input
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder={isRTL ? "أدخل اسم الشركة" : "Enter company name"}
          required
          className={isRTL ? "text-right" : "text-left"}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="businessLicense">
          {isRTL ? "رقم الترخيص التجاري" : "Business License Number"}
        </Label>
        <Input
          id="businessLicense"
          name="businessLicense"
          value={formData.businessLicense}
          onChange={handleChange}
          placeholder={isRTL ? "أدخل رقم الترخيص" : "Enter license number"}
          required
          className={isRTL ? "text-right" : "text-left"}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="serviceAreas">
          {isRTL ? "مناطق الخدمة" : "Service Areas"}
        </Label>
        <Input
          id="serviceAreas"
          name="serviceAreas"
          value={formData.serviceAreas}
          onChange={handleChange}
          placeholder={
            isRTL
              ? "أدخل المناطق التي تقدم فيها الخدمة"
              : "Enter areas where you provide service"
          }
          required
          className={isRTL ? "text-right" : "text-left"}
        />
      </div>

      <div className="space-y-2">
        <Label>
          {isRTL
            ? "وثائق إثبات الهوية والتراخيص"
            : "Identity and License Documents"}
        </Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div className="border border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="text-sm text-gray-500 mb-2">
              {isRTL ? "بطاقة الهوية" : "ID Card"}
            </div>
            <input
              type="file"
              id="idCard"
              className="hidden"
              onChange={(e) => handleFileChange(e, "idCard")}
              accept="image/*,.pdf"
            />
            <Button
              variant="outline"
              size="sm"
              type="button"
              onClick={() => document.getElementById("idCard")?.click()}
            >
              {files.idCard
                ? isRTL
                  ? "تم اختيار الملف"
                  : "File Selected"
                : isRTL
                  ? "رفع الملف"
                  : "Upload File"}
            </Button>
          </div>
          <div className="border border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="text-sm text-gray-500 mb-2">
              {isRTL ? "الترخيص التجاري" : "Business License"}
            </div>
            <input
              type="file"
              id="businessLicenseFile"
              className="hidden"
              onChange={(e) => handleFileChange(e, "businessLicense")}
              accept="image/*,.pdf"
            />
            <Button
              variant="outline"
              size="sm"
              type="button"
              onClick={() =>
                document.getElementById("businessLicenseFile")?.click()
              }
            >
              {files.businessLicense
                ? isRTL
                  ? "تم اختيار الملف"
                  : "File Selected"
                : isRTL
                  ? "رفع الملف"
                  : "Upload File"}
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="additionalInfo">
          {isRTL ? "معلومات إضافية" : "Additional Information"}
        </Label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          className={`w-full min-h-[100px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${isRTL ? "text-right" : "text-left"}`}
          placeholder={
            isRTL
              ? "أي معلومات إضافية تود مشاركتها"
              : "Any additional information you'd like to share"
          }
        />
      </div>

      {error && (
        <div className="text-red-500 text-sm">
          {isRTL ? "حدث خطأ أثناء حفظ المعلومات" : error}
        </div>
      )}

      <Button type="submit" className="w-full" disabled={loading}>
        {loading
          ? isRTL
            ? "جاري الحفظ..."
            : "Saving..."
          : isRTL
            ? "حفظ المعلومات"
            : "Save Information"}
      </Button>
    </form>
  );
};

export default ServiceProviderForm;
