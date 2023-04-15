import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Stats from "./components/Stats";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import CoinTable from "./components/CoinTable";

const inter = Inter({ subsets: ["latin"] });

const stats = [
  {
    id: 1,
    name: "Bitcoin",
    stat: "$30,250",
    icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    change: "12%",
    changeType: "increase",
  },
  {
    id: 2,
    name: "Ethereum",
    stat: "$2,019",
    icon: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    change: "5.4%",
    changeType: "increase",
  },
  {
    id: 3,
    name: "Tether",
    stat: "$1.00",
    icon: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
    change: "0%",
    changeType: "decrease",
  },
];

export default function Home() {
  return (
    <main className="py-10 lg:pl-72">
      <div className="px-4 sm:px-6 lg:px-8">
        <Header>Home</Header>
        <div className="mt-6 px-4 sm:px-6 lg:px-8">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Today&apos;s Cryptocurrency Prices
          </h3>

          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((item) => (
              <Stats {...item} />
            ))}
          </dl>
        </div>
        <CoinTable />
      </div>
    </main>
  );
}
