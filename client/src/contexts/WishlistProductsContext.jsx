// import { createContext, useContext, useEffect, useState } from "react";
// import { useAuth } from "./AuthProvider";
// import { useProducts } from "./ProductsContext";

// export const WishlistContext = createContext({});

// export const useWishlist = () => {
//     return useContext(WishlistContext);
//   };

// export const WishlistProvider = ({ children }) => {
//     const [wishlistProducts, setWishlistProducts] = useState([]);
//     const { products } = useProducts();
//     const { user } = useAuth();
//     console.log(user)

//     const getProductData = (id) => {
//         return products.find((product) => product.id === id);
//     };

// //   useEffect(() => {
//     const getWishlistProducts = async () => {
//       const res = await fetch("/api/wishlist_products/" + user.id);
//       const wishlistProductsIDs = await res.json();
//       let detailedWishlistItems = [];
//       for (let item in wishlistProductsIDs) {
//         detailedWishlistItems.push({
//           ...getProductData(wishlistProductsIDs[item].product_id),
//         });
//       }
//       setWishlistProducts(detailedWishlistItems);
//     };
//     getWishlistProducts();
// //   }, []);

//   console.log(wishlistProducts)
  
//     return (
//       <WishlistContext.Provider value={{wishlistProducts, setWishlistProducts}}>
//         {children}
//       </WishlistContext.Provider>
//     );
//   };
  
//   export default WishlistProvider
