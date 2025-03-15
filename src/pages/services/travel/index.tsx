import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const TravelServices = () => {
  const { language = "en" } = useParams<{ language: string }>();
  const isRTL = language === "ar";

  const travelServices = [
    {
      id: "flights",
      title: isRTL ? "حجز الطيران" : "Flight Booking",
      description: isRTL
        ? "خدمات حجز تذاكر الطيران بأفضل الأسعار مع خيارات متعددة"
        : "Flight ticket booking services at the best prices with multiple options",
      imageSrc:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80",
    },
    {
      id: "hotels",
      title: isRTL ? "حجز الفنادق" : "Hotel Booking",
      description: isRTL
        ? "خدمات حجز الفنادق والإقامة بأسعار تنافسية في جميع أنحاء العالم"
        : "Hotel and accommodation booking services at competitive prices worldwide",
      imageSrc:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80",
    },
    {
      id: "packages",
      title: isRTL ? "باقات سياحية" : "Travel Packages",
      description: isRTL
        ? "باقات سياحية متكاملة تشمل الطيران والإقامة والمواصلات والجولات"
        : "Comprehensive travel packages including flights, accommodation, transportation, and tours",
      imageSrc:
        "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=400&q=80",
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
          {isRTL ? "خدمات السفر" : "Travel Services"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelServices.map((service) => (
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

export default TravelServices;
