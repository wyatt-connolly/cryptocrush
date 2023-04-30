"use client";
import { classNames } from "lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Stat({
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
}) {
  const router = useRouter();
  if (price_btc < 0.01) {
    price_btc = price_btc.toFixed(12);
  } else {
    price_btc = price_btc.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  return (
    <>
      <div
        key={id}
        className="cursor-pointer relative overflow-hidden rounded-lg bg-neutral-800 px-4 py-6 shadow sm:px-6 flex items-center hover:bg-neutral-700 transition ease-in-out duration-150"
        onClick={() => router.push(`en/coins/${id}`)}
      >
        <div>
          <Image src={small} height={32} width={32} />
        </div>
        <div className="ml-4 flex items-baseline flex-col">
          <p className="text-sm font-semibold text-white">
            <p className="truncate text-sm font-medium text-white">{name}</p>
            <span>$</span>
            {price_btc}
          </p>
        </div>
      </div>
    </>
  );
}
