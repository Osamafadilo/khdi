import React from "react";
import CategoryCard from "./CategoryCard";
import { motion } from "framer-motion";

interface Category {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

interface CategoryGridProps {
  categories?: Category[];
  onCategorySelect?: (categoryId: string) => void;
  isRTL?: boolean;
}

const CategoryGrid = ({
  categories = [
    {
      id: "residence",
      title: "Residence Services",
      description:
        "Housing solutions, property management, and residential services.",
      imageSrc:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
    },
    {
      id: "stores",
      title: "Stores",
      description:
        "Retail services, online shopping, and store management solutions.",
      imageSrc:
        "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?w=400&q=80",
    },
    {
      id: "restaurants",
      title: "Restaurants",
      description:
        "Food services, restaurant management, and culinary solutions.",
      imageSrc:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80",
    },
    {
      id: "maintenance",
      title: "Maintenance",
      description:
        "Repair services, maintenance solutions, and technical support.",
      imageSrc:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80",
    },
    {
      id: "travel",
      title: "Travel",
      description: "Travel planning, booking services, and tourism solutions.",
      imageSrc:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80",
    },
    {
      id: "delivery",
      title: "Delivery",
      description:
        "Shipping services, courier solutions, and delivery management.",
      imageSrc:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80",
    },
    {
      id: "investment",
      title: "Investment",
      description:
        "Financial services, investment opportunities, and business growth solutions.",
      imageSrc:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&q=80",
    },
  ],
  onCategorySelect = () => {},
  isRTL = false,
}: CategoryGridProps) => {
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

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-gray-50">
      <h2
        className={`text-3xl font-bold mb-8 ${isRTL ? "text-right" : "text-left"}`}
      >
        {isRTL ? "فئات الخدمات" : "Service Categories"}
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        dir={isRTL ? "rtl" : "ltr"}
      >
        {categories.map((category) => (
          <motion.div key={category.id} variants={itemVariants}>
            <CategoryCard
              title={category.title}
              description={category.description}
              imageSrc={category.imageSrc}
              onClick={() => onCategorySelect(category.id)}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CategoryGrid;
