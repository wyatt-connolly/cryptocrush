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
import fetcher from "../utils";
import Error from "../error";
import Loader from "@/app/components/Loader";
import { useMarketChart } from "@/app/hooks/swr-hooks";

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

    // include dollar sign before y axis labels, price, and comma seperator
    tooltip: {
      callbacks: {
        label: function (context: any) {
          return "$" + context.parsed.y.toLocaleString();
        },
      },
    },
    // include dollar sign before category y-scale
    scales: {
      y: {
        ticks: {
          callback: function (value: any) {
            return "$" + value.toLocaleString();
          },
        },
      },
    },
  },
};

export default function MarketChart({ params }: any) {
  const { marketChartData, marketChartIsLoading, marketChartError } =
    useMarketChart(params);

  if (marketChartError) return <Error error={marketChartError} />;
  if (marketChartIsLoading) return <Loader />;

  const labels = // map over fakeData, return an array of dates and find type of price
    marketChartData.prices.map((price: any) =>
      new Date(price[0]).toLocaleDateString()
    );

  const chartData = {
    labels,
    datasets: [
      {
        label: "Market Price (USD)",
        // map over data, return an array of prices with 2 decimal places and $ sign, convert to number, and return
        data: marketChartData.prices.map((price: any) =>
          Number(price[1].toFixed(2))
        ),
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
