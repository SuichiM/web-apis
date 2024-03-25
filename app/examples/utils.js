export async function fetchData(URL) {
  return window.fetch(URL).then((response) => response.json());
}

export function formatPrice(price, locale) {
  const newPrice = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
  }).format(price);

  return newPrice;
}
