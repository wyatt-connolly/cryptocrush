"use client";
import { useState } from "react";
import Table from "@/app/components/Table";
import CoinRow from "@/app/components/CoinRow";
import { Coin } from "@/app/types/Coin";
import { useCoinStore } from "@/app/store/store";

export default function Page() {
  const coins = useCoinStore((state) => state.coins);
  console.log(coins);

  return (
    <div className="-mt-32" id="cryptocurrencies">
      <div className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h3 className="text-base font-semibold leading-6 text-white">
          My Portfolio
        </h3>

        <div className="flow-root mt-8">
          <div className="-mx-4 -my-2 overflow-x-auto lg:overflow-x-visible sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 ">
              <Table></Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
