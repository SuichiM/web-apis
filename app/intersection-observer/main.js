import "../style.css";

const IMG_ALT = "cute foxxy";

import { ImageCard, ImagesContainer } from "./components/ImageCard.js";

import {
  appendImageToContainer,
  fetchRandomFoxyImageUrl,
  observeImage,
} from "./utils/index.js";

/* MAIN */
const app = document.getElementById("app");

/* create the image container and append to the app*/
const imagesList = ImagesContainer();
app.appendChild(imagesList);

const addButton = document.querySelector("#add-button");

const handler = async () => {
  const foxImage = await fetchRandomFoxyImageUrl();

  const imageCard = ImageCard({ src: foxImage, alt: IMG_ALT });
  appendImageToContainer(imagesList, imageCard);
  observeImage(imageCard);
  // observe the image card
};

addButton.addEventListener("click", handler);
