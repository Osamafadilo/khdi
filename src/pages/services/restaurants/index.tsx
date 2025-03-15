import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const RestaurantsServices = () => {
  const { language = "en" } = useParams<{ language: string }>();
  const isRTL = language === "ar";

  const restaurantsServices = [
    {
      id: "cafes",
      title: isRTL ? "المقاهي" : "Cafes",
      description: isRTL
        ? "خدمات متكاملة للمقاهي تشمل الإدارة والتشغيل والتسويق"
        : "Comprehensive services for cafes including management, operations, and marketing",
      imageSrc:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=80",
    },
    {
      id: "fastfood",
      title: isRTL ? "مطاعم الوجبات السريعة" : "Fast Food Restaurants",
      description: isRTL
        ? "حلول متكاملة لمطاعم الوجبات السريعة تشمل الإدارة والتشغيل والتوسع"
        : "Integrated solutions for fast food restaurants including management, operations, and expansion",
      imageSrc:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80",
    },
    {
      id: "finedining",
      title: isRTL ? "مطاعم فاخرة" : "Fine Dining",
      description: isRTL
        ? "خدمات إدارية وتشغيلية متميزة للمطاعم الفاخرة"
        : "Premium administrative and operational services for fine dining restaurants",
      imageSrc:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
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
          {isRTL ? "خدمات المطاعم" : "Restaurant Services"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurantsServices.map((service) => (
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

export default RestaurantsServices;
