"use client";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import { useState, Dispatch, SetStateAction } from "react";
import { classNames } from "@/lib/utils";

interface IPagination {
  pageIndex: number | number[];
  setPageIndex: Dispatch<SetStateAction<number>>;
}

export default function Pagination({ pageIndex, setPageIndex }: IPagination) {
  const scrollMarket = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="flex items-center justify-between px-4 border-t border-gray-200 sm:px-0">
      <div className="flex flex-1 w-0 -mt-px">
        <a
          href="#"
          className="inline-flex items-center pt-4 pr-1 text-sm font-medium text-white border-t-2 border-transparent hover:border-gray-300 hover:text-gray-200"
        >
          <ArrowLongLeftIcon
            className="w-5 h-5 mr-3 text-gray-400"
            aria-hidden="true"
          />
          Previous
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">
        <a
          href="#"
          className="inline-flex items-center px-4 pt-4 text-sm font-medium text-white border-t-2 border-transparent hover:border-gray-300 hover:text-gray-200"
        >
          1
        </a>
        {/* Current: "border-green-500 text-green-600", Default: "border-transparent text-white hover:text-gray-200 hover:border-gray-300" */}
        <a
          href="#"
          className="inline-flex items-center px-4 pt-4 text-sm font-medium text-white border-t-2 border-transparent"
          aria-current="page"
        >
          2
        </a>
        <a
          href="#"
          className="inline-flex items-center px-4 pt-4 text-sm font-medium text-white border-t-2 border-transparent hover:border-gray-300 hover:text-gray-200"
        >
          3
        </a>
        <span className="inline-flex items-center px-4 pt-4 text-sm font-medium text-white border-t-2 border-transparent">
          ...
        </span>
        <a
          href="#"
          className="inline-flex items-center px-4 pt-4 text-sm font-medium text-white border-t-2 border-transparent hover:border-gray-300 hover:text-gray-200"
        >
          8
        </a>
        <a
          href="#"
          className="inline-flex items-center px-4 pt-4 text-sm font-medium text-white border-t-2 border-transparent hover:border-gray-300 hover:text-gray-200"
        >
          9
        </a>
        <a
          href="#"
          className="inline-flex items-center px-4 pt-4 text-sm font-medium text-white border-t-2 border-transparent hover:border-gray-300 hover:text-gray-200"
        >
          10
        </a>
      </div>
      <div className="flex justify-end flex-1 w-0 -mt-px">
        <a
          href="#"
          className="inline-flex items-center pt-4 pl-1 text-sm font-medium text-white border-t-2 border-transparent hover:border-gray-300 hover:text-gray-200"
        >
          Next
          <ArrowLongRightIcon
            className="w-5 h-5 ml-3 text-gray-400"
            aria-hidden="true"
          />
        </a>
      </div>
    </nav>
  );
}
