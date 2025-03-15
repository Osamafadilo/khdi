import React, { ReactNode } from "react";
import { useSettings } from "@/contexts/SettingsContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceSidebar from "@/components/services/ServiceSidebar";
import { serviceCategories } from "@/data/serviceTypes";

interface ServiceLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

const ServiceLayout = ({
  children,
  title,
  description,
}: ServiceLayoutProps) => {
  const { isRTL } = useSettings();

  return (
    <div
      className={`min-h-screen bg-gray-50 ${isRTL ? "rtl" : "ltr"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Header />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {description && (
            <p className="mt-2 text-lg text-gray-600">{description}</p>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-64 flex-shrink-0">
            <ServiceSidebar
              serviceCategory="stores"
              serviceTypes={serviceCategories.stores?.types || []}
            />
          </div>
          <div className="flex-grow">{children}</div>
        </div>
      </main>

      <Footer rtl={isRTL} />
    </div>
  );
};

export default ServiceLayout;
