"use client";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import { useState, Dispatch, SetStateAction } from "react";
import { classNames } from "../lib/utils";

interface IPagination {
  currentPage: number | number[];
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
export default function Pagination({
  currentPage,
  setCurrentPage,
}: IPagination) {
  const paginationButtons = [];
  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => {
          setCurrentPage(i);
        }}
        className={classNames(
          "inline-flex items-center px-4 pt-4 text-sm font-medium text-white border-t-2 border-transparent hover:border-green-600 hover:text-green-300 focus:border-t-green-500 focus:text-green-600",
          currentPage === i &&
            "border-green-500 border-t-green-500 text-green-300 focus:outline-none focus:text-green-800 focus:border-green-700"
        )}
      >
        {i}
      </button>
    );
  }

  const scrollMarket = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="flex items-center justify-between px-4 mt-2 -mb-px border-t border-gray-200 sm:px-0">
      <div
        className="flex justify-center flex-1 w-0 -mt-px"
        onClick={scrollMarket}
      >
        {paginationButtons}
      </div>
    </nav>
  );
}
