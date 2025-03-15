import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const MaintenanceServices = () => {
  const { language = "en" } = useParams<{ language: string }>();
  const isRTL = language === "ar";

  const maintenanceServices = [
    {
      id: "home",
      title: isRTL ? "صيانة منزلية" : "Home Maintenance",
      description: isRTL
        ? "خدمات صيانة منزلية شاملة تغطي السباكة والكهرباء والتكييف وغيرها"
        : "Comprehensive home maintenance services covering plumbing, electricity, air conditioning, and more",
      imageSrc:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80",
    },
    {
      id: "commercial",
      title: isRTL ? "صيانة تجارية" : "Commercial Maintenance",
      description: isRTL
        ? "خدمات صيانة متكاملة للمباني التجارية والمكاتب والمنشآت"
        : "Integrated maintenance services for commercial buildings, offices, and facilities",
      imageSrc:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80",
    },
    {
      id: "emergency",
      title: isRTL ? "صيانة طارئة" : "Emergency Maintenance",
      description: isRTL
        ? "خدمات صيانة طارئة على مدار الساعة لحل المشكلات العاجلة"
        : "24/7 emergency maintenance services to solve urgent problems",
      imageSrc:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gray-50 ${isRTL ? "rtl" : "ltr"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Header isRTL={isRTL} />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">
          {isRTL ? "خدمات الصيانة" : "Maintenance Services"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {maintenanceServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.imageSrc}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  {isRTL ? "عرض التفاصيل" : "View Details"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer rtl={isRTL} />
    </div>
  );
};

export default MaintenanceServices;
