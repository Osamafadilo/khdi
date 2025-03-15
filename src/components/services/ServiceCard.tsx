import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart } from "lucide-react";
import { useSettings } from "@/contexts/SettingsContext";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  category: string;
  serviceType: string;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
  providerImage?: string;
}

const ServiceCard = ({
  id,
  title,
  description,
  image,
  price,
  rating,
  category,
  serviceType,
  isFavorite = false,
  onFavoriteToggle,
  providerImage = "https://api.dicebear.com/7.x/avataaars/svg?seed=" + id,
}: ServiceCardProps) => {
  const { isRTL } = useSettings();
  const serviceLink = `/services/${category}/${serviceType}`;

  return (
    <Card className="overflow-hidden h-full flex flex-col cursor-pointer hover:shadow-lg transition-all">
      <Link to={serviceLink} className="flex-grow flex flex-col">
        <div className="relative h-48">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onFavoriteToggle && onFavoriteToggle();
            }}
            className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full hover:bg-white/90 transition-colors z-10"
          >
            <Heart
              className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"}`}
            />
          </button>
          <Badge className="absolute bottom-2 left-2 bg-purple-600">
            {isRTL ? "ريال" : "SAR"} {price}
          </Badge>
        </div>
        <CardHeader className="pb-2 pt-6">
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1 inline" />
            <span>{rating}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        </CardContent>
      </Link>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={serviceLink}>{isRTL ? "تصفح" : "Browse"}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
