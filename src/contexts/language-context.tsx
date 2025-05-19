import React, { createContext, useContext, useEffect, useState } from "react";

import en from "@/locales/en.json";
import hi from "@/locales/hi.json";
import ne from "@/locales/ne.json";

type Language = "en" | "hi" | "ne";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, any>;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translationsMap: Record<Language, Record<string, any>> = {
  en,
  hi,
  ne,
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [translations, setTranslations] = useState<Record<string, any>>({});

  useEffect(() => {
    setTranslations(translationsMap[language]);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function useTranslation(key: string): string {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }

  const { translations } = context;
  const keys = key.split(".");
  let value: any = translations;

  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
  }

  if (typeof value !== "string") {
    console.warn(`Translation value for key "${key}" is not a string:`, value);
    return key;
  }

  return value;
}
