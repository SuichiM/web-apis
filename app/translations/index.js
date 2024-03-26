import i18next from "i18next";

import en from "./en.json";
import es from "./es.json";

export const translations = {
  en,
  es,
};

function createLanguageSelect(node = "#app") {
  const selectLanguageHandler = function (event) {
    locale = event.target.value;
    localStorage.setItem("prefered-locale", locale);
    i18next.changeLanguage(locale);

    window.location.reload();
  };

  window.selectLanguageHandler = selectLanguageHandler;

  const rootNode = document.querySelector(node);
  const languageSelect = document.createElement("div");

  languageSelect.innerHTML = `
  <div class="absolute top-5 right-5 flex my-auto">
    <label for="locale" class="mr-2 hidden">Language</label>
    <select
      id="locale"
      class="select select-bordered"
      onchange="selectLanguageHandler(event)"
    >
      <option value="en">English</option>
      <option value="es">Spanish</option>
    </select>
  </div>
</div>`;
  rootNode.append(languageSelect);
}

const initializeTranslations = (locale) => {
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

function translate() {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = i18next.t(key);
  });
}

let locale = localStorage.getItem("prefered-locale") || "en";
localStorage.setItem("prefered-locale", locale);

createLanguageSelect();

initializeTranslations(locale);

/* set locale select initial value as the locale  */
document.querySelector("#locale").value = locale;

document.addEventListener("DOMContentLoaded", function (event) {
  //código a ejecutar cuando existe la certeza de que el DOM está listo para recibir acciones
  translate();
});
