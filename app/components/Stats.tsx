import { Fragment } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type StatsProps = {
  id: string;
  name: string;
  current_price: number;
  image: string;
  price_change_percentage_24h: number;
};

export default function Stats({
  id,
  name,
  current_price,
  image,
  price_change_percentage_24h,
}: StatsProps) {
  // check if price_change_percentage_24h is positive or negative
  const changeType = price_change_percentage_24h > 0 ? "increase" : "decrease";

  return (
    <>
      <div
        key={id}
        className="relative px-4 pt-5 pb-12 overflow-hidden bg-white rounded-lg shadow sm:px-6 sm:pt-6"
      >
        <dt>
          <div className="absolute p-2 rounded-md bg-zinc-100">
            <Image src={image} height={34} width={34} alt=" " />
          </div>
          <p className="ml-16 text-sm font-medium text-gray-500 truncate">
            {name}
          </p>
        </dt>
        <dd className="flex items-baseline pb-6 ml-16 sm:pb-7">
          <p className="text-2xl font-semibold text-gray-900">
            ${current_price.toLocaleString()}
          </p>
          <p
            className={classNames(
              "ml-2 flex items-baseline text-sm font-semibold",
              changeType === "increase" ? "text-green-600" : "text-red-600"
            )}
          >
            {changeType === "increase" ? (
              <ArrowUpIcon
                className="-ml-0.5 mr-1.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                aria-hidden="true"
              />
            ) : (
              <ArrowDownIcon
                className="-ml-0.5 mr-1.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                aria-hidden="true"
              />
            )}
            <span className="sr-only">
              {changeType === "increase" ? "Increased" : "Decreased"} by{" "}
            </span>
            {price_change_percentage_24h.toFixed(2)}%
          </p>
          <div className="absolute inset-x-0 bottom-0 px-4 py-4 bg-gray-50 sm:px-6">
            <div className="text-sm">
              <Link
                href="/coin/bitcoin"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {" "}
                View<span className="sr-only"> {name} stats</span>
              </Link>
            </div>
          </div>
        </dd>
      </div>
    </>
  );
}
