import { Fragment } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function Stats({ id, name, stat, icon, change, changeType }) {
  return (
    <>
      <div
        key={id}
        className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
      >
        <dt>
          <div className="absolute rounded-md bg-gray-200 p-2">
            <Image src={icon} height={34} width={34} />
          </div>
          <p className="ml-16 truncate text-sm font-medium text-gray-500">
            {name}
          </p>
        </dt>
        <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
          <p className="text-2xl font-semibold text-gray-900">{stat}</p>
          <p
            className={classNames(
              "ml-2 flex items-baseline text-sm font-semibold",
              (() => {
                switch (changeType) {
                  case "increase":
                    return "text-green-600";
                  case "decrease":
                    "text-red-600";
                  default:
                    return "";
                }
              })()
            )}
          >
            {(() => {
              switch (changeType) {
                case "increase":
                  return (
                    <ArrowUpIcon
                      className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                      aria-hidden="true"
                    />
                  );
                case "decrease":
                  <ArrowDownIcon
                    className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                    aria-hidden="true"
                  />;
                default:
                  return "";
              }
            })()}

            <span className="sr-only">
              {" "}
              {changeType === "increase" ? "Increased" : "Decreased"} by{" "}
            </span>
            {change}
          </p>
          <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-emerald-600 hover:text-emerald-500"
              >
                {" "}
                View<span className="sr-only"> {name} stats</span>
              </a>
            </div>
          </div>
        </dd>
      </div>
    </>
  );
}
