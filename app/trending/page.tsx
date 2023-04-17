import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Stats from "../components/Stats";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ClockIcon,
  CheckBadgeIcon,
  BanknotesIcon,
  ReceiptRefundIcon,
  AcademicCapIcon,
  FireIcon,
} from "@heroicons/react/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import CoinRow from "../components/CoinRow";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

type Coin = {
  name: string;
  large: string;
  id: string;
  market_cap_rank: number;
};

type CoinProps = {
  item: Coin;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

async function getTrending() {
  const res = await fetch("https://api.coingecko.com/api/v3/search/trending");
  const coins = await res.json();
  return coins;
}
export default async function Page() {
  const coins = await getTrending();

  const mappedCoins = coins.coins.map((coin: CoinProps) => coin.item); // access the item property of each coin object
  const firstSix = mappedCoins.slice(0, 6); // get the first 6 coins

  return (
    <main className="py-10 lg:pl-72">
      <div className="px-4 sm:px-6 lg:px-8">
        <Header>CryptoCrush</Header>
        <section aria-labelledby="quick-links-title">
          <div className="px-4 mt-6 sm:px-6 lg:px-8">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Trending
            </h3>
            <div className="mt-6 overflow-hidden bg-gray-200 divide-y divide-gray-200 rounded-lg shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
              <h2 className="sr-only" id="quick-links-title">
                Quick links
              </h2>

              {firstSix.map((coin: Coin) => (
                <Link key={coin.name} href={`/coin/${coin.id}`}>
                  <div
                    className={classNames(
                      "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500 h-full hover:bg-gray-100"
                    )}
                  >
                    <div>
                      <span
                        className={classNames(
                          "inline-flex rounded-lg p-3 ring-4 ring-white bg-teal-50 text-teal-700"
                        )}
                      >
                        <Image
                          src={coin.large}
                          width={40}
                          height={40}
                          alt={coin.name}
                          className="rounded-full bg-teal-50"
                        />
                      </span>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-lg font-medium">
                        <a className="focus:outline-none">
                          {/* Extend touch target to entire panel */}
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {coin.name}
                        </a>
                      </h3>
                      <span className="text-xs text-gray-500 ">
                        Market Cap Rank: {coin.market_cap_rank}
                      </span>
                      <p className="mt-2 text-sm text-gray-500">
                        Doloribus dolores nostrum quia qui natus officia quod et
                        dolorem. Sit repellendus qui ut at blanditiis et quo et
                        molestiae.
                      </p>
                    </div>
                    <span
                      className="absolute text-gray-300 pointer-events-none right-6 top-6 group-hover:text-gray-400"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
