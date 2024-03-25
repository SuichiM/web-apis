import i18next from "i18next";

import en from "./en.json";
import es from "./es.json";

export const translations = {
  en,
  es,
};

export const initializeTranslations = (locale) => {
  i18next.init({
    lng: locale, // idioma por defecto
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
      // otros idiomas...
    },
  });
};

export function translate() {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = i18next.t(key);
  });
}
