import React from "react";
import NearbyStores from "@/components/services/NearbyStores";
import ServiceLayout from "../ServiceLayout";
import { useSettings } from "@/contexts/SettingsContext";

const NearbyStoresPage = () => {
  const { isRTL } = useSettings();

  return (
    <ServiceLayout
      title={isRTL ? "المتاجر القريبة منك" : "Stores Near You"}
      description={
        isRTL
          ? "استعرض المتاجر القريبة من موقعك الحالي"
          : "Browse stores near your current location"
      }
    >
      <NearbyStores serviceType="nearby" />
    </ServiceLayout>
  );
};

export default NearbyStoresPage;
