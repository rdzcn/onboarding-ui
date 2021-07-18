import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const initI18n = (texts) =>
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        de: {
          translation: {
            ...texts,
          },
        },
      },
      defaultNS: "translation",
      lng: "de",
      fallbackLng: false,
    });

export default initI18n;
