import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeType = "light" | "dark" | "system";
type DirectionType = "ltr" | "rtl";
type LanguageType = "en" | "ar" | "fr";

interface SettingsContextType {
  language: LanguageType;
  direction: DirectionType;
  theme: ThemeType;
  setLanguage: (language: LanguageType) => void;
  setDirection: (direction: DirectionType) => void;
  setTheme: (theme: ThemeType) => void;
  isRTL: boolean;
}

const defaultSettings: SettingsContextType = {
  language: "ar",
  direction: "rtl",
  theme: "system",
  setLanguage: () => {},
  setDirection: () => {},
  setTheme: () => {},
  isRTL: true,
};

const SettingsContext = createContext<SettingsContextType>(defaultSettings);

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<LanguageType>("ar");
  const [direction, setDirectionState] = useState<DirectionType>("rtl");
  const [theme, setThemeState] = useState<ThemeType>("system");
  const isRTL = direction === "rtl";

  // Load settings from localStorage on initial render
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as LanguageType;
    const storedDirection = localStorage.getItem("direction") as DirectionType;
    const storedTheme = localStorage.getItem("theme") as ThemeType;

    if (storedLanguage) setLanguageState(storedLanguage);
    if (storedDirection) setDirectionState(storedDirection);
    if (storedTheme) setThemeState(storedTheme);
  }, []);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.remove("light", "dark");
      root.classList.add(systemTheme);
    } else {
      root.classList.remove("light", "dark");
      root.classList.add(theme);
    }
  }, [theme]);

  // Apply direction to document
  useEffect(() => {
    document.documentElement.dir = direction;
    document.body.dir = direction;
  }, [direction]);

  const setLanguage = (newLanguage: LanguageType) => {
    setLanguageState(newLanguage);
    localStorage.setItem("language", newLanguage);

    // Automatically set direction based on language if it's Arabic
    if (newLanguage === "ar" && direction !== "rtl") {
      setDirection("rtl");
    } else if (newLanguage !== "ar" && direction === "rtl") {
      setDirection("ltr");
    }
  };

  const setDirection = (newDirection: DirectionType) => {
    setDirectionState(newDirection);
    localStorage.setItem("direction", newDirection);
  };

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <SettingsContext.Provider
      value={{
        language,
        direction,
        theme,
        setLanguage,
        setDirection,
        setTheme,
        isRTL,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
