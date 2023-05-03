export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default fetcher;
