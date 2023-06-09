"use client";
import { Fragment } from "react";
import { LinkIcon, HomeIcon } from "@heroicons/react/20/solid";
import { classNames } from "@/app/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "@/app/utils";
import Error from "@/app/error";
import Loader from "@/app/components/Loader";
import Image from "next/image";
import MarketChart from "@/app/components/MarketChart";
import { useCoin } from "@/app/hooks/swr-hooks";
import { Coin } from "@/app/types/Coin";

function Page() {
  const params = useParams();
  const { coinData, coinError, coinIsLoading } = useCoin(params.id);

  if (coinError) return <Error error={coinError} />;
  if (coinIsLoading) return <Loader />;

  const coin = {
    name: coinData.name,
    imageUrl: coinData.image.large,
    links: [coinData.links.homepage[0], coinData.links.blockchain_site[0]],
    about: coinData.description.en,
    fields: {
      Rank: `#${coinData.market_cap_rank}`,
      Symbol: coinData.symbol.toUpperCase(),
      Price: `$${(coinData.market_data.current_price.usd < 1
        ? Number(coinData.market_data.current_price.usd.toFixed(8))
        : Number(coinData.market_data.current_price.usd.toFixed(2))
      ).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 8,
      })}`,
      Hashing: coinData.hashing_algorithm || "N/A",
      "All Time High": `$${(coinData.market_data.ath.usd < 1
        ? Number(coinData.market_data.ath.usd.toFixed(8))
        : Number(coinData.market_data.ath.usd.toFixed(2))
      ).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 8,
      })}`,
      Categories: coinData.categories.join(", "),
      "All Time Low": `$${
        coinData.market_data.atl.usd < 1
          ? Number(coinData.market_data.atl.usd.toFixed(12)).toLocaleString(
              undefined,
              { minimumFractionDigits: 1, maximumFractionDigits: 12 }
            )
          : Number(coinData.market_data.atl.usd.toFixed(2)).toLocaleString()
      }`,

      Genesis:
        new Date(coinData.genesis_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }) || "N/A",
    },
  };

  return (
    <>
      <div className="relative z-0 flex flex-1 overflow-hidden">
        <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
          <article>
            {/* Coin header */}
            <div className="px-4 max-w-7xl sm:px-6 lg:px-">
              <div className="mt-12 sm:flex sm:items-end sm:space-x-5">
                <div className="flex">
                  <Image
                    height={160}
                    width={160}
                    className="bg-gray-200 rounded-full ring-4 ring-white"
                    src={coin.imageUrl}
                    alt={coin.name}
                  />
                </div>
                <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                  <div className="flex-1 min-w-0 mt-6 sm:hidden 2xl:block">
                    <h1 className="text-2xl font-bold truncate">{coin.name}</h1>
                  </div>
                  <div className="flex flex-col mt-6 space-y-3 justify-stretch sm:flex-row sm:space-x-4 sm:space-y-0">
                    <a
                      href={coin.links[0]}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-neutral-500"
                    >
                      <HomeIcon
                        className="-ml-0.5 h-5 w-5 "
                        aria-hidden="true"
                      />
                      Homepage
                    </a>
                    <a
                      href={coin.links[1]}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-500"
                    >
                      <LinkIcon
                        className="-ml-0.5 h-5 w-5 "
                        aria-hidden="true"
                      />
                      Blockchain
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex-1 hidden min-w-0 mt-6 sm:block 2xl:hidden">
                <h1 className="text-2xl font-bold truncate">{coin.name}</h1>
              </div>
            </div>

            {/* Description list */}
            <div className="px-4 py-6 max-w-7xl sm:px-6 lg:px- sm:pb-24">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-8">
                {Object.keys(coin.fields).map((field) => (
                  <div key={field} className="sm:col-span-1">
                    <dt className="text-sm font-medium ">{field}</dt>
                    <dd className="mt-1 text-sm ">
                      {coin.fields[field as keyof typeof coin.fields]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <MarketChart params={params} />
          </article>
        </main>
      </div>
    </>
  );
}

export default Page;
