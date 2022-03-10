import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en";
import ar from "./ar";
import { en as SaulZEn, ar as SaulAr } from "@saul/i18n";

i18n.use(LanguageDetector).init({
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  resources: {
    ar: {
      ...ar,
      ...SaulAr,
    },
    en: {
      ...SaulZEn,
      ...en,
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});
export default i18n;

export const getCurrentDirection = (): "ltr" | "rtl" =>
  i18n.language === "ar" ? "rtl" : "ltr";
