import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useSettings } from "@/contexts/SettingsContext";

interface ServiceType {
  id: string;
  nameAr: string;
  nameEn: string;
  path: string;
}

interface ServiceSidebarProps {
  serviceCategory: string;
  serviceTypes?: ServiceType[];
}

const ServiceSidebar = ({
  serviceCategory,
  serviceTypes = [],
}: ServiceSidebarProps) => {
  const location = useLocation();
  const { isRTL } = useSettings();

  return (
    <div className="w-64 bg-white shadow-md rounded-md overflow-hidden">
      <div className="bg-purple-600 text-white p-4">
        <h2 className="text-lg font-semibold">
          {isRTL ? "أنواع الخدمات" : "Service Types"}
        </h2>
      </div>
      <nav className="p-2">
        <ul className="space-y-1">
          {serviceTypes &&
          Array.isArray(serviceTypes) &&
          serviceTypes.length > 0 ? (
            serviceTypes.map((type) => (
              <li key={type.id}>
                <Link
                  to={`/services/${serviceCategory}/${type.id}`}
                  className={cn(
                    "block px-4 py-2 rounded-md transition-colors",
                    location.pathname ===
                      `/services/${serviceCategory}/${type.id}`
                      ? "bg-purple-100 text-purple-700 font-medium"
                      : "hover:bg-gray-100",
                  )}
                >
                  {isRTL ? type.nameAr : type.nameEn}
                </Link>
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">
              {isRTL ? "لا توجد أنواع خدمات" : "No service types available"}
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default ServiceSidebar;
