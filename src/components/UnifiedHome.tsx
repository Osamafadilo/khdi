import React, { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useSettings } from "../contexts/SettingsContext";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  id: string;
  title: string;
  imageSrc: string;
  onClick?: () => void;
}

const ServiceCard = ({
  id,
  title,
  imageSrc,
  onClick = () => {},
}: ServiceCardProps) => {
  return (
    <div
      className="flex flex-col w-full max-w-[300px] overflow-hidden rounded-md bg-white shadow-md hover:shadow-lg transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <Button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-none">
        {title}
      </Button>
    </div>
  );
};

const UnifiedHome = () => {
  const { language, isRTL } = useSettings();
  const navigate = useNavigate();

  const services = [
    {
      id: "residence",
      title: isRTL ? "خدمات الإقامة" : "Residence Services",
      imageSrc:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
    },
    {
      id: "stores",
      title: isRTL ? "خدمات المتاجر" : "Store Services",
      imageSrc:
        "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?w=400&q=80",
    },
    {
      id: "restaurants",
      title: isRTL ? "خدمات المطاعم" : "Restaurant Services",
      imageSrc:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80",
    },
    {
      id: "maintenance",
      title: isRTL ? "خدمات الصيانة" : "Maintenance Services",
      imageSrc:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80",
    },
    {
      id: "travel",
      title: isRTL ? "خدمات السفر" : "Travel Services",
      imageSrc:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80",
    },
    {
      id: "delivery",
      title: isRTL ? "خدمات التوصيل" : "Delivery Services",
      imageSrc:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80",
    },
    {
      id: "investment",
      title: isRTL ? "خدمات الاستثمار" : "Investment Services",
      imageSrc:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&q=80",
    },
  ];

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}/${isRTL ? "ar" : "en"}`);
  };

  return (
    <div className="min-h-screen bg-gray-100" dir={isRTL ? "rtl" : "ltr"}>
      {/* Search Bar */}
      <div className="px-6 py-4 flex justify-center mt-20">
        <div className="relative w-full max-w-md">
          <Input
            type="text"
            placeholder={isRTL ? "ابحث عن خدمة" : "Search for a service"}
            className="w-full py-2 px-4 rounded-md border border-gray-300 pr-10"
          />
          <Button
            className={`absolute ${isRTL ? "left-0 rounded-r-none rounded-l-md" : "right-0 rounded-l-none rounded-r-md"} top-0 h-full bg-green-600 hover:bg-green-700 px-4`}
          >
            {isRTL ? "بحث" : "Search"}
          </Button>
        </div>
      </div>

      <div className="px-6 py-2 text-center">
        <span className="text-gray-600">
          {isRTL ? "خدمات دقيقة" : "Precise Services"}
        </span>
      </div>

      {/* Main Title */}
      <div className="px-6 py-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          {isRTL
            ? "كافة الخدمات الاحترافية لتطوير أعمالك"
            : "All Professional Services for Your Business Development"}
        </h1>
      </div>

      {/* Services Grid */}
      <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            imageSrc={service.imageSrc}
            onClick={() => handleServiceClick(service.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default UnifiedHome;
