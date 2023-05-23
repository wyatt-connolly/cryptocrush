"use client";

import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="grid min-h-full px-6 py-24 mt-32 place-items-center sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-gray-300">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Something went wrong!
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-300">
          Due to using a free API, the data is limited to 10-30 calls/minute.
          Please try again later. If using Safari, please switch to another
          browser.
        </p>
        <div className="flex items-center justify-center mt-10 gap-x-6"></div>
      </div>
    </div>
  );
}
