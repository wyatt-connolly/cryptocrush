"use client";
import {
  BarsArrowUpIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string | null>(
    search ? search.get("q") : ""
  );
  const router = useRouter();

  function onSearch(event: React.FormEvent) {
    event.preventDefault();

    if (typeof searchQuery !== "string") {
      return;
    }

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
  }
  return (
    <form onSubmit={onSearch} className="mt-3 sm:ml-4 sm:mt-0">
      <label htmlFor="mobile-search" className="sr-only">
        Search
      </label>
      <label htmlFor="desktop-search" className="sr-only">
        Search
      </label>
      <div className="flex rounded-md shadow-sm">
        <div className="relative flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </div>

          <input
            value={searchQuery || ""}
            onChange={(event) => setSearchQuery(event.target.value)}
            type="text"
            name="mobile-search"
            id="mobile-search"
            className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:hidden"
            placeholder="Search"
          />
          <input
            value={searchQuery || ""}
            onChange={(event) => setSearchQuery(event.target.value)}
            type="text"
            name="desktop-search"
            id="desktop-search"
            className="hidden w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-sm leading-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:block"
            placeholder="Search"
          />
        </div>
        <button
          type="button"
          className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <BarsArrowUpIcon
            className="-ml-0.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Sort
          <ChevronDownIcon
            className="w-5 h-5 -mr-1 text-gray-400"
            aria-hidden="true"
          />
        </button>
      </div>
    </form>
  );
}
