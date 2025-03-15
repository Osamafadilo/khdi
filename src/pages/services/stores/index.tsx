import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Store,
  ShoppingBag,
  Smartphone,
  Shirt,
  Coffee,
  Gift,
  Book,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useSettings } from "../../../contexts/SettingsContext";

interface StoreType {
  id: string;
  name: string;
  nameAr: string;
  icon: React.ReactNode;
  image: string;
  description: string;
  descriptionAr: string;
}

const StoresPage = () => {
  const { isRTL } = useSettings();
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Store types data
  const storeTypes: StoreType[] = [
    {
      id: "grocery",
      name: "Grocery Stores",
      nameAr: "محلات البقالة",
      icon: <ShoppingBag className="h-5 w-5" />,
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
      description:
        "Find all your daily essentials at our partner grocery stores.",
      descriptionAr:
        "اعثر على جميع احتياجاتك اليومية في متاجر البقالة الشريكة.",
    },
    {
      id: "electronics",
      name: "Electronics",
      nameAr: "الإلكترونيات",
      icon: <Smartphone className="h-5 w-5" />,
      image:
        "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&q=80",
      description: "Discover the latest gadgets and electronic devices.",
      descriptionAr: "اكتشف أحدث الأجهزة والأدوات الإلكترونية.",
    },
    {
      id: "clothing",
      name: "Clothing & Fashion",
      nameAr: "الملابس والأزياء",
      icon: <Shirt className="h-5 w-5" />,
      image:
        "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80",
      description:
        "Stay stylish with the latest fashion trends and clothing collections.",
      descriptionAr: "ابق أنيقًا مع أحدث صيحات الموضة ومجموعات الملابس.",
    },
    {
      id: "cafes",
      name: "Cafes & Bakeries",
      nameAr: "المقاهي والمخابز",
      icon: <Coffee className="h-5 w-5" />,
      image:
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80",
      description:
        "Enjoy fresh coffee, pastries, and baked goods from local cafes.",
      descriptionAr:
        "استمتع بالقهوة الطازجة والمعجنات والمخبوزات من المقاهي المحلية.",
    },
    {
      id: "gifts",
      name: "Gift Shops",
      nameAr: "محلات الهدايا",
      icon: <Gift className="h-5 w-5" />,
      image:
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80",
      description:
        "Find the perfect gift for any occasion from our curated gift shops.",
      descriptionAr:
        "اعثر على الهدية المثالية لأي مناسبة من متاجر الهدايا المختارة لدينا.",
    },
    {
      id: "books",
      name: "Bookstores",
      nameAr: "مكتبات الكتب",
      icon: <Book className="h-5 w-5" />,
      image:
        "https://images.unsplash.com/photo-1526243741027-444d633d7365?w=800&q=80",
      description:
        "Explore a wide range of books, from bestsellers to rare finds.",
      descriptionAr:
        "استكشف مجموعة واسعة من الكتب، من الأكثر مبيعًا إلى القطع النادرة.",
    },
  ];

  // Find the selected store type
  const selectedStoreType = selectedType
    ? storeTypes.find((type) => type.id === selectedType)
    : null;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const handleStoreTypeClick = (typeId: string) => {
    setSelectedType(typeId);
  };

  const handleStoreDetailsClick = (typeId: string) => {
    navigate(`/services/stores/${typeId}`);
  };

  return (
    <div
      className={`min-h-screen bg-gray-50 ${isRTL ? "rtl" : "ltr"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Header />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-6">
              {isRTL ? "أنواع المتاجر" : "Store Types"}
            </h2>
            <motion.ul
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {storeTypes.map((type) => (
                <motion.li key={type.id} variants={itemVariants}>
                  <button
                    onClick={() => handleStoreTypeClick(type.id)}
                    className={`w-full flex items-center p-3 rounded-md transition-colors ${
                      selectedType === type.id
                        ? "bg-purple-100 text-purple-700"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <span className="mr-3">{type.icon}</span>
                    <span>{isRTL ? type.nameAr : type.name}</span>
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Main Content */}
          <div className="md:w-3/4 bg-white p-6 rounded-lg shadow-sm">
            {selectedStoreType ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold">
                  {isRTL ? selectedStoreType.nameAr : selectedStoreType.name}
                </h2>
                <p className="text-gray-600">
                  {isRTL
                    ? selectedStoreType.descriptionAr
                    : selectedStoreType.description}
                </p>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img
                    src={selectedStoreType.image}
                    alt={selectedStoreType.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() =>
                      handleStoreDetailsClick(selectedStoreType.id)
                    }
                    className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                  >
                    {isRTL ? "عرض المتاجر" : "View Stores"}
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <Store className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-xl font-medium text-gray-500">
                  {isRTL
                    ? "الرجاء اختيار نوع المتجر من القائمة"
                    : "Please select a store type from the sidebar"}
                </h3>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer rtl={isRTL} />
    </div>
  );
};

export default StoresPage;
