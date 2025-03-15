import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Settings, Languages, Moon, Sun, Monitor } from "lucide-react";

interface LanguageAppearanceMenuProps {
  isRTL?: boolean;
  onLanguageChange: (language: string) => void;
  onThemeChange: (theme: "light" | "dark" | "system") => void;
  onDirectionChange: (direction: "ltr" | "rtl") => void;
  currentLanguage?: string;
  currentTheme?: "light" | "dark" | "system";
  currentDirection?: "ltr" | "rtl";
}

const LanguageAppearanceMenu = ({
  isRTL = false,
  onLanguageChange = () => {},
  onThemeChange = () => {},
  onDirectionChange = () => {},
  currentLanguage = "ar",
  currentTheme = "system",
  currentDirection = "rtl",
}: LanguageAppearanceMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-purple-700"
        >
          <Settings className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          {isRTL ? "الإعدادات" : "Settings"}
        </DropdownMenuLabel>

        {/* Language Submenu */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="flex items-center">
            <Languages className="mr-2 h-4 w-4" />
            <span>{isRTL ? "اللغة" : "Language"}</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup
              value={currentLanguage}
              onValueChange={onLanguageChange}
            >
              <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="ar">العربية</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="fr">Français</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        {/* Direction Submenu */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="flex items-center">
            <Settings className="mr-2 h-4 w-4" />
            <span>{isRTL ? "اتجاه النص" : "Text Direction"}</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup
              value={currentDirection}
              onValueChange={onDirectionChange}
            >
              <DropdownMenuRadioItem value="ltr">
                {isRTL ? "من اليسار إلى اليمين" : "Left to Right (LTR)"}
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="rtl">
                {isRTL ? "من اليمين إلى اليسار" : "Right to Left (RTL)"}
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        {/* Theme Submenu */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="flex items-center">
            {currentTheme === "light" ? (
              <Sun className="mr-2 h-4 w-4" />
            ) : currentTheme === "dark" ? (
              <Moon className="mr-2 h-4 w-4" />
            ) : (
              <Monitor className="mr-2 h-4 w-4" />
            )}
            <span>{isRTL ? "المظهر" : "Theme"}</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup
              value={currentTheme}
              onValueChange={onThemeChange}
            >
              <DropdownMenuRadioItem
                value="light"
                className="flex items-center"
              >
                <Sun className="mr-2 h-4 w-4" />
                <span>{isRTL ? "فاتح" : "Light"}</span>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="dark" className="flex items-center">
                <Moon className="mr-2 h-4 w-4" />
                <span>{isRTL ? "داكن" : "Dark"}</span>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value="system"
                className="flex items-center"
              >
                <Monitor className="mr-2 h-4 w-4" />
                <span>{isRTL ? "نظام" : "System"}</span>
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageAppearanceMenu;
