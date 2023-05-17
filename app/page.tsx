"use client";
import { useState } from "react";
import Image from "next/image";
import Trending from "./components/Trending";
import Table from "./components/Table";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ArrowRightIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import CoinRow from "./components/CoinRow";
import useSWR from "swr";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";
import Error from "./error";
import { fetcher } from "../app/utils/index";
import {
  useMarket,
  useTrending,
  useBitcoinPrice,
} from "../app/hooks/swr-hooks";
import { Coin } from "./types/Coin";

export function About() {
  const features = [
    { id: 1, name: "Market entry year", value: "2023" },
    { id: 2, name: "Registered users", value: "4M+" },
    { id: 3, name: "Uptime guarantee", value: "99.9%" },
    { id: 4, name: "Customers' funds lost", value: "0%" },
  ];

  return (
    <div id="about" className="py-24 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by investors worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">About Us</p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col p-8 bg-neutral-800"
              >
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  {feature.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {feature.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export function Join() {
  return (
    <div id="join-us" className="relative mt-20 bg-neutral-800 ">
      <div className="relative overflow-hidden h-80 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <div className="relative w-full h-full">
          <Image
            className="object-cover"
            src="https://s2.coinmarketcap.com/static/cloud/img/newsletter_bg_light.svg?_=f6a1c7d"
            alt=""
            fill
          />
        </div>
      </div>
      <div className="relative py-24 mx-auto max-w-7xl sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="text-base font-semibold leading-7 text-green-400">
            Award winning support
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Be the first to know about crypto news every day
          </p>
          <p className="mt-6 text-base leading-7 text-gray-300">
            Get crypto analysis, news and updates right to your inbox! Sign up
            here so you don&#39;t miss a single newsletter.
          </p>
          <div className="mt-8">
            <a
              href="https://www.coingecko.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const { marketData, marketError, marketIsLoading } = useMarket(pageIndex);
  const { trendingData, trendingError, trendingIsLoading } = useTrending();
  const { bitcoinPriceData, bitcoinPriceError, bitcoinPriceIsLoading } =
    useBitcoinPrice();

  if (marketIsLoading) return <Loader />;
  if (trendingIsLoading) return <Loader />;
  if (bitcoinPriceIsLoading) return <Loader />;
  if (marketError) return <Error error={marketError} />;
  if (trendingError) return <Error error={trendingError} />;
  if (bitcoinPriceError) return <Error error={bitcoinPriceError} />;

  // access bitcoinData and return the price
  const bitcoinPrice = bitcoinPriceData.bitcoin.usd;

  // access trendingData and the first five coins
  const trending = trendingData.coins.slice(0, 5);

  return (
    <main className="-mt-32" id="cryptocurrencies">
      <div className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h3 className="text-base font-semibold leading-6 text-white">
          Cryptocurrency Prices by Market Cap
        </h3>

        <div className="flow-root mt-8">
          <div className="-mx-4 -my-2 overflow-x-auto lg:overflow-x-visible sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 ">
              <Table>
                {marketData.map((item: Coin) => (
                  <CoinRow key={item.id} {...item} />
                ))}
              </Table>
            </div>
          </div>
        </div>
        <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} />
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <h3 className="text-base font-semibold leading-6 text-white">
          Trending Coins
        </h3>
        <dl className="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-5">
          {trending.map(({ item }: { item: Coin }) => (
            <Trending
              {...item}
              key={item.id}
              price_btc={item.price_btc ? item.price_btc * bitcoinPrice : 0} // If item.price_btc is undefined, use 0 as a fallback
            />
          ))}
        </dl>
      </div>
      <About />
      <Join />
    </main>
  );
}
