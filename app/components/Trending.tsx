"use client";
import { classNames } from "../utils/index";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Coin } from "../types/Coin";

export default function Trending({
  id,
  name,
  symbol,
  market_cap_rank,
  thumb,
  small,
  price_btc = 0,
}: Coin) {
  const router = useRouter();

  const formattedPrice =
    price_btc < 1 && price_btc.toString().split(".")[1]?.length > 2
      ? Number(price_btc.toFixed(6))
      : Number(price_btc.toFixed(2));

  return (
    <div
      key={id}
      className="relative flex items-center px-4 py-6 overflow-hidden transition duration-150 ease-in-out rounded-lg shadow cursor-pointer bg-neutral-800 sm:px-6 hover:bg-neutral-700"
      onClick={() => router.push(`en/coins/${id}`)}
    >
      {small && (
        <Image
          alt="coin thumbnail"
          src={small}
          height={32}
          width={32}
          className="object-contain"
        />
      )}
      <div className="flex flex-col items-baseline ml-4">
        <p className="text-sm font-semibold text-white">
          <p className="text-sm font-medium text-white truncate">{name}</p>
          <span>$</span>
          {formattedPrice}
        </p>
      </div>
    </div>
  );
}
