import React, { useState } from "react";
import SearchBar from "./SearchBar";
import LanguageSwitcher from "./LanguageSwitcher";
import CategoryGrid from "./CategoryGrid";
import ServiceDetails from "./ServiceDetails";
import Footer from "./Footer";
import { motion } from "framer-motion";

// Create a mock Header component since we can't import it correctly
const MockHeader = ({ isRTL = false }: { isRTL?: boolean }) => {
  return (
    <header className="fixed w-full top-0 z-10 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-blue-600">
            {isRTL ? "منصة الخدمات" : "Services Platform"}
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          {[
            { label: isRTL ? "الرئيسية" : "Home", href: "#" },
            { label: isRTL ? "الخدمات" : "Services", href: "#" },
            { label: isRTL ? "تواصل معنا" : "Contact", href: "#" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

const Home = () => {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showServiceDetails, setShowServiceDetails] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilters, setSearchFilters] = useState<string[]>([]);

  const isRTL = language === "ar";

  const handleLanguageChange = (newLanguage: "en" | "ar") => {
    setLanguage(newLanguage);
    // In a real implementation, this would update the app's language context
    // and potentially change the document direction for RTL support
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setShowServiceDetails(true);
  };

  const handleSearch = (query: string, filters: string[]) => {
    setSearchQuery(query);
    setSearchFilters(filters);
    // In a real implementation, this would filter the displayed services
    // based on the search query and selected filters
    console.log("Search query:", query, "Filters:", filters);
  };

  const handleCloseServiceDetails = () => {
    setShowServiceDetails(false);
  };

  // Animation variants for the main content
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className={`min-h-screen bg-gray-50 ${isRTL ? "rtl" : "ltr"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Header */}
      <MockHeader isRTL={isRTL} />

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.section
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {isRTL
              ? "منصة خدمات متكاملة لتطوير الأعمال"
              : "Comprehensive Business Development Services"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isRTL
              ? "مجموعة متنوعة من الخدمات الاحترافية المصنفة بشكل واضح ومنظم، مع نظام بحث سهل الاستخدام للوصول السريع للخدمات المطلوبة"
              : "A diverse range of professional services clearly categorized and organized, with an easy-to-use search system for quick access to required services"}
          </p>
        </motion.section>

        {/* Language Switcher */}
        <div className="flex justify-end mb-6">
          <LanguageSwitcher
            currentLanguage={language}
            onLanguageChange={handleLanguageChange}
          />
        </div>

        {/* Search Section */}
        <motion.section
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <SearchBar
            onSearch={handleSearch}
            placeholder={
              isRTL ? "ابحث عن الخدمات..." : "Search for services..."
            }
          />
        </motion.section>

        {/* Categories Section */}
        <CategoryGrid onCategorySelect={handleCategorySelect} isRTL={isRTL} />

        {/* Service Details Modal */}
        {showServiceDetails && (
          <ServiceDetails
            isOpen={showServiceDetails}
            onClose={handleCloseServiceDetails}
          />
        )}
      </main>

      {/* Footer */}
      <Footer rtl={isRTL} />
    </div>
  );
};

export default Home;
