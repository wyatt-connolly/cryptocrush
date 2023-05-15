"use client";
import { Fragment, useState, useEffect } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";
import { classNames } from "../utils/index";
import { useTrending } from "../hooks/swr-hooks";
import { useSearch } from "../hooks/swr-search-hook";
import Loader from "./Loader";
import Error from "../error";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Coin } from "../types/Coin";

export default function Search() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");
  const { trendingData, trendingError, trendingIsLoading } = useTrending();
  const { searchData, searchError, searchIsLoading } = useSearch(query);
  const res = searchData?.coins || [];

  const filteredCoins =
    query === ""
      ? []
      : res.filter((coin: Coin) =>
          coin.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  // Clear the search query when the route changes
  useEffect(() => {
    setQuery("");
  }, [pathname, searchParams]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSelect = (coin: Coin) => {
    setSelected(coin);
    router.push(`/en/coins/${coin.id}`);
  };
  return (
    <Combobox value={selected} onChange={handleSelect}>
      <Combobox.Button className="w-full">
        <Combobox.Label className="sr-only">Search</Combobox.Label>
        <div className="relative text-gray-400 focus-within:text-gray-600">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon
              className="w-5 h-5 text-gray-500"
              aria-hidden="true"
            />
          </div>
          <Combobox.Input
            id="search"
            className="block w-full rounded-md border-0 bg-neutral-600 py-1.5 pl-10 pr-3 text-white focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Search"
            type="search"
            name="search"
            displayValue={(coin: Coin) => coin?.name}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute z-50 w-full py-1 mt-1 overflow-auto border rounded-sm shadow-lg border-neutral-600 bg-neutral-900 max-h-96 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {query === "" && (
              <div className="relative px-4 py-2 text-xs text-left text-white select-none border-neutral-600">
                <div>Trending Search 🔥</div>
                <div className="flex flex-wrap mt-2">
                  {trendingData?.coins.map((coin: Coin) => (
                    <Combobox.Option
                      key={coin.item.id}
                      value={coin}
                      className="flex items-center px-2 py-1 mb-2 mr-2 text-xs font-medium text-white rounded-md cursor-pointer bg-neutral-700"
                    >
                      <Image
                        src={coin.item.small}
                        alt=""
                        className="flex-shrink-0 rounded-full"
                        height={16}
                        width={16}
                      />
                      <span className="ml-1">{coin.item.name}</span>
                    </Combobox.Option>
                  ))}
                </div>
              </div>
            )}
            {filteredCoins.length > 0 &&
              filteredCoins.map((coin: Coin) => (
                <Combobox.Option key={coin.id} value={coin}>
                  <Combobox.Option
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-3 pr-9 ${
                        active ? "bg-neutral-700 text-white" : "text-white"
                      }`
                    }
                    value={coin}
                  >
                    {({ selected, active }) => (
                      <div className="flex items-center">
                        <Image
                          src={
                            coin.thumb === "missing_thumb.png"
                              ? "/missing_thumb.png"
                              : coin.thumb
                          }
                          alt=""
                          className="flex-shrink-0 rounded-full"
                          height={24}
                          width={24}
                        />
                        <span
                          className={`ml-3 truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {coin.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-neutral-200"
                            }`}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </div>
                    )}
                  </Combobox.Option>
                </Combobox.Option>
              ))}
            {filteredCoins.length === 0 && query !== "" && (
              <div className="relative px-4 py-2 text-white cursor-default select-none">
                Nothing found.
              </div>
            )}
          </Combobox.Options>
        </Transition>
      </Combobox.Button>
    </Combobox>
  );
}
