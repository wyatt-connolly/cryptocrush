"use client";
import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

import Stats from "../components/Stats";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ArrowRightIcon,
} from "@heroicons/react/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import CoinRow from "../components/CoinRow";
import Pagination from "../components/Pagination";
import Container from "../components/Container";
import useSWR from "swr";
import { fetcher } from "../lib/utils";
import { classNames } from "../lib/utils";
import SlideOver from "../components/SlideOver";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const { data, error, isLoading } = useSWR(
    `https://api.coingecko.com/api/v3/nfts/list?order=h24_volume_native_desc&per_page=12&page=1`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <main className="py-10 lg:pl-72">
      <div className="px-4 sm:px-6 lg:px-8">
        <Container className="px-4 mt-6 sm:px-6 lg:px-8">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            NFT's
          </h3>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {data.map((item) => (
              <>
                <li
                  key={item.id}
                  className="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow"
                >
                  <div className="flex flex-col flex-1 p-8">
                    <h3 className="mt-6 text-sm font-medium text-gray-900">
                      {item.name}
                    </h3>
                  </div>
                  <div>
                    <div className="flex -mt-px divide-x divide-gray-200">
                      <div className="flex flex-1 w-0 -ml-px">
                        <button
                          onClick={() => {
                            setOpen((open) => !open);
                            setSelected(item);
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
    </main>
  );
}
