"use client";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import SelectMenu from "../components/SelectMenu";
import Header from "../components/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import SlideOver from "./SlideOver";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Categories({ data }) {
  const [open, setOpen] = useState(false);

  // return only the first 8 categories from the API  response  (data)  to  be  displayed  on  the  page
  data = data.slice(0, 8);
  return (
    <main className="py-10 lg:pl-72">
      <div className="px-4 sm:px-6 lg:px-8">
        <Header>CryptoCrush</Header>
        <div className="mt-6 ">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Categories
          </h3>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {data.map((category) => (
              <>
                {" "}
                <li
                  key={category.id}
                  className="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow"
                >
                  <div className="flex flex-col flex-1 p-8">
                    <div className="flex justify-center -space-x-2 overflow-hidden isolate">
                      <img
                        className="relative z-30 inline-block w-20 h-20 bg-gray-200 rounded-full ring-2 ring-white"
                        src={category.top_3_coins[0]}
                        alt=""
                      />
                      <img
                        className="relative z-10 inline-block w-20 h-20 bg-gray-200 rounded-full ring-2 ring-white"
                        src={category.top_3_coins[1]}
                        alt=""
                      />
                      <img
                        className="relative z-0 inline-block w-20 h-20 bg-gray-200 rounded-full ring-2 ring-white"
                        src={category.top_3_coins[2]}
                        alt=""
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
                          onClick={() => setOpen(!open)}
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
                {open && (
                  <SlideOver setOpen={setOpen} open={open} {...category} />
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
