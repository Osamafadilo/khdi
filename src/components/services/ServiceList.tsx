import React from "react";
import ServiceCard from "./ServiceCard";
import { useSettings } from "@/contexts/SettingsContext";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  category: string;
  serviceType: string;
  isFavorite?: boolean;
}

interface ServiceListProps {
  services: Service[];
  category: string;
  serviceType: string;
  onFavoriteToggle?: (serviceId: string) => void;
}

const ServiceList = ({
  services,
  category,
  serviceType,
  onFavoriteToggle,
}: ServiceListProps) => {
  const { isRTL } = useSettings();

  if (services.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-gray-500">
          {isRTL
            ? "لا توجد خدمات متاحة حاليًا"
            : "No services available at the moment"}
        </h3>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          image={service.image}
          price={service.price}
          rating={service.rating}
          category={category}
          serviceType={serviceType}
          isFavorite={service.isFavorite}
          onFavoriteToggle={() =>
            onFavoriteToggle && onFavoriteToggle(service.id)
          }
        />
      ))}
    </div>
  );
};

export default ServiceList;
