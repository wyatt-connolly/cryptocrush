import Coin from "@/app/components/Coin";

async function getCoin() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false"
  );
  const coin = await res.json();
  return coin;
}
export default async function Page() {
  const coin = await getCoin();

  return <Coin {...coin} />;
}
