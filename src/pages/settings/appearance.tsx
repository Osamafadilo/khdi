import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

interface AppearanceSettingsProps {
  isRTL?: boolean;
}

const AppearanceSettings = ({ isRTL = false }: AppearanceSettingsProps) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-10" dir={isRTL ? "rtl" : "ltr"}>
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mr-2">
          {isRTL ? "رجوع" : "Back"}
        </Button>
        <h1 className="text-3xl font-bold">
          {isRTL ? "إعدادات المظهر" : "Appearance Settings"}
        </h1>
      </div>

      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>
            {isRTL ? "تخصيص المظهر" : "Customize Appearance"}
          </CardTitle>
          <CardDescription>
            {isRTL
              ? "تخصيص مظهر التطبيق حسب تفضيلاتك"
              : "Customize the application appearance to your preferences"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="dark-mode">
                  {isRTL ? "الوضع المظلم" : "Dark Mode"}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {isRTL
                    ? "تفعيل الوضع المظلم للتطبيق"
                    : "Enable dark mode for the application"}
                </p>
              </div>
              <Switch id="dark-mode" />
            </div>

            <div className="flex items-center justify-between pt-4">
              <div className="space-y-0.5">
                <Label htmlFor="high-contrast">
                  {isRTL ? "تباين عالي" : "High Contrast"}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {isRTL
                    ? "تحسين الرؤية باستخدام تباين عالي"
                    : "Improve visibility with high contrast"}
                </p>
              </div>
              <Switch id="high-contrast" />
            </div>

            <div className="pt-4 space-y-2">
              <Label htmlFor="theme">{isRTL ? "السمة" : "Theme"}</Label>
              <p className="text-sm text-muted-foreground">
                {isRTL ? "اختر سمة التطبيق" : "Choose application theme"}
              </p>
              <Select defaultValue="system">
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={isRTL ? "اختر سمة" : "Select theme"}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">
                    {isRTL ? "فاتح" : "Light"}
                  </SelectItem>
                  <SelectItem value="dark">
                    {isRTL ? "داكن" : "Dark"}
                  </SelectItem>
                  <SelectItem value="system">
                    {isRTL ? "نظام" : "System"}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4 space-y-2">
              <Label htmlFor="font-size">
                {isRTL ? "حجم الخط" : "Font Size"}
              </Label>
              <p className="text-sm text-muted-foreground">
                {isRTL
                  ? "اختر حجم الخط المفضل"
                  : "Choose your preferred font size"}
              </p>
              <Select defaultValue="medium">
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={isRTL ? "اختر حجم الخط" : "Select font size"}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">
                    {isRTL ? "صغير" : "Small"}
                  </SelectItem>
                  <SelectItem value="medium">
                    {isRTL ? "متوسط" : "Medium"}
                  </SelectItem>
                  <SelectItem value="large">
                    {isRTL ? "كبير" : "Large"}
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

export default AppearanceSettings;
