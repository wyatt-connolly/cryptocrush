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

export function formatChartPrice(value: number): string {
  let formattedValue = "";

  if (value < 1) {
    const roundedValue = Math.round(value * 100) / 100;
    formattedValue = roundedValue.toFixed(2);
  } else {
    formattedValue = value.toFixed(2);
  }

  // Add commas to values above $1
  formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return formattedValue;
}
