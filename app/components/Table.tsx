import React from "react";

export default function Table({ children }: { children: React.ReactNode }) {
  return (
    <table className="min-w-full divide-y table-fixed divide-neutral-600">
      <thead>
        <tr>
          <th
            scope="col"
            className="sticky top-0 left-0 z-30 text-sm font-semibold text-left text-white bg-opacity-75 px-7 sm:w-12 sm:px-6 bg-neutral-900 backdrop-blur backdrop-filter"
          >
            #
          </th>
          <th
            scope="col"
            className="sticky top-0 left-12 lg:left-0 z-30 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0 bg-neutral-900 bg-opacity-75  backdrop-blur backdrop-filter "
          >
            Coin
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 px-3 py-3.5 text-left text-sm font-semibold text-white bg-neutral-900 bg-opacity-75  backdrop-blur backdrop-filter"
          >
            Price
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 px-3 py-3.5 text-left text-sm font-semibold text-white bg-neutral-900 bg-opacity-75  backdrop-blur backdrop-filter"
          >
            1hr
          </th>

          <th
            scope="col"
            className="sticky top-0 z-10 px-3 py-3.5 text-left text-sm font-semibold text-white bg-neutral-900 bg-opacity-75  backdrop-blur backdrop-filter"
          >
            24hr
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 px-3 py-3.5 text-left text-sm font-semibold text-white bg-neutral-900 bg-opacity-75  backdrop-blur backdrop-filter"
          >
            7d
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 px-3 py-3.5 text-left text-sm font-semibold text-white bg-neutral-900 bg-opacity-75  backdrop-blur backdrop-filter"
          >
            Market Cap
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-neutral-600">{children}</tbody>
    </table>
  );
}
