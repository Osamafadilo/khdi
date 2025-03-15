import React, { useState, useEffect } from "react";
import ServiceList from "@/components/services/ServiceList";
import { useSettings } from "@/contexts/SettingsContext";

const LandService = () => {
  const { isRTL } = useSettings();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch land services
    const fetchServices = async () => {
      setLoading(true);
      // In a real app, this would be an API call
      setTimeout(() => {
        const mockServices = [
          {
            id: "land1",
            title: isRTL
              ? "أرض سكنية في حي راقي"
              : "Residential Land in Upscale Neighborhood",
            description: isRTL
              ? "أرض سكنية في حي راقي، مساحة 500 متر مربع، مناسبة لبناء فيلا خاصة."
              : "Residential land in an upscale neighborhood, area of 500 square meters, suitable for building a private villa.",
            image:
              "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
            price: 1200000,
            rating: 4.9,
            category: "residence",
            serviceType: "land",
            isFavorite: false,
          },
          {
            id: "land2",
            title: isRTL
              ? "أرض تجارية على طريق رئيسي"
              : "Commercial Land on Main Road",
            description: isRTL
              ? "أرض تجارية على طريق رئيسي، مساحة 1000 متر مربع، مناسبة لإنشاء مجمع تجاري."
              : "Commercial land on a main road, area of 1000 square meters, suitable for establishing a commercial complex.",
            image:
              "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
            price: 2500000,
            rating: 4.7,
            category: "residence",
            serviceType: "land",
            isFavorite: false,
          },
          {
            id: "land3",
            title: isRTL ? "أرض زراعية خصبة" : "Fertile Agricultural Land",
            description: isRTL
              ? "أرض زراعية خصبة، مساحة 5000 متر مربع، مع مصدر مياه دائم ومناسبة للزراعة المتنوعة."
              : "Fertile agricultural land, area of 5000 square meters, with a permanent water source and suitable for diverse agriculture.",
            image:
              "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
            price: 800000,
            rating: 4.5,
            category: "residence",
            serviceType: "land",
            isFavorite: false,
          },
        ];
        setServices(mockServices);
        setLoading(false);
      }, 1000);
    };

    fetchServices();
  }, [isRTL]);

  const handleFavoriteToggle = (serviceId) => {
    setServices(
      services.map((service) =>
        service.id === serviceId
          ? { ...service, isFavorite: !service.isFavorite }
          : service,
      ),
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-purple-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">
          {isRTL ? "أراضي للبيع" : "Land for Sale"}
        </h2>
        <p className="text-gray-700">
          {isRTL
            ? "استكشف مجموعة متنوعة من الأراضي المتاحة للبيع في مختلف المناطق، سواء كانت سكنية أو تجارية أو زراعية."
            : "Explore a variety of land available for sale in different areas, whether residential, commercial, or agricultural."}
        </p>
      </div>

      <ServiceList
        services={services}
        category="residence"
        serviceType="land"
        onFavoriteToggle={handleFavoriteToggle}
      />
    </div>
  );
};

export default LandService;
