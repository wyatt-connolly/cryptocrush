import React from "react";
import Categories from "../components/Categories";

export default async function Page() {
  const res = await fetch("https://api.coingecko.com/api/v3/coins/categories");
  const data = await res.json();
  return (
    <div>
      <Categories data={data} />
    </div>
  );
}
