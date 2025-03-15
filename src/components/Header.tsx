import React from "react";
import { Search, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  isRTL?: boolean;
}

const Header = ({ isRTL = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  // Mock SearchBar component
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

  // Mock LanguageSwitcher component
  const LanguageSwitcher = ({ isRTL = false }: { isRTL?: boolean }) => (
    <Button variant="outline" size="sm" className="flex items-center gap-2">
      {isRTL ? "English" : "العربية"}
    </Button>
  );

  return (
    <header className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              <span className={isRTL ? "ml-2" : "mr-2"}>ServicesHub</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <SearchBar isRTL={isRTL} />
            <LanguageSwitcher isRTL={isRTL} />
            <Button variant="outline" className="ml-4">
              {isRTL ? "تسجيل الدخول" : "Sign In"}
            </Button>
            <Button>{isRTL ? "إنشاء حساب" : "Sign Up"}</Button>
          </div>

          {/* Mobile Navigation Icons */}
          <div className="flex md:hidden items-center space-x-2 rtl:space-x-reverse">
            <Button variant="ghost" size="icon" onClick={toggleSearch}>
              <Search className="h-5 w-5" />
            </Button>
            <LanguageSwitcher isRTL={isRTL} />
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden py-2">
            <SearchBar isRTL={isRTL} />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t mt-2">
            <div className="flex flex-col space-y-3">
              <Button variant="outline" className="w-full justify-start">
                {isRTL ? "تسجيل الدخول" : "Sign In"}
              </Button>
              <Button className="w-full justify-start">
                {isRTL ? "إنشاء حساب" : "Sign Up"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
