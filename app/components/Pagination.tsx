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
  const scrollMarket = () => {
    window.scrollTo({
      top: window.pageYOffset - 800,
      behavior: "smooth",
    });
  };

  const paginationButtons = [];
  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => {
          setCurrentPage(i);
          scrollMarket();
        }}
        className={classNames(
          "inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:border-gray-300 hover:text-gray-700 focus:border-t-indigo-500 focus:text-indigo-600",
          currentPage === i &&
            "border-indigo-500 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700"
        )}
      >
        {i}
      </button>
    );
  }

  return (
    <nav className="flex items-center justify-between px-4 mt-2 -mb-px border-t border-gray-200 sm:px-0">
      <div className="flex justify-center flex-1 w-0 -mt-px">
        {paginationButtons}
      </div>
    </nav>
  );
}
