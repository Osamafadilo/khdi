import React from "react";
import { Routes, Route } from "react-router-dom";
import ServiceLayout from "@/components/services/ServiceLayout";
import { residenceServiceTypes } from "@/data/serviceTypes";
import ResidenceOverview from "./overview";
import ApartmentsService from "./apartments";
import VillasService from "./villas";
import HousesService from "./houses";
import CommercialService from "./commercial";
import LandService from "./land";
import RentalService from "./rental";

const ResidenceServices = () => {
  return (
    <Routes>
      <Route
        element={
          <ServiceLayout
            serviceCategory="residence"
            serviceTypes={residenceServiceTypes}
            title={{ en: "Residence Services", ar: "خدمات الإقامة" }}
          />
        }
      >
        <Route index element={<ResidenceOverview />} />
        <Route path="apartments" element={<ApartmentsService />} />
        <Route path="villas" element={<VillasService />} />
        <Route path="houses" element={<HousesService />} />
        <Route path="commercial" element={<CommercialService />} />
        <Route path="land" element={<LandService />} />
        <Route path="rental" element={<RentalService />} />
      </Route>
    </Routes>
  );
};

export default ResidenceServices;
