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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface HelpPageProps {
  isRTL?: boolean;
}

const HelpPage = ({ isRTL = false }: HelpPageProps) => {
  const navigate = useNavigate();

  // FAQ data
  const faqs = [
    {
      question: isRTL
        ? "كيف يمكنني إنشاء حساب؟"
        : "How do I create an account?",
      answer: isRTL
        ? "يمكنك إنشاء حساب بالنقر على زر 'تسجيل' في الزاوية العلوية اليمنى من الشاشة. ستحتاج إلى تقديم بريدك الإلكتروني واسمك وكلمة مرور."
        : "You can create an account by clicking the 'Register' button in the top right corner of the screen. You will need to provide your email, name, and a password.",
    },
    {
      question: isRTL ? "كيف يمكنني طلب خدمة؟" : "How do I request a service?",
      answer: isRTL
        ? "يمكنك طلب خدمة عن طريق تصفح فئات الخدمات المختلفة، واختيار الخدمة التي تحتاجها، ثم النقر على زر 'طلب الخدمة'. ستحتاج إلى تقديم التفاصيل المطلوبة وتحديد وقت مناسب."
        : "You can request a service by browsing the different service categories, selecting the service you need, and clicking the 'Request Service' button. You will need to provide the required details and specify a suitable time.",
    },
    {
      question: isRTL
        ? "كيف يمكنني تغيير كلمة المرور الخاصة بي؟"
        : "How do I change my password?",
      answer: isRTL
        ? "يمكنك تغيير كلمة المرور الخاصة بك عن طريق الانتقال إلى صفحة 'الإعدادات' في ملفك الشخصي، ثم النقر على 'الأمان'، وبعد ذلك 'تغيير كلمة المرور'."
        : "You can change your password by going to the 'Settings' page in your profile, then clicking on 'Security', and then 'Change Password'.",
    },
    {
      question: isRTL ? "كيف يمكنني إلغاء طلب؟" : "How do I cancel a request?",
      answer: isRTL
        ? "يمكنك إلغاء طلب عن طريق الانتقال إلى صفحة 'طلباتي' في ملفك الشخصي، والعثور على الطلب الذي ترغب في إلغائه، ثم النقر على زر 'إلغاء الطلب'."
        : "You can cancel a request by going to the 'My Orders' page in your profile, finding the request you want to cancel, and clicking the 'Cancel Order' button.",
    },
    {
      question: isRTL ? "كيف يمكنني تقييم خدمة؟" : "How do I rate a service?",
      answer: isRTL
        ? "يمكنك تقييم خدمة بعد اكتمالها عن طريق الانتقال إلى صفحة 'طلباتي' في ملفك الشخصي، والعثور على الطلب المكتمل، ثم النقر على زر 'تقييم الخدمة'."
        : "You can rate a service after it's completed by going to the 'My Orders' page in your profile, finding the completed order, and clicking the 'Rate Service' button.",
    },
  ];

  return (
    <div className="container mx-auto py-10" dir={isRTL ? "rtl" : "ltr"}>
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mr-2">
          {isRTL ? "رجوع" : "Back"}
        </Button>
        <h1 className="text-3xl font-bold">
          {isRTL ? "المساعدة والدعم" : "Help & Support"}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>
                {isRTL ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
              </CardTitle>
              <CardDescription>
                {isRTL
                  ? "إجابات للأسئلة الشائعة حول استخدام منصتنا"
                  : "Answers to common questions about using our platform"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>{isRTL ? "اتصل بنا" : "Contact Us"}</CardTitle>
              <CardDescription>
                {isRTL
                  ? "لم تجد إجابة لسؤالك؟ راسلنا مباشرة"
                  : "Didn't find an answer to your question? Contact us directly"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">{isRTL ? "الاسم" : "Name"}</Label>
                <Input
                  id="name"
                  placeholder={isRTL ? "أدخل اسمك" : "Enter your name"}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">
                  {isRTL ? "البريد الإلكتروني" : "Email"}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={
                    isRTL ? "أدخل بريدك الإلكتروني" : "Enter your email"
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">{isRTL ? "الموضوع" : "Subject"}</Label>
                <Input
                  id="subject"
                  placeholder={
                    isRTL ? "أدخل موضوع الرسالة" : "Enter message subject"
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{isRTL ? "الرسالة" : "Message"}</Label>
                <textarea
                  id="message"
                  className="w-full min-h-[120px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={
                    isRTL ? "اكتب رسالتك هنا..." : "Write your message here..."
                  }
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">{isRTL ? "إرسال" : "Send"}</Button>
            </CardFooter>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>
                {isRTL ? "معلومات الاتصال" : "Contact Information"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">
                  {isRTL ? "البريد الإلكتروني" : "Email"}
                </p>
                <p className="font-medium">support@example.com</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {isRTL ? "رقم الهاتف" : "Phone"}
                </p>
                <p className="font-medium">+966 12 345 6789</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {isRTL ? "ساعات العمل" : "Working Hours"}
                </p>
                <p className="font-medium">
                  {isRTL
                    ? "الأحد - الخميس: 9:00 ص - 5:00 م"
                    : "Sunday - Thursday: 9:00 AM - 5:00 PM"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
