export const ImageCard = ({ src, alt }) => {
  const IMG_CLASSES = ["rounded-lg", "animate-pulse", "min-h-72"];

  const CARD_CLASSES = [
    "w-full",
    "sm:w-1/2",
    "md:w-1/3",
    "lg:w-1/4",
    "mx-auto",
    "bg-gray-200",
  ];

  const card = document.createElement("div");
  card.classList.add(...CARD_CLASSES);

  const image = document.createElement("img");
  image.classList.add(...IMG_CLASSES);

  image.dataset.src = src;
  image.dataset.alt = alt;

  card.appendChild(image);

  return card;
};

export function ImagesContainer() {
  const IMAGE_LIST_CLASSES = ["flex-col", "space-y-4", "mt-4"];
  const imagesList = document.createElement("div");
  imagesList.classList.add(...IMAGE_LIST_CLASSES);

  return imagesList;
}
