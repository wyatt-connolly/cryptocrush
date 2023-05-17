import { render, screen } from "@testing-library/react";
import { Join } from "../app/page";
import "@testing-library/jest-dom";
describe("Join", () => {
  test("renders correctly", () => {
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
