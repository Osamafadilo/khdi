import React, { useState } from "react";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface LanguageSwitcherProps {
  currentLanguage?: "en" | "ar";
  onLanguageChange?: (language: "en" | "ar") => void;
}

const LanguageSwitcher = ({
  currentLanguage = "en",
  onLanguageChange = () => {},
}: LanguageSwitcherProps) => {
  const [language, setLanguage] = useState<"en" | "ar">(currentLanguage);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    onLanguageChange(newLanguage);
    // In a real implementation, this would update the app's language context
    // and potentially change the document direction for RTL support
  };

  return (
    <div className="bg-white p-2 rounded-md">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-100"
              onClick={toggleLanguage}
            >
              <Globe className="h-4 w-4" />
              <span className="font-medium">
                {language === "en" ? "English" : "العربية"}
              </span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>
              {language === "en" ? "Switch to Arabic" : "Switch to English"}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default LanguageSwitcher;
