import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from "./en.json";
i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: enJson,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export const tranlate = (key: string, params: any = {}) => {
  return i18next.t(key, params).toString();
};

//Tranlator for Common
export const tC = (key: string) => i18next.t(`Common.${key}`).toString();
