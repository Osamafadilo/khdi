import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Heart, Trash2 } from "lucide-react";

interface FavoritesPageProps {
  isRTL?: boolean;
}

const FavoritesPage = ({ isRTL = false }: FavoritesPageProps) => {
  const navigate = useNavigate();

  // Mock data for favorites
  const favorites = [
    {
      id: 1,
      title: isRTL ? "خدمة صيانة منزلية" : "Home Maintenance Service",
      category: isRTL ? "صيانة" : "Maintenance",
      provider: isRTL ? "شركة الصيانة المتميزة" : "Premium Maintenance Co.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    },
    {
      id: 2,
      title: isRTL ? "خدمة توصيل طعام" : "Food Delivery Service",
      category: isRTL ? "توصيل" : "Delivery",
      provider: isRTL ? "توصيل سريع" : "Fast Delivery",
      image:
        "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&q=80",
    },
    {
      id: 3,
      title: isRTL ? "استشارات استثمارية" : "Investment Consultation",
      category: isRTL ? "استثمار" : "Investment",
      provider: isRTL ? "مستشارون ماليون" : "Financial Advisors",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    },
  ];

  return (
    <div className="container mx-auto py-10" dir={isRTL ? "rtl" : "ltr"}>
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mr-2">
          {isRTL ? "رجوع" : "Back"}
        </Button>
        <h1 className="text-3xl font-bold">
          {isRTL ? "المفضلة" : "Favorites"}
        </h1>
      </div>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((favorite) => (
            <Card key={favorite.id} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <img
                  src={favorite.image}
                  alt={favorite.title}
                  className="h-full w-full object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white/90 rounded-full"
                >
                  <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                </Button>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{favorite.title}</CardTitle>
                <CardDescription>
                  {favorite.category} • {favorite.provider}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // Navigate to service details
                    // navigate(`/services/${favorite.category.toLowerCase()}/${favorite.id}`);
                  }}
                >
                  {isRTL ? "عرض التفاصيل" : "View Details"}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-500"
                  onClick={() => {
                    // Remove from favorites
                  }}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  {isRTL ? "إزالة" : "Remove"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="w-full max-w-2xl mx-auto text-center p-6">
          <CardHeader>
            <CardTitle>
              {isRTL ? "لا توجد خدمات مفضلة" : "No Favorite Services"}
            </CardTitle>
            <CardDescription>
              {isRTL
                ? "لم تقم بإضافة أي خدمات إلى المفضلة بعد"
                : "You haven't added any services to your favorites yet"}
            </CardDescription>
          </CardHeader>
          <CardFooter className="justify-center">
            <Button onClick={() => navigate("/")}>
              {isRTL ? "استكشف الخدمات" : "Explore Services"}
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default FavoritesPage;
