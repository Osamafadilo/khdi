import React, { useState, useEffect } from "react";
import ServiceList from "@/components/services/ServiceList";
import { useSettings } from "@/contexts/SettingsContext";

const HousesService = () => {
  const { isRTL } = useSettings();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch house services
    const fetchServices = async () => {
      setLoading(true);
      // In a real app, this would be an API call
      setTimeout(() => {
        const mockServices = [
          {
            id: "house1",
            title: isRTL ? "منزل عائلي مع حديقة" : "Family House with Garden",
            description: isRTL
              ? "منزل عائلي مريح مع حديقة أمامية وخلفية، يتضمن 3 غرف نوم وصالة معيشة واسعة."
              : "Comfortable family house with front and back garden, includes 3 bedrooms and a spacious living room.",
            image:
              "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
            price: 2200,
            rating: 4.5,
            category: "residence",
            serviceType: "houses",
            isFavorite: false,
          },
          {
            id: "house2",
            title: isRTL
              ? "منزل حديث في حي راقي"
              : "Modern House in Upscale Neighborhood",
            description: isRTL
              ? "منزل حديث التصميم في حي راقي، يتضمن 4 غرف نوم ومطبخ مفتوح وحديقة خلفية."
              : "Modern designed house in an upscale neighborhood, includes 4 bedrooms, open kitchen, and backyard.",
            image:
              "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&q=80",
            price: 3200,
            rating: 4.7,
            category: "residence",
            serviceType: "houses",
            isFavorite: false,
          },
          {
            id: "house3",
            title: isRTL ? "منزل تقليدي مجدد" : "Renovated Traditional House",
            description: isRTL
              ? "منزل تقليدي تم تجديده بالكامل، يجمع بين الأصالة والحداثة، يتضمن 3 غرف نوم وفناء داخلي."
              : "Fully renovated traditional house, combining authenticity and modernity, includes 3 bedrooms and an inner courtyard.",
            image:
              "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=800&q=80",
            price: 2800,
            rating: 4.6,
            category: "residence",
            serviceType: "houses",
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
          {isRTL ? "منازل للإيجار والبيع" : "Houses for Rent and Sale"}
        </h2>
        <p className="text-gray-700">
          {isRTL
            ? "استكشف مجموعة متنوعة من المنازل المتاحة للإيجار والبيع في مختلف المناطق."
            : "Explore a variety of houses available for rent and sale in different areas."}
        </p>
      </div>

      <ServiceList
        services={services}
        category="residence"
        serviceType="houses"
        onFavoriteToggle={handleFavoriteToggle}
      />
    </div>
  );
};

export default HousesService;
