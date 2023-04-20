"use client";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import SlideOver from "../components/SlideOver";
import Image from "next/image";
import useSWR from "swr";
import { Transition } from "@headlessui/react";
import { classNames } from "../lib/utils";
import { fetcher } from "../lib/utils";

type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
  top_3_coins: string[];
};

export default function Page() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  // return only the first 8 categories from the API  response  (data)  to  be  displayed  on  the  page

  const { data, error, isLoading } = useSWR(
    `https://api.coingecko.com/api/v3/coins/categories`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // return the first eight categories from the API response (data) to be displayed on the page
  const categories = data.slice(0, 8);

  return (
    <main className="py-10 lg:pl-72">
      <div className="px-4 sm:px-6 lg:px-8">
        <Header>CryptoCrush</Header>
        <div className="px-4 mt-6 sm:px-6 lg:px-8 ">
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
        </div>
      </div>
    </main>
  );
}
