import React, { useState, useEffect } from "react";
import ServiceList from "@/components/services/ServiceList";
import { useSettings } from "@/contexts/SettingsContext";

const CommercialService = () => {
  const { isRTL } = useSettings();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch commercial property services
    const fetchServices = async () => {
      setLoading(true);
      // In a real app, this would be an API call
      setTimeout(() => {
        const mockServices = [
          {
            id: "comm1",
            title: isRTL
              ? "مكتب تجاري في برج حديث"
              : "Commercial Office in Modern Tower",
            description: isRTL
              ? "مكتب تجاري في برج حديث بموقع مميز في وسط المدينة، مساحة 150 متر مربع."
              : "Commercial office in a modern tower with a prime location in the city center, area of 150 square meters.",
            image:
              "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
            price: 4500,
            rating: 4.8,
            category: "residence",
            serviceType: "commercial",
            isFavorite: false,
          },
          {
            id: "comm2",
            title: isRTL
              ? "محل تجاري في مجمع تسوق"
              : "Retail Shop in Shopping Mall",
            description: isRTL
              ? "محل تجاري في مجمع تسوق مزدحم، مساحة 80 متر مربع، موقع مثالي للأعمال التجارية."
              : "Retail shop in a busy shopping mall, area of 80 square meters, ideal location for business.",
            image:
              "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&q=80",
            price: 3800,
            rating: 4.6,
            category: "residence",
            serviceType: "commercial",
            isFavorite: false,
          },
          {
            id: "comm3",
            title: isRTL ? "مستودع صناعي" : "Industrial Warehouse",
            description: isRTL
              ? "مستودع صناعي في المنطقة الصناعية، مساحة 500 متر مربع، مع مكاتب إدارية ومواقف سيارات."
              : "Industrial warehouse in the industrial zone, area of 500 square meters, with administrative offices and parking spaces.",
            image:
              "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
            price: 6000,
            rating: 4.4,
            category: "residence",
            serviceType: "commercial",
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
          {isRTL
            ? "عقارات تجارية للإيجار والبيع"
            : "Commercial Properties for Rent and Sale"}
        </h2>
        <p className="text-gray-700">
          {isRTL
            ? "استكشف مجموعة متنوعة من العقارات التجارية المتاحة للإيجار والبيع في مختلف المناطق."
            : "Explore a variety of commercial properties available for rent and sale in different areas."}
        </p>
      </div>

      <ServiceList
        services={services}
        category="residence"
        serviceType="commercial"
        onFavoriteToggle={handleFavoriteToggle}
      />
    </div>
  );
};

export default CommercialService;
