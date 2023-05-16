import { render, screen } from "@testing-library/react";
import { About, Join } from "../app/page";
import "@testing-library/jest-dom";

describe("About Component", () => {
  it("renders correctly", () => {
    render(<About />);

    expect(
      screen.getByText("Trusted by investors worldwide")
    ).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();

    // Check the features are rendered correctly
    expect(screen.getByText("Market entry year")).toBeInTheDocument();
    expect(screen.getByText("2023")).toBeInTheDocument();
    expect(screen.getByText("Registered users")).toBeInTheDocument();
    expect(screen.getByText("4M+")).toBeInTheDocument();
    expect(screen.getByText("Uptime guarantee")).toBeInTheDocument();
    expect(screen.getByText("99.9%")).toBeInTheDocument();
    expect(screen.getByText("Customers' funds lost")).toBeInTheDocument();
    expect(screen.getByText("0%")).toBeInTheDocument();
  });
});

describe("Join Component", () => {
  it("renders correctly", () => {
    render(<Join />);

    expect(screen.getByText("Award winning support")).toBeInTheDocument();
    expect(
      screen.getByText("Be the first to know about crypto news every day")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Get crypto analysis, news and updates right to your inbox! Sign up here so you don't miss a single newsletter."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /subscribe now/i })
    ).toBeInTheDocument();
  });
});
