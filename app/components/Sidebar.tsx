"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  TagIcon,
  CircleStackIcon,
  DocumentDuplicateIcon,
  FireIcon,
  FolderIcon,
  SparklesIcon,
  TrophyIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const navigation = [
  { name: "Home", id: 1, href: "/", icon: CircleStackIcon, current: false },
  {
    name: "Categories",
    id: 2,
    href: "/categories",
    icon: TagIcon,
    current: false,
  },
  {
    name: "Trending",
    id: 3,
    href: "/trending",
    icon: FireIcon,
    current: false,
  },
  {
    name: "New Coins",
    id: 4,
    href: "/new-coins",
    icon: SparklesIcon,
    current: false,
  },

  {
    name: "NFT's (beta)",
    id: 5,
    href: "/nfts",
    icon: TrophyIcon,
    current: false,
  },
];
const company = [
  { id: 1, name: "About", href: "/about", initial: "A", current: false },
  {
    id: 2,
    name: "Contact",
    href: "/contact",
    initial: "C",
    current: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex flex-1 w-full max-w-xs mr-16">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 flex justify-center w-16 pt-5 left-full">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex flex-col px-6 pb-2 overflow-y-auto grow gap-y-5 bg-emerald-600">
                  <div className="flex items-center h-16 shrink-0">
                    <Image
                      height={32}
                      width={32}
                      src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                      alt="Your Company"
                    />
                  </div>
                  <nav className="flex flex-col flex-1">
                    <ul role="list" className="flex flex-col flex-1 gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <button
                                onClick={() => {
                                  router.push(item.href);
                                  setSidebarOpen(false);
                                }}
                                className={classNames(
                                  "w-full",
                                  item.current
                                    ? "bg-emerald-700 text-white"
                                    : "text-emerald-200 hover:text-white hover:bg-emerald-700",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    item.current
                                      ? "text-white"
                                      : "text-emerald-200 group-hover:text-white",
                                    "h-6 w-6 shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <div className="text-xs font-semibold leading-6 text-emerald-200">
                          CryptoCrush
                        </div>
                        <ul role="list" className="mt-2 -mx-2 space-y-1">
                          {company.map((team) => (
                            <li key={team.name}>
                              <a
                                href={team.href}
                                className={classNames(
                                  team.current
                                    ? "bg-emerald-700 text-white"
                                    : "text-emerald-200 hover:text-white hover:bg-emerald-700",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}
                              >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-emerald-400 bg-emerald-500 text-[0.625rem] font-medium text-white">
                                  {team.initial}
                                </span>
                                <span className="truncate">{team.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col px-6 overflow-y-auto grow gap-y-5 bg-emerald-600">
          <div className="flex items-center h-16 shrink-0">
            <Image
              height={32}
              width={32}
              src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
              alt="Your Company"
            />
          </div>
          <nav className="flex flex-col flex-1">
            <ul role="list" className="flex flex-col flex-1 gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => router.push(item.href)}
                        className={classNames(
                          "w-full",
                          item.current
                            ? "bg-emerald-700 text-white"
                            : "text-emerald-200 hover:text-white hover:bg-emerald-700",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-white"
                              : "text-emerald-200 group-hover:text-white",
                            "h-6 w-6 shrink-0"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="text-xs font-semibold leading-6 text-emerald-200">
                  CryptoCrush
                </div>
                <ul role="list" className="mt-2 -mx-2 space-y-1">
                  {company.map((team) => (
                    <li key={team.name}>
                      <a
                        href={team.href}
                        className={classNames(
                          team.current
                            ? "bg-emerald-700 text-white"
                            : "text-emerald-200 hover:text-white hover:bg-emerald-700",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )}
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-emerald-400 bg-emerald-500 text-[0.625rem] font-medium text-white">
                          {team.initial}
                        </span>
                        <span className="truncate">{team.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center px-4 py-4 shadow-sm gap-x-6 bg-emerald-600 sm:px-6 lg:hidden">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-emerald-200 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="w-6 h-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-white">
          CryptoCrush
        </div>
      </div>
    </>
  );
}
