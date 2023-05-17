"use client";
import { useState, Fragment } from "react";
import {
  ChevronRightIcon,
  ChevronUpDownIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { classNames, formatPrice } from "../utils";
import { SignInDialog } from "./Dialog";
import { Coin } from "../types/Coin";

export default function CoinRow({
  id,
  market_cap_rank,
  symbol,
  image,
  name,
  current_price,
  price_change_percentage_1h_in_currency = 0,
  price_change_percentage_24h_in_currency = 0,
  price_change_percentage_7d_in_currency = 0,
  market_cap,
  total_volume,
  high_24h,
  low_24h,
}: Coin) {
  return (
    <tr>
      <td
        scope="col"
        className="sticky left-0 z-20 px-7 sm:w-12 sm:px-6 bg-neutral-900 text-xs text-gray-300"
      >
        {market_cap_rank}
      </td>
      <td className="sticky z-20 text-sm lg:pl-4 lg:pr-3 left-14 lg:whitespace-nowrap sm:pl-0 bg-neutral-900">
        <Link href={`/en/coins/${id}`} className="inline-flex items-center">
          <div className="flex-shrink-0 h-11 w-11">
            <Image
              className="flex-shrink-0"
              height={44}
              width={44}
              src={image}
              alt={name}
            />
          </div>
          <div className="ml-2 lg:ml-4 lg:flex lg:items-center">
            <div className="font-medium hover:underline decoration-white">
              {name}
            </div>
            <div className="text-xs text-gray-300 lg:ml-2">
              {symbol.toLocaleUpperCase()}
            </div>
          </div>
        </Link>
      </td>
      <td className="px-3 py-5 text-sm whitespace-nowrap">
        <div>${formatPrice(current_price)}</div>
      </td>
      <td className="px-3 py-5 text-sm whitespace-nowrap">
        <span
          className={classNames(
            "inline-flex px-2 text-xs font-semibold leading-5  rounded-full",
            price_change_percentage_1h_in_currency > 0
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          )}
        >
          {price_change_percentage_1h_in_currency > 0 ? (
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
          {price_change_percentage_1h_in_currency?.toFixed(2)}%
        </span>
      </td>
      <td className="px-3 py-5 text-sm whitespace-nowrap">
        <span
          className={classNames(
            "inline-flex px-2 text-xs font-semibold leading-5  rounded-full",
            price_change_percentage_24h_in_currency > 0
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          )}
        >
          {price_change_percentage_24h_in_currency > 0 ? (
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
          {price_change_percentage_24h_in_currency?.toFixed(2)}%
        </span>
      </td>
      <td className="px-3 py-5 text-sm whitespace-nowrap">
        <span
          className={classNames(
            "inline-flex px-2 text-xs font-semibold leading-5  rounded-full",
            price_change_percentage_7d_in_currency > 0
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          )}
        >
          {price_change_percentage_7d_in_currency > 0 ? (
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
          {price_change_percentage_7d_in_currency?.toFixed(2)}%
        </span>
      </td>
      <td className="px-3 py-5 text-sm whitespace-nowrap">
        <div>${market_cap?.toLocaleString()}</div>
      </td>
    </tr>
  );
}
