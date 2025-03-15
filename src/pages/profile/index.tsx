import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import ProfileImageUploader from "../../components/profile/ProfileImageUploader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProfilePageProps {
  isRTL?: boolean;
}

const ProfilePage = ({ isRTL = false }: ProfilePageProps) => {
  const { user: authUser } = useAuth();

  // Use auth user data or fallback to mock data
  const user = authUser
    ? {
        name: authUser.name,
        email: authUser.email,
        avatar:
          authUser.profileImage ||
          "https://api.dicebear.com/7.x/avataaars/svg?seed=mohammed",
        phone: "+966 50 123 4567",
        address: "الرياض، المملكة العربية السعودية",
        joinDate: "2023-05-15",
        type: authUser.userType,
      }
    : {
        name: "محمد أحمد",
        email: "mohammed@example.com",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mohammed",
        phone: "+966 50 123 4567",
        address: "الرياض، المملكة العربية السعودية",
        joinDate: "2023-05-15",
        type: "customer", // or "provider"
      };

  return (
    <div className="container mx-auto py-10" dir={isRTL ? "rtl" : "ltr"}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Sidebar */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <ProfileImageUploader size="lg" />
              <CardTitle className="mt-4">{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
              <div className="mt-2">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  {isRTL
                    ? user.type === "customer"
                      ? "زبون"
                      : "مقدم خدمة"
                    : user.type === "customer"
                      ? "Customer"
                      : "Service Provider"}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">
                    {isRTL ? "رقم الهاتف" : "Phone"}
                  </span>
                  <span className="text-sm">{user.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">
                    {isRTL ? "العنوان" : "Address"}
                  </span>
                  <span className="text-sm">{user.address}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">
                    {isRTL ? "تاريخ الانضمام" : "Join Date"}
                  </span>
                  <span className="text-sm">
                    {new Date(user.joinDate).toLocaleDateString(
                      isRTL ? "ar-SA" : "en-US",
                    )}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate("/profile/account")}
              >
                {isRTL ? "تعديل الملف الشخصي" : "Edit Profile"}
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">
                {isRTL ? "المعلومات الشخصية" : "Personal Info"}
              </TabsTrigger>
              <TabsTrigger value="security">
                {isRTL ? "الأمان" : "Security"}
              </TabsTrigger>
              <TabsTrigger value="preferences">
                {isRTL ? "التفضيلات" : "Preferences"}
              </TabsTrigger>
            </TabsList>

            {/* Personal Info Tab */}
            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {isRTL ? "المعلومات الشخصية" : "Personal Information"}
                  </CardTitle>
                  <CardDescription>
                    {isRTL
                      ? "تحديث معلوماتك الشخصية هنا."
                      : "Update your personal information here."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">
                        {isRTL ? "الاسم الكامل" : "Full Name"}
                      </Label>
                      <Input id="fullName" defaultValue={user.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        {isRTL ? "البريد الإلكتروني" : "Email"}
                      </Label>
                      <Input id="email" defaultValue={user.email} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        {isRTL ? "رقم الهاتف" : "Phone Number"}
                      </Label>
                      <Input id="phone" defaultValue={user.phone} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">
                        {isRTL ? "العنوان" : "Address"}
                      </Label>
                      <Input id="address" defaultValue={user.address} />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => {
                      // This would be connected to a form submission handler
                      // that calls the updateUserProfile function
                      alert(isRTL ? "تم حفظ التغييرات" : "Changes saved");
                    }}
                  >
                    {isRTL ? "حفظ التغييرات" : "Save Changes"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>{isRTL ? "الأمان" : "Security"}</CardTitle>
                  <CardDescription>
                    {isRTL
                      ? "تحديث كلمة المرور وإعدادات الأمان."
                      : "Update your password and security settings."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">
                      {isRTL ? "كلمة المرور الحالية" : "Current Password"}
                    </Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">
                      {isRTL ? "كلمة المرور الجديدة" : "New Password"}
                    </Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">
                      {isRTL ? "تأكيد كلمة المرور" : "Confirm Password"}
                    </Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => navigate("/profile/security")}>
                    {isRTL ? "تحديث كلمة المرور" : "Update Password"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle>{isRTL ? "التفضيلات" : "Preferences"}</CardTitle>
                  <CardDescription>
                    {isRTL
                      ? "تخصيص إعدادات حسابك."
                      : "Customize your account settings."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">
                        {isRTL
                          ? "الإشعارات عبر البريد الإلكتروني"
                          : "Email Notifications"}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {isRTL
                          ? "تلقي إشعارات عبر البريد الإلكتروني"
                          : "Receive email notifications"}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="email-notifications" className="sr-only">
                        {isRTL
                          ? "الإشعارات عبر البريد الإلكتروني"
                          : "Email Notifications"}
                      </Label>
                      <Input
                        id="email-notifications"
                        type="checkbox"
                        className="h-4 w-4"
                        defaultChecked
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">
                        {isRTL ? "إشعارات الهاتف" : "SMS Notifications"}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {isRTL
                          ? "تلقي إشعارات عبر الرسائل النصية"
                          : "Receive SMS notifications"}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="sms-notifications" className="sr-only">
                        {isRTL ? "إشعارات الهاتف" : "SMS Notifications"}
                      </Label>
                      <Input
                        id="sms-notifications"
                        type="checkbox"
                        className="h-4 w-4"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">
                        {isRTL ? "اللغة المفضلة" : "Preferred Language"}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {isRTL
                          ? "اختر لغة العرض المفضلة"
                          : "Choose your preferred display language"}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <select
                        className="rounded-md border border-gray-300 px-3 py-1 text-sm"
                        defaultValue={isRTL ? "ar" : "en"}
                      >
                        <option value="en">English</option>
                        <option value="ar">العربية</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => navigate("/profile/settings")}>
                    {isRTL ? "حفظ التفضيلات" : "Save Preferences"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
