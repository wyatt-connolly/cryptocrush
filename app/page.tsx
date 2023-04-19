"use client";

import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Stats from "./components/Stats";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import CoinRow from "./components/CoinRow";
import useSWR from "swr";

const inter = Inter({ subsets: ["latin"] });

type Coin = {
  id: string;
  image: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Home() {
  const [currentPage, setCurrentPage] = useState([]);
  const { data, error, isLoading } = useSWR(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false
    `,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const paginationButtons = [];
  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:border-gray-300 hover:text-gray-700"
      >
        {i}
      </button>
    );
  }

  const scrollMarket = () => {
    window.scrollTo({
      top: window.pageYOffset - 800,
      behavior: "smooth",
    });
  };

  const scrollTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };
  return (
    <main className="py-10 lg:pl-72">
      <div className="px-4 sm:px-6 lg:px-8">
        <Header>CryptoCrush</Header>
        <div className="px-4 mt-6 sm:px-6 lg:px-8">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Today&apos;s Cryptocurrency Prices
          </h3>

          <dl className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2 lg:grid-cols-3">
            <Stats {...data[0]} />
            <Stats {...data[1]} />
            <Stats {...data[2]} />
          </dl>
        </div>
        <div className="px-4 mt-10 sm:px-6 lg:px-8">
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
                <nav className="flex items-center justify-between px-4 mt-2 -mb-px border-t border-gray-200 sm:px-0">
                  <div
                    onClick={scrollMarket}
                    className="flex flex-1 w-0 -mt-px"
                  >
                    {paginationButtons}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
