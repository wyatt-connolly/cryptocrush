"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  CogIcon,
  MagnifyingGlassCircleIcon,
  MapIcon,
  MegaphoneIcon,
  SquaresPlusIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronLeftIcon,
  EnvelopeIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  LinkIcon,
  HomeIcon,
} from "@heroicons/react/20/solid";
import { classNames } from "@/app/lib/utils";
import Container from "@/app/components/Container";
import Link from "next/link";
import { useParams } from "next/navigation";
import useSWR from "swr";
import fetcher from "@/app/lib/utils";
import Error from "./error";
import Loader from "@/app/components/Loader";
import Image from "next/image";

export default function Page() {
  const params = useParams();
  const { data, error, isLoading } = useSWR(
    `https://api.coingecko.com/api/v3/coins/${params.id}/`,

    fetcher
  );
  if (error) return <Error />;
  if (isLoading) return <Loader />;

  const coin = {
    name: data.name,
    imageUrl: data.image.large,
    links: [data.links.homepage[0], data.links.blockchain_site[0]],
    about: data.description.en,
    fields: {
      Symbol: data.symbol.toUpperCase(),
      Hashing: data.hashing_algorithm || "N/A",
      Categories: data.categories.join(", "),
      // convert genesis date to readable format
      Genesis:
        new Date(data.genesis_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }) || "N/A",
      Rank: `#${data.market_cap_rank}`,
      "All Time High": `$${data.market_data.ath.usd.toLocaleString()}`,
      Price: `$${data.market_data.current_price.usd.toLocaleString()}`,
      "All Time Low": `$${data.market_data.atl.usd.toLocaleString()}`,
    },
  };

  return (
    <>
      <div className="relative z-0 flex flex-1 overflow-hidden">
        <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
          <article>
            {/* Coin header */}
            <div>
              <Container>
                <div className="mt-12 sm:flex sm:items-end sm:space-x-5">
                  <div className="flex">
                    <Image
                      height={160}
                      width={160}
                      className="rounded-full ring-4 ring-white"
                      src={coin.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                    <div className="flex-1 min-w-0 mt-6 sm:hidden 2xl:block">
                      <h1 className="text-2xl font-bold text-gray-900 truncate">
                        {coin.name}
                      </h1>
                    </div>
                    <div className="flex flex-col mt-6 space-y-3 justify-stretch sm:flex-row sm:space-x-4 sm:space-y-0">
                      <a
                        href={coin.links[0]}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        <HomeIcon
                          className="-ml-0.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        Homepage
                      </a>
                      <a
                        href={coin.links[1]}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        <LinkIcon
                          className="-ml-0.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        Blockchain
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-1 hidden min-w-0 mt-6 sm:block 2xl:hidden">
                  <h1 className="text-2xl font-bold text-gray-900 truncate">
                    {coin.name}
                  </h1>
                </div>
              </Container>
            </div>

            {/* Description list */}
            <Container className="mt-6">
              <dl className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                {Object.keys(coin.fields).map((field) => (
                  <div key={field} className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      {field}
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {coin.fields[field]}
                    </dd>
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">About</dt>
                  <dd
                    className="mt-1 space-y-5 text-sm text-gray-900 max-w-prose"
                    dangerouslySetInnerHTML={{ __html: coin.about }}
                  />
                </div>
              </dl>
            </Container>
          </article>
        </main>
      </div>
    </>
  );
}
