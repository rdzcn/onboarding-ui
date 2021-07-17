import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationDE from "./locales/de/translation";
import translationEN from "./locales/en/translation";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      de: {
        translation: translationDE,
      },
      en: {
        translation: translationEN,
      },
    },
    defaultNS: "translation",
    lng: "en",
    fallbackLng: false,
  });

export default i18n;
