"use client";
import { Fragment, useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { classNames } from "../lib/utils";
import SlideOver from "./SlideOver";

type StatsProps = {
  id: string;
  key: string;
  image: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
};

export default function Stats({
  id,
  key,
  image,
  name,
  current_price,
  price_change_percentage_24h,
  market_cap,
  total_volume,
  high_24h,
  low_24h,
}: StatsProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  // check if price_change_percentage_24h is positive or negative
  const changeType = price_change_percentage_24h > 0 ? "increase" : "decrease";
  function handleClick() {
    setOpen((open) => !open);
    setSelected({
      id,
      key,
      image,
      name,
      current_price,
      price_change_percentage_24h,
      market_cap,
      total_volume,
      high_24h,
      low_24h,
    });
  }

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
            ${current_price?.toLocaleString()}
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
            {price_change_percentage_24h?.toFixed(2)}%
          </p>
          <div className="absolute inset-x-0 bottom-0 px-4 py-4 bg-gray-50 sm:px-6">
            <div className="text-sm">
              <button
                onClick={handleClick}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                View<span className="sr-only"> {name} stats</span>
              </button>
            </div>
          </div>
        </dd>
      </div>
      {open && selected && (
        // return slideover and pass in name as prop
        <SlideOver open={open} setOpen={setOpen} {...selected} />
      )}
    </>
  );
}
