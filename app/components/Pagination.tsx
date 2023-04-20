"use client";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import { useState, Dispatch, SetStateAction } from "react";

interface IPagination {
  currentPage: number[] | null;
  setCurrentPage: Dispatch<SetStateAction<never[]>>;
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
        onClick={() => setCurrentPage(i)}
        className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:border-gray-300 hover:text-gray-700 focus:border-t-indigo-500 focus:text-indigo-600"
      >
        {i}
      </button>
    );
  }

  const scrollMarket = () => {
    window.scrollTo({
      top: window.pageYOffset - 800,
      behavior: "smooth",
    });
  };

  const scrollTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  return (
    <nav className="flex items-center justify-between px-4 mt-2 -mb-px border-t border-gray-200 sm:px-0">
      <div
        onClick={scrollMarket}
        className="flex flex-1 w-0 -mt-px justify-center"
      >
        {paginationButtons}
      </div>
    </nav>
  );
}
