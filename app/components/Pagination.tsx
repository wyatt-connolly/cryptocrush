import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
export default function Pagination() {
  return (
    <nav className="flex items-center justify-between px-4 mt-2 -mb-px border-t border-gray-200 sm:px-0">
      <div className="flex flex-1 w-0 -mt-px">
        <a
          href="#"
          className="inline-flex items-center pt-4 pr-1 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:border-gray-300 hover:text-gray-700"
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
          className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:border-gray-300 hover:text-gray-700"
        >
          1
        </a>
        {/* Current: "border-emerald-500 text-emerald-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
        <a
          href="#"
          className="inline-flex items-center px-4 pt-4 text-sm font-medium border-t-2 text-emerald-600 border-emerald-500"
          aria-current="page"
        >
          2
        </a>
        <a
          href="#"
          className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:border-gray-300 hover:text-gray-700"
        >
          3
        </a>
        <span className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent">
          ...
        </span>
        <a
          href="#"
          className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:border-gray-300 hover:text-gray-700"
        >
          8
        </a>
        <a
          href="#"
          className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:border-gray-300 hover:text-gray-700"
        >
          9
        </a>
        <a
          href="#"
          className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:border-gray-300 hover:text-gray-700"
        >
          10
        </a>
      </div>
      <div className="flex justify-end flex-1 w-0 -mt-px">
        <a
          href="#"
          className="inline-flex items-center pt-4 pl-1 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:border-gray-300 hover:text-gray-700"
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
