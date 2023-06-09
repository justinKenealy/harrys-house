import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddToCartBtn from "../AddToCartBtn";
import { vi } from "vitest";

it("should display 'Add to Cart' button", () => {
  render(<AddToCartBtn productTitle="Test Product" productID="123" />);
  const addButton = screen.getByRole("button", { name: "Add to Cart" });
  expect(addButton).toBeInTheDocument();
});
