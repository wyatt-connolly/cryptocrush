import React from "react";

export default function Header({ children }: { children: string }) {
  return (
    <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div className="min-w-0 flex-1">
        <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
          {children}
        </h1>
      </div>
      <div className="mt-4 flex sm:ml-4 sm:mt-0">
        <button
          type="button"
          className="sm:order-0 order-1 ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:ml-0"
        >
          Share
        </button>
        <button
          type="button"
          className="order-0 inline-flex items-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 sm:order-1 sm:ml-3"
        >
          Create
        </button>
      </div>
    </div>
  );
}
