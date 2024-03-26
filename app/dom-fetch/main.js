/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import "../style.css";
import "@translations";

import { API_URL, BASE_URL } from "./constants.js";
import { fetchData, formatPrice } from "./utils.js";
import { Card } from "./components/Card.js";

let locale = localStorage.getItem("prefered-locale") || "en";

const appNode = document.querySelector("#app");

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

fetchData(API_URL).then((responseJson) => {
  const items = buildList(responseJson.data);

  /* create the container that will have the list of items */
  const container = document.createElement("div");
  container.className = "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4";
  container.append(...items);

  appNode.append(container);
});
