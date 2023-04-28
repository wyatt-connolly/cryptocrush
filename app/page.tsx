"use client";
import { useState } from "react";
import Image from "next/image";
import Stats from "./components/Stats";
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
import useSWR, { mutate } from "swr";
import Pagination from "./components/Pagination";
import Container from "./components/Container";
import Loader from "./components/Loader";
import Error from "./error";
import fetcher from "./lib/utils";

function About() {
  const features = [
    { id: 1, name: "Market entry year", value: "2023" },
    { id: 2, name: "Registered users", value: "4M+" },
    { id: 3, name: "Uptime guarantee", value: "99.9%" },
    { id: 4, name: "Customers' funds lost", value: "0%" },
  ];

  return (
    <div id="about" className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by investors worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">About Us</p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.id} className="flex flex-col p-8 bg-gray-400/5">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {feature.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
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

function Join() {
  return (
    <div id="join-us" className="relative mt-20">
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
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Award winning support
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Be the first to know about crypto news every day
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Get crypto analysis, news and updates right to your inbox! Sign up
            here so you don&#39;t miss a single newsletter.
          </p>
          <div className="mt-8">
            <a
              href="https://www.coingecko.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

type Coin = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_percentage_24h: number;
};

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading } = useSWR(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${currentPage}&sparkline=false/
    `,
    fetcher
  );

  if (error) return <Error error={error} />;
  if (isLoading) return <Loader />;

  return (
    <main className="-mt-32" id="market">
      <div className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h3 className="text-base font-semibold leading-6 text-white">
          Today&apos;s Cryptocurrency Prices
        </h3>

        <dl className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2 xl:grid-cols-3">
          <Stats {...data[0]} />
          <Stats {...data[1]} />
          <Stats {...data[2]} />
        </dl>

        <div className="flow-root mt-8">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 ">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Coin
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      24hr Change
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Market Cap
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((item: Coin) => (
                    <CoinRow key={item.id} {...item} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
      <About />
      <Join />
    </main>
  );
}
