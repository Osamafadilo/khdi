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
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

interface PrivacySettingsProps {
  isRTL?: boolean;
}

const PrivacySettings = ({ isRTL = false }: PrivacySettingsProps) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-10" dir={isRTL ? "rtl" : "ltr"}>
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mr-2">
          {isRTL ? "رجوع" : "Back"}
        </Button>
        <h1 className="text-3xl font-bold">
          {isRTL ? "إعدادات الخصوصية" : "Privacy Settings"}
        </h1>
      </div>

      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>
            {isRTL ? "خصوصية الملف الشخصي" : "Profile Privacy"}
          </CardTitle>
          <CardDescription>
            {isRTL
              ? "تحكم في من يمكنه رؤية معلوماتك الشخصية"
              : "Control who can see your personal information"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="profile-visibility">
                {isRTL ? "رؤية الملف الشخصي" : "Profile Visibility"}
              </Label>
              <p className="text-sm text-muted-foreground">
                {isRTL
                  ? "من يمكنه رؤية ملفك الشخصي"
                  : "Who can see your profile"}
              </p>
            </div>
            <Select defaultValue="public">
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  placeholder={isRTL ? "اختر خيارًا" : "Select option"}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">
                  {isRTL ? "عام" : "Public"}
                </SelectItem>
                <SelectItem value="contacts">
                  {isRTL ? "جهات الاتصال فقط" : "Contacts Only"}
                </SelectItem>
                <SelectItem value="private">
                  {isRTL ? "خاص" : "Private"}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="space-y-0.5">
              <Label htmlFor="contact-info-visibility">
                {isRTL ? "رؤية معلومات الاتصال" : "Contact Info Visibility"}
              </Label>
              <p className="text-sm text-muted-foreground">
                {isRTL
                  ? "من يمكنه رؤية معلومات الاتصال الخاصة بك"
                  : "Who can see your contact information"}
              </p>
            </div>
            <Select defaultValue="contacts">
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  placeholder={isRTL ? "اختر خيارًا" : "Select option"}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">
                  {isRTL ? "عام" : "Public"}
                </SelectItem>
                <SelectItem value="contacts">
                  {isRTL ? "جهات الاتصال فقط" : "Contacts Only"}
                </SelectItem>
                <SelectItem value="private">
                  {isRTL ? "خاص" : "Private"}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="space-y-0.5">
              <Label htmlFor="activity-visibility">
                {isRTL ? "رؤية النشاط" : "Activity Visibility"}
              </Label>
              <p className="text-sm text-muted-foreground">
                {isRTL
                  ? "من يمكنه رؤية نشاطك على المنصة"
                  : "Who can see your activity on the platform"}
              </p>
            </div>
            <Select defaultValue="contacts">
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  placeholder={isRTL ? "اختر خيارًا" : "Select option"}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">
                  {isRTL ? "عام" : "Public"}
                </SelectItem>
                <SelectItem value="contacts">
                  {isRTL ? "جهات الاتصال فقط" : "Contacts Only"}
                </SelectItem>
                <SelectItem value="private">
                  {isRTL ? "خاص" : "Private"}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full max-w-2xl mx-auto mt-6">
        <CardHeader>
          <CardTitle>{isRTL ? "مشاركة البيانات" : "Data Sharing"}</CardTitle>
          <CardDescription>
            {isRTL
              ? "تحكم في كيفية مشاركة بياناتك"
              : "Control how your data is shared"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="data-sharing">
                {isRTL
                  ? "مشاركة البيانات مع الشركاء"
                  : "Share Data with Partners"}
              </Label>
              <p className="text-sm text-muted-foreground">
                {isRTL
                  ? "السماح بمشاركة بياناتك مع شركاء الخدمة"
                  : "Allow sharing your data with service partners"}
              </p>
            </div>
            <Switch id="data-sharing" />
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="space-y-0.5">
              <Label htmlFor="analytics-sharing">
                {isRTL ? "مشاركة بيانات التحليلات" : "Share Analytics Data"}
              </Label>
              <p className="text-sm text-muted-foreground">
                {isRTL
                  ? "السماح بمشاركة بيانات الاستخدام لتحسين الخدمة"
                  : "Allow sharing usage data to improve service"}
              </p>
            </div>
            <Switch id="analytics-sharing" defaultChecked />
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="space-y-0.5">
              <Label htmlFor="location-sharing">
                {isRTL ? "مشاركة بيانات الموقع" : "Share Location Data"}
              </Label>
              <p className="text-sm text-muted-foreground">
                {isRTL
                  ? "السماح بمشاركة بيانات موقعك الجغرافي"
                  : "Allow sharing your geographic location data"}
              </p>
            </div>
            <Switch id="location-sharing" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            {isRTL ? "حفظ التغييرات" : "Save Changes"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PrivacySettings;
