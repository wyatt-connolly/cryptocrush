"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { classNames } from "../lib/utils";
import Link from "next/link";

const navigation = [
  {
    name: "Market",
    id: 1,
    href: "#market",
  },
  {
    name: "Categories",
    id: 2,
    href: "#categories",
  },
  {
    name: "About",
    id: 3,
    href: "#about",
  },

  {
    name: "Join Us",
    id: 4,
    href: "#join-us",
  },
];

export default function Navigation({ children }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="min-h-full">
        <div className="pb-32 bg-indigo-600">
          <Disclosure
            as="nav"
            className="bg-indigo-600 border-b border-indigo-300 border-opacity-25 lg:border-none"
          >
            {({ open }) => (
              <>
                <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
                  <div className="relative flex items-center justify-between h-16 lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                    <div className="flex items-center px-2 lg:px-0">
                      <div className="flex-shrink-0">
                        <Link href="/">
                          <Image
                            height={32}
                            width={32}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/640px-Bitcoin.svg.png"
                            alt="CryptoCrush"
                          />
                        </Link>
                      </div>
                      <div className="hidden lg:ml-10 lg:block">
                        <div className="flex space-x-4">
                          {navigation.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-indigo-500 hover:bg-opacity-75"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex lg:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center p-2 text-indigo-200 bg-indigo-600 rounded-md hover:bg-indigo-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block w-6 h-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block w-6 h-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="lg:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as={Link}
                        href={item.href}
                        className={classNames(
                          "bg-indigo-600 text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium"
                        )}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className="py-10">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                CryptoCrush
              </h1>
            </div>
          </header>
        </div>
        {children}
      </div>
    </>
  );
}
