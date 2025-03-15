import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const InvestmentServices = () => {
  const { language = "en" } = useParams<{ language: string }>();
  const isRTL = language === "ar";

  const investmentServices = [
    {
      id: "realestate",
      title: isRTL ? "استثمار عقاري" : "Real Estate Investment",
      description: isRTL
        ? "خدمات استثمارية في القطاع العقاري مع فرص متنوعة وعوائد مجزية"
        : "Investment services in the real estate sector with diverse opportunities and rewarding returns",
      imageSrc:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
    },
    {
      id: "stocks",
      title: isRTL ? "استثمار في الأسهم" : "Stock Investment",
      description: isRTL
        ? "خدمات استثمارية في سوق الأسهم مع استشارات مالية متخصصة"
        : "Investment services in the stock market with specialized financial consultations",
      imageSrc:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80",
    },
    {
      id: "startups",
      title: isRTL ? "استثمار في الشركات الناشئة" : "Startup Investment",
      description: isRTL
        ? "فرص استثمارية في الشركات الناشئة والمشاريع الريادية الواعدة"
        : "Investment opportunities in promising startups and pioneering projects",
      imageSrc:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&q=80",
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
          {isRTL ? "خدمات الاستثمار" : "Investment Services"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {investmentServices.map((service) => (
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

export default InvestmentServices;
