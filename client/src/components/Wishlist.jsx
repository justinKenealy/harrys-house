import { useState } from "react";
import { useEffect } from "react";
import { useProducts } from "../contexts/ProductsContext";
import WishlistProductCard from "./WishlistProductCard";
import "./WishlistProductCard.css"

const Wishlist = ({ user }) => {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const { products } = useProducts();
  
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

  console.log(wishlistProducts)

  return (
    <>
      <div>Wishlist for {user.username}</div>
      <div id="wishlistProductGrid">
        {wishlistProducts &&
          wishlistProducts.map((product) => (
            <WishlistProductCard key={product.id} product={product} wishlistProducts={wishlistProducts} setWishlistProducts={setWishlistProducts}/>
          ))}
      </div>
    </>
  );
};

export default Wishlist;
