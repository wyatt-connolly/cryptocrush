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
import { Dialog, Menu, Transition } from "@headlessui/react";
import { classNames } from "../utils";
import { useRouter } from "next/navigation";

type CoinRowProps = {
  id: string;
  market_cap_rank: number;
  symbol: string;
  image: string;
  name: string;
  current_price: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  market_cap: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
};
export default function CoinRow({
  id,
  market_cap_rank,
  symbol,
  image,
  name,
  current_price,
  price_change_percentage_1h_in_currency,
  price_change_percentage_24h_in_currency,
  price_change_percentage_7d_in_currency,
  market_cap,
  total_volume,
  high_24h,
  low_24h,
}: CoinRowProps) {
  const router = useRouter();

  return (
    <tbody className="divide-y divide-neutral-600">
      <tr>
        <td
          scope="col"
          className="sticky left-0 z-20 px-7 sm:w-12 sm:px-6 bg-neutral-900"
        >
          <input
            type="checkbox"
            className="absolute left-0 w-4 h-4 -mt-2 text-indigo-600 border-gray-300 rounded top-1/2 focus:ring-indigo-600"
          />
          <div className="text-xs text-gray-300">{market_cap_rank}</div>
        </td>
        <td className="sticky z-20 text-sm lg:pl-4 lg:pr-3 left-12 lg:whitespace-nowrap sm:pl-0 bg-neutral-900">
          <Link href={`/en/coins/${id}`} className="flex items-center">
            <div className="flex-shrink-0 h-11 w-11">
              <Image height={44} width={44} src={image} alt="" />
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
          <div>${current_price?.toLocaleString()}</div>
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
    </tbody>
  );
}
