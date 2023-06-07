import { render, screen } from "@testing-library/react";
import ProductCard from "../ProductCard";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

const mockOnComplete = vi.fn();
const mockOnDelete = vi.fn();

// beforeEach(() => {
//   vi.resetAllMocks();
// });

const mockProduct = {
  category: 1,
  created_at: "2023-06-04T04:40:38.311Z",
  description:
    "Ensure your dog receives the nutrition they need with this Red Dog Food.",
  id: 1,
  img_url: "/1_red_dog_food.jpg",
  name: "Red Dog Food",
  price: "19.99",
  stock: 18,
};

it("should create test id dataset with product id number", () => {
  render(<ProductCard product={mockProduct}/>);
  const testIdCard = screen.getByTestId("product-1");
  expect(testIdCard).toBeInTheDocument();
});

