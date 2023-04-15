import React from "react";
import {
  ChevronRightIcon,
  ChevronUpDownIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

const coins = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    current_price: 30330,
    price_change_percentage_24h: -0.48149,
    market_cap: 586792597581,
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    current_price: 2096.05,
    price_change_percentage_24h: 0.00041934,
    market_cap: 81039937198,
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
  },
  {
    id: "tether",
    name: "Tether",
    current_price: 1.002,
    price_change_percentage_24h: 0.04188,
    market_cap: 81039937198,
    image:
      "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
  },
  {
    id: "binancecoin",
    name: "BNB",
    current_price: 333.11,
    price_change_percentage_24h: 1.2957,
    market_cap: 52575285824,
    image:
      "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
  },
  {
    id: "usd-coin",
    name: "USD Coin",
    current_price: 1,
    price_change_percentage_24h: -0.00425,
    market_cap: 31847805677,
    image:
      "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389",
  },
  {
    id: "ripple",
    name: "XRP",
    current_price: 0.520534,
    price_change_percentage_24h: -1.14813,
    market_cap: 26937327076,
    image:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
  },

  // More coins...
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CoinTable() {
  return (
    <>
      <div className="mt-10 px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
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
                <tbody className="divide-y divide-gray-200 bg-white">
                  {coins.map((coin) => (
                    <tr key={coin.email}>
                      <td className="whitespace-nowrap pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                          <div className="h-11 w-11 flex-shrink-0">
                            <img
                              className="h-11 w-11 rounded-full"
                              src={coin.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {coin.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">
                          {coin.current_price}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          {coin.price_change_percentage_24h}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        {coin.market_cap}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
