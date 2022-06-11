import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { setLocale } from "yup";
import en from "./en";
import vi from "./vi";
import yupLocale from "./yupLocale";

export const resources = {
  en: {
    translation: en,
  },

  vi: {
    translation: vi,
  },
};

setLocale(yupLocale);
i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources,
});
