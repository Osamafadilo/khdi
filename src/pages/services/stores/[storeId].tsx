import React from "react";
import { useParams } from "react-router-dom";
import ServiceLayout from "@/components/services/ServiceLayout";
import StoreDetails from "@/components/services/StoreDetails";
import { useSettings } from "@/contexts/SettingsContext";

const StoreDetailsPage = () => {
  const { storeId } = useParams<{ storeId: string }>();
  const { isRTL } = useSettings();

  return (
    <ServiceLayout
      title={isRTL ? "تفاصيل المتجر" : "Store Details"}
      description={
        isRTL
          ? "عرض تفاصيل المتجر والتواصل مع صاحب المتجر"
          : "View store details and contact the store owner"
      }
    >
      <StoreDetails storeId={storeId} />
    </ServiceLayout>
  );
};

export default StoreDetailsPage;
