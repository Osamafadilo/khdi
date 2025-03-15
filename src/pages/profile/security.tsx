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
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";

interface SecuritySettingsProps {
  isRTL?: boolean;
}

const SecuritySettings = ({ isRTL = false }: SecuritySettingsProps) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-10" dir={isRTL ? "rtl" : "ltr"}>
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mr-2">
          {isRTL ? "رجوع" : "Back"}
        </Button>
        <h1 className="text-3xl font-bold">
          {isRTL ? "إعدادات الأمان" : "Security Settings"}
        </h1>
      </div>

      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>
            {isRTL ? "تغيير كلمة المرور" : "Change Password"}
          </CardTitle>
          <CardDescription>
            {isRTL
              ? "قم بتحديث كلمة المرور الخاصة بك"
              : "Update your account password"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">
              {isRTL ? "كلمة المرور الحالية" : "Current Password"}
            </Label>
            <Input
              id="current-password"
              type="password"
              placeholder={
                isRTL ? "أدخل كلمة المرور الحالية" : "Enter current password"
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">
              {isRTL ? "كلمة المرور الجديدة" : "New Password"}
            </Label>
            <Input
              id="new-password"
              type="password"
              placeholder={
                isRTL ? "أدخل كلمة المرور الجديدة" : "Enter new password"
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">
              {isRTL ? "تأكيد كلمة المرور" : "Confirm Password"}
            </Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder={
                isRTL ? "أكد كلمة المرور الجديدة" : "Confirm new password"
              }
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            {isRTL ? "تحديث كلمة المرور" : "Update Password"}
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-full max-w-2xl mx-auto mt-6">
        <CardHeader>
          <CardTitle>
            {isRTL ? "المصادقة الثنائية" : "Two-Factor Authentication"}
          </CardTitle>
          <CardDescription>
            {isRTL
              ? "تعزيز أمان حسابك باستخدام المصادقة الثنائية"
              : "Enhance your account security with two-factor authentication"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="two-factor">
                {isRTL
                  ? "تفعيل المصادقة الثنائية"
                  : "Enable Two-Factor Authentication"}
              </Label>
              <p className="text-sm text-muted-foreground">
                {isRTL
                  ? "استخدم تطبيق المصادقة أو رسائل SMS للتحقق"
                  : "Use an authenticator app or SMS for verification"}
              </p>
            </div>
            <Switch id="two-factor" />
          </div>
        </CardContent>
      </Card>

      <Card className="w-full max-w-2xl mx-auto mt-6">
        <CardHeader>
          <CardTitle>
            {isRTL ? "جلسات تسجيل الدخول" : "Login Sessions"}
          </CardTitle>
          <CardDescription>
            {isRTL
              ? "إدارة جلسات تسجيل الدخول النشطة"
              : "Manage your active login sessions"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">
                    {isRTL ? "هذا الجهاز" : "This Device"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {isRTL ? "متصل حاليًا" : "Currently active"}
                  </p>
                </div>
                <Button variant="outline" size="sm" disabled>
                  {isRTL ? "الجهاز الحالي" : "Current Device"}
                </Button>
              </div>
            </div>

            <div className="border rounded-md p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">
                    {isRTL ? "جهاز آخر" : "Other Device"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {isRTL ? "آخر نشاط: منذ يومين" : "Last active: 2 days ago"}
                  </p>
                </div>
                <Button variant="outline" size="sm" className="text-red-500">
                  {isRTL ? "إنهاء الجلسة" : "End Session"}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="destructive" className="w-full">
            {isRTL ? "تسجيل الخروج من جميع الأجهزة" : "Logout from all devices"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SecuritySettings;
