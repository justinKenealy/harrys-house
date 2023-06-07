import { Heading, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useProducts } from "../contexts/ProductsContext";
// import WishlistProvider, { useWishlist, WishlistContext } from "../contexts/WishlistProductsContext";
import WishlistProductCard from "./WishlistProductCard";
import "./WishlistProductCard.css";

const Wishlist = ({ user }) => {
  // const { wishlistProducts } = useContext(WishlistContext)
  // const { wishlistProducts, setWishlistProducts } = useWishlist;
  const { products } = useProducts();
  const [wishlistProducts, setWishlistProducts] = useState([]);

  const getProductData = (id) => {
    return products.find((product) => product.id === id);
  };

  useEffect(() => {
    const getWishlistProducts = async () => {
      const res = await fetch("/api/wishlist_products/" + user.id);
      const wishlistProductsIDs = await res.json();
      let detailedWishlistItems = [];
      for (let item in wishlistProductsIDs) {
        detailedWishlistItems.push({
          ...getProductData(wishlistProductsIDs[item].product_id),
        });
      }
      setWishlistProducts(detailedWishlistItems);
    };
    getWishlistProducts();
  }, []);

  console.log(wishlistProducts);

  return (
    <>
      <div id="wishlistSection">
        <Heading padding="15px 15px 5px 15px" size="md">Wishlist</Heading>
        <div id="wishlistProductGrid">
          {wishlistProducts.length ?
            wishlistProducts.map((product) => (
              <WishlistProductCard
                key={product.id}
                product={product}
                wishlistProducts={wishlistProducts}
                setWishlistProducts={setWishlistProducts}
              />)) : <Text padding="10px">There are no products in your wishlist!</Text>
            }
        </div>
      </div>
    </>
  );
};

export default Wishlist;
