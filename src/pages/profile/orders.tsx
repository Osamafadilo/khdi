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
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface OrdersPageProps {
  isRTL?: boolean;
}

const OrdersPage = ({ isRTL = false }: OrdersPageProps) => {
  const navigate = useNavigate();

  // Mock data for orders
  const orders = [
    {
      id: "ORD-001",
      date: "2023-09-15",
      service: isRTL ? "صيانة تكييف" : "AC Maintenance",
      provider: isRTL ? "شركة التبريد المتميزة" : "Premium Cooling Co.",
      status: "completed",
      amount: 250,
    },
    {
      id: "ORD-002",
      date: "2023-10-03",
      service: isRTL ? "تنظيف منزلي" : "Home Cleaning",
      provider: isRTL ? "خدمات التنظيف الشاملة" : "Complete Cleaning Services",
      status: "in-progress",
      amount: 180,
    },
    {
      id: "ORD-003",
      date: "2023-10-10",
      service: isRTL ? "صيانة سيارات" : "Car Maintenance",
      provider: isRTL ? "ورشة السيارات المتخصصة" : "Specialized Auto Workshop",
      status: "scheduled",
      amount: 350,
    },
    {
      id: "ORD-004",
      date: "2023-08-22",
      service: isRTL ? "استشارة قانونية" : "Legal Consultation",
      provider: isRTL ? "مكتب المحاماة المتميز" : "Premium Law Office",
      status: "cancelled",
      amount: 500,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-500">
            {isRTL ? "مكتمل" : "Completed"}
          </Badge>
        );
      case "in-progress":
        return (
          <Badge className="bg-blue-500">
            {isRTL ? "قيد التنفيذ" : "In Progress"}
          </Badge>
        );
      case "scheduled":
        return (
          <Badge className="bg-yellow-500">
            {isRTL ? "مجدول" : "Scheduled"}
          </Badge>
        );
      case "cancelled":
        return (
          <Badge className="bg-red-500">{isRTL ? "ملغي" : "Cancelled"}</Badge>
        );
      default:
        return (
          <Badge className="bg-gray-500">
            {isRTL ? "غير معروف" : "Unknown"}
          </Badge>
        );
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(isRTL ? "ar-SA" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto py-10" dir={isRTL ? "rtl" : "ltr"}>
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mr-2">
          {isRTL ? "رجوع" : "Back"}
        </Button>
        <h1 className="text-3xl font-bold">{isRTL ? "طلباتي" : "My Orders"}</h1>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">{isRTL ? "الكل" : "All"}</TabsTrigger>
          <TabsTrigger value="active">{isRTL ? "نشط" : "Active"}</TabsTrigger>
          <TabsTrigger value="completed">
            {isRTL ? "مكتمل" : "Completed"}
          </TabsTrigger>
          <TabsTrigger value="cancelled">
            {isRTL ? "ملغي" : "Cancelled"}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          {orders.length > 0 ? (
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">{order.service}</CardTitle>
                      {getStatusBadge(order.status)}
                    </div>
                    <CardDescription>
                      {order.id} • {formatDate(order.date)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {isRTL ? "مقدم الخدمة" : "Service Provider"}
                        </p>
                        <p className="font-medium">{order.provider}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">
                          {isRTL ? "المبلغ" : "Amount"}
                        </p>
                        <p className="font-medium">
                          {order.amount} {isRTL ? "ريال" : "SAR"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => {
                        // Navigate to order details
                        // navigate(`/profile/orders/${order.id}`);
                      }}
                    >
                      {isRTL ? "عرض التفاصيل" : "View Details"}
                    </Button>
                    {(order.status === "scheduled" ||
                      order.status === "in-progress") && (
                      <Button
                        variant="destructive"
                        onClick={() => {
                          // Cancel order logic
                        }}
                      >
                        {isRTL ? "إلغاء الطلب" : "Cancel Order"}
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="w-full text-center p-6">
              <CardHeader>
                <CardTitle>{isRTL ? "لا توجد طلبات" : "No Orders"}</CardTitle>
                <CardDescription>
                  {isRTL
                    ? "لم تقم بطلب أي خدمات بعد"
                    : "You haven't ordered any services yet"}
                </CardDescription>
              </CardHeader>
              <CardFooter className="justify-center">
                <Button onClick={() => navigate("/")}>
                  {isRTL ? "استكشف الخدمات" : "Explore Services"}
                </Button>
              </CardFooter>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="active" className="mt-6">
          {orders.filter(
            (order) =>
              order.status === "in-progress" || order.status === "scheduled",
          ).length > 0 ? (
            <div className="space-y-4">
              {orders
                .filter(
                  (order) =>
                    order.status === "in-progress" ||
                    order.status === "scheduled",
                )
                .map((order) => (
                  <Card key={order.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">
                          {order.service}
                        </CardTitle>
                        {getStatusBadge(order.status)}
                      </div>
                      <CardDescription>
                        {order.id} • {formatDate(order.date)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {isRTL ? "مقدم الخدمة" : "Service Provider"}
                          </p>
                          <p className="font-medium">{order.provider}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">
                            {isRTL ? "المبلغ" : "Amount"}
                          </p>
                          <p className="font-medium">
                            {order.amount} {isRTL ? "ريال" : "SAR"}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={() => {
                          // Navigate to order details
                          // navigate(`/profile/orders/${order.id}`);
                        }}
                      >
                        {isRTL ? "عرض التفاصيل" : "View Details"}
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => {
                          // Cancel order logic
                        }}
                      >
                        {isRTL ? "إلغاء الطلب" : "Cancel Order"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          ) : (
            <Card className="w-full text-center p-6">
              <CardHeader>
                <CardTitle>
                  {isRTL ? "لا توجد طلبات نشطة" : "No Active Orders"}
                </CardTitle>
                <CardDescription>
                  {isRTL
                    ? "ليس لديك أي طلبات نشطة حاليًا"
                    : "You don't have any active orders at the moment"}
                </CardDescription>
              </CardHeader>
              <CardFooter className="justify-center">
                <Button onClick={() => navigate("/")}>
                  {isRTL ? "استكشف الخدمات" : "Explore Services"}
                </Button>
              </CardFooter>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          {orders.filter((order) => order.status === "completed").length > 0 ? (
            <div className="space-y-4">
              {orders
                .filter((order) => order.status === "completed")
                .map((order) => (
                  <Card key={order.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">
                          {order.service}
                        </CardTitle>
                        {getStatusBadge(order.status)}
                      </div>
                      <CardDescription>
                        {order.id} • {formatDate(order.date)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {isRTL ? "مقدم الخدمة" : "Service Provider"}
                          </p>
                          <p className="font-medium">{order.provider}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">
                            {isRTL ? "المبلغ" : "Amount"}
                          </p>
                          <p className="font-medium">
                            {order.amount} {isRTL ? "ريال" : "SAR"}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={() => {
                          // Navigate to order details
                          // navigate(`/profile/orders/${order.id}`);
                        }}
                      >
                        {isRTL ? "عرض التفاصيل" : "View Details"}
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          // Rate service logic
                        }}
                      >
                        {isRTL ? "تقييم الخدمة" : "Rate Service"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          ) : (
            <Card className="w-full text-center p-6">
              <CardHeader>
                <CardTitle>
                  {isRTL ? "لا توجد طلبات مكتملة" : "No Completed Orders"}
                </CardTitle>
                <CardDescription>
                  {isRTL
                    ? "ليس لديك أي طلبات مكتملة بعد"
                    : "You don't have any completed orders yet"}
                </CardDescription>
              </CardHeader>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="cancelled" className="mt-6">
          {orders.filter((order) => order.status === "cancelled").length > 0 ? (
            <div className="space-y-4">
              {orders
                .filter((order) => order.status === "cancelled")
                .map((order) => (
                  <Card key={order.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">
                          {order.service}
                        </CardTitle>
                        {getStatusBadge(order.status)}
                      </div>
                      <CardDescription>
                        {order.id} • {formatDate(order.date)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {isRTL ? "مقدم الخدمة" : "Service Provider"}
                          </p>
                          <p className="font-medium">{order.provider}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">
                            {isRTL ? "المبلغ" : "Amount"}
                          </p>
                          <p className="font-medium">
                            {order.amount} {isRTL ? "ريال" : "SAR"}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        onClick={() => {
                          // Navigate to order details
                          // navigate(`/profile/orders/${order.id}`);
                        }}
                      >
                        {isRTL ? "عرض التفاصيل" : "View Details"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          ) : (
            <Card className="w-full text-center p-6">
              <CardHeader>
                <CardTitle>
                  {isRTL ? "لا توجد طلبات ملغية" : "No Cancelled Orders"}
                </CardTitle>
                <CardDescription>
                  {isRTL
                    ? "ليس لديك أي طلبات ملغية"
                    : "You don't have any cancelled orders"}
                </CardDescription>
              </CardHeader>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrdersPage;
