import React, { useState, useEffect } from "react";
import ServiceList from "@/components/services/ServiceList";
import { useSettings } from "@/contexts/SettingsContext";

const RentalService = () => {
  const { isRTL } = useSettings();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch rental services
    const fetchServices = async () => {
      setLoading(true);
      // In a real app, this would be an API call
      setTimeout(() => {
        const mockServices = [
          {
            id: "rental1",
            title: isRTL
              ? "خدمة إدارة العقارات"
              : "Property Management Service",
            description: isRTL
              ? "خدمة شاملة لإدارة العقارات السكنية والتجارية، تشمل تحصيل الإيجارات وصيانة العقار وإدارة المستأجرين."
              : "Comprehensive service for managing residential and commercial properties, including rent collection, property maintenance, and tenant management.",
            image:
              "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80",
            price: 500,
            rating: 4.8,
            category: "residence",
            serviceType: "rental",
            isFavorite: false,
          },
          {
            id: "rental2",
            title: isRTL ? "خدمة البحث عن مستأجرين" : "Tenant Finding Service",
            description: isRTL
              ? "خدمة متخصصة في البحث عن مستأجرين موثوقين لعقارك، تشمل التسويق والفحص والتعاقد."
              : "Specialized service in finding reliable tenants for your property, including marketing, screening, and contracting.",
            image:
              "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
            price: 300,
            rating: 4.6,
            category: "residence",
            serviceType: "rental",
            isFavorite: false,
          },
          {
            id: "rental3",
            title: isRTL
              ? "خدمة الصيانة الدورية"
              : "Regular Maintenance Service",
            description: isRTL
              ? "خدمة الصيانة الدورية للعقارات، تشمل فحص وإصلاح الأعطال وتحديث المرافق بشكل منتظم."
              : "Regular maintenance service for properties, including inspection, repair of malfunctions, and regular updating of facilities.",
            image:
              "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
            price: 200,
            rating: 4.7,
            category: "residence",
            serviceType: "rental",
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
          {isRTL ? "خدمات التأجير" : "Rental Services"}
        </h2>
        <p className="text-gray-700">
          {isRTL
            ? "استكشف مجموعة متنوعة من خدمات التأجير المتخصصة لمساعدتك في إدارة عقاراتك بكفاءة."
            : "Explore a variety of specialized rental services to help you efficiently manage your properties."}
        </p>
      </div>

      <ServiceList
        services={services}
        category="residence"
        serviceType="rental"
        onFavoriteToggle={handleFavoriteToggle}
      />
    </div>
  );
};

export default RentalService;
