export function classNames(
  ...classes: (false | null | undefined | string)[]
): string {
  return classes.filter(Boolean).join(" ");
}

export async function fetcher(...args: Parameters<typeof fetch>): Promise<any> {
  const response = await fetch(...args);
  return response.json();
}

export function formatPrice(price: number) {
  let formattedPrice = "";
  if (price >= 1) {
    formattedPrice = price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  } else {
    const priceString = price.toString();
    let afterDecimal = priceString.split(".")[1];
    let significantDigits = 0;
    for (let i = 0; i < afterDecimal.length; i++) {
      if (afterDecimal[i] !== "0") {
        significantDigits = i + 2; // plus 2 to consider the case of e.g. 0.001
        break;
      }
    }
    formattedPrice = price.toLocaleString("en-US", {
      minimumFractionDigits: significantDigits,
      maximumFractionDigits: significantDigits,
    });
  }
  return formattedPrice;
}
