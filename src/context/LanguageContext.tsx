"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "id" | "ko";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "id",
  toggleLang: () => {},
  setLang: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLangState] = useState<Language>("id");

  useEffect(() => {
    const saved = localStorage.getItem("ses_lang") as Language | null;
    if (saved === "id" || saved === "ko") {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("ses_lang", newLang);
  };

  const toggleLang = () => {
    setLang(lang === "id" ? "ko" : "id");
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
