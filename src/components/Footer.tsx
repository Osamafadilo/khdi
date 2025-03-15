import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "./ui/button";

interface FooterProps {
  rtl?: boolean;
}

const Footer = ({ rtl = false }: FooterProps) => {
  const direction = rtl ? "rtl" : "ltr";
  const textAlign = rtl ? "text-right" : "text-left";

  return (
    <footer className="w-full bg-slate-900 text-white py-8" dir={direction}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Platform Information */}
          <div className={textAlign}>
            <h3 className="text-xl font-bold mb-4">
              {rtl
                ? "منصة الخدمات المتكاملة"
                : "Professional Services Platform"}
            </h3>
            <p className="text-slate-300 mb-4">
              {rtl
                ? "منصة متكاملة تقدم مجموعة متنوعة من الخدمات الاحترافية لتطوير الأعمال"
                : "A comprehensive platform offering a variety of professional services for business development"}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-blue-400"
              >
                <Facebook size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-pink-400"
              >
                <Instagram size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-blue-400"
              >
                <Twitter size={20} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className={textAlign}>
            <h3 className="text-xl font-bold mb-4">
              {rtl ? "روابط سريعة" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {rtl ? "الصفحة الرئيسية" : "Home"}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {rtl ? "عن المنصة" : "About Us"}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {rtl ? "الخدمات" : "Services"}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {rtl ? "الشروط والأحكام" : "Terms & Conditions"}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {rtl ? "سياسة الخصوصية" : "Privacy Policy"}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className={textAlign}>
            <h3 className="text-xl font-bold mb-4">
              {rtl ? "اتصل بنا" : "Contact Us"}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-slate-300" />
                <span className="text-slate-300">
                  support@services-platform.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-slate-300" />
                <span className="text-slate-300">+966 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-slate-300" />
                <span className="text-slate-300">
                  {rtl
                    ? "الرياض، المملكة العربية السعودية"
                    : "Riyadh, Saudi Arabia"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            {rtl
              ? "منصة الخدمات المتكاملة. جميع الحقوق محفوظة"
              : "Professional Services Platform. All rights reserved"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
