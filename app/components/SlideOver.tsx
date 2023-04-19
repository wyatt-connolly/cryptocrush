"use client";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  EllipsisVerticalIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type SlideOverProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  name: string;
  content: string;
  volume_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  top_3_coins: string[];
};

export default function SlideOver({
  open,
  setOpen,
  name,
  content,
  volume_24h,
  market_cap,
  market_cap_change_24h,
  top_3_coins,
}: SlideOverProps) {
  return (
    <Transition.Root show={open} as={Fragment} appear={open}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0 " />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-screen max-w-2xl pointer-events-auto mt-14 lg:mt-0">
                  <div className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
                    <div className="px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center ml-3 h-7">
                          <button
                            type="button"
                            className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Main */}
                    <div className="divide-y divide-gray-200 ">
                      <div className="pb-6">
                        <div className="h-24 bg-indigo-700 sm:h-20 lg:h-28" />
                        <div className="flow-root px-4 -mt-12 lg:-mt-15 sm:-mt-8 sm:flex sm:items-end sm:px-6">
                          <div>
                            <div className="flex -m-1">
                              <div className="inline-flex overflow-hidden rounded-lg">
                                <div className="flex justify-center -space-x-2 overflow-hidden isolate">
                                  <Image
                                    className="relative z-20 inline-block bg-gray-200 rounded-full  "
                                    src={top_3_coins[0]}
                                    alt=""
                                    height={100}
                                    width={100}
                                  />
                                  <Image
                                    className="relative z-10 inline-block bg-gray-200 rounded-full "
                                    src={top_3_coins[1]}
                                    alt=""
                                    height={100}
                                    width={100}
                                  />
                                  <Image
                                    className="relative z-0 inline-block bg-gray-200 rounded-full"
                                    src={top_3_coins[2]}
                                    alt=""
                                    height={100}
                                    width={100}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 sm:ml-6 sm:flex-1">
                            <div>
                              <div className="flex items-center">
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                                  {name}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-5 sm:px-0 sm:py-0">
                        <dl className="space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200">
                          <div className="sm:flex sm:px-6 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                              Description
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                              <p>
                                {content
                                  ? content
                                  : "No description is available."}
                              </p>
                            </dd>
                          </div>
                          <div className="sm:flex sm:px-6 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                              Market Cap
                            </dt>

                            <dd className="flex items-center gap-2 mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                              <span> ${market_cap.toLocaleString()}</span>
                              <span
                                className={classNames(
                                  "inline-flex px-2 text-xs font-semibold leading-5  rounded-full",
                                  market_cap_change_24h > 0
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                                )}
                              >
                                {market_cap_change_24h > 0 ? (
                                  <ChevronUpIcon
                                    className="-ml-0.5 mr-1.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <ChevronDownIcon
                                    className="-ml-0.5 mr-1.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                                    aria-hidden="true"
                                  />
                                )}
                                {market_cap_change_24h?.toFixed(2)}%
                              </span>
                            </dd>
                          </div>
                          <div className="sm:flex sm:px-6 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                              Volume 24h
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                              <time dateTime="1982-06-23">
                                ${volume_24h.toLocaleString()}
                              </time>
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
