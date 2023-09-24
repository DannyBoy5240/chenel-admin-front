import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./locales/en/translation.json";
import frTranslations from "./locales/fr/translation.json";
import spaTranslations from "./locales/spa/translation.json";
import hatTranslations from "./locales/hat/translation.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    en: {
      translations: enTranslations,
    },
    fr: {
      translations: frTranslations,
    },
    spa: {
      translations: spaTranslations,
    },
    hat: {
      translations: hatTranslations,
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["en", "fr", "spa", "hat"];

export default i18n;
