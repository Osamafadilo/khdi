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
import { residenceServiceTypes } from "@/data/serviceTypes";
import { useSettings } from "@/contexts/SettingsContext";

const ResidenceOverview = () => {
  const { isRTL } = useSettings();

  return (
    <div className="space-y-6">
      <div className="bg-purple-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">
          {isRTL ? "خدمات الإقامة" : "Residence Services"}
        </h2>
        <p className="text-gray-700 mb-4">
          {isRTL
            ? "اكتشف مجموعة واسعة من خدمات الإقامة والسكن المتاحة لتلبية احتياجاتك. سواء كنت تبحث عن شقة أو فيلا أو منزل، لدينا الخيار المناسب لك."
            : "Discover a wide range of residence and housing services available to meet your needs. Whether you're looking for an apartment, villa, or house, we have the right option for you."}
        </p>
        <div className="flex flex-wrap gap-2">
          <Button variant="default">
            {isRTL ? "استكشف جميع الخدمات" : "Explore All Services"}
          </Button>
          <Button variant="outline">
            {isRTL ? "تواصل معنا" : "Contact Us"}
          </Button>
        </div>
      </div>

      <h3 className="text-xl font-semibold">
        {isRTL
          ? "استكشف أنواع خدمات الإقامة"
          : "Explore Residence Service Types"}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {residenceServiceTypes.map((type) => (
          <Card key={type.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>{isRTL ? type.nameAr : type.nameEn}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {isRTL
                  ? `استكشف خدمات ${type.nameAr} المتاحة`
                  : `Explore available ${type.nameEn} services`}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link to={type.path}>
                  {isRTL ? "عرض الخدمات" : "View Services"}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResidenceOverview;
