/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import "../style.css";

import i18next from "i18next";

import { API_URL, BASE_URL } from "./constants.js";
import { fetchData, formatPrice } from "./utils.js";
import { Card } from "./components/Card.js";

import { initializeTranslations, translate } from "./translations/index.js";

let locale = localStorage.getItem("prefered-locale") || "en";

initializeTranslations(locale);

localStorage.setItem("prefered-locale", locale);

const appNode = document.querySelector("#app");

window.handleChangeLocale = function (event) {
  locale = event.target.value;
  localStorage.setItem("prefered-locale", locale);
  i18next.changeLanguage(locale);
  // console.log(locale);
  window.location.reload();
};

function buildList(data) {
  const items = [];

  data.forEach((item) => {
    let imageUrl = `${BASE_URL}/${item.image}`;
    let localePrice = formatPrice(item.price, locale);
    const container = Card({
      image: imageUrl,
      name: item.name,
      price: localePrice,
    });

    items.push(container);
  });
  return items;
}

/* set locale select initial value as the locale  */
document.querySelector("#locale").value = locale;

fetchData(API_URL).then((responseJson) => {
  const items = buildList(responseJson.data);

  /* create the container that will have the list of items */
  const container = document.createElement("div");
  container.className = "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4";
  container.append(...items);

  appNode.append(container);
});

document.addEventListener("DOMContentLoaded", function (event) {
  //código a ejecutar cuando existe la certeza de que el DOM está listo para recibir acciones
  translate();
  console.log("Happy hacking :)");
});
