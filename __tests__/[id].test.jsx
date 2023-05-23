import Page from "@/app/en/coins/[id]/page";
import { render, screen } from "@testing-library/react";
import { useCoin } from "@/app/hooks/swr-hooks";
import { useParams, useRouter } from "next/navigation";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

jest.mock("@/app/hooks/swr-hooks");

describe("Page", () => {
  it("renders coin data", () => {
    const params = { id: "bitcoin" };
    const coinData = {
      name: "Bitcoin",
      image: {
        large:
          "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      },
      links: {
        homepage: ["https://bitcoin.org/"],
        blockchain_site: ["https://blockchain.com/"],
      },
      description: {
        en: "Bitcoin is a decentralized digital currency that enables instant payments to anyone, anywhere in the world. Bitcoin uses peer-to-peer technology to operate with no central authority: transaction management and money issuance are carried out collectively by the network.",
      },
      market_cap_rank: 1,
      symbol: "BTC",
      market_data: {
        current_price: { usd: 32000 },
        ath: { usd: 64863.1 },
        atl: { usd: 0.00008182 },
      },
      hashing_algorithm: "SHA-256",
      categories: ["Cryptocurrency"],
      genesis_date: "2009-01-03",
    };

    useCoin.mockReturnValue({
      coinData,
      coinError: null,
      coinIsLoading: false,
    });
    render(<Page />);

    expect(screen.getByText(coinData.name)).toBeInTheDocument();
    expect(screen.getByText(coinData.description.en)).toBeInTheDocument();
    expect(screen.getByText(coinData.links.homepage[0])).toBeInTheDocument();
    expect(
      screen.getByText(coinData.links.blockchain_site[0])
    ).toBeInTheDocument();
    expect(
      screen.getByText(`#${coinData.market_cap_rank}`)
    ).toBeInTheDocument();
    expect(screen.getByText(coinData.symbol.toUpperCase())).toBeInTheDocument();
    expect(screen.getByText(coinData.hashing_algorithm)).toBeInTheDocument();
    expect(
      screen.getByText(coinData.categories.join(", "))
    ).toBeInTheDocument();
  });
});
