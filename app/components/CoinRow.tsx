"use client";
import { useState, Fragment } from "react";
import {
  ChevronRightIcon,
  ChevronUpDownIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import Coin from "./Coin";
import { Dialog, Menu, Transition } from "@headlessui/react";
import SlideOver from "./SlideOver";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type CoinRowProps = {
  id: string;
  key: string;
  image: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  description: {
    en: string;
  };
  total_volume: number;
};
export default function CoinRow({
  id,
  key,
  image,
  name,
  current_price,
  price_change_percentage_24h,
  market_cap,
  description,
  total_volume,
}: CoinRowProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <tr key={key}>
        <td className="pl-4 pr-3 text-sm whitespace-nowrap sm:pl-0">
          <Link href={`/coin/${id}`} className="flex items-center">
            <div className="flex-shrink-0 h-11 w-11">
              <Image height={44} width={44} src={image} alt="" />
            </div>
            <div className="ml-4">
              <div className="font-medium text-gray-900">{name}</div>
            </div>
          </Link>
        </td>
        <td className="px-3 py-5 text-sm text-gray-500 whitespace-nowrap">
          <div className="text-gray-900">
            ${current_price?.toLocaleString()}
          </div>
        </td>
        <td className="px-3 py-5 text-sm text-gray-500 whitespace-nowrap">
          <span
            className={classNames(
              "inline-flex px-2 text-xs font-semibold leading-5  rounded-full",
              price_change_percentage_24h > 0
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            )}
          >
            {price_change_percentage_24h > 0 ? (
              <ChevronUpIcon
                className="-ml-0.5 mr-1.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                aria-hidden="true"
              />
            ) : (
              <ChevronDownIcon
                className="-ml-0.5 mr-1.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                aria-hidden="true"
              />
            )}
            {price_change_percentage_24h?.toFixed(2)}%
          </span>
        </td>
        <td className="px-3 py-5 text-sm text-gray-500 whitespace-nowrap">
          <div className="text-gray-900">${market_cap?.toLocaleString()}</div>
        </td>
        <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-0">
          <button
            onClick={() => {
              setOpen((open) => !open);
              setSelected({
                name,
                image,
                price_change_percentage_24h,
                id,
                market_cap,
                current_price,
                description,
                total_volume,
              });
            }}
            className="text-indigo-600 hover:text-indigo-900"
          >
            View<span className="sr-only">, {name}</span>
          </button>
        </td>
      </tr>
      {open && selected && (
        // return slideover and pass in name as prop
        <SlideOver open={open} setOpen={setOpen} {...selected} />
      )}
    </>
  );
}
