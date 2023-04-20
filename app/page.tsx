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
import useSWR from "swr";
import Pagination from "./components/Pagination";
import { fetcher } from "./lib/utils";
import Container from "./components/Container";
import Loader from "./components/Loader";
import Error from "./components/Error";
import SlideOver from "./components/SlideOver";

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

type Category = {
  id: string;
  name: string;
  image: string;
  top_3_coins: string[];
  description: string;
};

function Categories() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const { data, error, isLoading } = useSWR(
    `https://api.coingecko.com/api/v3/coins/categories`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <Loader />;

  // return the first eight categories from the API response (data) to be displayed on the page
  const categories = data.slice(0, 8);

  return (
    <div id="categories">
      <Container>
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Top Categories
        </h3>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {categories.map((category: Category) => (
            <>
              <li
                key={category.id}
                className="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow"
              >
                <div className="flex flex-col flex-1 p-8">
                  <div className="flex justify-center -space-x-2 overflow-hidden isolate">
                    <Image
                      className="relative z-20 inline-block bg-gray-200 rounded-full ring-2 ring-white"
                      src={category.top_3_coins[0]}
                      alt=""
                      height={80}
                      width={80}
                    />
                    <Image
                      className="relative z-10 inline-block bg-gray-200 rounded-full ring-2 ring-white"
                      src={category.top_3_coins[1]}
                      alt=""
                      height={80}
                      width={80}
                    />
                    <Image
                      className="relative z-0 inline-block bg-gray-200 rounded-full ring-2 ring-white"
                      src={category.top_3_coins[2]}
                      alt=""
                      height={80}
                      width={80}
                    />
                  </div>
                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    {category.name}
                  </h3>
                </div>
                <div>
                  <div className="flex -mt-px divide-x divide-gray-200">
                    <div className="flex flex-1 w-0 -ml-px">
                      <button
                        onClick={() => {
                          setOpen((open) => !open);
                          setSelected(category);
                        }}
                        className="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-semibold text-gray-900 border border-transparent rounded-br-lg gap-x-3"
                      >
                        <ArrowRightIcon
                          className="w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </>
          ))}
        </ul>
        {open && selected && (
          <SlideOver open={open} setOpen={setOpen} {...selected} />
        )}
      </Container>
    </div>
  );
}

function Features() {
  const features = [
    { id: 1, name: "Market entry year", value: "2023" },
    { id: 2, name: "Registered users", value: "4M+" },
    { id: 3, name: "Uptime guarantee", value: "99.9%" },
    { id: 4, name: "Customers' funds lost", value: "0%" },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by investors worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">About Us</p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.id} className="flex flex-col bg-gray-400/5 p-8">
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
      <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://s2.coinmarketcap.com/static/cloud/img/newsletter_bg_light.svg?_=f6a1c7d"
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Award winning support
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Be the first to know about crypto news every day
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Get crypto analysis, news and updates right to your inbox! Sign up
            here so you don't miss a single newsletter.
          </p>
          <div className="mt-8">
            <a
              href="#"
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

export default function Home() {
  const [currentPage, setCurrentPage] = useState([]);
  const { data, error, isLoading } = useSWR(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false
    `,
    fetcher
  );
  if (error) return <Error />;
  if (isLoading) return <Loader />;

  return (
    <main className="-mt-32" id="market">
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
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
      <Categories />
      <Features />
      <Join />
    </main>
  );
}
