"use client";
import { classNames } from "../utils/index";
import Image from "next/image";
import { useRouter } from "next/navigation";

type TrendingProps = {
  id: string;
  coin_id: string;
  name: string;
  symbol: string;
  market_cap_rank?: number;
  thumb: string;
  small: string;
  large: string;
  slug: string;
  price_btc: number;
  score: number;
};

export default function Trending({
  id,
  coin_id,
  name,
  symbol,
  market_cap_rank,
  thumb,
  small,
  large,
  slug,
  price_btc,
  score,
}: TrendingProps) {
  const router = useRouter();

  const formattedPrice =
    price_btc < 1 && price_btc.toString().split(".")[1]?.length > 10
      ? Number(price_btc.toFixed(14))
      : price_btc;

  return (
    <>
      <div
        key={id}
        className="relative flex items-center px-4 py-6 overflow-hidden transition duration-150 ease-in-out rounded-lg shadow cursor-pointer bg-neutral-800 sm:px-6 hover:bg-neutral-700"
        onClick={() => router.push(`en/coins/${id}`)}
      >
        <Image
          alt="coin thumbnail"
          src={small}
          height={32}
          width={32}
          className="object-contain"
        />

        <div className="flex flex-col items-baseline ml-4">
          <p className="text-sm font-semibold text-white">
            <p className="text-sm font-medium text-white truncate">{name}</p>
            <span>$</span>
            {formattedPrice}
          </p>
        </div>
      </div>
    </>
  );
}
