import React from "react";
import { useSettings } from "@/contexts/SettingsContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StoreProductCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  onAddToCart: (productId: string) => void;
}

const StoreProductCard = ({
  id,
  title,
  description,
  image,
  price,
  category,
  onAddToCart,
}: StoreProductCardProps) => {
  const { isRTL } = useSettings();

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        <div className="mt-auto flex items-center justify-between">
          <div className="font-bold text-lg">
            {price.toLocaleString(isRTL ? "ar-SA" : "en-US", {
              style: "currency",
              currency: "SAR",
            })}
          </div>
          <Button
            onClick={() => onAddToCart(id)}
            className={cn("gap-2", isRTL ? "flex-row-reverse" : "flex-row")}
          >
            <ShoppingCart className="h-4 w-4" />
            {isRTL ? "أضف للسلة" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoreProductCard;
