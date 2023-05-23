import { render, screen } from "@testing-library/react";
import { About } from "../app/page";
import "@testing-library/jest-dom";

describe("About", () => {
  test("renders correctly", () => {
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
