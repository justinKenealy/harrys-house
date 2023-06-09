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
import { useAuth } from "../contexts/AuthProvider";
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
  const [wishlistProductIDs, setWishlistProductIDs] = useState([]);
  const { products } = useProducts();
  const { user } = useAuth();

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

  useEffect(() => {
    const getWishlistProducts = async () => {
      const res = await fetch(`/api/wishlist_products/${user.id}`);
      const IDs = await res.json();
      const justIDs = IDs.map((item) => item.product_id);
      setWishlistProductIDs(justIDs);
    };
    if (user && products) {
      getWishlistProducts();
    }
  }, [user, products]);

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
                <ProductCard
                  key={product.id}
                  product={product}
                  saved={wishlistProductIDs.includes(product.id)}
                  wishlistProductIDs={wishlistProductIDs}
                  setWishlistProductIDs={setWishlistProductIDs}
                />
              ))
          : products &&
            products
              .filter((product) =>
                checkSearchQuery(product.name, product.description)
              )
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  saved={wishlistProductIDs.includes(product.id)}
                  wishlistProductIDs={wishlistProductIDs}
                  setWishlistProductIDs={setWishlistProductIDs}
                />
              ))}

        {productFilter &&
          products &&
          products.filter(
            (product) =>
              product.category === productFilter &&
              checkSearchQuery(product.name, product.description)
          ).length === 0 && <Text>No products found.</Text>}

        {!productFilter &&
          products &&
          products.filter((product) =>
            checkSearchQuery(product.name, product.description)
          ).length === 0 && <Text>No products found.</Text>}
      </SimpleGrid>
    </div>
  );
};

export default Products;
