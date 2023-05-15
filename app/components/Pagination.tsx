import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import { useState, Dispatch, SetStateAction } from "react";
import { classNames } from "../utils";

interface IPagination {
  pageIndex: number | number[];
  setPageIndex: Dispatch<SetStateAction<number | number[]>>;
}
export default function Pagination({ pageIndex, setPageIndex }: IPagination) {
  const paginationButtons = [];

  const isFirstPage = Array.isArray(pageIndex)
    ? pageIndex[0] > 1
    : pageIndex > 1;
  const isLastPage = Array.isArray(pageIndex)
    ? pageIndex[pageIndex.length - 1] < 5
    : pageIndex < 5;

  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => {
          setPageIndex(i);
        }}
        className={classNames(
          "inline-flex items-center px-4 pt-4 text-sm font-medium  border-t-2 border-transparent hover:border-green-300 hover:text-green-300 focus:border-t-green-700 focus:text-green-700",
          Array.isArray(pageIndex)
            ? pageIndex.includes(i)
              ? "border-t-2 border-t-green-500 border-green-500 text-green-600"
              : ""
            : pageIndex === i
            ? "border-t-2 border-t-green-500 border-green-500 text-green-600"
            : ""
        )}
      >
        {i}
      </button>
    );
  }

  paginationButtons.unshift(
    <button
      key="prev"
      onClick={() => {
        setPageIndex((prevPageIndex) => {
          if (typeof prevPageIndex === "number") {
            return prevPageIndex - 1;
          } else if (Array.isArray(prevPageIndex)) {
            return prevPageIndex.map((page: number) => page - 1);
          }
          return prevPageIndex;
        });
      }}
      className={classNames(
        "inline-flex items-center px-4 pt-4 text-sm font-medium  border-t-2 border-transparent hover:border-green-700 hover:text-green-700 "
      )}
    >
      <ArrowLongLeftIcon className="w-5 h-5 mr-3 text-green-500" />
      Previous
    </button>
  );

  paginationButtons.push(
    <button
      key="next"
      onClick={() => {
        setPageIndex((prevPageIndex) => {
          if (typeof prevPageIndex === "number") {
            return prevPageIndex + 1;
          } else if (Array.isArray(prevPageIndex)) {
            return prevPageIndex.map((page: number) => page + 1);
          }
          return prevPageIndex;
        });
      }}
      className={classNames(
        "inline-flex items-center px-4 pt-4 text-sm font-medium  border-t-2 border-transparent hover:border-green-700 hover:text-green-700 focus:border-t-green-500 focus:text-green-600"
      )}
    >
      Next
      <ArrowLongRightIcon className="w-5 h-5 ml-3 text-green-500" />
    </button>
  );

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
