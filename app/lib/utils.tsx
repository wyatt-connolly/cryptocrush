export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const fetcher = (...args: any[]) =>
  fetch(...args).then((res) => res.json());
