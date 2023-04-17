import Coin from "@/app/components/Coin";

export default async function Page({ params }) {
  const { id } = params;
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false`
  );
  const coin = await res.json();

  return <Coin coin={coin} />;
}
