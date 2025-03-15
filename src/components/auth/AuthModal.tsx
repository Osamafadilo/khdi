import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

interface AuthModalProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultTab?: "login" | "register";
  isRTL?: boolean;
}

const AuthModal = ({
  isOpen = false,
  onOpenChange = () => {},
  defaultTab = "login",
  isRTL = false,
}: AuthModalProps) => {
  const [userType, setUserType] = React.useState<"customer" | "provider">(
    "customer",
  );

  const { login, register, socialLogin, error, loading, clearError } =
    useAuth();

  const handleLoginSuccess = () => {
    onOpenChange(false);
  };

  const handleRegisterSuccess = () => {
    onOpenChange(false);
  };

  const socialButtons = [
    {
      name: isRTL ? "فيسبوك" : "Facebook",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#1877F2"
          className="mr-2"
        >
          <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
        </svg>
      ),
      color: "bg-white text-black border border-gray-300 hover:bg-gray-100",
      onClick: () =>
        socialLogin(
          "facebook",
          `facebook_user_${Math.random().toString(36).substring(7)}@example.com`,
          "Facebook User",
          userType,
        ),
    },
    {
      name: isRTL ? "جوجل" : "Google",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="mr-2"
        >
          <path
            fill="#EA4335"
            d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
          />
          <path
            fill="#34A853"
            d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2970142 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
          />
          <path
            fill="#4A90E2"
            d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5818182 23.1272727,9.90909091 L12,9.90909091 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
          />
          <path
            fill="#FBBC05"
            d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
          />
        </svg>
      ),
      color: "bg-white text-black border border-gray-300 hover:bg-gray-100",
      onClick: () =>
        socialLogin(
          "google",
          `google_user_${Math.random().toString(36).substring(7)}@example.com`,
          "Google User",
          userType,
        ),
    },
    {
      name: isRTL ? "تيليجرام" : "Telegram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#0088cc"
          className="mr-2"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.952z" />
        </svg>
      ),
      color: "bg-white text-black border border-gray-300 hover:bg-gray-100",
      onClick: () =>
        socialLogin(
          "telegram",
          `telegram_user_${Math.random().toString(36).substring(7)}@example.com`,
          "Telegram User",
          userType,
        ),
    },
  ];

  useEffect(() => {
    // Clear any previous errors when opening the modal
    if (isOpen) {
      clearError();
    }
  }, [isOpen, clearError]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]" dir={isRTL ? "rtl" : "ltr"}>
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            {isRTL ? "مرحباً بك" : "Welcome"}
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">
              {isRTL ? "تسجيل الدخول" : "Login"}
            </TabsTrigger>
            <TabsTrigger value="register">
              {isRTL ? "إنشاء حساب" : "Register"}
            </TabsTrigger>
          </TabsList>

          {/* User Type Selection */}
          <div className="mt-4">
            <Label className="mb-2 block">
              {isRTL ? "نوع الحساب" : "Account Type"}
            </Label>
            <RadioGroup
              defaultValue="customer"
              className="flex space-x-4 rtl:space-x-reverse"
              onValueChange={(value) =>
                setUserType(value as "customer" | "provider")
              }
            >
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <RadioGroupItem value="customer" id="customer" />
                <Label htmlFor="customer">{isRTL ? "زبون" : "Customer"}</Label>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <RadioGroupItem value="provider" id="provider" />
                <Label htmlFor="provider">
                  {isRTL ? "مقدم خدمة" : "Service Provider"}
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Login Tab */}
          <TabsContent value="login" className="space-y-4 py-4">
            <LoginForm
              isRTL={isRTL}
              onSuccess={handleLoginSuccess}
              userType={userType}
            />

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  {isRTL ? "أو تسجيل الدخول باستخدام" : "Or login with"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {socialButtons.map((button, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={button.color}
                  onClick={button.onClick}
                >
                  {button.icon}
                  <span className="sr-only">{button.name}</span>
                </Button>
              ))}
            </div>
          </TabsContent>

          {/* Register Tab */}
          <TabsContent value="register" className="space-y-4 py-4">
            <RegisterForm
              isRTL={isRTL}
              onSuccess={handleRegisterSuccess}
              userType={userType}
            />

            {userType === "provider" && (
              <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-md text-amber-800 text-sm">
                {isRTL
                  ? "كمقدم خدمة، ستحتاج إلى تقديم معلومات إضافية بعد إنشاء الحساب:"
                  : "As a service provider, you will need to provide additional information after account creation:"}
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    {isRTL
                      ? "معلومات الشركة أو المؤسسة"
                      : "Company or organization information"}
                  </li>
                  <li>
                    {isRTL
                      ? "مجالات الخدمة التي تقدمها"
                      : "Service areas you provide"}
                  </li>
                  <li>
                    {isRTL
                      ? "وثائق إثبات الهوية والتراخيص"
                      : "Identity verification documents and licenses"}
                  </li>
                </ul>
                <p className="mt-2">
                  {isRTL
                    ? "يمكنك إكمال هذه المعلومات في إعدادات الحساب بعد التسجيل."
                    : "You can complete this information in account settings after registration."}
                </p>
              </div>
            )}

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  {isRTL ? "أو التسجيل باستخدام" : "Or register with"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {socialButtons.map((button, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={button.color}
                  onClick={button.onClick}
                >
                  {button.icon}
                  <span className="sr-only">{button.name}</span>
                </Button>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
