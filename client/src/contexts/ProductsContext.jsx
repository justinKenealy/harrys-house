import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext({});

export const useProducts = () => {
    return useContext(ProductContext);
  };

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(null);
  
    useEffect(() => {
        const getProducts = async () => {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data.user);
        };
        getProducts();
    }, []);
  
    return (
      <ProductContext.Provider value={{ products }}>
        {children}
      </ProductContext.Provider>
    );
  };
  