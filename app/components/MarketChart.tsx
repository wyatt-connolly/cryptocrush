"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";
import useSWR from "swr";
import fetcher from "@/app/lib/utils";
import Error from "../error";
import Loader from "@/app/components/Loader";

interface LineProps {
  options: ChartOptions<"line">;
  data: ChartData<"line">;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          return "$" + Number(context.parsed.y).toFixed(12); // Updated to display 12 decimal points
        },
      },
    },
  },
  scales: {
    y: {
      ticks: {
        callback: function (value: any) {
          return "$" + Number(value)
        },
      },
      title: {
        display: true,
        text: "Price (USD)",
      },
    },
  },
};

export default function MarketChart({ params }: any) {
  const { data, error, isLoading } = useSWR(
    `https://api.coingecko.com/api/v3/coins/${
      params.id
    }/market_chart/range?vs_currency=usd&from=1367046000&to=${Math.floor(
      Date.now() / 1000
    )}}`,

    fetcher
  );

  if (error) return <Error error={error} />;
  if (isLoading) return <Loader />;

  const labels = // map over fakeData, return an array of dates and find type of price
    data.prices.map((price: any) => new Date(price[0]).toLocaleDateString());

  const chartData = {
    labels,
    datasets: [
      {
        label: "Market Price (USD)",
        // map over data, return an array of prices with 2 decimal places and $ sign, convert to number, and return
        data: data.prices.map((price: any) => Number(price[1].toFixed(2))),
        fill: false,
        // create rgba positive green color
        borderColor: "rgba(75, 192, 192, 1)",
        // return a color that compoliments the border color
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return <Line options={options} data={chartData} />;
}
