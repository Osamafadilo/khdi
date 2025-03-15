import React, { useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  User,
  Settings,
  LogOut,
  UserPlus,
  LogIn,
  Bell,
  Heart,
  ShoppingBag,
  HelpCircle,
  Upload,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

interface ProfileDropdownProps {
  isLoggedIn?: boolean;
  isRTL?: boolean;
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

const ProfileDropdown = ({
  isLoggedIn = false,
  isRTL = false,
  onLoginClick,
  onRegisterClick,
}: ProfileDropdownProps) => {
  const navigate = useNavigate();
  const { user, logout, updateProfileImage } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      updateProfileImage(file);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative p-0 h-10 w-10 rounded-full"
          onClick={isLoggedIn ? undefined : onLoginClick}
        >
          {isLoggedIn && user ? (
            <Avatar className="h-10 w-10 border-2 border-white">
              <AvatarImage src={user.profileImage} alt={user.name} />
              <AvatarFallback className="bg-purple-700 text-white">
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          ) : (
            <User className="h-5 w-5" />
          )}
          {isLoggedIn && (
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-green-500" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        className="hidden"
      />
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          {isLoggedIn
            ? isRTL
              ? "حسابي"
              : "My Account"
            : isRTL
              ? "خيارات الحساب"
              : "Account Options"}
        </DropdownMenuLabel>

        {isLoggedIn ? (
          <>
            <DropdownMenuItem asChild>
              <Link to="/profile" className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>{isRTL ? "الملف الشخصي" : "Profile"}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center"
            >
              <Upload className="mr-2 h-4 w-4" />
              <span>{isRTL ? "تغيير الصورة" : "Change Photo"}</span>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/profile/notifications" className="flex items-center">
                <Bell className="mr-2 h-4 w-4" />
                <span>{isRTL ? "الإشعارات" : "Notifications"}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/profile/favorites" className="flex items-center">
                <Heart className="mr-2 h-4 w-4" />
                <span>{isRTL ? "المفضلة" : "Favorites"}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/profile/orders" className="flex items-center">
                <ShoppingBag className="mr-2 h-4 w-4" />
                <span>{isRTL ? "طلباتي" : "My Orders"}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/profile/account" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                <span>{isRTL ? "إعدادات الحساب" : "Account Settings"}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/profile/security" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                <span>{isRTL ? "الأمان" : "Security"}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/profile/privacy" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                <span>{isRTL ? "الخصوصية" : "Privacy"}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/profile/settings" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                <span>{isRTL ? "الإعدادات العامة" : "General Settings"}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/help" className="flex items-center">
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>{isRTL ? "المساعدة" : "Help"}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="flex items-center text-red-500"
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>{isRTL ? "تسجيل الخروج" : "Logout"}</span>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem
              onClick={onLoginClick}
              className="flex items-center"
            >
              <LogIn className="mr-2 h-4 w-4" />
              <span>{isRTL ? "تسجيل الدخول" : "Login"}</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={onRegisterClick}
              className="flex items-center"
            >
              <UserPlus className="mr-2 h-4 w-4" />
              <span>{isRTL ? "إنشاء حساب" : "Register"}</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/settings/language" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                <span>{isRTL ? "إعدادات اللغة" : "Language Settings"}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/settings/appearance" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                <span>{isRTL ? "إعدادات المظهر" : "Appearance Settings"}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/help" className="flex items-center">
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>{isRTL ? "المساعدة" : "Help"}</span>
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
