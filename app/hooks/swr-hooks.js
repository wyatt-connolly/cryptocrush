import useSwr from "swr";
import { fetcher } from "../utils";

export function useMarket(pageIndex) {
  const { data, error, isLoading } = useSwr(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${pageIndex}&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en
    `,
    fetcher
  );

  return {
    marketData: data,
    marketIsLoading: isLoading,
    marketError: error,
  };
}

export function useTrending() {
  const { data, error, isLoading } = useSwr(
    `https://api.coingecko.com/api/v3/search/trending`,
    fetcher
  );

  return {
    trendingData: data,
    trendingIsLoading: isLoading,
    trendingError: error,
  };
}

export function useBitcoinPrice() {
  const { data, error, isLoading } = useSwr(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`,
    fetcher
  );

  return {
    bitcoinPriceData: data,
    bitcoinPriceIsLoading: isLoading,
    bitcoinPriceError: error,
  };
}

export function useCoin(params) {
  const { data, error, isLoading } = useSwr(
    `https://api.coingecko.com/api/v3/coins/${params}/`,

    fetcher
  );

  return {
    coinData: data,
    coinIsLoading: isLoading,
    coinError: error,
  };
}

export function useMarketChart(params) {
  const { data, error, isLoading } = useSwr(
    `https://api.coingecko.com/api/v3/coins/${
      params.id
    }/market_chart/range?vs_currency=usd&from=1367046000&to=${Math.floor(
      Date.now() / 1000
    )}}`,
    fetcher
  );

  return {
    marketChartData: data,
    marketChartIsLoading: isLoading,
    marketChartError: error,
  };
}
