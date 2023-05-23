import { render, screen } from "@testing-library/react";
import Footer, { navigation } from "../app/components/Footer";
import "@testing-library/jest-dom";

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("renders the copyright message", () => {
    const copyright = screen.getByText(
      /© 2023 CryptoCrush, Inc. All rights reserved./i
    );
    expect(copyright).toBeInTheDocument();
  });

  it("renders the powered by message", () => {
    const poweredBy = screen.getByText(/Powered by CoinGecko/i);
    expect(poweredBy).toBeInTheDocument();
  });

  it("renders all navigation items", () => {
    navigation.forEach((item) => {
      const link = screen.getByRole("link", { name: item.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", item.href);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noreferrer");
    });
  });
});
