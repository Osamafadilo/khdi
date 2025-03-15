import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSettings } from "@/contexts/SettingsContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Heart,
  MapPin,
  Phone,
  Clock,
  Globe,
  Share2,
  MessageSquare,
  ChevronLeft,
} from "lucide-react";

interface StoreDetailsProps {
  storeId?: string;
}

const StoreDetails = ({ storeId }: StoreDetailsProps) => {
  const params = useParams<{ storeId: string }>();
  const effectiveStoreId = storeId || params.storeId;
  const { isRTL } = useSettings();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  // In a real app, this would fetch store details from an API
  // For now, we'll use mock data
  const store = {
    id: effectiveStoreId || "store1",
    title: isRTL ? "سوبرماركت الرياض" : "Riyadh Supermarket",
    description: isRTL
      ? "سوبرماركت شامل يوفر جميع المنتجات الغذائية والاستهلاكية بأسعار منافسة. نحن نفتخر بتقديم منتجات طازجة وعالية الجودة لعملائنا الكرام. تأسس المتجر في عام 2010 وأصبح من أشهر المتاجر في المنطقة."
      : "Comprehensive supermarket offering all food and consumer products at competitive prices. We pride ourselves on providing fresh, high-quality products to our valued customers. The store was established in 2010 and has become one of the most famous stores in the area.",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80",
      "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?w=800&q=80",
    ],
    providerImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=store1",
    providerName: isRTL ? "أحمد محمد" : "Ahmed Mohammed",
    rating: 4.7,
    reviewCount: 128,
    address: isRTL ? "شارع الملك فهد، الرياض" : "King Fahd Road, Riyadh",
    phone: "+966 11 234 5678",
    website: "www.riyadhsupermarket.com",
    hours: isRTL ? "8:00 ص - 11:00 م" : "8:00 AM - 11:00 PM",
    category: "stores",
    serviceType: "grocery",
    location: { lat: 24.7136, lng: 46.6753 },
    distance: 2.3,
    features: isRTL
      ? ["منتجات طازجة", "توصيل مجاني", "دفع إلكتروني", "خدمة 24 ساعة"]
      : [
          "Fresh Products",
          "Free Delivery",
          "Electronic Payment",
          "24/7 Service",
        ],
  };

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="space-y-6">
      <Button
        variant="ghost"
        className="flex items-center gap-2 mb-4"
        onClick={handleGoBack}
      >
        <ChevronLeft className="h-4 w-4" />
        {isRTL ? "العودة" : "Back"}
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image gallery */}
          <div className="relative rounded-lg overflow-hidden h-80 bg-gray-100">
            <img
              src={store.images[0]}
              alt={store.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={handleFavoriteToggle}
              className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white/90 transition-colors"
            >
              <Heart
                className={`h-6 w-6 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-700"}`}
              />
            </button>
            <div className="absolute bottom-4 left-4 flex space-x-2">
              {store.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="w-16 h-16 rounded-md overflow-hidden border-2 border-white"
                >
                  <img
                    src={image}
                    alt={`${store.title} ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Store details */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">{store.title}</CardTitle>
                  <CardDescription className="flex items-center mt-2">
                    <div className="flex items-center bg-yellow-50 text-yellow-700 px-2 py-1 rounded">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="font-medium">
                        {store.rating.toFixed(1)}
                      </span>
                      <span className="mx-1">•</span>
                      <span>
                        {store.reviewCount} {isRTL ? "تقييم" : "reviews"}
                      </span>
                    </div>
                    <span className="mx-2">•</span>
                    <Badge variant="outline" className="ml-2">
                      {isRTL ? "متجر بقالة" : "Grocery Store"}
                    </Badge>
                  </CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    {isRTL ? "مشاركة" : "Share"}
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    {isRTL ? "تقييم" : "Review"}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{store.address}</p>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{store.phone}</p>
                </div>
                <div className="flex items-start">
                  <Globe className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{store.website}</p>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">
                    {isRTL ? "ساعات العمل: " : "Hours: "}
                    {store.hours}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-2">
                  {isRTL ? "وصف المتجر" : "Store Description"}
                </h3>
                <p className="text-gray-700">{store.description}</p>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-2">
                  {isRTL ? "المميزات" : "Features"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {store.features.map((feature, index) => (
                    <Badge key={index} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                {isRTL ? "تواصل مع المتجر" : "Contact Store"}
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Store owner card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {isRTL ? "صاحب المتجر" : "Store Owner"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <img
                  src={store.providerImage}
                  alt={store.providerName}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-medium">{store.providerName}</h3>
                  <p className="text-sm text-gray-500">
                    {isRTL ? "عضو منذ 2020" : "Member since 2020"}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                {isRTL ? "مراسلة" : "Message"}
              </Button>
            </CardFooter>
          </Card>

          {/* Map placeholder */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {isRTL ? "الموقع" : "Location"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-200 h-48 rounded-md flex items-center justify-center">
                <MapPin className="h-8 w-8 text-gray-400" />
                <p className="ml-2 text-gray-500">
                  {isRTL ? "خريطة الموقع" : "Location Map"}
                </p>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {store.distance.toFixed(1)}{" "}
                {isRTL ? "كم من موقعك" : "km from your location"}
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                {isRTL ? "الحصول على الاتجاهات" : "Get Directions"}
              </Button>
            </CardFooter>
          </Card>

          {/* Similar stores */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {isRTL ? "متاجر مشابهة" : "Similar Stores"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=store${i + 1}`}
                      alt="Store"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">
                      {isRTL ? `متجر البقالة ${i}` : `Grocery Store ${i}`}
                    </h4>
                    <div className="flex items-center text-sm">
                      <Star className="h-3 w-3 text-yellow-500 mr-1" />
                      <span>{(4 + i * 0.2).toFixed(1)}</span>
                      <span className="mx-1">•</span>
                      <span>
                        {3 + i} {isRTL ? "كم" : "km"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="link" className="w-full">
                {isRTL ? "عرض المزيد" : "View More"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StoreDetails;
