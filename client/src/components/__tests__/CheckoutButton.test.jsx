import { render, screen } from "@testing-library/react";
import CheckoutButton from "../CheckoutButton";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  fetch.resetMocks();
});

it("should display 'Checkout' button", () => {
  render(<CheckoutButton />);
  const checkoutButton = screen.getByRole("button", { name: "Checkout" });
  expect(checkoutButton).toBeInTheDocument();
});

it("should fire post request when checkout button clicked", async () => {
  const user = userEvent.setup();
  fetch.mockResponseOnce(JSON.stringify());

  render(<CheckoutButton />);
  const checkoutButton = screen.getByText('Checkout');

  await user.click(checkoutButton);

  expect(fetch.requests().length).toEqual(1);
});
