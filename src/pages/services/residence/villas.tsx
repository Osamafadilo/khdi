import React, { useState, useEffect } from "react";
import ServiceList from "@/components/services/ServiceList";
import { useSettings } from "@/contexts/SettingsContext";

const VillasService = () => {
  const { isRTL } = useSettings();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch villa services
    const fetchServices = async () => {
      setLoading(true);
      // In a real app, this would be an API call
      setTimeout(() => {
        const mockServices = [
          {
            id: "villa1",
            title: isRTL ? "فيلا فاخرة مع مسبح" : "Luxury Villa with Pool",
            description: isRTL
              ? "فيلا فاخرة مع مسبح خاص وحديقة واسعة، تتضمن 5 غرف نوم وصالة كبيرة ومطبخ حديث."
              : "Luxury villa with private pool and spacious garden, includes 5 bedrooms, large living room, and modern kitchen.",
            image:
              "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
            price: 5000,
            rating: 4.9,
            category: "residence",
            serviceType: "villas",
            isFavorite: false,
          },
          {
            id: "villa2",
            title: isRTL
              ? "فيلا عائلية في ضاحية هادئة"
              : "Family Villa in Quiet Suburb",
            description: isRTL
              ? "فيلا عائلية في منطقة هادئة، تتضمن 4 غرف نوم وحديقة خلفية وموقف سيارات."
              : "Family villa in a quiet area, includes 4 bedrooms, backyard garden, and parking space.",
            image:
              "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
            price: 3500,
            rating: 4.6,
            category: "residence",
            serviceType: "villas",
            isFavorite: false,
          },
          {
            id: "villa3",
            title: isRTL ? "فيلا مطلة على البحر" : "Beachfront Villa",
            description: isRTL
              ? "فيلا فاخرة مطلة على البحر مباشرة، تتضمن 6 غرف نوم ومسبح لا نهائي وإطلالات خلابة."
              : "Luxury beachfront villa with direct sea view, includes 6 bedrooms, infinity pool, and stunning views.",
            image:
              "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
            price: 7500,
            rating: 5.0,
            category: "residence",
            serviceType: "villas",
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
          {isRTL ? "فلل للإيجار والبيع" : "Villas for Rent and Sale"}
        </h2>
        <p className="text-gray-700">
          {isRTL
            ? "استكشف مجموعة متنوعة من الفلل الفاخرة المتاحة للإيجار والبيع في مختلف المناطق."
            : "Explore a variety of luxury villas available for rent and sale in different areas."}
        </p>
      </div>

      <ServiceList
        services={services}
        category="residence"
        serviceType="villas"
        onFavoriteToggle={handleFavoriteToggle}
      />
    </div>
  );
};

export default VillasService;
