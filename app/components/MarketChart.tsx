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
import { fetcher } from "../utils";
import Error from "../error";
import Loader from "@/app/components/Loader";
import { useMarketChart } from "@/app/hooks/swr-hooks";
import { formatChartPrice } from "../utils";

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
          const value = context.parsed.y as number;
          const formattedValue = formatChartPrice(value);
          return "$" + formattedValue;
        },
      },
    },
  },
  scales: {
    y: {
      ticks: {
        callback: function (value: any) {
          const formattedValue = formatChartPrice(value);
          return "$" + formattedValue;
        },
      },
      title: {
        display: true,
        text: "Price (USD)",
      },
    },
  },
};

interface MarketChartData {
  prices: [number, number][];
}

interface MarketChartProps {
  params: any;
}

export default function MarketChart({ params }: MarketChartProps) {
  const { marketChartData, marketChartIsLoading, marketChartError } =
    useMarketChart(params);

  if (marketChartError) return <Error error={marketChartError} />;
  if (marketChartIsLoading) return <Loader />;

  const labels = marketChartData.prices.map((price: any) =>
    new Date(price[0]).toLocaleDateString()
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: "Market Price (USD)",
        data: marketChartData.prices.map((price: any) => {
          const value = price[1];
          return value < 1 && value.toString().split(".")[1]?.length > 2
            ? Number(value.toFixed(6))
            : Number(value.toFixed(2));
        }),
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return <Line options={options} data={chartData} />;
}
