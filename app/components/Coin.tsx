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
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronLeftIcon,
  EnvelopeIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  HomeIcon,
  LinkIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type CoinProps = {
  coin: {
    name: string;
    image: {
      large: string;
    };
    links: {
      homepage: string[];
      blockchain_site: string[];
    };
    market_cap_rank: number;
    market_data: {
      current_price: {
        usd: number;
      };
    };
    description: {
      en: string;
    };
  };
};

export default async function Coin({ coin }: CoinProps) {
  return (
    <div className=" lg:pl-72">
      <div>
        <div>
          <img
            className="object-cover w-full h-32 lg:h-48"
            src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt=""
          />
        </div>
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <img
                className="w-24 h-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                src={coin.image.large}
                alt=""
              />
            </div>
            <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="flex-1 min-w-0 mt-6 sm:hidden 2xl:block">
                <h1 className="text-2xl font-bold text-gray-900 truncate">
                  {coin.name}
                </h1>
              </div>
              <div className="flex flex-col mt-6 space-y-3 justify-stretch sm:flex-row sm:space-x-4 sm:space-y-0 ">
                <Link
                  href={coin.links.homepage[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <HomeIcon
                    className="-ml-0.5 h-5 w-5 text-gray-400 text-ellipsis overflow-hidden"
                    aria-hidden="true"
                  />
                  {coin.name}
                </Link>
                <Link
                  href={coin.links.blockchain_site[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 "
                >
                  <LinkIcon
                    className="-ml-0.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="overflow-hidden text-ellipsis sm:w-32">
                    {coin.links.blockchain_site[0]}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 hidden min-w-0 mt-6 sm:block 2xl:hidden">
            <h1 className="text-2xl font-bold text-gray-900 truncate">
              {coin.name}
            </h1>
          </div>
        </div>
      </div>

      {/* Description list */}
      <div className="max-w-5xl px-4 mx-auto mt-6 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Market Cap Rank
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              #{coin.market_cap_rank.toLocaleString()}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Price</dt>
            <dd className="mt-1 text-sm text-gray-900">
              ${coin.market_data.current_price.usd.toLocaleString()}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd
              className="mt-1 space-y-5 text-sm text-gray-900 max-w-prose"
              dangerouslySetInnerHTML={{ __html: coin.description.en }}
            />
          </div>
        </dl>
      </div>
    </div>
  );
}
