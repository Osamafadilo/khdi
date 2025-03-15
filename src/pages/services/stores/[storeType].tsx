import React from "react";
import { useParams } from "react-router-dom";
import NearbyStores from "@/components/services/NearbyStores";
import ServiceLayout from "./ServiceLayout";
import { useSettings } from "@/contexts/SettingsContext";
import { serviceCategories } from "@/data/serviceTypes";

const StoreTypePage = () => {
  const { storeType } = useParams<{ storeType: string }>();
  const { isRTL } = useSettings();

  // Map store types to their display names
  const storeTypeNames: Record<string, { ar: string; en: string }> = {
    grocery: {
      ar: "البقالة والسوبرماركت",
      en: "Grocery & Supermarkets",
    },
    electronics: {
      ar: "الإلكترونيات",
      en: "Electronics",
    },
    ecommerce: {
      ar: "المتاجر الإلكترونية",
      en: "E-commerce",
    },
    clothing: {
      ar: "الملابس والأزياء",
      en: "Clothing & Fashion",
    },
    furniture: {
      ar: "الأثاث والمفروشات",
      en: "Furniture & Home Decor",
    },
    all: {
      ar: "جميع المتاجر",
      en: "All Stores",
    },
    nearby: {
      ar: "المتاجر القريبة",
      en: "Nearby Stores",
    },
  };

  // Get the display name for the current store type
  const storeTypeName =
    storeType && storeTypeNames[storeType]
      ? storeTypeNames[storeType][isRTL ? "ar" : "en"]
      : storeTypeNames.all[isRTL ? "ar" : "en"];

  return (
    <ServiceLayout
      title={storeTypeName}
      description={
        isRTL
          ? "استعرض المتاجر القريبة منك وتصفح منتجاتهم وخدماتهم"
          : "Browse nearby stores and explore their products and services"
      }
    >
      <NearbyStores serviceType={storeType} />
    </ServiceLayout>
  );
};

export default StoreTypePage;
