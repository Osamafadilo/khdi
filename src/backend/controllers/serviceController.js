import asyncHandler from "express-async-handler";

// Mock data for service categories
const serviceCategories = [
  {
    id: "residence",
    nameAr: "إقامة",
    nameEn: "Residence",
    descriptionAr: "خدمات الإقامة والسكن",
    descriptionEn: "Residence and housing services",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  },
  {
    id: "stores",
    nameAr: "متاجر",
    nameEn: "Stores",
    descriptionAr: "خدمات المتاجر والتسوق",
    descriptionEn: "Store and shopping services",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: "restaurants",
    nameAr: "مطاعم",
    nameEn: "Restaurants",
    descriptionAr: "خدمات المطاعم والطعام",
    descriptionEn: "Restaurant and food services",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  },
  {
    id: "maintenance",
    nameAr: "صيانة",
    nameEn: "Maintenance",
    descriptionAr: "خدمات الصيانة والإصلاح",
    descriptionEn: "Maintenance and repair services",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  },
  {
    id: "travel",
    nameAr: "سفر",
    nameEn: "Travel",
    descriptionAr: "خدمات السفر والسياحة",
    descriptionEn: "Travel and tourism services",
    image:
      "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80",
  },
  {
    id: "delivery",
    nameAr: "توصيل",
    nameEn: "Delivery",
    descriptionAr: "خدمات التوصيل والشحن",
    descriptionEn: "Delivery and shipping services",
    image:
      "https://images.unsplash.com/photo-1586880244406-8b640d5bbc8e?w=800&q=80",
  },
  {
    id: "investment",
    nameAr: "استثمار",
    nameEn: "Investment",
    descriptionAr: "خدمات الاستثمار والتمويل",
    descriptionEn: "Investment and finance services",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

// @desc    Get all service categories
// @route   GET /api/services/categories
// @access  Public
const getServiceCategories = asyncHandler(async (req, res) => {
  res.json(serviceCategories);
});

// @desc    Search services
// @route   GET /api/services/search
// @access  Public
const searchServices = asyncHandler(async (req, res) => {
  const { query, category } = req.query;

  // Mock search functionality
  let results = [];

  // In a real implementation, this would query a database
  if (query) {
    // Simulate search results based on the query
    results = serviceCategories.filter(
      (cat) =>
        cat.nameEn.toLowerCase().includes(query.toLowerCase()) ||
        cat.nameAr.includes(query) ||
        cat.descriptionEn.toLowerCase().includes(query.toLowerCase()) ||
        cat.descriptionAr.includes(query),
    );
  }

  // Filter by category if provided
  if (category && category !== "all") {
    results = results.filter((service) => service.id === category);
  }

  res.json(results);
});

// @desc    Get service by category
// @route   GET /api/services/:category
// @access  Public
const getServicesByCategory = asyncHandler(async (req, res) => {
  const { category } = req.params;

  // Find the category
  const categoryData = serviceCategories.find((cat) => cat.id === category);

  if (!categoryData) {
    res.status(404);
    throw new Error("Category not found");
  }

  // Mock services for the category
  const services = [
    {
      id: `${category}_1`,
      nameAr: `خدمة ${categoryData.nameAr} 1`,
      nameEn: `${categoryData.nameEn} Service 1`,
      descriptionAr: `وصف خدمة ${categoryData.nameAr} الأولى`,
      descriptionEn: `Description for ${categoryData.nameEn} Service 1`,
      price: Math.floor(Math.random() * 1000) + 100,
      rating: (Math.random() * 5).toFixed(1),
      image: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000000)}?w=800&q=80`,
    },
    {
      id: `${category}_2`,
      nameAr: `خدمة ${categoryData.nameAr} 2`,
      nameEn: `${categoryData.nameEn} Service 2`,
      descriptionAr: `وصف خدمة ${categoryData.nameAr} الثانية`,
      descriptionEn: `Description for ${categoryData.nameEn} Service 2`,
      price: Math.floor(Math.random() * 1000) + 100,
      rating: (Math.random() * 5).toFixed(1),
      image: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000000)}?w=800&q=80`,
    },
    {
      id: `${category}_3`,
      nameAr: `خدمة ${categoryData.nameAr} 3`,
      nameEn: `${categoryData.nameEn} Service 3`,
      descriptionAr: `وصف خدمة ${categoryData.nameAr} الثالثة`,
      descriptionEn: `Description for ${categoryData.nameEn} Service 3`,
      price: Math.floor(Math.random() * 1000) + 100,
      rating: (Math.random() * 5).toFixed(1),
      image: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000000)}?w=800&q=80`,
    },
  ];

  res.json({
    category: categoryData,
    services,
  });
});

export { getServiceCategories, searchServices, getServicesByCategory };
