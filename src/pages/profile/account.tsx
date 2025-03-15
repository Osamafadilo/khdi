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
import { useAuth } from "../../contexts/AuthContext";

interface AccountSettingsProps {
  isRTL?: boolean;
}

const AccountSettings = ({ isRTL = false }: AccountSettingsProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="container mx-auto py-10" dir={isRTL ? "rtl" : "ltr"}>
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mr-2">
          {isRTL ? "رجوع" : "Back"}
        </Button>
        <h1 className="text-3xl font-bold">
          {isRTL ? "إعدادات الحساب" : "Account Settings"}
        </h1>
      </div>

      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>
            {isRTL ? "معلومات الحساب" : "Account Information"}
          </CardTitle>
          <CardDescription>
            {isRTL
              ? "تحديث معلومات حسابك الأساسية"
              : "Update your basic account information"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">
                {isRTL ? "الاسم الكامل" : "Full Name"}
              </Label>
              <Input
                id="fullName"
                defaultValue={user?.name || ""}
                placeholder={
                  isRTL ? "أدخل اسمك الكامل" : "Enter your full name"
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">
                {isRTL ? "البريد الإلكتروني" : "Email"}
              </Label>
              <Input
                id="email"
                defaultValue={user?.email || ""}
                placeholder={
                  isRTL ? "أدخل بريدك الإلكتروني" : "Enter your email"
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">
                {isRTL ? "رقم الهاتف" : "Phone Number"}
              </Label>
              <Input
                id="phone"
                defaultValue={user?.phone || ""}
                placeholder={
                  isRTL ? "أدخل رقم هاتفك" : "Enter your phone number"
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">
                {isRTL ? "اسم المستخدم" : "Username"}
              </Label>
              <Input
                id="username"
                defaultValue={user?.username || ""}
                placeholder={
                  isRTL ? "أدخل اسم المستخدم" : "Enter your username"
                }
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            {isRTL ? "حفظ التغييرات" : "Save Changes"}
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-full max-w-2xl mx-auto mt-6">
        <CardHeader>
          <CardTitle>{isRTL ? "إدارة الحساب" : "Account Management"}</CardTitle>
          <CardDescription>
            {isRTL
              ? "خيارات متقدمة لإدارة حسابك"
              : "Advanced options for managing your account"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="account-type">
              {isRTL ? "نوع الحساب" : "Account Type"}
            </Label>
            <p className="text-sm text-muted-foreground">
              {isRTL
                ? "نوع حسابك الحالي هو: "
                : "Your current account type is: "}
              <span className="font-medium">
                {user?.userType === "provider"
                  ? isRTL
                    ? "مقدم خدمة"
                    : "Service Provider"
                  : isRTL
                    ? "زبون"
                    : "Customer"}
              </span>
            </p>
            <Button variant="outline" className="mt-2">
              {isRTL ? "تغيير إلى " : "Switch to "}
              {user?.userType === "provider"
                ? isRTL
                  ? "زبون"
                  : "Customer"
                : isRTL
                  ? "مقدم خدمة"
                  : "Service Provider"}
            </Button>
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
          <Button variant="destructive" className="w-full">
            {isRTL ? "حذف الحساب" : "Delete Account"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AccountSettings;
