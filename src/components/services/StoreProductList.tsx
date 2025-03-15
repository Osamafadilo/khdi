import React, { useState } from "react";
import { useSettings } from "@/contexts/SettingsContext";
import StoreProductCard from "./StoreProductCard";

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

interface StoreProductListProps {
  storeId: string;
  selectedCategory: string | null;
  onAddToCart: (productId: string) => void;
}

const StoreProductList = ({
  storeId,
  selectedCategory,
  onAddToCart,
}: StoreProductListProps) => {
  const { isRTL } = useSettings();

  // Mock products data
  const mockProducts: Product[] = [
    {
      id: "product1",
      title: isRTL ? "حليب طازج" : "Fresh Milk",
      description: isRTL
        ? "حليب طازج عالي الجودة من المزارع المحلية"
        : "High-quality fresh milk from local farms",
      image:
        "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&q=80",
      price: 7.5,
      category: "dairy",
    },
    {
      id: "product2",
      title: isRTL ? "خبز طازج" : "Fresh Bread",
      description: isRTL
        ? "خبز طازج مخبوز يومياً"
        : "Freshly baked bread made daily",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
      price: 5.0,
      category: "bakery",
    },
    {
      id: "product3",
      title: isRTL ? "تفاح أحمر" : "Red Apples",
      description: isRTL
        ? "تفاح أحمر طازج من المزارع المحلية"
        : "Fresh red apples from local farms",
      image:
        "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&q=80",
      price: 12.0,
      category: "fruits",
    },
    {
      id: "product4",
      title: isRTL ? "دجاج طازج" : "Fresh Chicken",
      description: isRTL
        ? "دجاج طازج من المزارع المحلية"
        : "Fresh chicken from local farms",
      image:
        "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=800&q=80",
      price: 25.0,
      category: "meat",
    },
    {
      id: "product5",
      title: isRTL ? "جبن شيدر" : "Cheddar Cheese",
      description: isRTL
        ? "جبن شيدر عالي الجودة"
        : "High-quality cheddar cheese",
      image:
        "https://images.unsplash.com/photo-1589881133595-a3c085cb731d?w=800&q=80",
      price: 18.5,
      category: "dairy",
    },
    {
      id: "product6",
      title: isRTL ? "موز" : "Bananas",
      description: isRTL ? "موز طازج مستورد" : "Fresh imported bananas",
      image:
        "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=800&q=80",
      price: 8.0,
      category: "fruits",
    },
    {
      id: "product7",
      title: isRTL ? "بيض طازج" : "Fresh Eggs",
      description: isRTL
        ? "بيض طازج من المزارع المحلية"
        : "Fresh eggs from local farms",
      image:
        "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=800&q=80",
      price: 15.0,
      category: "dairy",
    },
    {
      id: "product8",
      title: isRTL ? "طماطم" : "Tomatoes",
      description: isRTL
        ? "طماطم طازجة من المزارع المحلية"
        : "Fresh tomatoes from local farms",
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=80",
      price: 6.5,
      category: "vegetables",
    },
    {
      id: "product9",
      title: isRTL ? "خيار" : "Cucumber",
      description: isRTL
        ? "خيار طازج من المزارع المحلية"
        : "Fresh cucumber from local farms",
      image:
        "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=800&q=80",
      price: 4.0,
      category: "vegetables",
    },
  ];

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? mockProducts.filter((product) => product.category === selectedCategory)
    : mockProducts;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <StoreProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
          price={product.price}
          category={product.category}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default StoreProductList;
