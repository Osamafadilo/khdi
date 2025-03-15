import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSettings } from "@/contexts/SettingsContext";
import ServiceCard from "./ServiceCard";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  ShoppingBag,
  Smartphone,
  Store,
  Globe,
  ShoppingCart,
  Sofa,
} from "lucide-react";

interface Store {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  category: string;
  serviceType: string;
  isFavorite: boolean;
}

interface NearbyStoresProps {
  serviceType?: string;
}

const NearbyStores = ({ serviceType }: NearbyStoresProps) => {
  const params = useParams<{ storeType: string }>();
  const effectiveStoreType = serviceType || params.storeType || "all";
  const { isRTL } = useSettings();
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  // Mock data for stores
  const mockStores: Store[] = [
    {
      id: "store1",
      title: isRTL ? "سوبرماركت الرياض" : "Riyadh Supermarket",
      description: isRTL
        ? "سوبرماركت شامل يوفر جميع المنتجات الغذائية والاستهلاكية بأسعار منافسة"
        : "Comprehensive supermarket offering all food and consumer products at competitive prices",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
      price: 0,
      rating: 4.7,
      category: "stores",
      serviceType: "grocery",
      isFavorite: false,
    },
    {
      id: "store2",
      title: isRTL ? "إلكترونيات المستقبل" : "Future Electronics",
      description: isRTL
        ? "متجر متخصص في الأجهزة الإلكترونية والهواتف الذكية والكمبيوترات"
        : "Store specializing in electronics, smartphones, and computers",
      image:
        "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&q=80",
      price: 0,
      rating: 4.5,
      category: "stores",
      serviceType: "electronics",
      isFavorite: false,
    },
    {
      id: "store3",
      title: isRTL ? "أزياء الشرق" : "Eastern Fashion",
      description: isRTL
        ? "متجر أزياء يقدم أحدث صيحات الموضة للرجال والنساء والأطفال"
        : "Fashion store offering the latest trends for men, women, and children",
      image:
        "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80",
      price: 0,
      rating: 4.3,
      category: "stores",
      serviceType: "clothing",
      isFavorite: false,
    },
    {
      id: "store4",
      title: isRTL ? "المتجر الإلكتروني الشامل" : "Comprehensive E-Store",
      description: isRTL
        ? "متجر إلكتروني يوفر مجموعة واسعة من المنتجات مع توصيل سريع"
        : "E-commerce store providing a wide range of products with fast delivery",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80",
      price: 0,
      rating: 4.6,
      category: "stores",
      serviceType: "ecommerce",
      isFavorite: false,
    },
    {
      id: "store5",
      title: isRTL ? "أثاث المنزل العصري" : "Modern Home Furniture",
      description: isRTL
        ? "متجر متخصص في الأثاث المنزلي العصري والديكورات الداخلية"
        : "Store specializing in modern home furniture and interior decorations",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      price: 0,
      rating: 4.4,
      category: "stores",
      serviceType: "furniture",
      isFavorite: false,
    },
    {
      id: "store6",
      title: isRTL ? "سوبرماركت المدينة" : "City Supermarket",
      description: isRTL
        ? "سوبرماركت يوفر منتجات طازجة ومستوردة بأسعار مناسبة"
        : "Supermarket offering fresh and imported products at reasonable prices",
      image:
        "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80",
      price: 0,
      rating: 4.2,
      category: "stores",
      serviceType: "grocery",
      isFavorite: false,
    },
  ];

  // Filter stores based on the selected store type
  const filteredStores =
    effectiveStoreType === "all"
      ? mockStores
      : mockStores.filter((store) => store.serviceType === effectiveStoreType);

  const handleFavoriteToggle = (storeId: string) => {
    setFavorites((prev) => ({
      ...prev,
      [storeId]: !prev[storeId],
    }));
  };

  const handleStoreClick = (storeId: string) => {
    // Navigate to the store details page
    window.location.href = `/services/stores/details/${storeId}`;
  };

  // Sidebar items for store types
  const sidebarItems = [
    {
      id: "all",
      label: isRTL ? "جميع المتاجر" : "All Stores",
      icon: <Store className="h-5 w-5" />,
      path: `/services/stores`,
    },
    {
      id: "nearby",
      label: isRTL ? "المتاجر القريبة" : "Nearby Stores",
      icon: <MapPin className="h-5 w-5" />,
      path: `/services/stores/nearby`,
    },
    {
      id: "grocery",
      label: isRTL ? "البقالة والسوبرماركت" : "Grocery & Supermarkets",
      icon: <ShoppingBag className="h-5 w-5" />,
      path: `/services/stores/grocery`,
    },
    {
      id: "electronics",
      label: isRTL ? "الإلكترونيات" : "Electronics",
      icon: <Smartphone className="h-5 w-5" />,
      path: `/services/stores/electronics`,
    },
    {
      id: "ecommerce",
      label: isRTL ? "المتاجر الإلكترونية" : "E-commerce",
      icon: <Globe className="h-5 w-5" />,
      path: `/services/stores/ecommerce`,
    },
    {
      id: "clothing",
      label: isRTL ? "الملابس والأزياء" : "Clothing & Fashion",
      icon: <ShoppingCart className="h-5 w-5" />,
      path: `/services/stores/clothing`,
    },
    {
      id: "furniture",
      label: isRTL ? "الأثاث والمفروشات" : "Furniture & Home Decor",
      icon: <Sofa className="h-5 w-5" />,
      path: `/services/stores/furniture`,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-64 flex-shrink-0">
        <div className="w-full md:w-64 bg-white rounded-lg shadow-sm p-4">
          <h3 className="font-semibold text-lg mb-4">
            {isRTL ? "تصفية حسب" : "Filter By"}
          </h3>
          <div className="space-y-2">
            {sidebarItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-2",
                  effectiveStoreType === item.id ||
                    (item.id === "all" && effectiveStoreType === "all") ||
                    (item.id === "nearby" && params.storeType === undefined)
                    ? "bg-purple-50 text-purple-700 hover:bg-purple-100 hover:text-purple-800"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                )}
                asChild
              >
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <ServiceCard
              key={store.id}
              id={store.id}
              title={store.title}
              description={store.description}
              image={store.image}
              price={store.price}
              rating={store.rating}
              category={store.category}
              serviceType={store.serviceType}
              isFavorite={favorites[store.id] || false}
              onFavoriteToggle={() => handleFavoriteToggle(store.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearbyStores;
