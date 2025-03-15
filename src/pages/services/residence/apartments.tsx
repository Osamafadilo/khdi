import React, { useState, useEffect } from "react";
import ServiceList from "@/components/services/ServiceList";
import { useSettings } from "@/contexts/SettingsContext";

const ApartmentsService = () => {
  const { isRTL } = useSettings();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch apartment services
    const fetchServices = async () => {
      setLoading(true);
      // In a real app, this would be an API call
      setTimeout(() => {
        const mockServices = [
          {
            id: "apt1",
            title: isRTL
              ? "شقة فاخرة في وسط المدينة"
              : "Luxury Apartment in City Center",
            description: isRTL
              ? "شقة فاخرة مفروشة بالكامل في وسط المدينة، قريبة من جميع الخدمات والمرافق."
              : "Fully furnished luxury apartment in the city center, close to all services and amenities.",
            image:
              "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
            price: 2500,
            rating: 4.8,
            category: "residence",
            serviceType: "apartments",
            isFavorite: false,
          },
          {
            id: "apt2",
            title: isRTL
              ? "شقة عائلية مع إطلالة"
              : "Family Apartment with View",
            description: isRTL
              ? "شقة عائلية واسعة مع إطلالة رائعة على المدينة، تتضمن 3 غرف نوم وصالة كبيرة."
              : "Spacious family apartment with a great view of the city, includes 3 bedrooms and a large living room.",
            image:
              "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
            price: 1800,
            rating: 4.5,
            category: "residence",
            serviceType: "apartments",
            isFavorite: false,
          },
          {
            id: "apt3",
            title: isRTL ? "استوديو حديث للإيجار" : "Modern Studio for Rent",
            description: isRTL
              ? "استوديو حديث ومؤثث بالكامل، مثالي للأفراد أو الأزواج، يتضمن جميع المرافق."
              : "Modern and fully furnished studio, perfect for individuals or couples, includes all utilities.",
            image:
              "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
            price: 1200,
            rating: 4.2,
            category: "residence",
            serviceType: "apartments",
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
          {isRTL ? "شقق للإيجار والبيع" : "Apartments for Rent and Sale"}
        </h2>
        <p className="text-gray-700">
          {isRTL
            ? "استكشف مجموعة متنوعة من الشقق المتاحة للإيجار والبيع في مختلف المناطق."
            : "Explore a variety of apartments available for rent and sale in different areas."}
        </p>
      </div>

      <ServiceList
        services={services}
        category="residence"
        serviceType="apartments"
        onFavoriteToggle={handleFavoriteToggle}
      />
    </div>
  );
};

export default ApartmentsService;
