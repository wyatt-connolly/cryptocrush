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
    formattedPrice = parseFloat(price.toFixed(8)).toString();
  }
  return formattedPrice;
}
