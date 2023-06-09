import { createContext, useEffect, useState } from "react";
import { useProducts } from "./ProductsContext";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addItemToCart: () => {},
  removeOneFromCart: () => {},
  removeItemFromCart: () => {},
  getTotalCost: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  // JSON.parse(localStorage.getItem('cart')) ||
  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cartProducts))
  // }, [cartProducts])

  const { products } = useProducts();

  const getProductQuantity = (id) => {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;
    if (!quantity) {
      return 0;
    } else return quantity;
  };

  const addItemToCart = (id) => {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  };

  const removeOneFromCart = (id) => {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      removeItemFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  };

  const removeItemFromCart = (id) => {
    setCartProducts((cartProducts) =>
      cartProducts.filter((product) => {
        return product.id !== id;
      })
    );
  };

  const getProductData = (id) => {
    return products.find((product) => product.id === id);
  };

  const getTotalCost = () => {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      totalCost += productData.price * cartItem.quantity;
    });
    return totalCost;
  };

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addItemToCart,
    removeItemFromCart,
    removeOneFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
