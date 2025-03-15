import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Check, X } from "lucide-react";

interface NotificationsPageProps {
  isRTL?: boolean;
}

const NotificationsPage = ({ isRTL = false }: NotificationsPageProps) => {
  // Mock notifications data
  const notifications = [
    {
      id: 1,
      title: isRTL ? "تم تأكيد طلبك" : "Your order has been confirmed",
      message: isRTL
        ? "تم تأكيد طلبك رقم #12345 وهو قيد المعالجة الآن."
        : "Your order #12345 has been confirmed and is being processed.",
      date: "2023-06-15T10:30:00",
      read: false,
      type: "order",
    },
    {
      id: 2,
      title: isRTL ? "تقييم الخدمة" : "Service Rating",
      message: isRTL
        ? "يرجى تقييم الخدمة التي تلقيتها من مقدم الخدمة أحمد."
        : "Please rate the service you received from provider Ahmed.",
      date: "2023-06-14T15:45:00",
      read: true,
      type: "rating",
    },
    {
      id: 3,
      title: isRTL ? "عرض خاص" : "Special Offer",
      message: isRTL
        ? "احصل على خصم 20% على خدمات الصيانة هذا الأسبوع!"
        : "Get 20% off on maintenance services this week!",
      date: "2023-06-13T09:15:00",
      read: false,
      type: "promotion",
    },
    {
      id: 4,
      title: isRTL ? "تحديث في الحساب" : "Account Update",
      message: isRTL
        ? "تم تحديث معلومات حسابك بنجاح."
        : "Your account information has been successfully updated.",
      date: "2023-06-12T14:20:00",
      read: true,
      type: "account",
    },
    {
      id: 5,
      title: isRTL ? "تذكير بالموعد" : "Appointment Reminder",
      message: isRTL
        ? "تذكير: لديك موعد غدًا في الساعة 10:00 صباحًا."
        : "Reminder: You have an appointment tomorrow at 10:00 AM.",
      date: "2023-06-11T18:30:00",
      read: false,
      type: "appointment",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(isRTL ? "ar-SA" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "order":
        return (
          <div className="bg-blue-100 p-2 rounded-full">
            <Bell className="h-5 w-5 text-blue-600" />
          </div>
        );
      case "rating":
        return (
          <div className="bg-yellow-100 p-2 rounded-full">
            <Bell className="h-5 w-5 text-yellow-600" />
          </div>
        );
      case "promotion":
        return (
          <div className="bg-green-100 p-2 rounded-full">
            <Bell className="h-5 w-5 text-green-600" />
          </div>
        );
      case "account":
        return (
          <div className="bg-purple-100 p-2 rounded-full">
            <Bell className="h-5 w-5 text-purple-600" />
          </div>
        );
      case "appointment":
        return (
          <div className="bg-red-100 p-2 rounded-full">
            <Bell className="h-5 w-5 text-red-600" />
          </div>
        );
      default:
        return (
          <div className="bg-gray-100 p-2 rounded-full">
            <Bell className="h-5 w-5 text-gray-600" />
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto py-10" dir={isRTL ? "rtl" : "ltr"}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          {isRTL ? "الإشعارات" : "Notifications"}
        </h1>
        <Button variant="outline" size="sm">
          {isRTL ? "تحديد الكل كمقروء" : "Mark All as Read"}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {isRTL ? "آخر الإشعارات" : "Recent Notifications"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-start p-4 rounded-lg ${notification.read ? "bg-white" : "bg-blue-50"}`}
                >
                  <div className="flex-shrink-0 mr-4">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <h3
                        className={`text-sm font-medium ${notification.read ? "" : "font-bold"}`}
                      >
                        {notification.title}
                      </h3>
                      <span className="text-xs text-gray-500">
                        {formatDate(notification.date)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {notification.message}
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-4 flex space-x-2">
                    {!notification.read && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900">
                  {isRTL ? "لا توجد إشعارات" : "No notifications"}
                </h3>
                <p className="text-gray-500 mt-1">
                  {isRTL
                    ? "ليس لديك أي إشعارات في الوقت الحالي."
                    : "You don't have any notifications at the moment."}
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationsPage;
