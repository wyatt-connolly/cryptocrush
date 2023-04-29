"use client";
import Stat from "../components/Stat";
import fetcher from "../lib/utils";
import useSWR from "swr";
import Loader from "../components/Loader";
import Error from "../error";
function Page() {
  const {
    data: trendingData,
    error: trendingError,
    isLoading: trendingIsLoading,
  } = useSWR(`https://api.coingecko.com/api/v3/search/trending`, fetcher);

  const {
    data: bitcoinData,
    error: bitcoinError,
    isLoading: bitcoinIsLoading,
  } = useSWR(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`,
    fetcher
  );

  if (trendingError) return <Error error={trendingError} />;
  if (bitcoinError) return <Error error={bitcoinError} />;
  if (trendingIsLoading) return <Loader />;
  if (bitcoinIsLoading) return <Loader />;

  // access bitcoinData and return the price
  const bitcoinPrice = bitcoinData.bitcoin.usd;

  // access trendingData and the first five coins
  const trendingCoins = trendingData.coins.slice(0, 5);

  return (
    <dl className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-5">
      {trendingCoins.map((coin) => (
        // if bitcoinPrice is above a penny, round to 2 decimal places. Otherwise, round to 6 decimal places

        <Stat
          {...coin.item}
          key={coin.item.id}
          price_btc={coin.item.price_btc * bitcoinPrice}
        />
      ))}
    </dl>
  );
}

export default Page;
