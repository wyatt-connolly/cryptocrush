import React from "react";

export default function Header({ children }: { children: string }) {
  return (
    <div className="px-4 py-4 border-b border-gray-200 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div className="flex-1 min-w-0">
        <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
          {children}
        </h1>
      </div>
    </div>
  );
}
