import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface LanguageSettingsProps {
  isRTL?: boolean;
}

const LanguageSettings = ({ isRTL = false }: LanguageSettingsProps) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-10" dir={isRTL ? "rtl" : "ltr"}>
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mr-2">
          {isRTL ? "رجوع" : "Back"}
        </Button>
        <h1 className="text-3xl font-bold">
          {isRTL ? "إعدادات اللغة" : "Language Settings"}
        </h1>
      </div>

      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>
            {isRTL ? "اللغة والمنطقة" : "Language and Region"}
          </CardTitle>
          <CardDescription>
            {isRTL
              ? "تخصيص إعدادات اللغة والمنطقة"
              : "Customize language and region settings"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="language">{isRTL ? "اللغة" : "Language"}</Label>
              <p className="text-sm text-muted-foreground">
                {isRTL
                  ? "اختر لغة العرض المفضلة"
                  : "Choose your preferred display language"}
              </p>
              <Select defaultValue={isRTL ? "ar" : "en"}>
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={isRTL ? "اختر لغة" : "Select language"}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="ar">العربية</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 pt-4">
              <Label htmlFor="region">{isRTL ? "المنطقة" : "Region"}</Label>
              <p className="text-sm text-muted-foreground">
                {isRTL
                  ? "اختر المنطقة لتخصيص المحتوى"
                  : "Choose your region to customize content"}
              </p>
              <Select defaultValue="saudi-arabia">
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={isRTL ? "اختر منطقة" : "Select region"}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="saudi-arabia">
                    {isRTL ? "المملكة العربية السعودية" : "Saudi Arabia"}
                  </SelectItem>
                  <SelectItem value="uae">
                    {isRTL ? "الإمارات العربية المتحدة" : "UAE"}
                  </SelectItem>
                  <SelectItem value="egypt">
                    {isRTL ? "مصر" : "Egypt"}
                  </SelectItem>
                  <SelectItem value="other">
                    {isRTL ? "أخرى" : "Other"}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 pt-4">
              <Label htmlFor="direction">
                {isRTL ? "اتجاه النص" : "Text Direction"}
              </Label>
              <p className="text-sm text-muted-foreground">
                {isRTL
                  ? "اختر اتجاه عرض النص"
                  : "Choose text display direction"}
              </p>
              <Select defaultValue={isRTL ? "rtl" : "ltr"}>
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={isRTL ? "اختر اتجاه" : "Select direction"}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ltr">
                    {isRTL ? "من اليسار إلى اليمين" : "Left to Right (LTR)"}
                  </SelectItem>
                  <SelectItem value="rtl">
                    {isRTL ? "من اليمين إلى اليسار" : "Right to Left (RTL)"}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="pt-4">
            <Button className="w-full">
              {isRTL ? "حفظ التغييرات" : "Save Changes"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LanguageSettings;
