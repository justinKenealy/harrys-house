import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { useProducts } from "../contexts/ProductsContext";
import AddToCartBtn from "./AddToCartBtn";
import ProductCard from "./ProductCard";
import ProductFilterTab from "./ProductFilterTab";
import ProductInfoPopup from "./ProductInfoPopup";
import "./Products.css";
import ProductSearchBar from "./ProductSearchBar";

const Products = () => {
  const [searchText, setSearchText] = useState("");
  const [productFilter, setProductFilter] = useState(null);
  const cart = useContext(CartContext);
  const { products } = useProducts();

  const checkSearchQuery = (name, description) => {
    if (searchText.length < 3) {
      return true;
    }
    if (
      name.toLowerCase().includes(searchText.toLowerCase()) ||
      description.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return true;
    }
    return false;
  };

  return (
    <div id="storePageBody">
      <ProductSearchBar searchText={searchText} setSearchText={setSearchText} />
      <ProductFilterTab
        productFilter={productFilter}
        setProductFilter={setProductFilter}
      />
      <SimpleGrid id="productGrid" spacing={2} margin="0 auto">
        {productFilter
          ? products &&
            products
              .filter(
                (product) =>
                  product.category === productFilter &&
                  checkSearchQuery(product.name, product.description)
              )
              .map((product) => (
                <ProductCard key={product.id} product={product}/>
              ))
          : products &&
            products
              .filter((product) =>
                checkSearchQuery(product.name, product.description)
              )
              .map((product) => (
                <ProductCard key={product.id} product={product}/>
        
              ))}
      </SimpleGrid>
    </div>
  );
};

export default Products;
