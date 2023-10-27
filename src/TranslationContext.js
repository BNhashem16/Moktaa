import React, { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

const TranslationContext = createContext();

export function useTranslationContext() {
  return useContext(TranslationContext);
}

export function TranslationProvider({ children }) {
  const { t } = useTranslation();

  return (
    <TranslationContext.Provider value={{ t }}>
      {children}
    </TranslationContext.Provider>
  );
}
