import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProviderSettingsProps {
  isRTL?: boolean;
}

const ProviderSettings = ({ isRTL = false }: ProviderSettingsProps) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-10" dir={isRTL ? "rtl" : "ltr"}>
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mr-2">
          {isRTL ? "رجوع" : "Back"}
        </Button>
        <h1 className="text-3xl font-bold">
          {isRTL ? "إعدادات مقدم الخدمة" : "Service Provider Settings"}
        </h1>
      </div>

      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>
            {isRTL ? "معلومات الشركة" : "Company Information"}
          </CardTitle>
          <CardDescription>
            {isRTL
              ? "أدخل معلومات شركتك أو مؤسستك"
              : "Enter your company or organization information"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="company-name">
              {isRTL ? "اسم الشركة أو المؤسسة" : "Company or Organization Name"}
            </Label>
            <Input
              id="company-name"
              placeholder={isRTL ? "أدخل اسم الشركة" : "Enter company name"}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="business-type">
              {isRTL ? "نوع النشاط التجاري" : "Business Type"}
            </Label>
            <Select defaultValue="maintenance">
              <SelectTrigger>
                <SelectValue
                  placeholder={
                    isRTL ? "اختر نوع النشاط" : "Select business type"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="maintenance">
                  {isRTL ? "صيانة" : "Maintenance"}
                </SelectItem>
                <SelectItem value="delivery">
                  {isRTL ? "توصيل" : "Delivery"}
                </SelectItem>
                <SelectItem value="restaurants">
                  {isRTL ? "مطاعم" : "Restaurants"}
                </SelectItem>
                <SelectItem value="residence">
                  {isRTL ? "إقامة" : "Residence"}
                </SelectItem>
                <SelectItem value="stores">
                  {isRTL ? "متاجر" : "Stores"}
                </SelectItem>
                <SelectItem value="travel">
                  {isRTL ? "سفر" : "Travel"}
                </SelectItem>
                <SelectItem value="investment">
                  {isRTL ? "استثمار" : "Investment"}
                </SelectItem>
                <SelectItem value="other">
                  {isRTL ? "أخرى" : "Other"}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="business-license">
              {isRTL ? "رقم الترخيص التجاري" : "Business License Number"}
            </Label>
            <Input
              id="business-license"
              placeholder={isRTL ? "أدخل رقم الترخيص" : "Enter license number"}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tax-number">
              {isRTL ? "الرقم الضريبي" : "Tax Number"}
            </Label>
            <Input
              id="tax-number"
              placeholder={isRTL ? "أدخل الرقم الضريبي" : "Enter tax number"}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company-address">
              {isRTL ? "عنوان الشركة" : "Company Address"}
            </Label>
            <Input
              id="company-address"
              placeholder={
                isRTL ? "أدخل عنوان الشركة" : "Enter company address"
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company-phone">
              {isRTL ? "رقم هاتف الشركة" : "Company Phone"}
            </Label>
            <Input
              id="company-phone"
              placeholder={
                isRTL ? "أدخل رقم هاتف الشركة" : "Enter company phone"
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company-email">
              {isRTL ? "البريد الإلكتروني للشركة" : "Company Email"}
            </Label>
            <Input
              id="company-email"
              type="email"
              placeholder={
                isRTL ? "أدخل البريد الإلكتروني للشركة" : "Enter company email"
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company-website">
              {isRTL ? "الموقع الإلكتروني للشركة" : "Company Website"}
            </Label>
            <Input
              id="company-website"
              placeholder={
                isRTL
                  ? "أدخل الموقع الإلكتروني للشركة"
                  : "Enter company website"
              }
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            {isRTL ? "حفظ المعلومات" : "Save Information"}
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-full max-w-2xl mx-auto mt-6">
        <CardHeader>
          <CardTitle>{isRTL ? "مناطق الخدمة" : "Service Areas"}</CardTitle>
          <CardDescription>
            {isRTL
              ? "حدد المناطق التي تقدم فيها خدماتك"
              : "Specify areas where you provide your services"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="service-cities">{isRTL ? "المدن" : "Cities"}</Label>
            <Input
              id="service-cities"
              placeholder={
                isRTL
                  ? "أدخل المدن التي تقدم فيها الخدمة (مفصولة بفواصل)"
                  : "Enter cities where you provide service (comma separated)"
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service-radius">
              {isRTL ? "نطاق الخدمة (كم)" : "Service Radius (km)"}
            </Label>
            <Input
              id="service-radius"
              type="number"
              placeholder={
                isRTL
                  ? "أدخل نطاق الخدمة بالكيلومترات"
                  : "Enter service radius in kilometers"
              }
            />
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="space-y-0.5">
              <Label htmlFor="nationwide-service">
                {isRTL ? "خدمة على مستوى البلاد" : "Nationwide Service"}
              </Label>
              <p className="text-sm text-muted-foreground">
                {isRTL
                  ? "تقديم الخدمة في جميع أنحاء المملكة"
                  : "Provide service throughout the country"}
              </p>
            </div>
            <Switch id="nationwide-service" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            {isRTL ? "حفظ مناطق الخدمة" : "Save Service Areas"}
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-full max-w-2xl mx-auto mt-6">
        <CardHeader>
          <CardTitle>
            {isRTL ? "الوثائق والتراخيص" : "Documents and Licenses"}
          </CardTitle>
          <CardDescription>
            {isRTL
              ? "قم بتحميل الوثائق والتراخيص المطلوبة"
              : "Upload required documents and licenses"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>
              {isRTL
                ? "وثائق إثبات الهوية والتراخيص"
                : "Identity and License Documents"}
            </Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="border border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="text-sm text-gray-500 mb-2">
                  {isRTL ? "بطاقة الهوية" : "ID Card"}
                </div>
                <Button variant="outline" size="sm">
                  {isRTL ? "رفع الملف" : "Upload File"}
                </Button>
              </div>
              <div className="border border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="text-sm text-gray-500 mb-2">
                  {isRTL ? "الترخيص التجاري" : "Business License"}
                </div>
                <Button variant="outline" size="sm">
                  {isRTL ? "رفع الملف" : "Upload File"}
                </Button>
              </div>
              <div className="border border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="text-sm text-gray-500 mb-2">
                  {isRTL ? "شهادة ضريبة القيمة المضافة" : "VAT Certificate"}
                </div>
                <Button variant="outline" size="sm">
                  {isRTL ? "رفع الملف" : "Upload File"}
                </Button>
              </div>
              <div className="border border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="text-sm text-gray-500 mb-2">
                  {isRTL ? "وثائق أخرى" : "Other Documents"}
                </div>
                <Button variant="outline" size="sm">
                  {isRTL ? "رفع الملف" : "Upload File"}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            {isRTL ? "حفظ الوثائق" : "Save Documents"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProviderSettings;
