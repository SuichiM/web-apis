export function Card({ image, name, price }) {
  const CONTAINER_CLASSES =
    "flex flex-col items-center hover:shadow-lg p-4 rounded-lg shadow-m hover:bg-indigo-50";
  const IMG_CLASSES = "w-64 h-64 object-cover rounded-full";
  const TITLE_CLASSES = "text-2xl font-bold";
  const PRICE_CLASSES = "text-xl font-bold";

  const container = document.createElement("div");
  container.className = CONTAINER_CLASSES;

  const img = document.createElement("img");
  img.src = image;
  img.className = IMG_CLASSES;

  const title = document.createElement("h2");
  title.textContent = name;
  title.className = TITLE_CLASSES;

  const priceNode = document.createElement("p");
  priceNode.textContent = price;

  priceNode.className = PRICE_CLASSES;

  container.append(img, title, priceNode);
  return container;
}
