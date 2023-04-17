import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Stats from "../components/Stats";
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
import CoinRow from "../components/CoinRow";
import Pagination from "../components/Pagination";

const inter = Inter({ subsets: ["latin"] });

type Coin = {
  id: string;
  image: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
};

async function getCoins() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/nfts/list?order=market_cap_usd_desc&per_page=6"
  );
  const coins = await res.json();
  return coins;
}
export default async function Home() {
  const coins = await getCoins();
  return (
    <main className="py-10 lg:pl-72">
      <div className="px-4 sm:px-6 lg:px-8">
        <Header>CryptoCrush</Header>
        <div className="px-4 mt-6 sm:px-6 lg:px-8">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            NFT's
          </h3>
        </div>
      </div>
    </main>
  );
}
