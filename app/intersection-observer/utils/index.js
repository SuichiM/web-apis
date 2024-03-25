const FOX_IMAGE_URL = "https://randomfox.ca/floof/";

export const appendImageToContainer = (container, image) => {
  /* append the image card to the list */
  container.appendChild(image);
};

export const fetchRandomFoxyImageUrl = async () => {
  const response = await fetch(FOX_IMAGE_URL);
  const data = await response.json();
  const foxImage = data.image;
  return foxImage;
};

const isInViewPort = (entry) => entry.isIntersecting;

const loadImage = (element, observer) => {
  console.log("holo");
  const img = element.querySelector("img");
  img.src = img.dataset.src;
  img.alt = img.dataset.alt;

  /* remove the class pulse */
  img.classList.remove("animate-pulse");

  observer.unobserve(element);
};

const observer = new IntersectionObserver((entries, observer) => {
  entries
    .filter(isInViewPort)
    .forEach((entry) => loadImage(entry.target, observer));
});

export const observeImage = (image) => {
  observer.observe(image);
};
