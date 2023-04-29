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
import { Dialog, Menu, Transition } from "@headlessui/react";
import { classNames } from "../lib/utils";
import { useRouter } from "next/navigation";

type CoinRowProps = {
  id: string;
  symbol: string;
  image: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
};
export default function CoinRow({
  id,
  symbol,
  image,
  name,
  current_price,
  price_change_percentage_24h,
  market_cap,
  total_volume,
  high_24h,
  low_24h,
}: CoinRowProps) {
  const router = useRouter();

  return (
    <>
      <tr>
        <td className="pl-4 pr-3 text-sm whitespace-nowrap sm:pl-0">
          <Link href={`/en/coins/${id}`} className="flex items-center">
            <div className="flex-shrink-0 h-11 w-11">
              <Image height={44} width={44} src={image} alt="" />
            </div>
            <div className="ml-4">
              <div className="font-medium hover:underline decoration-white">
                {name}
              </div>
            </div>
          </Link>
        </td>
        <td className="px-3 py-5 text-sm  whitespace-nowrap">
          <div>${current_price?.toLocaleString()}</div>
        </td>
        <td className="px-3 py-5 text-sm  whitespace-nowrap">
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
        <td className="px-3 py-5 text-sm  whitespace-nowrap">
          <div>${market_cap?.toLocaleString()}</div>
        </td>
        <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-0">
          <button
            onClick={() => {
              router.push(`/en/coins/${id}`);
            }}
          >
            Details<span className="sr-only">, {name}</span>
          </button>
        </td>
      </tr>
    </>
  );
}
