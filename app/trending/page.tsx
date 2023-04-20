"use client";
import { useState } from "react";
import Image from "next/image";

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
  ArrowUpRightIcon,
} from "@heroicons/react/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import CoinRow from "../components/CoinRow";
import Link from "next/link";
import useSWR from "swr";
import SlideOver from "../components/SlideOver";
import { classNames } from "../lib/utils";
import { fetcher } from "../lib/utils";
import Container from "../components/Container";

type Coin = {
  name: string;
  large: string;
  id: string;
  market_cap_rank: number;
};

type CoinProps = {
  item: Coin;
};

export default function Page() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const { data, error, isLoading } = useSWR(
    "https://api.coingecko.com/api/v3/search/trending",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const mappedCoins = data.coins.map((coin: CoinProps) => coin.item); // access the item property of each coin object
  const firstSix = mappedCoins.slice(0, 6); // get the first 6 coins

  return (
    <main className="py-10 lg:pl-72">
      <div className="px-4 sm:px-6 lg:px-8">
        <section aria-labelledby="quick-links-title">
          <Container>
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Trending
            </h3>
            <div className="mt-6 overflow-hidden bg-gray-200 divide-y divide-gray-200 rounded-lg shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
              <h2 className="sr-only" id="quick-links-title">
                Quick links
              </h2>

              {firstSix.map((item: Coin) => (
                <div
                  key={item.id}
                  className={classNames(
                    "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500 h-full hover:bg-gray-100 cursor-pointer"
                  )}
                  onClick={() => {
                    setOpen(true);
                    setSelected(item);
                  }} // set the selected coin to the coin that was clicked}})}
                >
                  <div>
                    <span
                      className={classNames(
                        "inline-flex rounded-lg p-3 ring-4 ring-white bg-teal-50 text-teal-700"
                      )}
                    >
                      <Image
                        src={item.large}
                        width={40}
                        height={40}
                        alt={item.name}
                        className="rounded-full bg-teal-50"
                      />
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium">
                      <a className="focus:outline-none">
                        {/* Extend touch target to entire panel */}
                        <span className="absolute inset-0" aria-hidden="true" />
                        {item.name}
                      </a>
                    </h3>
                    <span className="text-xs text-gray-500 ">
                      Market Cap Rank: {item.market_cap_rank}
                    </span>
                  </div>
                  <ArrowUpRightIcon className="w-8 h-8 absolute text-gray-300 pointer-events-none right-6 top-6 group-hover:text-gray-400" />
                </div>
              ))}
            </div>
          </Container>
        </section>
      </div>
      {open && selected && (
        <SlideOver open={open} setOpen={setOpen} {...selected} />
      )}
    </main>
  );
}
