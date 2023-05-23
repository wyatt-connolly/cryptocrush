import Loader from "@/app/components/Loader";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Loader", () => {
  test("renders loader with accessible role status", () => {
    render(<Loader />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  test("renders loading text for screen readers", () => {
    render(<Loader />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders SVG", () => {
    render(<Loader />);
    expect(document.querySelector("svg")).toBeInTheDocument();
  });
});
