import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./contexts/AuthProvider.jsx";
import { ProductProvider } from "./contexts/ProductsContext.jsx";
import CartProvider from "./contexts/CartContext.jsx";
// import { WishlistProvider } from "./contexts/WishlistProductsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            {/* <WishlistProvider> */}
              <CartProvider>
                <App />
              </CartProvider>
            {/* </WishlistProvider> */}
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
