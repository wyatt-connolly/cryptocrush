import React from "react";

export default function Container({ children, ...classNames }: any) {
  return (
    <div className="px-4 max-w-7xl sm:px-6 lg:px-8" {...classNames}>
      {children}
    </div>
  );
}
