import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const DeliveryServices = () => {
  const { language = "en" } = useParams<{ language: string }>();
  const isRTL = language === "ar";

  const deliveryServices = [
    {
      id: "food",
      title: isRTL ? "توصيل الطعام" : "Food Delivery",
      description: isRTL
        ? "خدمات توصيل الطعام من المطاعم والمقاهي بسرعة وكفاءة"
        : "Fast and efficient food delivery services from restaurants and cafes",
      imageSrc:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
    },
    {
      id: "packages",
      title: isRTL ? "توصيل الطرود" : "Package Delivery",
      description: isRTL
        ? "خدمات توصيل الطرود والشحنات بين المدن وداخلها"
        : "Package and shipment delivery services between and within cities",
      imageSrc:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80",
    },
    {
      id: "grocery",
      title: isRTL ? "توصيل البقالة" : "Grocery Delivery",
      description: isRTL
        ? "خدمات توصيل البقالة والمستلزمات المنزلية من المتاجر والسوبرماركت"
        : "Grocery and household essentials delivery services from stores and supermarkets",
      imageSrc:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80",
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
          {isRTL ? "خدمات التوصيل" : "Delivery Services"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliveryServices.map((service) => (
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

export default DeliveryServices;
