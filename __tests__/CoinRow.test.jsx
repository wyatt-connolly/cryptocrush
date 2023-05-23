import { render, screen } from "@testing-library/react";
import CoinRow from "@/app/components/CoinRow";
import "@testing-library/jest-dom";

import { formatPrice } from "@/app/utils";

describe("CoinRow", () => {
  let expectedProps;

  beforeEach(() => {
    expectedProps = {
      id: "Bitcoin",
      market_cap_rank: 1,
      symbol: "BTC",
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      name: "Bitcoin",
      current_price: 27413,
      price_change_percentage_1h_in_currency: 0.9591277699574188,
      price_change_percentage_24h_in_currency: 1.7743994990931728,
      price_change_percentage_7d_in_currency: -1.079717913578869,
      market_cap: 530345491860,
    };
  });

  test("renders id, market cap rank, symbol, image, name, current price, price change percentage 1h in currency, price change percentage_24h in currency, price change percentage 7d in currency, market cap", () => {
    const { getByText, getByAltText } = render(<CoinRow {...expectedProps} />);

    expect(getByText(expectedProps.id)).toBeInTheDocument();
    expect(
      getByText(expectedProps.market_cap_rank.toString())
    ).toBeInTheDocument();
    expect(getByText(expectedProps.symbol)).toBeInTheDocument();
    expect(getByAltText(expectedProps.name)).toBeInTheDocument();
    expect(getByText(expectedProps.name)).toBeInTheDocument();
    expect(
      getByText("$" + formatPrice(expectedProps.current_price))
    ).toBeInTheDocument();
    expect(
      getByText(
        expectedProps.price_change_percentage_1h_in_currency.toFixed(2) + "%"
      )
    ).toBeInTheDocument();

    expect(
      getByText(
        expectedProps.price_change_percentage_24h_in_currency.toFixed(2) + "%"
      )
    ).toBeInTheDocument();

    expect(
      getByText(
        expectedProps.price_change_percentage_7d_in_currency.toFixed(2) + "%"
      )
    ).toBeInTheDocument();

    expect(
      getByText("$" + expectedProps.market_cap.toLocaleString())
    ).toBeInTheDocument();
  });
});
