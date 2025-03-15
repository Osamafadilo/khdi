import React from "react";
import {
  Search,
  Menu,
  X,
  Home,
  Store,
  Utensils,
  Wrench,
  Plane,
  Truck,
  LineChart,
  ShoppingBag,
} from "lucide-react";
import { Button } from "./ui/button";
import AuthModal from "./auth/AuthModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import ProfileDropdown from "./profile/ProfileDropdown";
import LanguageAppearanceMenu from "./settings/LanguageAppearanceMenu";
import { useSettings } from "../contexts/SettingsContext";
import { useAuth } from "../contexts/AuthContext";

interface HeaderProps {}

const Header = () => {
  const {
    language,
    direction,
    theme,
    setLanguage,
    setDirection,
    setTheme,
    isRTL,
  } = useSettings();

  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  const [authModalTab, setAuthModalTab] = React.useState<"login" | "register">(
    "login",
  );
  const [userType, setUserType] = React.useState<"customer" | "provider">(
    "customer",
  );

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const openLoginModal = () => {
    setAuthModalTab("login");
    setIsAuthModalOpen(true);
  };

  const openRegisterModal = () => {
    setAuthModalTab("register");
    setIsAuthModalOpen(true);
  };

  // Service categories with icons
  const serviceCategories = [
    {
      name: isRTL ? "إقامة" : "Residence",
      icon: <Home className="h-4 w-4 mr-2" />,
      path: "/services/residence",
    },
    {
      name: isRTL ? "متاجر" : "Stores",
      icon: <Store className="h-4 w-4 mr-2" />,
      path: "/services/stores",
    },
    {
      name: isRTL ? "مطاعم" : "Restaurants",
      icon: <Utensils className="h-4 w-4 mr-2" />,
      path: "/services/restaurants",
    },
    {
      name: isRTL ? "صيانة" : "Maintenance",
      icon: <Wrench className="h-4 w-4 mr-2" />,
      path: "/services/maintenance",
    },
    {
      name: isRTL ? "سفر" : "Travel",
      icon: <Plane className="h-4 w-4 mr-2" />,
      path: "/services/travel",
    },
    {
      name: isRTL ? "توصيل" : "Delivery",
      icon: <Truck className="h-4 w-4 mr-2" />,
      path: "/services/delivery",
    },
    {
      name: isRTL ? "استثمار" : "Investment",
      icon: <LineChart className="h-4 w-4 mr-2" />,
      path: "/services/investment",
    },
  ];

  // SearchBar component
  const SearchBar = ({ isRTL = false }: { isRTL?: boolean }) => (
    <div className="relative w-full max-w-md">
      <div
        className={`flex items-center border rounded-md bg-gray-50 ${isRTL ? "flex-row-reverse" : ""}`}
      >
        <div className="px-3 py-2">
          <Search className="h-5 w-5 text-gray-500" />
        </div>
        <input
          type="text"
          placeholder={isRTL ? "ابحث عن الخدمات..." : "Search services..."}
          className={`w-full py-2 px-3 bg-transparent outline-none ${isRTL ? "text-right" : "text-left"}`}
        />
      </div>
    </div>
  );

  // LanguageSwitcher component
  const LanguageSwitcher = ({ isRTL = false }: { isRTL?: boolean }) => (
    <Button variant="outline" size="sm" className="flex items-center gap-2">
      {isRTL ? "English" : "العربية"}
    </Button>
  );

  return (
    <header className="bg-purple-600 w-full fixed top-0 z-50 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link
                  to="/"
                  className="text-2xl font-bold flex items-center cursor-pointer"
                >
                  {isRTL ? (
                    <>
                      <span className="ml-2">الخدمات</span>
                      <img
                        src="/logo.png"
                        alt="Services Logo"
                        className="h-8 w-8"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src="/logo.png"
                        alt="Services Logo"
                        className="h-8 w-8"
                      />
                      <span className="mr-2">ServicesHub</span>
                    </>
                  )}
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuLabel>
                  {isRTL ? "القائمة الرئيسية" : "Main Menu"}
                </DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link to="/">{isRTL ? "الصفحة الرئيسية" : "Home"}</Link>
                </DropdownMenuItem>
                {!isAuthenticated ? (
                  <>
                    <DropdownMenuItem onClick={openLoginModal}>
                      {isRTL ? "تسجيل الدخول" : "Sign In"}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={openRegisterModal}>
                      {isRTL ? "إنشاء حساب" : "Sign Up"}
                    </DropdownMenuItem>
                  </>
                ) : (
                  <DropdownMenuItem
                    onClick={() => {
                      logout();
                      navigate("/");
                    }}
                  >
                    {isRTL ? "تسجيل الخروج" : "Logout"}
                  </DropdownMenuItem>
                )}

                <DropdownMenuSeparator />
                <DropdownMenuLabel>
                  {isRTL ? "فئات الخدمات" : "Service Categories"}
                </DropdownMenuLabel>

                {serviceCategories.map((category, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <Link to={category.path} className="flex items-center">
                      {category.icon}
                      <span>{category.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Main Menu Dropdown - Only on mobile */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-purple-700"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuLabel>
                    {isRTL ? "خيارات إضافية" : "Additional Options"}
                  </DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link to="/profile">
                      {isRTL ? "الملف الشخصي" : "Profile"}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings">
                      {isRTL ? "الإعدادات" : "Settings"}
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {/* Desktop Menu Items */}
            <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
              {serviceCategories.map((category, index) => (
                <Link
                  key={index}
                  to={category.path}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side Navigation (both mobile and desktop) */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-purple-700"
              onClick={toggleSearch}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-purple-700"
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <LanguageAppearanceMenu
              isRTL={isRTL}
              currentLanguage={language}
              currentTheme={theme}
              currentDirection={direction}
              onLanguageChange={(lang) => {
                setLanguage(lang as "en" | "ar" | "fr");
              }}
              onThemeChange={(newTheme) => {
                setTheme(newTheme);
              }}
              onDirectionChange={(dir) => {
                setDirection(dir);
              }}
            />
            <div className="hidden md:block">
              <ProfileDropdown
                isRTL={isRTL}
                onLoginClick={openLoginModal}
                onRegisterClick={openRegisterModal}
                isLoggedIn={isAuthenticated}
              />
            </div>
            <div className="md:hidden">
              <ProfileDropdown
                isRTL={isRTL}
                onLoginClick={openLoginModal}
                onRegisterClick={openRegisterModal}
                isLoggedIn={isAuthenticated}
              />
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="py-2">
            <SearchBar isRTL={isRTL} />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t mt-2 border-purple-500">
            <div className="flex flex-col space-y-3">
              <div className="pt-2">
                <p className="text-sm font-medium mb-2">
                  {isRTL ? "فئات الخدمات" : "Service Categories"}
                </p>
                {serviceCategories.map((category, index) => (
                  <Link
                    key={index}
                    to={category.path}
                    className="flex items-center py-2 px-1 hover:bg-purple-700 rounded-md"
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onOpenChange={setIsAuthModalOpen}
        defaultTab={authModalTab}
        isRTL={isRTL}
      />
    </header>
  );
};

export default Header;
