import React from "react";
import { Outlet } from "react-router-dom";
import ServiceSidebar from "./ServiceSidebar";
import { useSettings } from "@/contexts/SettingsContext";

interface ServiceLayoutProps {
  serviceCategory: string;
  serviceTypes: Array<{
    id: string;
    nameAr: string;
    nameEn: string;
    path: string;
  }>;
  title: {
    ar: string;
    en: string;
  };
}

const ServiceLayout = ({
  serviceCategory,
  serviceTypes,
  title,
}: ServiceLayoutProps) => {
  const { isRTL } = useSettings();

  return (
    <div className="container mx-auto py-8" dir={isRTL ? "rtl" : "ltr"}>
      <h1 className="text-3xl font-bold mb-6">{isRTL ? title.ar : title.en}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className={`md:w-64 ${isRTL ? "order-2" : "order-1"}`}>
          <ServiceSidebar
            serviceCategory={serviceCategory}
            serviceTypes={serviceTypes}
          />
        </div>
        <div className={`flex-1 ${isRTL ? "order-1" : "order-2"}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
