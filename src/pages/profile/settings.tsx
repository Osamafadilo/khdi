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
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SettingsPageProps {
  isRTL?: boolean;
}

const SettingsPage = ({ isRTL = false }: SettingsPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-10" dir={isRTL ? "rtl" : "ltr"}>
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mr-2">
          {isRTL ? "رجوع" : "Back"}
        </Button>
        <h1 className="text-3xl font-bold">
          {isRTL ? "الإعدادات العامة" : "General Settings"}
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle>
              {isRTL ? "إعدادات الإشعارات" : "Notification Settings"}
            </CardTitle>
            <CardDescription>
              {isRTL
                ? "تحكم في كيفية تلقي الإشعارات"
                : "Control how you receive notifications"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-notifications">
                  {isRTL ? "إشعارات البريد الإلكتروني" : "Email Notifications"}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {isRTL
                    ? "تلقي إشعارات عبر البريد الإلكتروني"
                    : "Receive notifications via email"}
                </p>
              </div>
              <Switch id="email-notifications" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="sms-notifications">
                  {isRTL ? "إشعارات الرسائل النصية" : "SMS Notifications"}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {isRTL
                    ? "تلقي إشعارات عبر الرسائل النصية"
                    : "Receive notifications via SMS"}
                </p>
              </div>
              <Switch id="sms-notifications" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="marketing-notifications">
                  {isRTL ? "إشعارات تسويقية" : "Marketing Notifications"}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {isRTL
                    ? "تلقي عروض وتحديثات تسويقية"
                    : "Receive marketing offers and updates"}
                </p>
              </div>
              <Switch id="marketing-notifications" />
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card>
          <CardHeader>
            <CardTitle>
              {isRTL ? "إعدادات الخصوصية" : "Privacy Settings"}
            </CardTitle>
            <CardDescription>
              {isRTL ? "تحكم في خصوصية حسابك" : "Control your account privacy"}
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

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="data-sharing">
                  {isRTL ? "مشاركة البيانات" : "Data Sharing"}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {isRTL
                    ? "السماح بمشاركة بياناتك مع شركاء الخدمة"
                    : "Allow sharing your data with service partners"}
                </p>
              </div>
              <Switch id="data-sharing" />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => navigate("/profile/privacy")}
            >
              {isRTL ? "المزيد من إعدادات الخصوصية" : "More Privacy Settings"}
            </Button>
          </CardFooter>
        </Card>

        {/* Language and Region */}
        <Card>
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
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="language">{isRTL ? "اللغة" : "Language"}</Label>
                <p className="text-sm text-muted-foreground">
                  {isRTL
                    ? "اختر لغة العرض المفضلة"
                    : "Choose your preferred display language"}
                </p>
              </div>
              <Select defaultValue={isRTL ? "ar" : "en"}>
                <SelectTrigger className="w-[180px]">
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

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="region">{isRTL ? "المنطقة" : "Region"}</Label>
                <p className="text-sm text-muted-foreground">
                  {isRTL
                    ? "اختر المنطقة لتخصيص المحتوى"
                    : "Choose your region to customize content"}
                </p>
              </div>
              <Select defaultValue="saudi-arabia">
                <SelectTrigger className="w-[180px]">
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
          </CardContent>
        </Card>

        {/* Account Management */}
        <Card>
          <CardHeader>
            <CardTitle>
              {isRTL ? "إدارة الحساب" : "Account Management"}
            </CardTitle>
            <CardDescription>
              {isRTL ? "إدارة إعدادات حسابك" : "Manage your account settings"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="account-type">
                  {isRTL ? "نوع الحساب" : "Account Type"}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {isRTL ? "تغيير نوع حسابك" : "Change your account type"}
                </p>
              </div>
              <Select defaultValue="customer">
                <SelectTrigger className="w-[180px]">
                  <SelectValue
                    placeholder={
                      isRTL ? "اختر نوع الحساب" : "Select account type"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="customer">
                    {isRTL ? "زبون" : "Customer"}
                  </SelectItem>
                  <SelectItem value="provider">
                    {isRTL ? "مقدم خدمة" : "Service Provider"}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start space-y-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => navigate("/profile/security")}
            >
              {isRTL ? "إعدادات الأمان" : "Security Settings"}
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => navigate("/profile/account")}
            >
              {isRTL ? "إعدادات الحساب" : "Account Settings"}
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => navigate("/profile/provider-settings")}
            >
              {isRTL ? "إعدادات مقدم الخدمة" : "Provider Settings"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;
